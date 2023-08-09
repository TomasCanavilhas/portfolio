import React, {useEffect, useState} from 'react';
import './css/About.css';

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

            </div>
        </div>
    );
};

export default About;