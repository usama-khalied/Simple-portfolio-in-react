import React , { Component } from 'react'
import ClientCss from './Client.module.css'

import Slider from "react-slick";

export default class SimpleSlider extends Component{
    render () {
        const settings = {
          dots: true,
          
          infinite: false,
          speed: 500,
          autoplay : true,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    return (
<div>
<section className={`${ClientCss.Testi}`}>
<div className={`${ClientCss.studytext}`}>
                    <h1> Clients Opinion</h1>
                    <small> </small>
                </div>
                <div>
      
        <Slider className={`${ClientCss.slider}`} {...settings}>
          <div>
            <h3>1</h3>
            <h3>1</h3>
            <h3>1</h3>
            <h3>1</h3>

          </div>
          <div>
            <h3>2</h3>
            <h3>2</h3>
            <h3>2</h3>
            <h3>2</h3>

          </div>
         
        </Slider>
      </div>

</section>

</div>
    );
}
}