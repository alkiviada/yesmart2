import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";

class Header extends Component {

  render() {
    const { location } = this.props
    const navLnks = [ '/', '/login', '/services' ]
    const active = navLnks.find(l => l == location.pathname)
    const navLnksCnames = navLnks.reduce((o, l) =>
      (o[l] = active == l ? 'top-nav-link current' : 'top-nav-link', o), {});
    return (
        <header ref={this.props.headerRef} role="banner" className="header">
        <div className="skip-title">
          <button className="skip-title-button button1" aria-hidden="true" onClick={this.skipToMainClick} aria-label="skip to main">></button>
          <button className="skip-title-button button2" aria-hidden="true" onClick={this.skipToMainClick} aria-label="Skip to Main">></button>
        </div>
         <h1 role="heading" aria-label="Yesmart" className="title-header">
           <span className="big" aria-hidden="true">Y</span>
           <span className="small" aria-hidden="true">E</span>
           <span className="big" aria-hidden="true">S</span>
           <span className="sub" aria-hidden="true">MART</span>
         </h1>
         <nav role="navigation" aria-label="Yesmart Menu" className="top-nav">
           <ul className="top-nav-list">
             <li className="top-nav-li">
                <a href="/" className={navLnksCnames['/']} aria-label={active == '/' ? "Home Current page" : ''}>Home</a>
             </li>
             <li className="top-nav-li">
                <a href="/services" className={navLnksCnames['/services']} aria-label={active == '/services' ? "Our services Current page" :'' } >Our Services</a>
             </li>
             <li className="top-nav-li">
              <button className="top-nav-button" onClick={this.props.toContact}>Contact</button>
             </li>
             <li className="top-nav-li">
                <a href="/login" className={navLnksCnames['/login']} aria-label={active == '/login' ? "Login Current page" : '' }>lOGIN</a>
             </li>
           </ul>
         </nav>
      </header>
    )
  }
}

export default withRouter(Header)
