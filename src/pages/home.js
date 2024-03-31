import ImgMain from '../assets/images/main-rainforest-lumina.png';
import ImgMainMid from '../assets/images/main-middle.png';
import ImgMainLeft from '../assets/images/main-left.png';
import ImgMainLeftTablet from '../assets/images/main-left-tablet.png';
import ImgMainRight from '../assets/images/main-right.png';
import ImgMainRightTablet from '../assets/images/main-right-tablet.png';
import ImgFooterLogos from '../assets/images/main-footer-logos-new.png';
import ImgFooterLogo1 from '../assets/images/logo-footer-01.png';
import ImgFooterLogo2 from '../assets/images/logo-footer-02.png';
import ImgFooterLogo3 from '../assets/images/logo-footer-03.png';
import ImgFooterLogo4 from '../assets/images/logo-footer-04.png';
import ImgFooterLogo5 from '../assets/images/logo-footer-05.png';
import ImgFooterLogo6 from '../assets/images/logo-footer-06.png';
import ImgFooterLogo7 from '../assets/images/logo-footer-07.png';
import ImgFooterLogo8 from '../assets/images/logo-footer-08.png';
import ImgFooterLogo9 from '../assets/images/logo-footer-09.png';
import ImgFooterLogo10 from '../assets/images/logo-lumina-nightwalks.png';
import ImgFooterLogoJBP from '../assets/images/park-bird-footer.png';
import ImgFooterLogoNS from '../assets/images/park-night-safari-footer.png';
import ImgFooterLogoRS from '../assets/images/park-river-safari-footer.png';
import ImgFooterLogoSZ from '../assets/images/park-singapore-zoo-footer.png';

import ImgMap from '../assets/images/img-map.jpg';
import IconDown from '../assets/images/icon-down.svg';
import IconStory from '../assets/images/icon-story.svg';
import IconGallery from '../assets/images/icon-gallery.png';
import IconTickets from '../assets/images/icon-tickets.png';
import IconContact from '../assets/images/icon-contact.png';

import { Crew } from '../components/crew';
import { Gallery } from '../components/gallery';
import { Reviews } from '../components/reviews';

import Data from '../data/rl-data.json';

