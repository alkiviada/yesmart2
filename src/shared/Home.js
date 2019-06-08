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

  componentDidMount() {
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
  }



  skipToMainClick(e) {
    e.preventDefault()
    const domNode = ReactDOM.findDOMNode(this.mainRef.current)
    console.log(domNode.offsetTop)
    window.scrollTo(0, domNode.offsetTop)
  }

  skipToContactForm(e) {
    console.log('hmm');
    e.preventDefault()
    const domNode = ReactDOM.findDOMNode(this.contactFormRef.current)
    window.scrollTo(0, domNode.offsetParent.offsetTop)
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
