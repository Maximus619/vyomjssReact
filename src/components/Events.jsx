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
                        <img loading="lazy" src={Img1} className="image-fluid rounded float-left" height="350px"
                            alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2">
                        <div className="media-body">
                            <h2 className="mks mt-0">मेरी कलम से</h2>
                            <p className='cap'>इस प्रतियोगिता में हर उस व्यक्ति का स्वागत है जिसे लिखना पसंद हो। प्रतिभागी किसी भी विषय पर अपनी स्वरचित कविता, ग़ज़ल,लघु कहानी का पाठ कर सकते हैं। सर्वोत्तम रचना को आकर्षक नगद पुरस्कार प्रदान किए जाते हैं।</p>
                        </div>


                    </div>
                </div>

                <div className="row row-fluid mt-3">
                    <div className="col-md-6 col-sm-12 col-12 image">
                        <img loading="lazy" src={Img2} className="image-fluid rounded float-left" height="350px" alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2">
                        <div className="media-body">
                            <h2 className="neerja mt-0">नीरजा</h2>
                            <p className='cap'>दैवीय स्त्री ऊर्जा की स्मृति में व्योम हर साल अंतर्राष्ट्रीय महिला दिवस पर "नीरजा" कार्यक्रम आयोजन करता है। यह एक ओपन माइक इवेंट है जिसका मुख्य विषय नारीवाद है। मंच साझा करने के लिए सभी का स्वागत है।</p>
                        </div>

                    </div>
                </div>

                <div className="row row-fluid mt-3 mb-2">
                    <div className="col-md-6 col-sm-12 col-12 image">
                        <img loading="lazy" src={Img3} className="image-fluid rounded float-left" height="350px" alt="..." />
                    </div>
                    <div className="col-md-6 col-sm-12 mt-2">
                        <div className="media-body">
                            <h2 className="manthan mt-0">मंथन </h2>
                            <p className='cap'>ज्वलंत समसामयिक विषयों पर आयोजित हमारी वार्षिक वाद विवाद प्रतियोगिता। प्रतिभागियों का आंकलन उनकी तर्कशक्ति एवं  विषय की समझ के आधार पर किया जाता है।</p>
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
}
export default Events