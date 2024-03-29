import React from "react";
import Header from "./Header";
import Topbar from "./Topbar";
import "./style.css";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

const Contact = () => (
    <>
    <Topbar/>
    <Header/>
    <main id="main">

        <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">

            <ol>
            <li><a href="index.html">Home</a></li>
            <li>Contact</li>
            </ol>
            <h2>Contact</h2>

        </div>
        </section>

        <section id="contact" class="contact">
        <div class="container">

            <div class="row">
            <div class="col-lg-6">
                <div class="info-box mb-4">
                <i class="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                <i class="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="info-box  mb-4">
                <i class="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
                </div>
            </div>

            </div>

            <div class="row">

            <div class="col-lg-6">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                    <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                    </div>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div>

            </div>

        </div>
        </section>

    </main>
    <Footer/>
    </>
);

export default Contact;