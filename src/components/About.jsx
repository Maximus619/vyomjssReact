import React from 'react'
import '../resource/css/aboutus.css';
import Principal from '../resource/images/principal.jpg';
import Dean from '../resource/images/jagdish.jpeg';
import SW from '../resource/images/prashant.jpeg';
import HOD from '../resource/images/roli1.jpeg';

function About() {
    return (
        <>
            <section className="container mb-2">
                {/* <!-- <div className="sample-header">
                    <div className="sample-header-section text-center">
                        <h1>About Usवैश्वीकरण का एक दुखद दुष्प्रभाव स्थानीय भाषाओं के लिए धीरे-धीरे कटऑफ और कम महत्व रहा है, खासकर नोएडा जैसे
                            शहरी क्षेत्रों में। तब किसी की संस्कृति को धारण करना अधिक से अधिक महत्वपूर्ण हो जाता है। व्योम सभी चीजों
                            का जश्न मनाता है भारतीय और फिर कुछ। वास्तव में, अधिकांश गतिविधियाँ प्रतिभागियों की उल्लेखनीय परिपक्वता
                            और शानदार सोच को दर्शाती हैं। मेरी कलाम से (कविता प्रतियोगिता) जैसे अन्य मनोरंजक कार्यक्रमों के साथ,
                            व्योम ने जेएसएस में अपने लिए एक विशेष स्थान बनाया है।</h1>
                        <h2></h2>
                    </div>
                </div> --> */}
                <div className="sample-section-wrap">
                    <div className="sample-section text-justify">
                        <p>आजकल के समय में वैश्वीकरण के कारण अंग्रेज़ी भाषा का प्रचलन बढ़ गया है। कदाचित इसी कारण से कई भारतीय भाषाओं का अस्तित्व संकट में है। हिंदी भी इससे अछूती नहीं है। जनमानस में अब भी उपनिवेशी मनोवृत्ति वाले काफी लोग हैं जिन्हें हिंदी भाषा को अपनाने में हीन भावना महसूस होती है। ऐसे में महती आवश्यकता है ऐसे संस्थानों की,जो हिंदी को न सिर्फ बढ़ावा दें अपितु हिंदी को गर्व से अपनाएं। <br />
                            "व्योम" की संस्थापना वर्ष 2018 में इसी उद्देश्य से की गई थी। चार वर्ष पूर्व जिस बीज का रोपण किया गया था, वह अंकुरण के उपरांत आज एक वृक्ष बन चुका है। अपने उत्कृष्ट कार्यक्रमों के चलते व्योम ने कॉलेज परिसर में अपने लिए एक विशेष स्थान बना लिया है।</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={Principal} alt="" />
                                </div>
                                <div className="team-content">
                                    <h3 className="name">Dr. Gurulingappa M Patil</h3>
                                    <h4 className="title">Principal</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={Dean} alt="" />
                                </div>
                                <div className="team-content">
                                    <h3 className="name">Dr. Jagadish Rampur Shivanna</h3>
                                    <h4 className="title">Dean Academics & Chief Warden</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={SW} alt="" />
                                </div>
                                <div className="team-content">
                                    <h3 className="name">Dr. Prashant Chauhan</h3>
                                    <h4 className="title">Dean Student Welfare</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="our-team">
                                <div className="picture">
                                    <img className="img-fluid" src={HOD} alt="" />
                                </div>
                                <div className="team-content">
                                    <h3 className="name">Dr. Roli Verma</h3>
                                    <h4 className="title">HOD (Chemistry) & Cultural Head </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}
export default About;