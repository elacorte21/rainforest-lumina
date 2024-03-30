import ImgMain from '../assets/images/main-rainforest-lumina.png';
import ImgMainMid from '../assets/images/main-middle.png';
import ImgMainLeft from '../assets/images/main-left.png';
import ImgMainLeftTablet from '../assets/images/main-left-tablet.png';
import ImgMainRight from '../assets/images/main-right.png';
import ImgMainRightTablet from '../assets/images/main-right-tablet.png';
import ImgFooterLogos from '../assets/images/main-footer-logos-new.png';
import ImgMap from '../assets/images/img-map.jpg';
import IconDown from '../assets/images/icon-down.svg';
import IconStory from '../assets/images/icon-story.svg';
import IconGallery from '../assets/images/icon-gallery.png';

import { Crew } from '../components/crew';
import { Gallery } from '../components/gallery';

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

            <Crew />

            <Gallery data_gallery={rl_data.gallery} />
        </>
    )
}

export { Home };