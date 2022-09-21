import React, { Component } from 'react'
import "./style.css"
export default class Header extends Component {
  render() {
    return (
      <>
        <div className="container-fluid  home_pic1 p-0 m-0 d-flex justify-content-center flex-column" id='Home'>
          <div className="col-lg-10 px-3 p-0 m-0">
            <h1 className='text-white home_head2 px-5 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" ' data-aos="fade-left">IT'S <span className='head1'>GYM</span>  TIME. LET'S GO</h1>
          </div>
          <div className="col-lg-10 px-3">
            <h1 className='text-white home_head2 px-5 ' data-aos="fade-right">WE ARE Not READY TO <span className='head1'> FIT YOU</span></h1>
          </div>
        </div>
      </>
    )
  }
}