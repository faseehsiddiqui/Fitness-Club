import React, { Component } from 'react'
import "./style.css"
import {GoLocation} from "react-icons/go" 
import {MdCall,MdEmail} from "react-icons/md" 
import {FaFacebookF,FaLinkedinIn} from "react-icons/fa" 
import {AiOutlineSkype,AiOutlineYoutube} from "react-icons/ai" 
import {BsSkype} from "react-icons/bs" 
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid  footer">
            <div className="container  py-5">
                <div className="row ">
                    <div className="col-lg-6 d-flex py-5 flex-column justify-content-around" data-aos="fade-right">
                        <input type="text" placeholder='Enter Name' name="" id="" className='w-100 inp py-3 px-3' />
                        <input type="text" placeholder='Enter Email' name="" id="" className='w-100 inp py-3 mt-4 px-3' />
                        <input type="text" placeholder='Enter Mobile' name="" id="" className='w-100 inp py-3 mt-4 px-3' />
                        <textarea name="" id="" placeholder='Enter Message' cols="30" rows="10" className='w-100 inp mt-4  px-3' ></textarea>
                        <button className='text-white bg-danger w-25 py-2 mt-4 ' style={{fontWeight:"6600",border:"none"}}>Send Message</button>
                    </div>
                    <div className="col-lg-6  py-5" data-aos="fade-left">
                        <h2 className='text-danger py-2'>Get Connected with Gym</h2>
                        <p className='home_p8 text-white py-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        <div className="location ">
                            <h4 className='text-danger'><GoLocation/> <span className='text-white' style={{fontSize:"1.1rem",fontWeight:"400"}}>Gali no 11, House no 11, Lahore</span></h4>
                        </div>
                        <div className="call">
                            <h4 className='text-danger'><MdCall/> <span className='text-white' style={{fontSize:"1.1rem",fontWeight:"400"}}>92 9999999999</span></h4>
                        </div>
                        <div className="info">
                          <h4 className='text-danger'><MdEmail/> <span className='text-white' style={{fontSize:"1.1rem",fontWeight:"400"}}>info@gym.com</span></h4>
                        </div>
                        <div className="icons text-white py-4 d-flex">
                            <div className="fb bg-danger text-white d-flex justify-content-center align-items-center">
                               <FaFacebookF/>
                            </div>
                            <div className="fb bg-danger text-white  d-flex justify-content-center align-items-center ml-2">
                                <FaLinkedinIn/>
                            </div>
                            <div className="fb bg-danger text-white  d-flex justify-content-center align-items-center ml-2">
                                <AiOutlineSkype/>
                            </div>
                            <div className="fb bg-danger text-white  d-flex justify-content-center align-items-center ml-2">
                                <AiOutlineYoutube/>
                            </div>
                        </div>
                        <hr style={{color:"silver"}} />
                        <p className='text-white py-3'>PowerBy © Ali Ahmad</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}