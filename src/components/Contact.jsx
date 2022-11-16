/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import '../resource/css/contact_style.css';
import { Form, Button } from 'react-bootstrap'
function Contact() {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setMobile] = useState("");
    const [feedback, setFeedback] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    var form = document.getElementById("sheetdb-form");
    const thankYouMessage = document.querySelector('#thank-you-message');
    const sumbitForm = (e) => {
        e.preventDefault();
        const newEntry = { name: name, email: email, mobile: mobile, feedback: feedback }
        setAllEntry([...allEntry, newEntry])
        console.log(newEntry)

        if (validateForm() === true) {

            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
            })

            thankYouMessage.classList.add('show');
            setTimeout(() => thankYouMessage.classList.remove('show'), 2000);

            // setTimeout(() => form.reset(), 2100);
            setName("");
            setemail("");
            setMobile("");
            setFeedback("");
        }
    }
    function validateForm() {
        console.log(1);
        const errorMessage = document.querySelector('#error-message');
        var x = document.forms["myForm"]["data[name]"].value;
        var y = document.forms["myForm"]["data[email]"].value;
        var z = document.forms["myForm"]["data[mobile]"].value;
        var zx = document.forms["myForm"]["data[feedback]"].value;
        if (x === "" || x == null) {
            errorMessage.innerHTML = "Name cannot be Empty";
            errorMessage.classList.add('show');
            setTimeout(() => errorMessage.classList.remove('show'), 2000);
            document.forms["myForm"]["data[name]"].focus();
            return false;
        }
        if (y === "" || y == null) {
            errorMessage.innerHTML = "Email cannot be Empty";
            errorMessage.classList.add('show');
            setTimeout(() => errorMessage.classList.remove('show'), 2000);
            document.forms["myForm"]["data[email]"].focus();
            return false;
        }
        if (z === "" || z == null) {
            errorMessage.innerHTML = "Mobile Number cannot be Empty";
            errorMessage.classList.add('show');
            setTimeout(() => errorMessage.classList.remove('show'), 2000);
            document.forms["myForm"]["data[mobile]"].focus();
            return false;
        }
        if (zx === "" || zx == null) {
            errorMessage.innerHTML = "Message cannot be Empty";
            errorMessage.classList.add('show');
            setTimeout(() => errorMessage.classList.remove('show'), 2000);
            document.forms["myForm"]["data[feedback]"].focus();
            return false;
        }
        else {

            return true;
        }
    }
    return (
        <>
            <section className="row row-content bg-form">
                <div className="container contact_container">
                    <div className="contact_form mt-4 mb-3">
                        <div className="col-12 mb-5">
                            <h2>Contact-Us</h2>
                        </div>
                        <div className="col-12 ">
                            <Form name="myForm" action="https://sheetdb.io/api/v1/gszavpxnm4xu4" onSubmit={sumbitForm} method="post" id="sheetdb-form" required>
                                <Form.Group className="form-group row">
                                    <Form.Label htmlFor="name" className="col-md-2 col-form-label">Name</Form.Label>
                                    <div className="col-md-10">
                                        <Form.Control type="text" className="form-control" value={name} id="name" name="data[name]" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="form-group row">
                                    <Form.Label htmlFor="email" className="col-md-2 col-form-label">Email</Form.Label>
                                    <div className="col-md-10">
                                        <Form.Control type="text" className="form-control" value={email} id="email" name="data[email]"
                                            placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="form-group row">
                                    <Form.Label htmlFor="mobile" className="col-12 col-md-2 col-form-label" pattern="[0-9]{10}">Mobile
                                        number</Form.Label>
                                    <div className="col-md-10">
                                        <Form.Control type="tel" className="form-control" value={mobile} id="mobile" name="data[mobile]"
                                            placeholder="Mobile number" onChange={(e) => setMobile(e.target.value)} />
                                    </div>
                                </Form.Group>
                                <Form.Group className="form-group row" style={{ display: "none" }}>
                                    <Form.Label htmlFor="date_posted" className="col-12 col-md-2 col-form-label"
                                        pattern="[0-9]{10}">date_posted</Form.Label>
                                    <div className="col-md-10">
                                        <Form.Control type="text" defaultValue={currentDate} className="form-control" id="date_posted" name="data[date_posted]" />
                                    </div>
                                </Form.Group>
                                <div className="col-12 pl-0">
                                    <Form.Group className="form-group row">
                                        <Form.Label htmlFor="feedback" className="col-md-2 col-form-label">Your Feedback</Form.Label>
                                        <div className="col-md-6">
                                            <textarea className="form-control" name="data[feedback]" value={feedback} id="feedback" cols="10"
                                                rows="5" onChange={(e) => setFeedback(e.target.value)}></textarea>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="form-group row">
                                        <div className="offset col-md-10">
                                            <Button type="submit" name="message" className="btn btn-blue mt-2 send_btn" >Submit</Button>
                                        </div>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>
                        <p id="thank-you-message">
                            Thank you for contacting us. We will be in touch with you very soon.
                        </p>
                        <p id="error-message">
                            cannot be Empty!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );

}
export default Contact;