import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

class Header extends Component {

  render() {
    const { location } = this.props
    const navLnks = [ '/', '/login', '/services' ]
    const active = navLnks.find(l => l == location.pathname)
    return (
        <header ref={this.props.headerRef} role="banner" className="header">
         <h1 className="title-header">
           <span className="big">Y</span>
           <span className="small">E</span>
           <span className="big">S</span>
          <span className="sub">MART</span></h1>
         <nav role="navigation" area-label="Yesmart Menu" className="top-nav">
           <ul className="top-nav-list">
             <li className="top-nav-li">
               { active == '/' ? 
                  <span className="current-page">Home</span> : 
                  <a href="/" className="top-nav-link">Home</a>
               }
             </li>
             <li className="top-nav-li">
               { active == '/services' ? 
                  <span className="current-page">Our Services</span> : 
                  <a href="/services" className="top-nav-link">Our Services</a>
               }
             </li>
             <li className="top-nav-li">
              <button className="top-nav-button" onClick={this.props.toContact}>Contact</button>
             </li>
             <li className="top-nav-li">
               { active == '/login' ? 
                  <span className="current-page">Login</span> : 
                  <a href="/login" className="top-nav-link">lOGIN</a>
               }
             </li>
           </ul>
         </nav>
      </header>
    )
  }
}

export default withRouter(Header)
