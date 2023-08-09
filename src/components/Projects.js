import React, {useEffect, useState} from 'react';
import './css/About.css';
import profilePicture from "./media/avatar.jpeg";
import {Button, Modal} from "react-bootstrap";
import resumeFile from "./resume/CV_Tomas_Canavilhas.pdf";
import './css/Projects.css';

const projects = [
    {
        name: 'Project 1',
        url: 'https://github.com/username/project1',
        buildCommand: 'npm install',
        runCommand: 'npm start',
    },
    {
        name: 'Project 2',
        url: 'https://github.com/username/project2',
        buildCommand: 'npm install',
        runCommand: 'npm start',
    },
    // add more projects here...
];
const Projects = ({darkMode}) => {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [binaryMatrix, setBinaryMatrix] = useState([]);
    const handleRunProject = (project) => {
        // Here you would clone, build, and run the project.
        // The implementation will depend on your specific setup.
        console.log(`Running project: ${project.name}`);
    };

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
                <div className={`projects ${darkMode ? 'dark' : ''}`}>
                    {projects.map((project) => (
                        <div className={`project ${darkMode ? 'dark' : ''}`} key={project.name}>
                            <div>
                                <h2>{project.name}</h2>
                                <a href={project.url}>{project.url}</a>
                            </div>
                            <button onClick={() => handleRunProject(project)}>Run Project</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;