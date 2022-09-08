import React, { Component } from 'react'
import Card from './cards'
import Cards2 from './cards2'
import Footer from './footer'
import Gallery from './gallery'
import Header from './header'
import Nav from './nav'
import Photo from './photo'
import Schedule from './schedule'
import Service from './service'
import Training from './training'
export default class Home extends Component {
  render() {
    return (
        <>
        <Nav/>
        <Header/>
        <Card/>
        <Service/>
        <Photo/>
        <Training/>
        <Schedule/>
        <Gallery/>
        <Cards2/>
        <Footer/>
        </>
    )
  }
}
