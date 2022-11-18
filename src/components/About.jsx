import React from 'react'
import '../resource/css/aboutus.css';
import Abouts from '../about.json';
// import Principal from '../resource/images/principal.jpg';
// import Dean from '../resource/images/jagdish.jpeg';
// import SW from '../resource/images/prashant.jpeg';
// import HOD from '../resource/images/roli1.jpeg';

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

                        <p>व्योम एक "हिंदी साहित्य एवं कला संगठन" है ,जो हिंदी के  स्वर्णिम विरासत को जीवंत बनाए रखने में पूर्णतः समर्पित है।

                            आज के समय में वैश्वीकरण के कारण विदेशी भाषाओं का प्रचलन बढ़ गया है। कदाचित इसी कारण से कई भारतीय भाषाओं का अस्तित्व संकट में है। हिंदी भी इससे अछूती नहीं है। जनमानस में अब भी उपनिवेशी मनोवृत्ति वाले काफी लोग हैं जिन्हें हिंदी भाषा को अपनाने में हीन भावना महसूस होती है। ऐसे में महती आवश्यकता है ऐसे संस्थानों की,जो हिंदी को न सिर्फ बढ़ावा दें अपितु हिंदी को गर्व से अपनाएं।<br />
                            व्योम का हिंदी की सेवा में योगदान ठीक उसी प्रकार है, जिस प्रकार राम सेतु के निर्माण हेतु योगदान, एक गिलहरी ने दिया था। गिलहरी अपने शरीर पर मिट्टी लगाती है और उसको पुल पर झाड़ कर आती है । श्री राम जी ने इस घटना को उदाहरण स्वरूप प्रस्तुत करते हुए कहा कि आपका कार्य कितना भी छोटा क्यों ना हो अपितु मायने ये रखता है कि आप कितने पवित्र मन से किसी कार्य को करते हैं । इसी प्रकार अपनी मातृभाषा के प्रति  हमारा योगदान छोटा हो सकता है परंतु हमारा इरादा अटल और नियत साफ है ।
                            व्योम का लक्ष्य हिंदी को उसकी असीम त्रिभंगिमा तक पहुंचाना एवं इसकी अस्मिता को बरकरार रखते हुए सामाजिक चेतना को जगाना है।<br />
                            "व्योम " की स्थापना वर्ष 2018 में अमित रंजन यादव "यादवेंद्र" जी द्वारा की गई थी। उन्होंने अपने मित्रों के साथ जिस बीज का रोपण किया था, अंकुरण के उपरांत आज एक वृक्ष बन चुका है।
                            अपने उत्कृष्ट कार्यक्रमों के चलते व्योम ने न केवल विद्यालय परिसर में अपितु दिल्ली एन सी आर में भी एक विशेष स्थान बना लिया है।</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            Abouts.map(abouts => {
                                return <div className='row'>
                                    <hr className="hr-text" data-content={abouts.heading} />
                                    {abouts.col.map(cols => {
                                        return <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={abouts.id}>
                                            <div className="our-team">
                                                <div className="picture">
                                                    <img className="img-fluid" loading='lazy' src={cols.icon} alt="" />
                                                </div>
                                                <div className="team-content">
                                                    <h3 className="name">{cols.name}</h3>
                                                    <h4 className="title">{cols.role}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            })
                        }

                        {/* <div className="col-12 col-sm-6 col-md-4 col-lg-3">
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
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );

}
export default About;