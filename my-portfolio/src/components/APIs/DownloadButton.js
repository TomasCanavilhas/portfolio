import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../css/DownloadButton.css'; // Import CSS

function DownloadButton({ darkMode, url }) {
    const [downloadState, setDownloadState] = useState('initial'); // initial, downloading, complete
    const [progress, setProgress] = useState(0);
    const minimumDownloadTime = 1500; // in milliseconds
    const delayPerStep = minimumDownloadTime / 100; // divide by 100 because there are 100 steps in the progress bar

    useEffect(() => {
        const downloadFile = () => {
            setDownloadState('downloading');
            let i = 1;
            // Use setInterval to increment progress every 15ms (1500ms / 100 steps = 15ms/step)
            const interval = setInterval(() => {
                setProgress(i++);
                if (i > 100) {
                    clearInterval(interval);
                    setDownloadState('complete');
                    setTimeout(() => {
                        setDownloadState('initial');
                        setProgress(0);
                    }, 2000); // Reset after 2 seconds
                }
            }, minimumDownloadTime / 100);
        };

    }, [downloadState]);

    const handleDownload = () => {
        setDownloadState('downloading');

        axios.get(url, {
            responseType: 'blob',  // Important for allowing the file download to be triggered
            onDownloadProgress: progressEvent => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentCompleted);
            },
        })
            .then(response => {
                // Create a hidden anchor element
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;

                // The file name you want
                link.setAttribute('download', 'TomasCanavilhasResume.pdf');  // Provide the file name here

                // Append to the document body and click it to trigger download
                document.body.appendChild(link);
                link.click();

                setDownloadState('complete');

                // Reset the button after 2 seconds
                setTimeout(() => {
                    setDownloadState('initial');
                    setProgress(0);
                }, 2000);
            })
            .catch(error => {
                console.error('Download failed: ', error);
                // handle error
            });
    };




    return (
        <button className={`download-button ${downloadState} ${darkMode ? 'dark-mode' : ''}`} onClick={handleDownload}>
            <i className={`fas fa-download ${downloadState === 'downloading' ? 'downloading' : ''}`}/>
            {downloadState === 'initial' && <span>Download Resume</span>}
            {downloadState === 'downloading' && (
                <>
                    <div className="progress-bar" style={{width: `${progress}%`}} />
                    <span>{`${progress}% Done`}</span>
                </>
            )}
            {downloadState === 'complete' && <span>Done!</span>}
        </button>
    );
}

export default DownloadButton;

