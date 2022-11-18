import { React } from 'react';
import Carousel1 from '../resource/assests/images/carousel1.png';
import Carousel2 from '../resource/assests/images/carousel2.png';
import Carousel3 from '../resource/assests/images/carousel3.png';
import OpVideo from '../resource/op1.mp4'
import { Carousel } from 'react-bootstrap';
import { DefaultPlayer as Video } from 'react-html5video';
import '../resource/css/html5video/styles.css';
function Home() {
    return (
        <>
            <div>
                <section>
                    <div className="container home mb-2">
                        व्योम जे.एस.एस. नोएडा की आधिकारिक हिंदी साहित्य सोसाइटी है। व्योम का मुख्य उद्देश्य कॉलेज परिसर में हिंदी भाषा और साहित्य के लिए जागरूकता और रुचि फैलाना है। परिसर में होने वाले सभी हिंदी साहित्यिक कार्यक्रम हमारे द्वारा आयोजित किए जाते हैं। <br />
                        आजकल के समय में वैश्वीकरण के कारण अंग्रेज़ी भाषा का प्रचलन बढ़ गया है। कदाचित इसी कारण से कई भारतीय भाषाओं का अस्तित्व संकट में है। हिंदी भी इससे अछूती नहीं है। जनमानस में अब भी उपनिवेशी मनोवृत्ति वाले काफी लोग हैं जिन्हें हिंदी भाषा को अपनाने में हीन भावना महसूस होती है। ऐसे में महती आवश्यकता है ऐसे संस्थानों की,जो हिंदी को न सिर्फ बढ़ावा दें अपितु हिंदी को गर्व से अपनाएं।
                    </div>
                </section>
                <section className='mr-5 ml-5'>
                    <Video>
                        <source src={OpVideo} type='video/webm' />
                    </Video>
                </section>
                <hr />
                <section className="header_carousel_container">
                    <Carousel>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carousel1}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carousel2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Carousel3}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                    </Carousel>
                </section>


            </div>

        </>
    );

}
export default Home;