const Home = () => {
    let rl_data = Data;
    console.log(rl_data);
    return(
        <>
            <section id="main" className="target main">
                <div className="main-content wow fadeIn" data-wow-duration="3s" data-wow-delay="2.5s">
                    <img src={ImgMain} className="main-logo" alt="rainforest lumina" />
                    <h5 id="trigger1">A multimedia night walk on the wild side</h5>
                    <img className="footerlogo tablet-push" src={ImgFooterLogos} alt="" />
                </div>
                
                <footer className="text-center">
                    <p><a className="scrollpg" href="#story"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a></p>
                </footer>
		  
                <div className="main-left wow slideInLeft" data-wow-duration="3s">
                    <img src={ImgMainLeftTablet} className="imgmobile" alt="" />
                    <img src={ImgMainLeft} className="imgdesktop" alt="" />
                </div>
                <div className="main-right wow slideInRight" data-wow-duration="3s">
                    <img src={ImgMainRightTablet} className="imgmobile" alt="" />
                    <img src={ImgMainRight} className="imgdesktop" alt="" />
                </div>
		        <img src={ImgMainMid} className="main-middle wow slideInRight" data-wow-duration="3s" alt="" />
		  
                <div id="slide"></div>
                <div className="spark"></div>
            </section>

            <section id="story" className="target story">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={IconStory} width="110" className="icon-story wow swing" data-wow-duration="4s" alt="" />
                            <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Ever wondered what happens in the rainforest at night?</h2>
                            
                            <div className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                                <p>Pull the vines aside and meander along the path to where a lush and luminous universe awaits you.</p>
                                <p>Meet the Creature Crew, a quirky group of unlikely heroes who invites you to join their whimsical adventure.</p>
                                <p>When the day ends for our real animals, the Creature Crew takes on the role of protecting our rainforest.</p>
                                <p>The Creature Crew believes that every species has the power to give back to the rainforest: nature, animals, and humans too. Their motto, “We Are One,” means that everyone has a special role to play, even you!</p>
                                <p>Come play, sing, and discover their enchanted world. For wherever the Creature Crew roams, the rainforest blooms with wonder.</p>
                                <p><a className="scrollpg" href="#map"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a></p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="map" className="target map">
                <div className="container" data-wow-duration="2s">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={IconGallery} className="wow slideInDown icon-tickets" data-wow-duration="1s" alt="" />
                            <h2 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">Venture into the Luminous Rainforest</h2>
                            <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">A magical universe where only virtual animals and humans roam.<br />
                            Embark on the enhanced multisensory experience added at the WATER zone.<br />
                            There, you will enter the playground of Bob the Otter where he will put his special skill on display.</p>
                            <div className="map-container wow fadeIn">
                                <img src={ImgMap} alt="" />
                            </div>
                            
                            <p className="text-center">
                                <a className="scrollpg" href="#characters"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Crew data_crew={rl_data.crew} />

            <Gallery data_gallery={rl_data.gallery} />

            <section id="tickets" className="target tickets">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={IconTickets} className="icon-tickets wow slideInDown" data-wow-duration="1s" alt="" />
                            <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Tickets</h2>
                            
                            <div className="wow fadeIn" data-wow-delay="1.5s">
                                <p>Join us on an immersive multi-sensory journey into the lush rainforest at Singapore Zoo. Book early to secure your preferred dates!</p>
    
                                <div className="row border">
                                    <div className="tickets-left">
                                        <h3>Adult: $22</h3>
                                    </div>
                                    <div className="tickets-right">
                                        <h3>Child: $16</h3>
                                        (Ages 3 to 12)
                                    </div>
                                </div>
    
                                <p>Enjoy <strong>Two to Go Admission Promotion</strong> with savings up to 19% when you buy in pairs!</p>
                                <button className="btn-primary">Get Tickets Now!</button>
                            </div>
                            
                            <p><a className="scrollpg" href="#reviews"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a></p>
                        </div>
                    </div>
                </div>
            </section>

            <Reviews data_reviews={rl_data.reviews} />

            <section id="contact" className="target contact">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src={IconContact} className="icon-characters wow slideInDown" data-wow-duration="1s" alt="" />
                            <h2 className="wow fadeInUp" data-wow-delay="0.5s">Visit Us</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6 text-center offset-lg-3 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">
                            <p><strong>Rainforest Lumina at Singapore Zoo</strong><br />
                                80 Mandai Lake Road<br />
                                Singapore 729826</p>
                            <p>Zoom down in 15 minutes with <a href="..." target="_blank">Mandai Khatib Shuttle</a></p>
                            <p><strong>Operating Hours</strong><br />
                                7.30pm - 12am (Last entry at 10.30pm)</p>
                            <div className="google-maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180506.0361369372!2d103.73510515959518!3d1.3821057010489126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da13d9102adcaf%3A0xb414fac8a43b1b91!2sSingapore+Zoo!5e0!3m2!1sen!2ssg!4v1523612010294" width="600" height="320" title="Singapore Zoo Map"></iframe>
                            </div>
                            
                            <div className="sponsors">
                                <aside>
                                    <h4>Brought to you by:</h4>
                                    <img src={ImgFooterLogo1} alt="Singapore Zoo" />
                                    <img src={ImgFooterLogo2} alt="Moment Factory" />
                                </aside>
                                <aside>
                                    <h4>Held in:</h4>
                                    <img src={ImgFooterLogo3} alt="SG" />
                                </aside>
                            </div>
                            
                            <div className="sponsors">
                                <aside>
                                    <h4>Principal sponsor:</h4>
                                    <img src={ImgFooterLogo9} alt="BCA" />
                                </aside>
                            </div>
                            
                            <div className="sponsors">
                                <aside>
                                    <h4>Associate sponsors:</h4>
                                    <img src={ImgFooterLogo4} alt="Tiger Balm" />
                                    <img src={ImgFooterLogo5} alt="UFC" />
                                </aside>
                            </div>
                            
                            <div className="sponsors">
                                <aside>
                                    <h4>Official<br />
                                    projection partner:</h4>
                                    <img src={ImgFooterLogo6} alt="Panasonic" />
                                </aside>
                                <aside>
                                    <h4>Official outdoor<br />
                                    media partner:</h4>
                                    <img src={ImgFooterLogo7} alt="Moove Media" />
                                </aside>
                                <aside>
                                    <h4>Supporting<br />
                                    partner:</h4>
                                    <img src={ImgFooterLogo8} alt="Pico" />
                                </aside>
                            </div>
                            
                            <p className="text-center"><a className="scrollpg" href="#other"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a></p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="other" className="target other">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="wow fadeInDown" data-wow-duration="1s">Discover other night walks</h2>
                            <div className="vline wow fadeInUp" data-wow-duration="1.5s"></div>
                            <p><img src={ImgFooterLogo10} className="icon-characters wow fadeInUp" data-wow-duration="1s"  data-wow-delay="0.5s" alt="Lumina Nightwalks" /></p>
                            <button className="btn-primary wow fadeInUp" data-wow-duration="1s"  data-wow-delay="1s">find out more</button>
                        </div>
                    </div>
                </div>
                
                <footer>
                    Wildlife Reserves Singapore Group
                    <ul className="list-park">
                        <li><a href="..." title="Jurong Bird Park"><img src={ImgFooterLogoJBP} alt="Jurong Bird Park" /></a></li>
                        <li><a href="..." title="Night Safari"><img src={ImgFooterLogoNS} alt="Night Safari" /></a></li>
                        <li><a href="..." title="River Safari"><img src={ImgFooterLogoRS} alt="River Safari" /></a></li>
                        <li><a href="..." title="Singapore Zoo"><img src={ImgFooterLogoSZ} alt="Singapore Zoo" /></a></li>
                    </ul>
                    
                    &copy; Copyright 2018. Wildlife Reserves Singapore Group. <span>All rights reserved.</span>
                    <div className="contact-links">
                        <a href="..." target="_blank">Terms and conditions</a>
                        <a href="..." target="_blank">Privacy policy</a>
                        <a href="..." target="_blank">Data protection policy</a>
                    </div>
                </footer>
            </section>
        </>
    )
}

export { Home };