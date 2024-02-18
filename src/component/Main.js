import React from "react";
import watch from "../resources/icon/watch_series_9.png";
import watch2 from "../resources/icon/watch_ultra2_logo.png";
import natural from "../resources/icon/carbon_neutral__logo.png";
import vision from "../resources/icon/vision_pro__logo2.png";
import card from "../resources/icon/card_logo.png";
import traid from "../resources/icon/tradein_logo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import slide0 from "../resources/slide/slide0.jpg"
// import slide1 from "../resources/slide/slide1.jpg"
// import slide2 from "../resources/slide/slide2.jpg"
// import slide3 from "../resources/slide/slide3.jpg"
// import slide4 from "../resources/slide/slide4.jpg"
// import slide5 from "../resources/slide/slide5.jpg"
import Youtube from "./pages/youtube/Youtube";
import Slide from "./Slide";

function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section className="first-content top-100">
        <div className="internal-contener2">
          <p>
            Save on Mac or iPad with education pricing and get a gift card up to
            $150. Gift card offer ends October 2.<a href="">'shop Now'</a>
          </p>
        </div>
      </section>

      <section className="section1-iPhone15Pro commen-lernBuy commen-iphone15">
        <div className="container-fluid">
          <div className="iPhone15-pro">
            <p>iPhone 15 Pro</p>
          </div>
          <div className="Titanium">
            <p>Titanium. So strong. So light. So Pro.</p>
          </div>
          <div className="Available">
            <p>Available starting 9.22</p>
          </div>
          <div className="learn-buy">
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#"> Pre-Order</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section2-iPhone15 commen-iphone15">
        <div className="internal-contener">
          <div className="iPhone15-pro">
            <p>iPhone 15</p>
          </div>
          <div className="Titanium">
            <p>New camera. New design. Newphoria.</p>
          </div>
          <div className="Available">
            <p>Available starting 9.22</p>
          </div>
          <div className="learn-buy">
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#"> Pre-Order</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section3-smartWatch commen-iphone15 commen-lernBuy">
        <div className="internal-contener">
          <div className="iPhone15-pro">
            <img src={watch} alt="" />
          </div>
          <div className="Titanium">
            <p>Smarter. Brighter. Mightier.</p>
          </div>
          <div className="Available">
            <p>Available starting 9.22</p>
          </div>
          <div className="learn-buy">
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Order Now</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section4-watchUltra my-5 mx-3">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="left-side">
              <div className="watch-logo">
                <img src={watch2} alt="Watch Ultra-2" />
              </div>
              <div className="Titanium">
                <p>Next level adventure.</p>
              </div>
              <div className="Available">
                <p>Available starting 9.22</p>
              </div>
              <div className="learn-buy">
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#">Order Now</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6">
            <div className="right-side">
              <div className="watch-logo">
                <img src={natural} alt="Carbon Nutural" />
              </div>
              <div className="desc-first">
                <p>A first for Apple Watch.</p>
                <p>And Apple.</p>
              </div>
              <div className="order-online">
                <ul>
                  <li className="learn-pro">
                    <a href="#">Learn more</a>
                  </li>
                  <li className="watch-film">
                    <a href="#">
                      Watch the film{" "}
                      <i className="fa-regular fa-circle-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#"> Buy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-side">
              <div className="vision-pro">
                <div className="tv-logo">
                  <img src={vision} alt="vision pro logo" />
                </div>
                <div className="">
                  <h4>Welcome to the era of spatial computing.</h4>
                </div>
                <div className="Available">
                  <p>Available early next year in the U.S.</p>
                </div>
                <div className="learn-buy">
                  <ul>
                    <li>
                      <a href="#">Learn more</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section6-cardTrade  my-5 mx-3">
        <div className="row">
          <div className="col-md-6">
            <div className="left-side mb-5 mb-md-0">
              <div className="">
                <img src={card} alt="Card Logo" />
              </div>
              <div>
                <p>
                  Get up to 3% Daily Cash back <br />
                  with every purchase.
                </p>
              </div>
              <div className="learn-buy">
                <ul>
                  <li>
                    <a href="#">Learn more</a>
                  </li>
                  <li>
                    <a href="#"> Apple Now</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-side">
              <div className="iphone11New">
                <img src={traid} />
              </div>
              <div>
                <h5>
                  Get $200-$650 in credit when <br />
                  you trade in iPhone 11 or higher<sup>2</sup>.
                </h5>
              </div>
              <div className="learn-buy">
                <ul>
                  <li>
                    <a href="#">See what your device is worth</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Youtube />
      <Slide />
    </div>
  );
}

export default Main;
