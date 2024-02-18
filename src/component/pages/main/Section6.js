import React from 'react'
import card from "../../resources/icon/card_logo.png"
import traid from "../../resources/icon/tradein_logo.png"

function Section6() {
  return (
    <div>
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
                <li><a href="#">Learn more</a></li>
                <li><a href="#"> Apple Now</a></li>
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
                <li><a href="#">See what your device is worth</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>  
    </section>
    </div>
  )
}

export default Section6