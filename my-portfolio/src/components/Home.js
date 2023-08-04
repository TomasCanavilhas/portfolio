import React, {useEffect, useState} from 'react';
import './css/Home.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Home = ({darkMode}) => {
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
                <main>
                    <section className="w-full h-full relative p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2">
                        <div className="grid-span-1 z-10 relative">
                            <div className=".grid-span-1, .z-10, .relative">
                                <div className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black">
                                    <h3>Tomás Canavilhas</h3>
                                    <p>Software Engineer</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-start mt-6">
                                    <div className="flex items-center justify-center text-xs font-bold mr-4 mb-2 cursor-pointer">
                                        <h2>01</h2>
                                        <h3>WORK</h3>
                                    </div>
                                    <div className="flex items-center justify-center text-xs font-bold mr-4 mb-2 cursor-pointer">
                                        <h2>02</h2>
                                        <h3>PROJECTS</h3>
                                    </div>
                                    <div className="flex items-center justify-center text-xs font-bold mr-4 mb-2 cursor-pointer">
                                        <h2>03</h2>
                                        <h3>EDUCATION</h3>
                                    </div>
                                    <div className="flex items-center justify-center text-xs font-bold mr-4 mb-2 cursor-pointer">
                                        <h2>04</h2>
                                        <h3>MISC</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pro">
                            <h2>Work</h2>
                            <div className="cards">
                                <div className="card">
                                    <h3>Full Stack Software Developer</h3>
                                    <p>Company Name • Full-Time • Jan 2021 - Now</p>
                                    <p>Orlando, Florida</p>
                                    <p>Here's a paragraph describing what I did at the company from a high level...</p>
                                </div>
                                {/* More cards as needed */}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Home;
