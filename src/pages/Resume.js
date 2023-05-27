import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import { useTheme } from '../components/ThemeContext';
import RecomCard from '../components/RecomCard';
import C0 from '../assets/C0.jpg';
import C1 from '../assets/C1.png';
import C2 from '../assets/C2.png';
import C3 from '../assets/C3.jpg';
import C4 from '../assets/C4.jpg';
import C5 from '../assets/C5.jpg';
import C5C from '../assets/C5C.jpg';
import C6 from '../assets/C6.jpg';
import C7 from '../assets/C7.jpg';
import C8 from '../assets/C8.jpg';
import C9 from '../assets/C9.jpg';
import C10 from '../assets/C10.jpg';
import C11 from '../assets/C11.jpg';
import C12 from '../assets/C12.jpg';
import C13 from '../assets/C13.jpg';
import C14 from '../assets/C14.jpg';
import C15 from '../assets/C15.jpg';
import CertificatesCard from '../components/CertificatesCard';

export default function Resume() {
    const {theme} = useTheme();
    const certifImages = [C0, C1, C2, C3, C4, C5, C5C, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15];

    const resumeLink = () => {
        window.open('https://docs.google.com/document/d/15zYYc_d1gcCBmfVd-C04rti5hQeozUA5MVOWW5wIuFg/edit?usp=sharing', '_blank');
    }

    return (
        <main className="container-fluid">
        <div className="row">
            <div className="col-sm-2 d-none d-sm-block"></div>
            <div className="col-12 col-sm-8">
                <h1 style={theme === 'light' ? {animation:'dayLights 5s linear infinite'} : {animation:'nightLights 5s linear infinite'}}>
                    <Write text="Resume" time="1000" delay="0" />
                </h1>
                <br />
                <FadeIn fade="1000" delay="0">
                    <p>You can see my full resume clicking <span className="resumeLink" onClick={resumeLink}>here</span> (this will open another tab)</p>
                    <br />
                    <h2>
                        Experience
                    </h2>
                    <article><h5>Full-Stack Developer</h5>Academia Rosario Ballet, Mar 2023 - Present<br />
                        - Design and develop the website https://www.academiarosarioballet.com.ar as a SPA (single page application).<br />
                        - Implement over 10 features including CRUD operations and advanced filtering options.<br />
                        - Utilize HTML, CSS, Bootstrap, jQuery, JavaScript, AJAX, PHP and MySQL.
                    </article>
                    <br />
                    <article><h5>Programmer</h5>Global Game Jam, Rosario, Jan 2013 - Dec 2015<br />
                        - Participated in the Global Game Jam as a videogame programmer, using JavaScript.<br />
                        - Developed a game called “Jamming” which can be seen at https://gamejolt.com/games/jamming/46288.<br />
                    </article>
                    <p><span style={{fontSize:'11px', marginTop:'5px'}}>(aside from these I've got plenty of experience as teacher and I'm currently director of a dance school)</span></p>
                    <br />
                    <h2>
                        Education
                    </h2>
                    <article><h5>Bachelor in Computer Systems Analyst</h5>Esc. Sup. N° 49 Cap. Justo José de Urquiza, Rosario, Mar 2010 - Oct 2011<br />
                        - Studied Front-End Developer skills in HTML, CSS and JavaScript during the first year.<br />
                        - Studied Back-End Developer skills in PHP and MySQL during the second year.<br />
                        - Studied computer science concepts like algorithms, pseudocode, logic, hardware and networking.<br />
                    </article>
                    <br />
                    <h2>Certificates</h2>
                    <CertificatesCard images={certifImages} text="Certificados" />
                    <h2>Recommendations</h2>
                </FadeIn>
            </div>
            <div className="col-sm-2 d-none d-sm-block"></div>
        </div>
            <div className="row">
                <div className="col-sm-2 d-none d-sm-block"></div>
                <div className="col-6 col-sm-4">
                    <FadeIn fade="1000" delay="0">
                        <RecomCard
                            name="Augusto Reategui"
                            job="Front-end web developer | Software engineer | Java | Javascript | Typescript | MySQL"
                            text="He is a good co-worker, I learned a lot from him, he's smart, proactive, diligent and persistent. He is always constantly searching for the latest technologies to do his job better.">
                        </RecomCard>
                    </FadeIn>
                </div>
                <div className="col-6 col-sm-4">
                    <FadeIn fade="1000" delay="0">
                        <RecomCard
                            name="Catalina Donoso"
                            job="Estudiante en Universidad Nacional de Rosario - UNR"
                            text="Juan is an excellent addition in any field in which he works. He has strength, attitude to keep going and is a very decisive and kind person. I was able to meet him as director of ARB that he was able to create from scratch with a die-hard attitude. Juan is extremely smart and a really comprehensive boss.">
                        </RecomCard>
                    </FadeIn>
                </div>
                <div className="col-sm-2 d-none d-sm-block"></div>
            </div>
        </main>
    )
}