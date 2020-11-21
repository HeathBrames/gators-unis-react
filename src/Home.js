import React from 'react';
import { useState, useEffect } from "react";
import './Home.css';

import websiteLogo from "./images/WebsiteLogoPNG3.png";
import carouselOne from "./images/croppedPerine2.jpg";
import carouselTwo from "./images/WhiteHelmetCarouselNew.jpg";
import carouselThree from "./images/MullenCarouselNew.jpg";
import uniformOne from "./images/HelmetMobileWebsite.jpg";
import uniformTwo from "./images/JerseyMobileWebsiteUpdated.jpg";
import uniformThree from "./images/PantsMobileWebsiteUpdated.jpg";
import uniformFour from "./images/FullUniformMobileWebsiteUpdated.jpg"
import footerHelmet from "./images/footerHelmet.png";



const Home = (props)=> {

    //function that changes the background of the navbar upon scroll
    //boolean state value, set it to true when the screen is scrolled past 400
    //the nav className is rendered conditionally on the state, if state == true, make it blue, else render normal
    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 400);
    }); 
    }, []); 

    //this is the JSX for the landingpage
    return (
        <div className="AppTwo">
            {/* this is the navbar */}
            <nav className={scroll ? 'navbar navbar-expand-lg navbar-dark sticky-top scrolled' : 'navbar navbar-expand-lg navbar-dark sticky-top'} id="navigation-bar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href = "#"><img src={websiteLogo} style={{width: '350px', height: '50px'}} alt="logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" 
                        data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="index.html">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://medium.com/@gatorsunis">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="football.html">Football</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.behance.net/gallery/96730413/Florida-Gators-Concept-Uniforms-GatorsUnis">Concepts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="index.html">About</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            {/*this is the carousel*/}
            <div id="slides" className="carousel slide" data-ride="carousel" data-interval="10000">

                <ol className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 h-100" src={carouselOne} alt="carouselOne"/>
                        <div className="carousel-caption">
                            <h2 className="display-2" id="bigHeading">Throwback Uniforms</h2>
                            <h3 id="smallHeading">A complete breakdown of the 1960's throwback uniforms</h3>
                            <a href="https://medium.com/@gatorsunis/gut-check-florida-vs-auburn-ecf2fb8cde3"><button type="button" className="btn btn-outline-light btn-lg" id="buttonCSS">Read More</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carouselTwo} alt="carouselTwo"/>
                        <div className="carousel-caption">
                            <h2 className="display-2" id="bigHeading">White Helmet History</h2>
                            <h3 id="smallHeading">The long and tumultuous tradition of white helmets</h3>
                            <a href="https://twitter.com/i/events/1248657336291545091"><button type="button" className="btn btn-outline-light btn-lg" id="buttonCSS">Read More</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={carouselThree} alt="carouselThree"/>
                        <div className="carousel-caption">
                            <h2 className="display-2" id="bigHeading">Mullen Gets it Right</h2>
                            <h3 id="smallHeading">When it comes to uniforms, Dan Mullen gets it right</h3>
                            <a href="https://medium.com/@gatorsunis/when-it-comes-to-uniforms-dan-mullen-gets-it-right-33317b17149e"><button type="button" className="btn btn-outline-light btn-lg" id="buttonCSS">Read More</button></a>
                        </div>
                    </div>
                </div>

            </div>
        
            {/*this is the news headline*/}
            <div className="news-bar">
                <h1>News</h1>
            </div>

            {/*this is the gallery*/}
            <div className="container-gallery">
                <div className="container-fluid padding">
                    <div className="news-gallery">
                        <a href="https://twitter.com/GatorsUnis/status/1252689190715867138" className="img-1">
                            <div className="img-caption"> 
                                NCAA Approves "0" as Legal Number
                                <div className="img-sub-caption">
                                    GatorsUnis &emsp; &nbsp; 
                                    March 21, 2020
                                </div>
                            </div>
                        </a>
                        <a href="https://medium.com/@gatorsunis/when-it-comes-to-uniforms-dan-mullen-gets-it-right-33317b17149e" className="img-2">
                            <div className="img-caption"> 
                                Dan Mullen Gets it Right
                                <div className="img-sub-caption">
                                    GatorsUnis &emsp; &nbsp; 
                                    January 1, 2020
                                </div>
                            </div>
                        </a>
                        <a href=" https://medium.com/@gatorsunis/gut-check-florida-vs-florida-state-1131b0e02a19" className="img-3">
                            <div className="img-caption"> 
                                GUT Check: Florida vs Florida State
                                <div className="img-sub-caption">
                                    GatorsUnis &emsp; &nbsp; 
                                    December 1, 2019
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/*this is jersey selection*/}
            <div className="paddingcon" id="database section">
                <div className="database-heading">
                    <h1>Uniform Database</h1>
                </div>
                    <div className="database-container">
                        <div className="database-gallery">
                            <div className="card">
                                <a href="football.html">
                                    <img src={uniformOne} alt="uniformImageOne" />
                                </a>
                            </div>
                            <div className="card">
                                <a href="football.html">
                                    <img src={uniformTwo} alt="uniformImageTwo" />
                                </a>
                            </div>
                            <div className="card">
                                <a href="football.html">
                                    <img src={uniformThree} alt="uniformmImageThree" />
                                </a>
                            </div>
                            <div className="card">
                                <a href="football.html">
                                    <img src={uniformFour} alt="uniformImageFour" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        
            {/*this is the twitter/extras section*/}
            <div className="paddingcon" id="extras section">
                <div className="extras-heading">
                    <h1>Extras</h1>
                </div>
                <div className="container-fluid padding" id="twitter-section">
                    <div className="row padding">
                        <div className="col-lg-6" id="twitter-feed">
                            <a className="twitter-timeline tw-align-center" data-width="100%" data-height="100%" data-theme="dark" href="https://twitter.com/GatorsUnis?ref_src=twsrc%5Etfw">Tweets by GatorsUnis</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </div>
                        <div className="col-lg-6" id="bonus-images">
                            <a href="https://www.behance.net/gallery/96730413/Florida-Gators-Concept-Uniforms-GatorsUnis">
                                <div className="bonus-one">
                                    <h2>Concepts</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
            {/*this is the footer section*/}
            <footer>
                <div className="container-fluid padding" id="footer-container">
                    <div className="row">
                        <div className="col-md text-center" id="footer-logo">
                            <img src={footerHelmet} style = {{width: '205px', height: '200px'}} alt="footerImg"/>
                            <h6>@GatorsUnis</h6>
                        </div>
                        <div className="col-md text-left">
                            <h5>Explore</h5>
                            <p><a href="football.html" style={{textDecoration: 'none'}}>Football</a></p>
                            <p><a href="https://medium.com/@gatorsunis" style={{textDecoration: 'none'}}>News</a></p>
                            <p><a href="https://www.behance.net/gallery/96730413/Florida-Gators-Concept-Uniforms-GatorsUnis" style={{textDecoration: 'none'}}>Concepts</a></p>
                            <p><a href="about.html" style={{textDecoration: 'none'}}>About</a></p>
                        </div>
                        <div className="col-md text-left">
                            <h5>Follow</h5>
                            <p><a href="https://twitter.com/GatorsUnis" style={{textDecoration: 'none'}}>Twittter</a></p>
                            <p><a href="https://www.instagram.com/gatorsuniforms/" style={{textDecoration: 'none'}}>Instagram</a></p>
                            <p><a href="https://www.facebook.com/GatorsUnis" style={{textDecoration: 'none'}}>Facebook</a></p>
                        </div>
                        <div className="col-md text-left">
                            <h5>Uniform Resources</h5>
                            <p><a href="https://news.nike.com/news/nike-vapor-untouchable-performance-system" style={{textDecoration: 'none'}}>Vapor Untouchable</a></p>
                            <p><a href="https://boards.sportslogos.net/topic/106196-nike-vapor-untouchable-and-mach-speed-svg-and-pdf-formats/" style={{textDecoration: 'none'}}>Template Files</a></p>
                        </div>
                        <div className="col-md text-center" id="rights-reserved">
                            <h5>Contact</h5>
                            <p>Need branding help? Need new uniforms designed for your school?</p>
                            <a href="https://twitter.com/messages/compose?recipient_id=1016413317626236928"><button type="button" className="btn btn-outline-light btn-lg" id="footer-buttonCSS">Let's Get Started</button></a>
                        </div>
                        <div className="col-12 text-center">
                            <h4>2020 Gators Uniform Tracker | All Rights Reserved</h4>
                            <h3>NOTE: This website and information provided is NOT affiliated with the University of Florida, the Florida Gators, or the UAA. All logos, uniforms, and content were recreated under <br />
                                the trademark Fair Use policy (U.S. Trademark Law) for the sole purpose of news reporting, commentary, historic preservation, and educational purposes. <br />
                                No copyright intended. All images are the property of their respective owners.
                            </h3>
                        </div>
                    </div>
                </div>
            </footer>
        
        
        
        
        </div>
            
    )

};

export default Home;