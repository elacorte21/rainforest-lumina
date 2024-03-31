import { Link } from "react-router-dom";
import IconContact from '../assets/images/icon-contact.png';

const NoMatch = () => {

    return(
        <section id="contact" className="target contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={IconContact} className="icon-characters wow slideInDown" data-wow-duration="1s" alt="" />
                        <h2 className="wow fadeInUp" data-wow-delay="0.5s">404 Page</h2>
                        <p><Link to="/">Go to the home page</Link></p>
                        <p>&nbsp;</p>
                    </div>
                </div>  
            </div>
        </section>
    )
}

export { NoMatch };