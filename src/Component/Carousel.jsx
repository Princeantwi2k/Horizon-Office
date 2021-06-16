import React, { Component } from "react";
import Pic2 from "../image/img1.jpg";
import Pic3 from "../image/img4.jpg";
import Pic4 from "../image/img5.jpg";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner carousel-me" role="listbox">
          <div className="item active">
            <img src={Pic2} className="dede" alt="bussiness" />
          </div>
          <div className="item">
            <img src={Pic3} className="dede" alt="bussiness" />
          </div>
          <div className="item">
            <img src={Pic4} className="dede" alt="bussiness" />
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
