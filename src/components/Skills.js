import meter1 from "../assets/img/python.png";
import meter2 from "../assets/img/nodejs.png";
import meter3 from "../assets/img/mongo.png";
import meter4 from "../assets/img/react.png";
import meter5 from "../assets/img/mysql.png";
import meter6 from "../assets/img/num.jpg";
import meter7 from "../assets/img/tailwindcss.png";
import meter8 from "../assets/img/p.jpg";
import meter9 from "../assets/img/css3.png";
import meter10 from "../assets/img/javascript.png";
import meter11 from "../assets/img/bootstrap.png";
import meter12 from "../assets/img/c.png";

import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
 

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>These are the skills which i have learned by hammering each of it one by one<br></br>The progarmming Languages and several Softwares that i have learned  .</p>
              
              <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      <img className="simg img-fluid"  src={meter1} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter2} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter3} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter4} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter5} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter6} alt="Image" />
    </div>
    
  </div>
   <br />
   
  <div class="row align-items-end">
    <div class="col">
      <img className="simg img-fluid"  src={meter7} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter8} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter9} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter10} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter11} alt="Image" />
    </div>
    <div class="col">
      <img className="simg img-fluid"  src={meter12} alt="Image" />
    </div>
  </div>
</div>
             
             
             
             
             
             
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
