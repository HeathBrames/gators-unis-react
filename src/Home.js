import React from 'react';
import './Home.css';
import carouselOne from "./images/croppedPerine2.jpg";
import carouselTwo from "./images/WhiteHelmetCarouselNew.jpg";
import carouselThree from "./images/MullenCarouselNew.jpg";
import uniformOne from "./images/HelmetMobileWebsite.jpg";
import uniformTwo from "./images/JerseyMobileWebsiteUpdated.jpg";
import uniformThree from "./images/PantsMobileWebsiteUpdated.jpg";
import uniformFour from "./images/FullUniformMobileWebsiteUpdated.jpg"
/*import ReactDOM from 'react-dom';*/





const Home = (props)=> {
    return (
        <div className="AppTwo">
            {/* this is the navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="navigation-bar">
                    <div className="container-fluid">
                        <a className="navbar-brand"></a>
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
            <div id="slides" class="carousel slide" data-ride="carousel" data-interval="10000">

                <ol class="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" class="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 h-100" src={carouselOne} alt="carouselOne"/>
                        <div class="carousel-caption">
                            <h2 class="display-2" id="bigHeading">Throwback Uniforms</h2>
                            <h3 id="smallHeading">A complete breakdown of the 1960's throwback uniforms</h3>
                            <a href="https://medium.com/@gatorsunis/gut-check-florida-vs-auburn-ecf2fb8cde3"><button type="button" class="btn btn-outline-light btn-lg" id="buttonCSS">Read More</button></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={carouselTwo} alt="carouselTwo"/>
                        <div class="carousel-caption">
                            <h2 class="display-2" id="bigHeading">White Helmet History</h2>
                            <h3 id="smallHeading">The long and tumultuous tradition of white helmets</h3>
                            <a href="https://twitter.com/i/events/1248657336291545091"><button type="button" class="btn btn-outline-light btn-lg" id="buttonCSS">Read More</button></a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={carouselThree} alt="carouselThree"/>
                        <div class="carousel-caption">
                            <h2 class="display-2" id="bigHeading">Mullen Gets it Right</h2>
                            <h3 id="smallHeading">When it comes to uniforms, Dan Mullen gets it right</h3>
                            <a href="https://medium.com/@gatorsunis/when-it-comes-to-uniforms-dan-mullen-gets-it-right-33317b17149e"><button type="button" class="btn btn-outline-light btn-lg" id="buttonCSS">Read More</button></a>
                        </div>
                    </div>
                </div>

            </div>
        
            {/*this is the news headline*/}
            <div class="news-bar">
                <h1>News</h1>
            </div>

            {/*this is the gallery*/}
            <div class="container-gallery">
                <div class="container-fluid padding">
                    <div class="news-gallery">
                        <a href="https://twitter.com/GatorsUnis/status/1252689190715867138" class="img-1">
                            <div class="img-caption"> 
                                NCAA Approves "0" as Legal Number
                                <div class="img-sub-caption">
                                    GatorsUnis &emsp; &nbsp; 
                                    March 21, 2020
                                </div>
                            </div>
                        </a>
                        <a href="https://medium.com/@gatorsunis/when-it-comes-to-uniforms-dan-mullen-gets-it-right-33317b17149e" class="img-2">
                            <div class="img-caption"> 
                                Dan Mullen Gets it Right
                                <div class="img-sub-caption">
                                    GatorsUnis &emsp; &nbsp; 
                                    January 1, 2020
                                </div>
                            </div>
                        </a>
                        <a href=" https://medium.com/@gatorsunis/gut-check-florida-vs-florida-state-1131b0e02a19" class="img-3">
                            <div class="img-caption"> 
                                GUT Check: Florida vs Florida State
                                <div class="img-sub-caption">
                                    GatorsUnis &emsp; &nbsp; 
                                    December 1, 2019
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/*this is jersey selection*/}
            <div class="paddingcon" id="database section">
                <div class="database-heading">
                    <h1>Uniform Database</h1>
                </div>
                    <div class="database-container">
                        <div class="database-gallery">
                            <div class="card">
                                <a href="football.html">
                                    <img src={uniformOne} alt="uniformImageOne" />
                                </a>
                            </div>
                            <div class="card">
                                <a href="football.html">
                                    <img src={uniformTwo} alt="uniformImageTwo" />
                                </a>
                            </div>
                            <div class="card">
                                <a href="football.html">
                                    <img src={uniformThree} alt="uniformmImageThree" />
                                </a>
                            </div>
                            <div class="card">
                                <a href="football.html">
                                    <img src={uniformFour} alt="uniformImageFour" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        
            {/*this is the twitter/extras section*/}
            <div class="paddingcon" id="extras section">
                <div class="extras-heading">
                    <h1>Extras</h1>
                </div>
                <div class="container-fluid padding" id="twitter-section">
                    <div class="row padding">
                        <div class="col-lg-6" id="twitter-feed">
                        </div>
                        <div class="col-lg-6" id="bonus-images">
                            <a href="https://www.behance.net/gallery/96730413/Florida-Gators-Concept-Uniforms-GatorsUnis">
                                <div class="bonus-one">
                                    <h2>Concepts</h2>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        
            {/*this is the footer section*/}
            <footer>
                <div class="container-fluid padding" id="footer-container">
                    <div class="row">
                        <div class="col-md text-center" id="footer-logo">
                            <img src="images/footerHelmet.png" />
                            <h6>@GatorsUnis</h6>
                        </div>
                        <div class="col-md text-left">
                            <h5>Explore</h5>
                            <p><a href="football.html" style={{textDecoration: 'none'}}>Football</a></p>
                            <p><a href="https://medium.com/@gatorsunis" style={{textDecoration: 'none'}}>News</a></p>
                            <p><a href="https://www.behance.net/gallery/96730413/Florida-Gators-Concept-Uniforms-GatorsUnis" style={{textDecoration: 'none'}}>Concepts</a></p>
                            <p><a href="about.html" style={{textDecoration: 'none'}}>About</a></p>
                        </div>
                        <div class="col-md text-left">
                            <h5>Follow</h5>
                            <p><a href="https://twitter.com/GatorsUnis" style={{textDecoration: 'none'}}>Twittter</a></p>
                            <p><a href="https://www.instagram.com/gatorsuniforms/" style={{textDecoration: 'none'}}>Instagram</a></p>
                            <p><a href="https://www.facebook.com/GatorsUnis" style={{textDecoration: 'none'}}>Facebook</a></p>
                        </div>
                        <div class="col-md text-left">
                            <h5>Uniform Resources</h5>
                            <p><a href="https://news.nike.com/news/nike-vapor-untouchable-performance-system" style={{textDecoration: 'none'}}>Vapor Untouchable</a></p>
                            <p><a href="https://boards.sportslogos.net/topic/106196-nike-vapor-untouchable-and-mach-speed-svg-and-pdf-formats/" style={{textDecoration: 'none'}}>Template Files</a></p>
                        </div>
                        <div class="col-md text-center" id="rights-reserved">
                            <h5>Contact</h5>
                            <p>Need branding help? Need new uniforms designed for your school?</p>
                            <a href="https://twitter.com/messages/compose?recipient_id=1016413317626236928"><button type="button" class="btn btn-outline-light btn-lg" id="footer-buttonCSS">Let's Get Started</button></a>
                        </div>
                        <div class="col-12 text-center">
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