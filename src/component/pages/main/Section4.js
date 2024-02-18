import React from 'react'
import watch2 from "../../resources/icon/watch_ultra2_logo.png";
import natural from "../../resources/icon/carbon_neutral__logo.png";
function Section4() {
  return (
    <div>
          <section className="section4-watchUltra my-5 mx-3">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="left-side">
            <div className="watch-logo">
              <img
                src={watch2}
                alt="Watch Ultra-2"
              />
            </div>
            <div className="Titanium">
              <p>Next level adventure.</p>
            </div>
            <div className="Available">
              <p>Available starting 9.22</p>
            </div>
            <div className="learn-buy">
              <ul>
                <li><a href="#">Learn more</a></li>
                <li><a href="#">Order Now</a></li>
              </ul>
            </div>
          </div>
        </div>
      
      <div className="col-12 col-sm-12 col-md-6">
        <div className="right-side">
          <div className="watch-logo">
            <img
              src={natural}
              alt="Carbon Nutural"
            />
          </div>
          <div className="desc-first">
            <p>A first for Apple Watch.</p>
            <p>And Apple.</p>
          </div>
          <div className="order-online">
            <ul>
              <li className="learn-pro"><a href="#">Learn more</a></li>
              <li className="watch-film"><a href="#">Watch the film <i className="fa-regular fa-circle-play"></i></a></li>
            </ul>
          </div>
        </div>
      </div>     
    </div>
    </section>
    </div>
  )
}

export default Section4