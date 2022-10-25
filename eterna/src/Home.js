import React from "react";
import Header from "./Header";
import Topbar from "./Topbar";
import "./style.css";
import Footer from "./Footer";
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";
import client5 from "./assets/client-5.png";
import client6 from "./assets/client-6.png";
import client7 from "./assets/client-7.png";
import client8 from "./assets/client-8.png";
import aboutImage from "./assets/about.jpg";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  function readMoreClicked() {
    alert("Read More Clicked");
  }
  return (
    <>
      <Topbar />
      <Header />

      <main id="main">
        <br />
        <section id="featured" class="featured">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="icon-box">
                  <i class="bi bi-card-checklist"></i>
                  <h3>
                    <a href="">Lorem Ipsum</a>
                  </h3>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="icon-box">
                  <i class="bi bi-bar-chart"></i>
                  <h3>
                    <a href="">Dolor Sitema</a>
                  </h3>
                  <p>
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>
              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="icon-box">
                  <i class="bi bi-binoculars"></i>
                  <h3>
                    <a href="">Sed ut perspiciatis</a>
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <img src={aboutImage} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 content">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
                <button
                  onClick={readMoreClicked}
                  className="btn-get-started animate__animated animate__fadeInUp"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="services">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bxl-dribbble"></i>
                  </div>
                  <h4>
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-file"></i>
                  </div>
                  <h4>
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-tachometer"></i>
                  </div>
                  <h4>
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-world"></i>
                  </div>
                  <h4>
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-slideshow"></i>
                  </div>
                  <h4>
                    <a href="">Dele cardo</a>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-arch"></i>
                  </div>
                  <h4>
                    <a href="">Divera don</a>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" class="clients">
          <div class="container">
            <div class="section-title">
              <h2>Clients</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="clients-slider swiper">
              <div class="swiper-wrapper align-items-center">
                <div class="swiper-slide">
                  <img src={client1} class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src={client2} class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src={client3} class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src={client4} class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src={client5} class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src={client6} class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src={client7} class="img-fluid" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src={client8} class="img-fluid" alt="" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
