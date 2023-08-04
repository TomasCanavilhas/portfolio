import React, {useEffect, useState} from 'react';
import './css/About.css';
import profilePicture from "./media/avatar.jpeg";
import {Button, Modal} from "react-bootstrap";
import resumeFile from "./resume/CV_Tomas_Canavilhas.pdf";
import DownloadButton from "./APIs/DownloadButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
const About = ({darkMode}) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [binaryMatrix, setBinaryMatrix] = useState([]);

    function generateBinaryMatrix() {
        const charWidth = 8;  // Average width of a character in pixels
        const lineHeight = 16;  // Height of a line in pixels

        const charsPerLine = Math.floor(window.innerWidth / charWidth);
        const lines = Math.floor(window.innerHeight / lineHeight);

        let matrix = [];
        for (let i = 0; i < lines; i++) {
            let row = '';
            for (let j = 0; j < charsPerLine; j++) {
                row += Math.floor(Math.random() * 2);
            }
            matrix.push(row);
        }
        return matrix;
    }

    useEffect(() => {
        setBinaryMatrix(generateBinaryMatrix());

        const interval = setInterval(() => {
            setBinaryMatrix(generateBinaryMatrix());
        }, 250);

        const handleResize = () => {
            setBinaryMatrix(generateBinaryMatrix());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleButtonClick = (content) => {
        setModalContent(content);
        setModalShow(true);
    }

    return (
        <div className={`home ${darkMode ? 'dark' : ''}`}>
            <div className={`background ${darkMode ? 'dark' : ''}`}>
                {binaryMatrix.map((row, index) => <p key={index} className="binary-row unselectable">{row}</p>)}
            </div>
            <div className={`home-content ${darkMode ? 'dark' : ''}`}>
                <img src={profilePicture} alt='Profile' className='profile-picture'/>
                <div className={`info-section ${darkMode ? 'dark' : ''}`}>
                    <div className={`profile-container ${darkMode ? 'dark' : ''}`}>
                        <h1 className={`name ${darkMode ? 'dark' : ''}`}>
                            Tomás Canavilhas
                            <span className={'icon'}>
                                <a href="https://www.linkedin.com/in/tomascanavilhas/" target="_blank"
                                   rel="noopener noreferrer" className={`linkedin-icon ${darkMode ? 'dark' : ''}`}>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                </a>
                            </span>
                        </h1>
                    </div>
                    <p className={`description ${darkMode ? 'dark' : ''}`}>Experienced software engineer currently
                        working in a Java Project.
                        Skilled in developing backend & frontend
                        software solutions, troubleshooting, and debugging. Proven ability to create and implement
                        software solutions to meet customer
                        requirements.</p>
                    <div className="buttons-row">
                        <Button variant={darkMode ? "outline-light" : "outline-dark"}
                                onClick={() => handleButtonClick('Certifications')}>Certifications</Button>
                        <Button variant={darkMode ? "outline-light" : "outline-dark"}
                                onClick={() => handleButtonClick('Education')}>Education</Button>
                        <Button variant={darkMode ? "outline-light" : "outline-dark"}
                                onClick={() => handleButtonClick('Languages')}>Languages</Button>
                        <DownloadButton url={resumeFile} darkMode={darkMode}/>
                    </div>
                    <Modal show={modalShow} onHide={() => setModalShow(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>{modalContent}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Modal body text goes here.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default About;