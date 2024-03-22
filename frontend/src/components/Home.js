import React from 'react';
import { Link } from 'react-router-dom'
import HomeImage from '../images/home-img.png'
import Step1 from '../images/step-1.jpg'
import Step2 from '../images/step-2.jpg'
import Step3 from '../images/step-3.jpg'
import Step4 from '../images/step-4.jpg'
import loaderImg from '../images/loader.gif'
const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>FOOD MADE WITH LOVE</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!</p>
        </div>
        <div className="image">
          <img src= {HomeImage} alt="Home Image" />
        </div>
      </section>

      {/* Steps section */}
      <div className="step-container">
        <h1 className="heading">how it <span>works</span></h1>
        <section className="steps">
          <div className="box">
            <img src={Step1} alt="" />
            <h3>choose your favorite food</h3>
          </div>
          <div className="box">
            <img src={Step2} alt="" />
            <h3>free and fast delivery</h3>
          </div>
          <div className="box">
            <img src={Step3} alt="" />
            <h3>easy payments methods</h3>
          </div>
          <div className="box">
            <img src={Step4} alt="" />
            <h3>and finally, enjoy your food</h3>
          </div>
        </section>
      </div>
      {/* Scroll top button */}

      <a href="#home" className="fas fa-angle-up" id="scroll-top">Top</a>

      {/* Loader */}
      {/* <div className="loader-container">
        <img src={loaderImg} alt="" />
      </div> */}

      {/* External JS might still be referenced here if necessary for functionality not handled by React */}
    </div>
  );
}

export default Home;