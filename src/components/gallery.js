import React from "react";

import IconDown from '../assets/images/icon-down.svg';
import IconGallery from '../assets/images/icon-gallery.png';

const Gallery = ({data_gallery}) => {

    console.log(data_gallery);
    return(
        <section id="gallery" className="target gallery">
		    <div className="container">
			    <div className="row">
				    <div className="col-md-12 text-center">
                        <img src={IconGallery} className="wow slideInDown icon-tickets" data-wow-duration="1s" alt="" />
                        <h2 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">A glimpse into the experience</h2>
                        <div className="youtube wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                            <iframe src="https://www.youtube.com/embed/oJVVHX98qPo" title="Rainforest Lumina"></iframe>
                        </div>
                    </div>
                </div>
                
                <br />
                
                <div className="row">
                    <div className="col-md-12 text-center">					  
                        <h2 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">Photo Gallery</h2>
                    </div>

                    <div className="col-md-12 text-center">
                        <div className="loop owl-carousel owl-theme wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                            {data_gallery?.map((image) => {
                                return(
                                    <div className="item" key={image.img}>
                                        <img src={'images/' + image.img} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
            
            <br />
            
            <p className="text-center"><a className="scrollpg" href="#tickets"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a></p>
            
	    </section>
    )
}

export { Gallery };