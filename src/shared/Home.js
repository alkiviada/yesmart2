import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
import Title from './Title'
import SVGSprites from './SVGSprites'
import Header from './Header'
import Footer from './Footer'
import Address from './Address'
import ASystems from './ASystems'
import Monitor from './Monitor'
import LIR from './LIR'
import Domain from './Domain'
import Consult from './Consult'

class Home extends Component {
  constructor(props) { 
    super(props)
    this.skipToMainClick = this.skipToMainClick.bind(this) 
    this.skipToContactForm = this.skipToContactForm.bind(this) 
    this.mainRef = React.createRef();
    this.contactFormRef = React.createRef();
  }



  skipToMainClick(e) {
    e.preventDefault()
    const domNode = ReactDOM.findDOMNode(this.mainRef.current)
    window.scrollTo(0, domNode.offsetTop)
  }

  skipToContactForm(e) {
    e.preventDefault()
    const domNode = ReactDOM.findDOMNode(this.contactFormRef.current)
    window.scrollTo(0, domNode.offsetTop)
  }

  render() {
    return (
      <Fragment>
        <SVGSprites />
        <Title />
        <div className="skip-title">
          <button className="skip-title-button button1" aria-hidden="true" onClick={this.skipToMainClick} aria-label="skip to main">></button>
          <button className="skip-title-button button2" aria-hidden="true" onClick={this.skipToMainClick} aria-label="Skip to Main">></button>
        </div>
        <Header headerRef={this.mainRef} toContact={this.skipToContactForm} />
        <main  className="home" role="main">
          <Address />
          <ASystems />
          <Monitor />
          <LIR />
          <Domain />
          <Consult />
        </main> 
        <Footer contactFormRef={this.contactFormRef} />
      </Fragment>
    )
  }
}

export default Home
