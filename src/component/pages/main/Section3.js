import React from 'react'
import watch from "../../resources/icon/watch_series_9.png"
function Section3() {
  return (
    <div>
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
            <li><a href="#">Learn more</a></li>
            <li><a href="#">Order Now</a></li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Section3