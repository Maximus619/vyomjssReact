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
                        <h1>About Us</h1>
                        <h2></h2>
                    </div>
                </div> --> */}
                <div className="sample-section-wrap">
                    <div className="sample-section text-justify">
                        <p>वैश्वीकरण का एक दुखद दुष्प्रभाव स्थानीय भाषाओं के लिए धीरे-धीरे कटऑफ और कम महत्व रहा है, खासकर नोएडा जैसे
                            शहरी क्षेत्रों में। तब किसी की संस्कृति को धारण करना अधिक से अधिक महत्वपूर्ण हो जाता है। व्योम सभी चीजों
                            का जश्न मनाता है भारतीय और फिर कुछ। वास्तव में, अधिकांश गतिविधियाँ प्रतिभागियों की उल्लेखनीय परिपक्वता
                            और शानदार सोच को दर्शाती हैं। मेरी कलाम से (कविता प्रतियोगिता) जैसे अन्य मनोरंजक कार्यक्रमों के साथ,
                            व्योम ने जेएसएस में अपने लिए एक विशेष स्थान बनाया है।</p>
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