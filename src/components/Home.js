import React, {useEffect, useState} from 'react';
import './css/Home.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {ReactComponent as LinkedInIcon} from './svg/linkedin.svg';
import {ReactComponent as TwitterIcon} from './svg/twitter.svg';
import {ReactComponent as GitHubIcon} from './svg/github.svg';


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
                {binaryMatrix.map((row, index) => <p key={index}
                                                     className={`binary-row ${darkMode ? 'dark' : ''} unselectable`}>{row}</p>)}
            </div>
            <div className={`home-content ${darkMode ? 'dark' : ''}`}>
                <div
                    className="w-full h-full relative p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2 snipcss-xTeri">
                    <div className={`panel-one ${darkMode ? 'dark' : ''} grid-span-1 z-10 relative`}>
                        <div className="mb-4 md:mb-6 sticky top-16 md:top-[7rem]">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-black font-title">
                                Hello World, I'm<br/>Tomás Canavilhas<span className="text-brand">.</span>
                            </h1>
                            <div className={`home-icons ${darkMode ? 'dark' : ''} flex items-center justify-start mt-4 md:my-8`}>
                                <div className="mr-3 md:mr-4 transition-opacity hover:opacity-70 cursor-pointer">
                                    <a className="noStyle" href="https://www.linkedin.com/in/tomascanavilhas/" target="_blank">
                                        <LinkedInIcon/>
                                    </a>
                                </div>
                                <div className="mr-3 md:mr-4 transition-opacity hover:opacity-70 cursor-pointer">
                                    <TwitterIcon/>
                                </div>
                                <div className="mr-3 md:mr-4 transition-opacity hover:opacity-70 cursor-pointer">
                                    <GitHubIcon/>
                                </div>
                            </div>
                            <p className="text-sm md:text-base font-light leading-6 md:leading-7 home-desc">
                                Experienced software engineer currently working in a <span className="text-brand font-bold">Java</span> Project.
                                Skilled in developing <span className="text-brand font-bold">backend & frontend </span>
                                software solutions, troubleshooting, and debugging. Proven ability to create and implement
                                software solutions to meet customer requirements.
                            </p>
                        </div>
                    </div>
                    <div className={`panel-two ${darkMode ? 'dark' : ''} grid-span-1 snipcss0-0-0-1`}>
                        <section className="mb-16 snipcss0-1-1-2" id="work">
                            <h2 className="font-bold text-3xl mb-2 snipcss0-2-2-3">
                                Work
                            </h2>
                            <div
                                className={`small-card ${darkMode ? 'dark' : ''} w-full p-6 mb-6 snipcss0-2-2-4 style-Vo2G7`}
                                id="style-Vo2G7">
                                <h3 className="font-bold text-2xl snipcss0-3-4-5">
                                    Java Software Engineer
                                </h3>
                                <p className="font-light leading-7 snipcss0-3-4-6">
                                    <a href="https://www.capgemini.com/about-us/" target="_blank" rel="noreferrer"
                                       className="font-bold text-brand hover:underline snipcss0-4-6-7">
                                        Capgemini
                                    </a>
                                    &nbsp;• Full-Time • Oct 2022 - Now
                                </p>
                                <p className="font-light mb-4 leading-7 snipcss0-3-4-8">
                                    Lisbon, Portugal
                                </p>
                                <p className="font-light leading-7 mb-4 snipcss0-3-4-9">
                                    <ul>
                                        <li>
                                            • Maintaining and implementing software applications utilizing Java.
                                        </li>
                                        <li>• Engaged in software development projects, primarily utilizing Spring
                                            Framework
                                            and Hibernate.
                                        </li>
                                        <li>• Adopted best practices in application maintenance and feature
                                            development.
                                        </li>
                                        <li>• Mastered Scrum methodology, GitLab, Git Flow Workflow, and Maven in a
                                            fast-paced agile environment.
                                        </li>
                                        <li>• Contributed to refining team processes and ensuring comprehensive
                                            documentation.
                                        </li>
                                    </ul>
                                </p>
                                <div className="flex flex-wrap items-center justify-start -mb-2 snipcss0-3-29-35">
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                      Java
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                      Spring
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                      SQL
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                      Hibernate
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                      Git (GitFlow)
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                      HTML5/CSS
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                      Selenium
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                      JavaScript
                                    </span>
                                </div>
                            </div>
                            <div
                                className={`small-card ${darkMode ? 'dark' : ''} w-full p-6 mb-6 snipcss0-2-2-4 style-Vo2G7`}
                                id="style-FHDDf">
                                <h3 className="font-bold text-2xl snipcss0-3-11-12">
                                    Django Software Engineer
                                </h3>
                                <p className="font-light snipcss0-3-11-13">
                                    <a href="https://www.almirante24.com/" target="_blank" rel="noreferrer"
                                       className="font-bold text-brand hover:underline snipcss0-4-13-14">
                                        Almirante24
                                    </a>
                                    &nbsp;• Full-Time • Mar 2022 - Oct 2022
                                </p>
                                <p className="font-light mb-4 snipcss0-3-11-15">
                                    Lisbon, Portugal
                                </p>
                                <p className="font-light leading-7 mb-4 snipcss0-3-4-9">
                                    <ul>
                                        <li>• Operated as a freelance developer, specializing in crafting integrated
                                            solutions tailored for a vacation rental company.
                                        </li>
                                        <li>• Spearheaded the design and development of a responsive web application
                                            leveraging Python and the Django framework.
                                        </li>
                                        <li>• Executed features such as form creation, user data management, and
                                            intricate user authentication and authorization functionalities.
                                        </li>
                                        <li>• Managed end-to-end website development projects, ensuring timely
                                            delivery while adhering to established budgets.
                                        </li>
                                        <li>• Employed a diverse tech stack including Python, Django, PostgreSQL,
                                            HTML5, CSS, JavaScript, SQLite, and PyCharm to achieve robust and
                                            scalable solutions.
                                        </li>
                                    </ul>
                                </p>
                                <div className="flex flex-wrap items-center justify-start -mb-2 snipcss0-3-29-35">
                                    <span className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                        Python
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                        Django
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                        PostgreSQL
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                        Git (GitFlow)
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                        HTML5/CSS
                                    </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand text-white snipcss0-4-35-36">
                                        JavaScript
                                    </span>
                                </div>

                            </div>
                            <div
                                className={`small-card ${darkMode ? 'dark' : ''} w-full p-6 mb-6 snipcss0-2-2-4 style-Vo2G7`}
                                id="style-vigTc">
                                <h3 className="font-bold text-2xl snipcss0-3-22-23">
                                    Summer Internship
                                </h3>
                                <p className="font-light leading-7 snipcss0-3-4-6">
                                    <a href="https://www.capgemini.com/about-us/" target="_blank" rel="noreferrer"
                                       className="font-bold text-brand hover:underline snipcss0-4-6-7">
                                        Capgemini
                                    </a>
                                    &nbsp;• Full-Time • Jul 2022
                                </p>
                                <p className="font-light mb-4 snipcss0-3-22-25">
                                    Lisbon
                                </p>
                                <p className="font-light leading-7 mb-4 snipcss0-3-4-9">
                                    <ul>
                                        <li>• Immersed in a comprehensive exploration of diverse departments within
                                            Capgemini, gaining a holistic understanding of the firm's operations.
                                        </li>
                                        <li>• Engaged directly with key clients and influential team leaders, fostering
                                            professional relationships and enhancing communication skills.
                                        </li>
                                        <li>• Acquired a deep understanding of the inner workings of a leading
                                            consulting firm, recognizing the distinct roles and pivotal responsibilities
                                            of its team members.
                                        </li>
                                        <li>• Benefitted from a robust learning environment, drawing invaluable insights
                                            about the consulting industry and its multifaceted dimensions.
                                        </li>
                                        <li>• Reflecting on the experience, I found the internship immensely
                                            enlightening and instrumental in shaping my perspective on the sector.
                                        </li>
                                    </ul>
                                </p>

                            </div>
                        </section>
                        {/*
                        <section className="mb-16 snipcss0-1-1-27" id="projects">
                            <h2 className="font-bold text-3xl mb-2 snipcss0-2-27-28">
                                Projects
                            </h2>
                            <div className="w-full bg-dusty/50 backdrop-blur p-6 mb-6 snipcss0-2-27-29 style-oUvsw"
                                 id="style-oUvsw">
                                <div className="flex items-center justify-between mb-6 snipcss0-3-29-30">
                                    <h3 className="font-bold text-2xl snipcss0-4-30-31">
                                        First Project
                                    </h3>
                                    <div className="snipcss0-4-30-32">
                                        <a href="#" target="_blank" rel="noreferrer"
                                           className="text-brand font-semibold hover:underline snipcss0-5-32-33">
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                                <p className="font-light leading-7 mb-6 snipcss0-3-29-34">
                                    Here I'll describe in a paragraph or so what my project is, what it does, and most
                                    importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
                                    for. If you worked on a team, say which parts that you built. I like to add a video
                                    of how it works like the one below so people don't have to sign up if they don't
                                    want to.
                                </p>
                                <div className="flex flex-wrap items-center justify-start -mb-2 snipcss0-3-29-35">
                <span className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-35-36">
                  iOS
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-35-37">
                  Android
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-35-38">
                  React (Next JS)
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-35-39">
                  React Native
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-35-40">
                  Node
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-35-41">
                  GCP
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-35-42">
                  Firebase
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-35-43">
                  Serverless
                </span>
                                </div>
                                <div className="mt-6 flex flex-col items-center snipcss0-3-29-44">
                                    <button
                                        className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white snipcss0-4-44-45">
                                        Video Demo
                                    </button>
                                </div>
                            </div>
                            <div className="w-full bg-dusty/50 backdrop-blur p-6 mb-6 snipcss0-2-27-46 style-leiR6"
                                 id="style-leiR6">
                                <h3 className="font-bold text-2xl mb-6 snipcss0-3-46-47">
                                    Second Project
                                </h3>
                                <p className="font-light leading-7 mb-6 snipcss0-3-46-48">
                                    Here I'll describe in a paragraph or so what my project is, what it does, and most
                                    importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
                                    for. If you worked on a team, say which parts that you built. I like to add a video
                                    of how it works like the one below so people don't have to sign up if they don't
                                    want to.
                                </p>
                                <div className="flex flex-wrap items-center justify-start -mb-2 snipcss0-3-46-49">
                <span className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-49-50">
                  React (CRA)
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-49-51">
                  Node
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-49-52">
                  Express
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-49-53">
                  Postgres
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-49-54">
                  Knex JS
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-49-55">
                  Heroku
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-49-56">
                  Web Sockets
                </span>
                                </div>
                                <div className="mt-6 flex flex-col items-center snipcss0-3-46-57">
                                    <button
                                        className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white snipcss0-4-57-58">
                                        Video Demo
                                    </button>
                                </div>
                            </div>
                            <div className="w-full bg-dusty/50 backdrop-blur p-6 mb-6 snipcss0-2-27-59 style-p5xEs"
                                 id="style-p5xEs">
                                <h3 className="font-bold text-2xl mb-6 snipcss0-3-59-60">
                                    Third project
                                </h3>
                                <p className="font-light leading-7 mb-6 snipcss0-3-59-61">
                                    Here I'll describe in a paragraph or so what my project is, what it does, and most
                                    importantly WHO IT SERVES! Describe the problem it fixes and for who it fixes it
                                    for. If you worked on a team, say which parts that you built. I like to add a video
                                    of how it works like the one below so people don't have to sign up if they don't
                                    want to.
                                </p>
                                <div className="flex flex-wrap items-center justify-start -mb-2 snipcss0-3-59-62">
                <span className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-62-63">
                  React (Next JS)
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-62-64">
                  TypeScript
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-62-65">
                  Node
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-62-66">
                  Express
                </span>
                                    <span
                                        className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand snipcss0-4-62-67">
                  Web Audio
                </span>
                                </div>
                                <div className="mt-6 flex flex-col items-center snipcss0-3-59-68">
                                    <button
                                        className="bg-brand hover:bg-brand/90 transition-colors px-4 py-2 w-full rounded-sm text-white snipcss0-4-68-69">
                                        Video Demo
                                    </button>
                                </div>
                            </div>
                        </section>
                        */}
                        <section className="mb-16 snipcss0-1-1-70" id="education">
                            <h2 className="font-bold text-3xl mb-2 snipcss0-2-70-71">
                                Education
                            </h2>
                            <div
                                className={`small-card ${darkMode ? 'dark' : ''} w-full p-6 mb-6 snipcss0-2-2-4 style-Vo2G7`}
                                id="style-Vo2G7">
                                <h3 className="font-bold text-2xl mb-6 snipcss0-3-72-73">
                                    BSc in Computer Science and Business Management
                                </h3>
                                <p className="font-light leading-7 snipcss0-3-4-6">
                                    <a href="https://www.iscte-iul.pt/course/6/bachelor-bsc-in-computer-science-and-business-management" target="_blank" rel="noreferrer"
                                       className="font-bold text-brand hover:underline snipcss0-4-6-7">
                                        ISCTE-IUL
                                    </a>
                                    &nbsp;• Sep 2020 • Jun 2024 (Expected)
                                </p>
                                <p className="font-light leading-7 mb-6 snipcss0-3-72-74">
                                    During my undergraduate studies at ISCTE-IUL, I am delving deep into both Computer Science and Business Management domains. My curriculum is designed to equip me with the technical prowess needed for software development and the managerial acumen required in the business world. This dual major is providing me a unique perspective, bridging the gap between technology and business. Expected to graduate in June 2024, I am ardently participating in academic projects, collaborating with peers, and constantly seeking opportunities to apply theoretical knowledge in real-world scenarios.
                                </p>
                            </div>
                            <div className="w-full bg-dusty/50 backdrop-blur p-6 mb-6 snipcss0-2-70-77 style-71MNB"
                                 id="style-71MNB">
                                <h3 className="font-bold text-2xl mb-6 snipcss0-3-77-78">
                                    Another School
                                </h3>
                                <p className="font-light leading-7 mb-6 snipcss0-3-77-79">
                                    If you've got more than one education to list, dope! Add it. Don't feel like you
                                    have to add your high school if you don't feel it's relevant, but it doesn't hurt if
                                    you've got some other cool stuff (captain of a team etc) to show off.
                                </p>
                                <div className="mt-6 snipcss0-3-77-80">
                                    <a href="#" target="_blank" rel="noreferrer"
                                       className="text-brand text-sm underline snipcss0-4-80-81">
                                        Website
                                    </a>
                                </div>
                            </div>
                        </section>
                        {/*
                        <section id="misc" className="snipcss0-1-1-82">
                            <h2 className="font-bold text-3xl mb-2 snipcss0-2-82-83">
                                Misc
                            </h2>
                            <div className="w-full bg-dusty/50 backdrop-blur p-6 mb-6 snipcss0-2-82-84 style-ssQrG"
                                 id="style-ssQrG">
                                <h3 className="font-bold text-2xl mb-6 snipcss0-3-84-85">
                                    Contact
                                </h3>
                                <p className="font-light leading-7 mb-6 snipcss0-3-84-86">
                                    The best way to contact me is through email or LinkedIn (I'm not much of a twitter
                                    guy). Give me a shout here:
                                </p>
                                <p className="font-light leading-7 snipcss0-3-84-87">
                                    Email:
                                    <a href="mailto:youremail@gmail.com" target="_blank" rel="noreferrer"
                                       className="text-brand font-bold hover:underline snipcss0-4-87-88">
                                        youremail@gmail.com
                                    </a>
                                </p>
                                <p className="font-light leading-7 snipcss0-3-84-89">
                                    LinkedIn:
                                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"
                                       className="text-brand font-bold hover:underline snipcss0-4-89-90">
                                        @your-linkedin
                                    </a>
                                </p>
                            </div>
                            <div className="w-full bg-dusty/50 backdrop-blur p-6 mb-6 snipcss0-2-82-91 style-pvDm2"
                                 id="style-pvDm2">
                                <h3 className="font-bold text-2xl mb-6 snipcss0-3-91-92">
                                    Tech I Love
                                </h3>
                                <p className="font-light leading-7 mb-4 snipcss0-3-91-93">
                                    I normally add a list of the tech that I use to my portfolios. Instead to doing one
                                    of those weird graphs where you say you're 73% in JavaScript or whatever, try
                                    something like this:
                                </p>
                                <p className="font-light leading-7 mb-2 snipcss0-3-91-94">
                                    My choice tech stack for personal projects is GENERALLY (but not always):
                                </p>
                                <ul className="mb-4 grid grid-cols-2 gap-x-2 snipcss0-3-91-95">
                                    <li className="font-light leading-7 snipcss0-4-95-96">
                                        • React (Next JS)
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-97">
                                        • React Native
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-98">
                                        • Typescript
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-99">
                                        • Node
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-100">
                                        • Express
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-101">
                                        • Postgres
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-102">
                                        • Redis
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-103">
                                        • Firebase (whole suite of tools)
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-104">
                                        • Netlify
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-95-105">
                                        • Heroku
                                    </li>
                                </ul>
                                <p className="font-light leading-7 mb-2 snipcss0-3-91-106">
                                    Some other tech that I love and/or have built at scale with:
                                </p>
                                <ul className="grid grid-cols-2 gap-x-2 snipcss0-3-91-107">
                                    <li className="font-light leading-7 snipcss0-4-107-108">
                                        • Python (Flask, Django, custom frameworks)
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-109">
                                        • Java (Dropwizard primarily + a bit of Spring)
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-110">
                                        • PHP (custom frameworks)
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-111">
                                        • MongoDB
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-112">
                                        • MySQL
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-113">
                                        • InfluxDB
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-114">
                                        • Aerospike
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-115">
                                        • Presto
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-116">
                                        • HDFS/Hive
                                    </li>
                                    <li className="font-light leading-7 snipcss0-4-107-117">
                                        • Vertica
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full bg-dusty/50 backdrop-blur p-6 mb-6 snipcss0-2-82-118 style-cajkZ"
                                 id="style-cajkZ">
                                <h3 className="font-bold text-2xl mb-6 snipcss0-3-118-119">
                                    Contributions
                                </h3>
                                <p className="font-light leading-7 mb-4 snipcss0-3-118-120">
                                    GitHub:
                                    <a href="https://github.com/" target="_blank" rel="noreferrer"
                                       className="text-brand font-bold hover:underline snipcss0-4-120-121">
                                        @YourGithub
                                    </a>
                                </p>
                                <div className="flex justify-center snipcss0-3-118-122">
                                    <article
                                        className="react-activity-calendar styles-module_container__Zq3Ln snipcss0-4-122-123 style-bp5h1"
                                        id="style-bp5h1">
                                        <svg width={844} height={130} viewBox="0 0 844 130"
                                             className="react-activity-calendar__calendar styles-module_calendar__-Ozc6 snipcss0-5-123-124">
                                            <g className="react-activity-calendar__legend-month snipcss0-6-124-125 style-bskap"
                                               id="style-bskap">
                                                <text x={16} dominantBaseline="hanging" className="snipcss0-7-125-126">
                                                    Aug
                                                </text>
                                                <text x={80} dominantBaseline="hanging" className="snipcss0-7-125-127">
                                                    Sep
                                                </text>
                                                <text x={144} dominantBaseline="hanging" className="snipcss0-7-125-128">
                                                    Oct
                                                </text>
                                                <text x={224} dominantBaseline="hanging" className="snipcss0-7-125-129">
                                                    Nov
                                                </text>
                                                <text x={288} dominantBaseline="hanging" className="snipcss0-7-125-130">
                                                    Dec
                                                </text>
                                                <text x={352} dominantBaseline="hanging" className="snipcss0-7-125-131">
                                                    Jan
                                                </text>
                                                <text x={432} dominantBaseline="hanging" className="snipcss0-7-125-132">
                                                    Feb
                                                </text>
                                                <text x={496} dominantBaseline="hanging" className="snipcss0-7-125-133">
                                                    Mar
                                                </text>
                                                <text x={560} dominantBaseline="hanging" className="snipcss0-7-125-134">
                                                    Apr
                                                </text>
                                                <text x={640} dominantBaseline="hanging" className="snipcss0-7-125-135">
                                                    May
                                                </text>
                                                <text x={704} dominantBaseline="hanging" className="snipcss0-7-125-136">
                                                    Jun
                                                </text>
                                                <text x={768} dominantBaseline="hanging" className="snipcss0-7-125-137">
                                                    Jul
                                                </text>
                                            </g>
                                            <g transform="translate(0, 0)" className="snipcss0-6-124-138">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-07-31" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-06" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(16, 0)" className="snipcss0-6-124-139">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-08" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-13" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(32, 0)" className="snipcss0-6-124-140">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-20" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(48, 0)" className="snipcss0-6-124-141">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-22" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-27" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(64, 0)" className="snipcss0-6-124-142">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-29" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-08-31" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-03" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(80, 0)" className="snipcss0-6-124-143">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-05" data-level={4}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-08" data-level={4}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-10" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(96, 0)" className="snipcss0-6-124-144">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-17" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(112, 0)" className="snipcss0-6-124-145">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-20" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-22" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-24" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(128, 0)" className="snipcss0-6-124-146">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-29" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-09-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-01" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(144, 0)" className="snipcss0-6-124-147">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-08" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(160, 0)" className="snipcss0-6-124-148">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-15" data-level={4}>
                                                </rect>
                                            </g>
                                            <g transform="translate(176, 0)" className="snipcss0-6-124-149">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-20" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-22" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(192, 0)" className="snipcss0-6-124-150">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-29" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(208, 0)" className="snipcss0-6-124-151">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-10-31" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-05" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(224, 0)" className="snipcss0-6-124-152">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-08" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-12" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(240, 0)" className="snipcss0-6-124-153">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-19" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(256, 0)" className="snipcss0-6-124-154">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-20" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-22" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-26" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(272, 0)" className="snipcss0-6-124-155">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-29" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-11-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-03" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(288, 0)" className="snipcss0-6-124-156">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-08" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-10" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(304, 0)" className="snipcss0-6-124-157">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-14" data-level={4}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-17" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(320, 0)" className="snipcss0-6-124-158">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-20" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-22" data-level={4}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-24" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(336, 0)" className="snipcss0-6-124-159">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-29" data-level={4}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2022-12-31" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(352, 0)" className="snipcss0-6-124-160">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-06" data-level={4}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-07" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(368, 0)" className="snipcss0-6-124-161">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-08" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-14" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(384, 0)" className="snipcss0-6-124-162">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-20" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-21" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(400, 0)" className="snipcss0-6-124-163">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-22" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-28" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(416, 0)" className="snipcss0-6-124-164">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-29" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-01-31" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-04" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(432, 0)" className="snipcss0-6-124-165">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-08" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-11" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(448, 0)" className="snipcss0-6-124-166">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-18" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(464, 0)" className="snipcss0-6-124-167">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-20" data-level={4}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-22" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-25" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(480, 0)" className="snipcss0-6-124-168">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-26" data-level={4}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-02-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-04" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(496, 0)" className="snipcss0-6-124-169">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-08" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-11" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(512, 0)" className="snipcss0-6-124-170">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-18" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(528, 0)" className="snipcss0-6-124-171">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-20" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-22" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-25" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(544, 0)" className="snipcss0-6-124-172">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-29" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-03-31" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-01" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(560, 0)" className="snipcss0-6-124-173">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-08" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(576, 0)" className="snipcss0-6-124-174">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-15" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(592, 0)" className="snipcss0-6-124-175">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-20" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-22" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(608, 0)" className="snipcss0-6-124-176">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-29" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(624, 0)" className="snipcss0-6-124-177">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-04-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-06" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(640, 0)" className="snipcss0-6-124-178">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-08" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-13" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(656, 0)" className="snipcss0-6-124-179">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-20" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(672, 0)" className="snipcss0-6-124-180">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-22" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-27" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(688, 0)" className="snipcss0-6-124-181">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-29" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-05-31" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-03" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(704, 0)" className="snipcss0-6-124-182">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-08" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-10" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(720, 0)" className="snipcss0-6-124-183">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-15" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-17" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(736, 0)" className="snipcss0-6-124-184">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-20" data-level={4}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-22" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-24" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(752, 0)" className="snipcss0-6-124-185">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-29" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-06-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-01" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(768, 0)" className="snipcss0-6-124-186">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-03" data-level={4}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-05" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-06" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-07" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-08" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(784, 0)" className="snipcss0-6-124-187">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-09" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-10" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-11" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-12" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-13" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-14" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-15" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(800, 0)" className="snipcss0-6-124-188">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-16" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-17" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-18" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-19" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-20" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-21" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-22" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(816, 0)" className="snipcss0-6-124-189">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-23" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-24" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-25" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-26" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-27" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-28" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-29" data-level={0}>
                                                </rect>
                                            </g>
                                            <g transform="translate(832, 0)" className="snipcss0-6-124-190">
                                                <rect x={0} y={22} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-30" data-level={0}>
                                                </rect>
                                                <rect x={0} y={38} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-07-31" data-level={0}>
                                                </rect>
                                                <rect x={0} y={54} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-08-01" data-level={0}>
                                                </rect>
                                                <rect x={0} y={70} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-08-02" data-level={0}>
                                                </rect>
                                                <rect x={0} y={86} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-08-03" data-level={0}>
                                                </rect>
                                                <rect x={0} y={102} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-08-04" data-level={0}>
                                                </rect>
                                                <rect x={0} y={118} width={12} height={12} rx={2} ry={2}
                                                      data-date="2023-08-05" data-level={0}>
                                                </rect>
                                            </g>
                                        </svg>
                                        <footer
                                            className="react-activity-calendar__footer styles-module_footer__IMos1 snipcss0-5-123-191 style-QomRX"
                                            id="style-QomRX">
                                            <div className="react-activity-calendar__count snipcss0-6-191-192">
                                                25 contributions in the last year
                                            </div>
                                            <div
                                                className="react-activity-calendar__legend-colors styles-module_legendColors__oZihX snipcss0-6-191-193">
                      <span className="snipcss0-7-193-194 style-aT5o6" id="style-aT5o6">
                        Less
                      </span>
                                                <svg width={12} height={12} className="snipcss0-7-193-195">
                                                    <rect width={12} height={12} fill="#161b22" rx={2} ry={2}>
                                                    </rect>
                                                </svg>
                                                <svg width={12} height={12} className="snipcss0-7-193-196">
                                                    <rect width={12} height={12} fill="#0e4429" rx={2} ry={2}>
                                                    </rect>
                                                </svg>
                                                <svg width={12} height={12} className="snipcss0-7-193-197">
                                                    <rect width={12} height={12} fill="#006d32" rx={2} ry={2}>
                                                    </rect>
                                                </svg>
                                                <svg width={12} height={12} className="snipcss0-7-193-198">
                                                    <rect width={12} height={12} fill="#26a641" rx={2} ry={2}>
                                                    </rect>
                                                </svg>
                                                <svg width={12} height={12} className="snipcss0-7-193-199">
                                                    <rect width={12} height={12} fill="#39d353" rx={2} ry={2}>
                                                    </rect>
                                                </svg>
                                                <span className="snipcss0-7-193-200 style-XRrzB" id="style-XRrzB">
                        More
                      </span>
                                            </div>
                                        </footer>
                                    </article>
                                </div>
                            </div>
                        </section>
                        */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
