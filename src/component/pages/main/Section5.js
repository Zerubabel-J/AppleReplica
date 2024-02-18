import React from 'react'
import vision from "../../resources/icon/vision_pro__logo2.png";
function Section5() {
  return (
    <div>
        <section className="section5-AirPods commen-lernBuy my-5 mx-3">
      <div className="row">
        <div className="col-md-6">
          <div className="left-side mb-3 mb-md-0">
            <div className="AirPods-Pro">
              <p>AirPods Pro</p>
            </div>
            <div className="description-magic">
              <p>Adaptive Audio. Now playing.</p>
            </div>
            <div className="Available">
              <p>Available starting 9.22</p>
            </div>
            <div className="learn-buy">
              <ul>
                <li><a href="#">Learn more</a></li>
                <li><a href="#"> Buy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side">
            <div className="vision-pro">
              <div className="tv-logo">
                <img
                  src={vision}
                  alt="vision pro logo"
                />
              </div>
              <div className="">
                <h4>Welcome to the era of spatial computing.</h4>
              </div>
              <div className="Available">
                <p>Available early next year in the U.S.</p>
              </div>
              <div className="learn-buy">
                <ul>
                  <li><a href="#">Learn more</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>    
      
    </section>
    </div>
  )
}

export default Section5