import IconDown from '../assets/images/icon-down.svg';
import IconCharacters from '../assets/images/icon-characters.png';

const Crew = ({data_crew}) => {

	return(
        <section id="characters" className="target characters">
		    <div className="container-fluid">
			    <div className="row">
				    <div className="col-md-12 text-center">
                        <img src={IconCharacters} className="icon-characters wow slideInDown" data-wow-duration="1s" alt="" />
                        <h2 className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">Meet the Creature Crew</h2>
                        <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s">Each Creature Crew embodies a unique virtue to give back to the rainforest.<br />
                            Click on the Creature Crew to discover more about their personalities,<br />
                            and choose the one that best represents you!<br />
                            <br />
                            Can&rsquo;t decide? Take our Creature Crew Personality Quiz:<br />
                            <a href="..." target="_blank">Which Creature Crew Are You?</a></p>
				    </div>
			    </div>

			    <ul className="row thumb-characters wow fadeIn" data-wow-duration="2s" data-wow-delay="1.5s">
					{data_crew?.map((crew) => {
						return(
							<li>
								<button key={crew.id} className={crew.thumb} data-toggle="modal" data-target={'#' + crew.name}></button>
								
								<div className="modal fade" id={crew.name} tabindex="-1" role="dialog" aria-hidden="true">
									<div className="modal-dialog" role="document">
										<div className="modal-content">
											<div className={'crew ' + crew.name}>
												<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
												<div className="row">
													<div className="col-md-6">
														<img src={'images/' + crew.image} alt={crew.name} />
													</div>
													<div className="col-md-6 text-left">
														<h2>{crew.personality}</h2>
														<p>{crew.description}</p>
														<p className="facts"><strong>Meaning behind the name:</strong> {crew.facts}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						)
					})}
                </ul>
			    <p className="text-center"><a className="scrollpg" href="#gallery"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a></p>
		    </div>
	    </section>
    )
}

export { Crew };