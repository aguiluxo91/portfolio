import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Link from 'next/link';
import Image from 'next/image';

const Work = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000
        })
      }, [])

    return (
        <div className="work">
            <h1>Projects I'm working on</h1>
            <section className="projects">
            <div className="project" data-aos="fade">
                    <Image src="/ThePhoneCave.png" className="project-img" width="480" height="250" layout="responsive" alt="thephonecave"/>
                    <div className="project-description">
                        <div>THE PHONE CAVE</div>
                        <p>Web App for buying smartphones or rating them. Deployed a fully MERN responsive web application from scratch, implementing shopping cart with localstorage, being able to log in with social login and deployed on Heroku in a Docker container.</p>
                        <div className="description-icons">
                            <Link href="https://thephonecave-ih.herokuapp.com">
                                <a target="_blank">
                                    <Image src="/rocket.svg" alt="rocket" width="40" height="40"/>
                                </a>
                            </Link>
                            <Link href="https://github.com/aguiluxo91/reto_web">
                                <a  target="_blank">
                                    <Image src="/github.svg" alt="github-icon" width="40" height="40"/>
                                </a>
                            </Link>
                        </div>
                        <div className="tech-icons">
                            <span>
                                <Image src="/js-icon.svg" alt="css-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/express-icon.svg" alt="javascript-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/react-icon.svg" alt="express-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/node-icon.svg" alt="html-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/mongodb-icon.svg" alt="css-icon" width="40" height="40"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <Image src="/PetPortal.png" className="project-img" width="480" height="250" layout="responsive" alt="petportal"/>
                    <div className="project-description">
                        <div>PET PORTAL</div>
                        <p>Final bootcamp project. MERN App designed to facilitate the search for care for our pets or to be the caregivers. Added several implementations such as social login or Google Maps and Autocomplete Api and deployed on Heroku in a Docker container. Pair programmed remotely.</p>
                        <div className="description-icons">
                            <Link href="https://pet-portal-web.herokuapp.com">
                                <a target="_blank">
                                    <Image src="/rocket.svg" alt="rocket" width="40" height="40"/>
                                </a>
                            </Link>
                            <Link href="https://github.com/Pet-Portal/PetPortal">
                                <a  target="_blank">
                                    <Image src="/github.svg" alt="github-icon" width="40" height="40"/>
                                </a>
                            </Link>
                        </div>
                        <div className="tech-icons">
                            <span>
                                <Image src="/js-icon.svg" alt="css-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/express-icon.svg" alt="javascript-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/react-icon.svg" alt="express-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/node-icon.svg" alt="html-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/mongodb-icon.svg" alt="css-icon" width="40" height="40"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <Image src="/JustGame.png" className="project-img" width="480" height="250" layout="responsive" alt="justgame"/>
                    <div className="project-description">
                        <div>JUST GAME</div>
                        <p>Second Ironhack project. Web App for video games purchasing and selling. Deployed a fully responsive web application from scratch by using Node JS, Express, MongoDB & Handlebars. Implemented GoogleMaps API for geocoding and Autocomplete, social login with Google and Steam. Pair programmed remotely.</p>
                        <div className="description-icons">
                            <Link href="http://just-game.herokuapp.com">
                                <a target="_blank">
                                    <Image src="/rocket.svg" alt="rocket" width="40" height="40"/>
                                </a>
                            </Link>
                            <Link href="https://github.com/JustGameIronhack/just-game">
                                <a  target="_blank">
                                    <Image src="/github.svg" alt="github-icon" width="40" height="40"/>
                                </a>
                            </Link>
                        </div>
                        <div className="tech-icons">
                            <span>
                                <Image src="/js-icon.svg" alt="express-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/express-icon.svg" alt="javascript-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/node-icon.svg" alt="html-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/mongodb-icon.svg" alt="css-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/hbs-icon.svg" alt="css-icon" width="40" height="40"/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="project" data-aos="fade">
                    <Image src="/super-pang-arcade.png" className="project-img" width="480" height="250" layout="responsive" alt="superpang"/>
                    <div className="project-description">
                        <div>SUPER PANG</div>
                        <p>This is the first project during my Ironhack Web Development Bootcamp! I programed an arcade game Pang style in which I mastered the object oriented programming (OOP) in a JavaScript environment.</p>
                        <div className="description-icons">
                            <Link href="https://aguiluxo91.github.io/Super-Pang-IronHack-1st-Project/index.html">
                                <a target="_blank">
                                    <Image src="/rocket.svg" alt="rocket" width="40" height="40"/>
                                </a>
                            </Link>
                            <Link href="https://github.com/aguiluxo91/Super-Pang-IronHack-1st-Project">
                                <a  target="_blank">
                                    <Image src="/github.svg" alt="github-icon" width="40" height="40"/>
                                </a>
                            </Link>
                        </div>
                        <div className="tech-icons">
                            <span>
                                <Image src="/js-icon.svg" alt="javascript-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/html-icon.svg" alt="html-icon" width="40" height="40"/>
                            </span>
                            <span>
                                <Image src="/css-icon.svg" alt="css-icon" width="40" height="40"/>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;