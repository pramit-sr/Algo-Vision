import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../Navbar';
import '../App.css'; 
function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AlgoVision</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <a href="#logo" class ="logo"><i class='bx bxs-home'></i>AlgoVision</a>
      {/* header */}
      {/* <header>
        <a href="#" className="logo">
          <i className="bx bxs-home"></i>AlgoVision
        </a>
        <ul className="navlist">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#Us">Contact Us</a></li>
        </ul>
        <div className="nav-icons">
          <a href="#"><i className="bx bx-search"></i></a>
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </header> */}
      <Navbar/>
      {/* Home */}
      <section className="home" id="home">
        <div className="home-text">
          <h1>
            Show, <span>Visualize &</span> <br />  Enjoy the Algorithm,<br /> Visit Us
          </h1>
          <a href="#Home" className="button1">
            Explore Algorithm <i className="bx bxs-right-arrow"></i>
          </a>
        </div>
        <div className="home-img">
        {/* putting img */}
        </div>
      </section>
    </>
  );
}

export default Home;
