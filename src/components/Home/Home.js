import React, { Component } from 'react'
import {Carousel, CarouselInner, CarouselItem, View, Mask} from 'mdbreact';
import './Home.css';
export default class Home extends Component {
  render() {
    return (
      <div className="main-container">
      <div id="img-container">
        <Carousel activeItem={1} length={5} showControls={false} showIndicators={false} className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="home-img" src="https://static.wixstatic.com/media/bad424_607c47a422494000ba41ab35fbbd549a~mv2_d_4000_5418_s_4_2.jpg/v1/fill/w_508,h_684,al_c,q_80,usm_0.66_1.00_0.01/gmrt.webp" alt="First slide" />
                <Mask overlay="black-light" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="home-img" src="https://static.wixstatic.com/media/bad424_732a33370d024dd6a8f00cbba3d60737~mv2_d_4000_5418_s_4_2.jpg/v1/fill/w_509,h_684,al_c,q_80,usm_0.66_1.00_0.01/gmrt.webp" alt="Second slide" />
                <Mask overlay="black-strong" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="home-img" src="https://static.wixstatic.com/media/bad424_a29879409de24968bd0a37e4b22069af~mv2_d_4000_5418_s_4_2.jpg/v1/fill/w_233,h_315,al_c,q_80,usm_0.66_1.00_0.01/bad424_a29879409de24968bd0a37e4b22069af~mv2_d_4000_5418_s_4_2.webp" alt="Third slide" />
                <Mask overlay="black-strong" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="home-img" src="https://static.wixstatic.com/media/bad424_d4d5997293434d288e0fcdc32963f1aa~mv2_d_4016_6016_s_4_2.jpg/v1/fill/w_242,h_363,al_c,q_80,usm_0.66_1.00_0.01/bad424_d4d5997293434d288e0fcdc32963f1aa~mv2_d_4016_6016_s_4_2.webp" alt="Fourth slide" />
                <Mask overlay="black-strong" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="5">
              <View>
                <img className="home-img" src="https://static.wixstatic.com/media/bad424_e02bd9692bf64092822109b7b1d9af90~mv2_d_2667_4000_s_4_2.jpg/v1/fill/w_257,h_385,al_c,q_80,usm_0.66_1.00_0.01/bad424_e02bd9692bf64092822109b7b1d9af90~mv2_d_2667_4000_s_4_2.webp" alt="Fifth slide" />
                <Mask overlay="black-strong" />
              </View>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
        <div className="main-body">
          <div className="revival-img">
            <img id="revival-img" src="https://static.wixstatic.com/media/bad424_bf7ebf1b01d3446eb46347da37f084f8~mv2_d_1250_1250_s_2.jpg/v1/fill/w_122,h_122,al_c,q_80,usm_0.66_1.00_0.01/gmrt.webp" alt="revival" />
          </div>
          <div id="revival-text">
            <h1>Revival Collection</h1>
            <h3>Jan 7th. 8PM MT.</h3>
          </div>
        </div>
        </div>
    </div>
    )
  }
}
