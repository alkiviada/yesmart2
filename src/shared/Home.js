import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
import Title from './Title'
import SVGSprites from './SVGSprites'
import Header from './Header'
import Address from './Address'
import ASystems from './ASystems'
import Monitor from './Monitor'
import LIR from './LIR'

class Home extends Component {
  constructor(props) { 
    super(props)
    this.onClick = this.onClick.bind(this) 
    this.mainRef = React.createRef();
  }


  onClick(e) {
    e.preventDefault()
    const domNode = ReactDOM.findDOMNode(this.mainRef.current)
    window.scrollTo(0, domNode.offsetTop)
  }

  render() {
    return (
      <Fragment>
        <SVGSprites />
        <Title />
        <div className="skip-title">
          <button className="skip-title-button button1" aria-hidden="true" onClick={this.onClick} aria-label="skip to main">></button>
          <button className="skip-title-button button2" aria-hidden="true" onClick={this.onClick} aria-label="Skip to Main">></button>
        </div>
        <Header headerRef={this.mainRef}/>
        <main  className="home" role="main">
        <Address />
        <ASystems />
        <Monitor />
        <LIR />
        </main> 
        <footer role="contentinfo">
        <h2></h2>
        <span></span>
        </footer>
      </Fragment>
    )
  }
}

export default Home
