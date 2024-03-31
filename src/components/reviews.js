import React from "react";

import IconDown from '../assets/images/icon-down.svg';
import IconStory from '../assets/images/icon-story.svg';

const Reviews = ({data_reviews}) => {

    console.log(data_reviews);
    return(
        <section id="reviews" className="target reviews">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={IconStory} width="110" className="icon-story wow swing" data-wow-duration="4s" alt="" />
                        <h2 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">Reviews</h2>
                        
                        <div className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                            {data_reviews?.map((review) => {
                                return(
                                    <div key={review.id}>
                                        <p><span className="quotes">&ldquo;{review.quote}&rdquo;</span><br />
                                        <strong>{review.by}</strong></p>
                                        <hr />
                                    </div>
                                )
                            })}
                            
                            <p><a className="scrollpg" href="#contact"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Reviews };