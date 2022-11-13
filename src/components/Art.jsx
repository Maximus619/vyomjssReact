/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import '../resource/css/art.css';
import Img4 from '../resource/images/Instagram/art4.png';
import Img5 from '../resource/images/Instagram/art5.png';
import Img2 from '../resource/images/Instagram/Art2.png';
import Img1 from '../resource/images/Instagram/Art1.png';
import Img6 from '../resource/images/Instagram/art6.png';
import Img7 from '../resource/images/Instagram/art7.png';
import Img8 from '../resource/images/Instagram/art8.png';
import Img9 from '../resource/images/Instagram/art9.png';
import Img10 from '../resource/images/Instagram/art10.png';
import Img11 from '../resource/images/Instagram/art11.png';
import Img12 from '../resource/images/Instagram/art12.png';
import Img13 from '../resource/images/Instagram/art13.png';
function Art() {
    return (
        <>
            <div>
                <div className="gallery art_container_column">
                    <div className="gallery__column">
                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img4} alt="Portrait by Prakhar" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Prakhar</figcaption>
                            </figure>
                        </a>

                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img5} height="350px" alt="Portrait by Swati" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Swati</figcaption>
                            </figure>
                        </a>

                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img2} alt="Portrait by Ritu" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Ritu</figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="gallery__column">
                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img1} alt="Portrait by Ritu" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Ritu</figcaption>
                            </figure>
                        </a>

                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img6} height="373px" alt="Portrait by Swarnima"
                                    className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Swarnima</figcaption>
                            </figure>
                        </a>

                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img7} height="280px" alt="Portrait by Rudrakshi"
                                    className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Rudrakshi</figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="gallery__column ">
                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img8} alt="Portrait by BhagyaShree" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by BhagyaShree</figcaption>
                            </figure>
                        </a>

                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img9} alt="Portrait by Anamika" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Anamika</figcaption>
                            </figure>
                        </a>

                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img11} height="313px" alt="Portrait by Aditya" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Aditya</figcaption>
                            </figure>
                        </a>
                    </div>

                    <div className="gallery__column">
                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img10} alt="Portrait by Aditya" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Aditya</figcaption>
                            </figure>
                        </a>

                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img12} height="334px" alt="Portrait by Harshita"
                                    className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Harshita</figcaption>
                            </figure>
                        </a>

                        <a className="gallery__link">
                            <figure className="gallery__thumb">
                                <img src={Img13} alt="Portrait by Harshita" className="gallery__image" />
                                <figcaption className="gallery__caption">Portrait by Harshita</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Art