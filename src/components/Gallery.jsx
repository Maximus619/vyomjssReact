/* eslint-disable react/style-prop-object */
import React from 'react';
import '../resource/css/gallery.css';
import TD from '../resource/images/gallery/td.jpg';
import TDRanu from '../resource/images/gallery/tdranu.jpg';
import opguruji from '../resource/images/gallery/opguruji.jpg';
import TDAmit from '../resource/images/gallery/tdamit.jpg';
import Img5 from '../resource/images/gallery/gallery5.png';

import TDRoli from '../resource/images/gallery/tdroli.jpg';
import oppublic from '../resource/images/gallery/oppublic.jpg';
import opashutosh from '../resource/images/gallery/opashutosh.jpg';
import opspeaker from '../resource/images/gallery/opspeaker.jpg';
import Img3 from '../resource/images/gallery/gallery3.png';

import akzmt from '../resource/images/gallery/akzmt.jpg';
import op19 from '../resource/images/gallery/op2019.jpg';
import tdap from '../resource/images/gallery/tdap.jpg';
import Img11 from '../resource/images/gallery/gallery11.png';
import Img1 from '../resource/images/gallery/gallery1.png';

import Img10 from '../resource/images/gallery/gallery10.png';
import opamit from '../resource/images/gallery/amitop.jpg';
import Img6 from '../resource/images/gallery/gallery6.png';
import Img15 from '../resource/images/gallery/gallery15.png';
import opshiva from '../resource/images/gallery/opshiva.jpg';

function Gallery() {
    return (
        <>
            <div className="row mb-1">
                <div className="column">
                    <img alt="" src={TD} />
                    <img alt="" src={TDRanu} />
                    <img alt="" src={opguruji} />
                    <img alt="" src={TDAmit} />
                    <img alt="" src={Img5} height="234px" />
                </div>
                <div className="column">
                    <img alt="" src={TDRoli} />
                    <img alt="" src={oppublic} />
                    <img alt="" src={opashutosh} />
                    <img alt="" src={opspeaker} />
                    <img alt="" src={Img3} height="210px" />

                </div>
                <div className="column">
                    <img alt="" src={akzmt} height="450px" />
                    <img alt="" src={op19} />
                    <img alt="" src={tdap} />
                    <img alt="" src={Img11} />
                    <img alt="" src={Img1} height="218px" />
                </div>
                <div className="column">
                    <img alt="" src={Img10} />
                    <img alt="" src={opamit} />
                    <img alt="" src={Img6} />
                    <img alt="" src={Img15} />
                    <img alt="" src={opshiva} height="258px" />
                </div>

            </div>
        </>
    );
}
export default Gallery