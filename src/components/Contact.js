import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const form = useRef();
  const [inputText, setinputText] = useState('Send');
  const sendEmail = (e) => {
    e.preventDefault();
    setinputText("Sent");
    emailjs.sendForm('service_tus8ju8', 'template_aokaxqe', form.current, 'K6QzHPz5QtBSp5vsZ')
      .then((result) => {
          console.log(result.text);
         
          <div class="alert alert-success" role="alert">Message send asdhsfl</div>
          alert("Message sent successfully");
          e.target.reset();
        }, (error) => {
          console.log(error.text);
          alert(" Something went wrong, please try again later.");
         
      });
  };
  // const formInitialDetails = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // }
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  // const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     <div class="alert alert-success" role="alert">
//   A simple success alert—check it out!
// </div>
//     setButtonText("Sent");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code === 200) {
//       setStatus({ succes: true, message: 'Message sent successfully'});
//     } else {
//       setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     }
//   };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={sendEmail} ref={form}  >
                  <Row>
                     {/* <input type="text" value={formDetails.firstName} name="name" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> */}
                     <input type="text" placeholder=" Name"  name="user_name" />   
                    <Col size={12} sm={6} className="px-1">
                    </Col>
                   
                    {/* <input type="email" value={formDetails.email} name="email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} /> */}
                    <input type="email" name="user_email" placeholder="Email Address" />
                    <Col size={12} sm={6} className="px-1">
                    </Col>
                  
                    {/* <textarea rows="6" value={formDetails.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                    <textarea rows="6"  placeholder="Message" name="message" />
                    <Col size={12} className="px-1">
                      {/* <button type="submit"><span>{buttonText}</span></button> */}
                      
                      <input type="submit" value="Send" /> 

                      {/* // <input type="sumbit" value="Send" > <span>{buttonText}</span></input > */}

                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
