import IconDown from '../assets/images/icon-down.svg';
import IconCharacters from '../assets/images/icon-characters.png';
import ImgBisuo from '../assets/images/img-personality-bisou.jpg';

const Crew = () => {
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
                            <a href="quiz.html" target="_blank">Which Creature Crew Are You?</a></p>
				    </div>
			    </div>

			    <ul className="row thumb-characters wow fadeIn" data-wow-duration="2s" data-wow-delay="1.5s">
                    <li><button className="thumb-char-ameng" data-toggle="modal" data-target="#maya"></button></li>
                    <li><button className="thumb-char-pangolin" data-toggle="modal" data-target="#waja"></button></li>
                    <li><button className="thumb-char-fox" data-toggle="modal" data-target="#poncho"></button></li>
                    <li><button className="thumb-char-tiger" data-toggle="modal" data-target="#tairee"></button></li>
                    <li><button className="thumb-char-hornbill" data-toggle="modal" data-target="#hornbills"></button></li>
                    <li><button className="thumb-char-otter" data-toggle="modal" data-target="#bob"></button></li>
                    <li><button className="thumb-char-chameleon" data-toggle="modal" data-target="#bisou"></button></li>
                    <li><button className="thumb-char-sloth" data-toggle="modal" data-target="#slip"></button></li>
                </ul>
			    <p className="text-center"><a className="scrollpg" href="#gallery"><img src={IconDown} width="64" className="animated infinite btnDown" alt="" /></a></p>
		    </div>
          
		    <div className="modal fade" id="bisou" tabindex="-1" role="dialog" aria-hidden="true">
			    <div className="modal-dialog" role="document">
				    <div className="modal-content">
					    <div className="crew bisou">
						    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						    <div className="row">
							    <div className="col-md-6">
								    <img src={ImgBisuo} alt="bisou" />
							    </div>
							    <div className="col-md-6 text-left">
                                    <h2>PASSION</h2>
                                    <p><strong>Bisou-Bisou</strong> is known for his Parisian charm and fiery personality. He always wears his heart on his sleeve, changing colours to reflect his inner emotions.</p>
                                    <p className="facts"><strong>Meaning behind the name:</strong> ‘Bisou’ means ‘kiss’ in French, like how Bisou-Bisou sends kisses across the forest with his long tongue.</p>
							    </div>
						    </div>
					    </div>
				    </div>
			    </div>
		    </div>
		  {/* 
		  <div className="modal fade" id="bob" tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog" role="document">
				  <div className="modal-content">
					  <div className="crew bob">
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <div className="row">
							  <div className="col-md-6">
								  <img src="images/img-personality-bob.jpg" alt="bob">
							  </div>
							  <div className="col-md-6 text-left">
								  <h2>PLAYFULNESS</h2>
								  <p>Joyful and chatty, <strong>Bob</strong> loves making speeches and being the center of attention. He is a natural leader and always knows how to make a mission fun.</p>
								  <p className="facts"><strong>Meaning behind the name:</strong> Bob likes to bob around in the rivers and streams, frolicking in the water just for fun.</p>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  
		  <div className="modal fade" id="hornbills" tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog" role="document">
				  <div className="modal-content">
					  <div className="crew hornbills">
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <div className="row">
							  <div className="col-md-6">
								  <img src="images/img-personality-hornbills.jpg" alt="casquette">
							  </div>
							  <div className="col-md-6 text-left">
								  <h2>TEAMWORK</h2>
								  <p>A charming dynamic duo, <strong>Casquette &amp; Colette</strong> love haute couture and getting their hands dirty on building projects. </p>
								  <p className="facts"><strong>Meaning behind the name:</strong> Casquette is named after his casque, the hollow crest on the beaks of many hornbills.</p>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  
		  <div className="modal fade" id="maya" tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog" role="document">
				  <div className="modal-content">
					  <div className="crew maya">
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <div className="row">
							  <div className="col-md-6">
								  <img src="images/img-personality-maya.jpg" alt="maya">
							  </div>
							  <div className="col-md-6 text-left">
								  <h2>CREATIVITY</h2>
								  <p><strong>Maya</strong> understands the balance between the rainforest, the animal inhabitants, and humans. She is a source of wisdom as the crew strive to live by their motto, “We Are One.”</p>
								  <p className="facts"><strong>Meaning behind the name:</strong> In Hinduism, ‘Maya’ represents the natural power of the universe, echoing her role as the nurturer of the rainforest.</p>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  
		  <div className="modal fade" id="poncho" tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog" role="document">
				  <div className="modal-content">
					  <div className="crew poncho">
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <div className="row">
							  <div className="col-md-6">
								  <img src="images/img-personality-poncho.jpg" alt="poncho">
							  </div>
							  <div className="col-md-6 text-left">
								  <h2>GENEROSITY</h2>
								  <p>A fast-flying acrobatic spaz, <strong>Poncho</strong> loves to show off loop-de-loops and always wants an audience for his daredevil tricks.</p>
								  <p className="facts"><strong>Meaning behind the name:</strong> When Poncho spreads his wings and flies, his wing membranes fan out like a poncho.</p>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  
		  <div className="modal fade" id="slip" tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog" role="document">
				  <div className="modal-content">
					  <div className="crew slip">
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <div className="row">
							  <div className="col-md-6">
								  <img src="images/img-personality-slip.jpg" alt="slip">
							  </div>
							  <div className="col-md-6 text-left">
								  <h2>PATIENCE</h2>
								  <p>Happy and relaxed, <strong>Slip</strong> is always a few minutes behind the action but somehow right on time. This crew member is often found meditating in a yoga pose.</p>
								  <p className="facts"><strong>Meaning behind the name:</strong> Slip would literally slip into a state of trance when he meditates in a yoga pose.</p>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  
		  <div className="modal fade" id="tairee" tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog" role="document">
				  <div className="modal-content">
					  <div className="crew tairee">
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <div className="row">
							  <div className="col-md-6">
								  <img src="images/img-personality-tairee.jpg" alt="tairee">
							  </div>
							  <div className="col-md-6 text-left">
								  <h2>COURAGE</h2>
								  <p><strong>Tairee</strong> wears his stripes proudly. He is adventurous and loves to surprise the other crew members by sneaking up on them.</p>
								  <p className="facts"><strong>Meaning behind the name:</strong> ‘Tairee’ comes from ‘Tairiyam’ which means ‘courage’ in Tamil, highlighting the virtue that he embodies.</p>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		  
		  <div className="modal fade" id="waja" tabindex="-1" role="dialog" aria-hidden="true">
			  <div className="modal-dialog" role="document">
				  <div className="modal-content">
					  <div className="crew waja">
						  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						  <div className="row">
							  <div className="col-md-6">
								  <img src="images/img-personality-waja.jpg" alt="waja">
							  </div>
							  <div className="col-md-6 text-left">
								  <h2>RESILIENCE</h2>
								  <p>A bit clumsy and shy, no matter how many times he falls down, <strong>Waja</strong> always gets up and tries again. He eats all day long and is a military history buff.</p>
								  <p className="facts"><strong>Meaning behind the name:</strong> ‘Waja’ means ‘steel’ in Javanese, alluding to his strong defensive armour.</p>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
		   */}
	    </section>
    )
}

export { Crew };