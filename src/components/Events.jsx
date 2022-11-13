/* eslint-disable react/style-prop-object */
import { React } from 'react';
import '../resource/css/event.css';
import Img1 from '../resource/images/meri_kalam_se.png';
import Img2 from '../resource/images/neerja1.png';
import Img3 from '../resource/images/neerja.png';
function Events() {
    return (
        <>
            <div className="container">

                <div className="row row-fluid mt-3">
                    <div className="col-md-6 col-sm-12 col-12 image">
                        <img src={Img1} className="image-fluid rounded float-left" height="350px"
                            alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2">
                        <div className="media-body">
                            <h2 className="mt-0">मेरी कलम से</h2>
                        </div>


                    </div>
                </div>

                <div className="row row-fluid mt-3">
                    <div className="col-md-6 col-sm-12 col-12 image">
                        <img src={Img2} className="image-fluid rounded float-left" height="350px" alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2">
                        <div className="media-body">
                            <h2 className="mt-0">नीरजा</h2>
                        </div>

                    </div>
                </div>

                <div className="row row-fluid mt-3 mb-2">
                    <div className="col-md-6 col-sm-12 col-12 image">
                        <img src={Img3} className="image-fluid rounded float-left" height="350px" alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2">
                        <div className="media-body">
                            <h2 className="mt-0">मंथन </h2>
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
}
export default Events