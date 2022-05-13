import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

export default class AutoPlay extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000
      };
      return (
        <div>
          <Slider {...settings}>
            <div>
                <ul className="slideItem">
                    <li className="slideImgitem">
                        <img src={ require('./images/slideImg1.jpg') } alt="슬라이드이미지1"/>
                    </li>
                    <li className="slideTextitem">
                        <h4>Discover, collect, and sell extraordinary NFTs</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Aenean euismod bibendum laoreet. Proin gravida dolor sit amet
                          lacus accumsan et viverra justo commodo.
                          Proin sodales pulvinar sic tempor.
                          Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br />
                          Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,<br />
                          sed rhoncus pronin sapien nunc accuan eget.
                        </p>
                    </li>
                </ul>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }