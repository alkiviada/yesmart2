import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
import Title from './Title'
import SVGSprites from './SVGSprites'
import Header from './Header'
import Address from './Address'
import ASystems from './ASystems'
import Monitor from './Monitor'
import LIR from './LIR'
import Domain from './Domain'
import Consult from './Consult'

class Home extends Component {
  constructor(props) { 
    super(props)
    this.onClick = this.onClick.bind(this) 
    this.mainRef = React.createRef();
    this.userNameLabelRef = React.createRef()
    this.emailLabelRef = React.createRef()
    this.messageLabelRef = React.createRef()
    this.state = { error: '', 
                   messageSent: '',
                   username: { 'value': '', 'label_cn': 'floating-label' },
                   email: {'value': '', 'label_cn': 'floating-label' }, 
                   message: {'value': '', 'label_cn': 'floating-label' }, 
                 }
    this.inputOrLabel = this.inputOrLabel.bind(this) 
    this.hideLabel = this.hideLabel.bind(this) 
    this.showLabel = this.showLabel.bind(this) 
    this.sendMessage = this.sendMessage.bind(this) 
    this.handleValueChange = this.handleValueChange.bind(this) 
  }

  sendMessage(e) {
    e.preventDefault()
    if (this.state.message.value) {
      console.log('i will send')
    const { email, username, message } = this.state
    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({username, email, message});

    return fetch("/", {headers, body, method: "POST"})
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          this.setState({messageSent: 1})
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          throw res;
        } else {
          throw res.data;
        }
      }).catch((err) => {
        this.setState({error: err})
        return err;
      });
      
    }
    else {
      console.log('i will not send')
    }
    
  }

  handleValueChange(e) {
    const key = e.target.id 
    this.setState({ [key]: { 'label_cn': this.state[key]['label_cn'], 'value': e.target.value } });
  }
  
  hideLabel(e, labelRef) {
    const key = labelRef.current.htmlFor 
    this.setState({ [key]: { 'value': e.target.value, 'label_cn': 'floating-label top-label', } });
  }

  showLabel(e, labelRef) {
    const key = labelRef.current.htmlFor 
    this.setState({ [key]: { 'value': e.target.value, 'label_cn': 'floating-label', } });
  }

  inputOrLabel(e, labelRef) {
    if (e.target.value == "") {
      this.showLabel(e, labelRef);
    } 
    else if (e.target.value != "") {
      this.hideLabel(e, labelRef);
    }
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
        <Domain />
        <Consult />
        </main> 
        <footer role="contentinfo">
        <h2 className="footer-head">Get in Touch</h2>
        <span>Got questions? We'd love to hear from you.</span>
        <div className="footer-contact">
         <form className="form">
           <div className="input-wrapper">
           <label className={this.state.username.label_cn} htmlFor="username" ref={this.userNameLabelRef}>Full Name</label>
           <input className="input" onFocus={(e) => this.hideLabel(e, this.userNameLabelRef)} onInput={(e) => this.inputOrLabel(e, this.userNameLabelRef)} onBlur={(e) => this.inputOrLabel(e, this.userNameLabelRef)} type="text" value={this.state.username.value} id="username" name="username" onChange={this.handleValueChange} />
         </div>
           <div className="input-wrapper">
           <label className={this.state.email.label_cn} htmlFor="email" ref={this.emailLabelRef}>Email Address</label>
           <input className="input" onFocus={(e) => this.hideLabel(e, this.emailLabelRef)} onInput={(e) => this.inputOrLabel(e, this.emailLabelRef)} onBlur={(e) => this.inputOrLabel(e, this.emailLabelRef)} type="email" value={this.state.email.value} id="email" name="email" onChange={this.handleValueChange} />
         </div>
           <div className="input-wrapper">
           <label className={this.state.message.label_cn} htmlFor="message" ref={this.messageLabelRef}>Your Message</label>
           <textarea className="input-textarea" onFocus={(e) => this.hideLabel(e, this.messageLabelRef)} onInput={(e) => this.inputOrLabel(e, this.messageLabelRef)} onBlur={(e) => this.inputOrLabel(e, this.messageLabelRef)} type="message" value={this.state.message.value} id="message" name="message" onChange={this.handleValueChange} />
         </div>
            <button type="button" className="submit-button" onClick={this.sendMessage}>Submit</button>
         </form>
         <div className="contact-info">
         <span>CONTACT DETAILS</span>
         <a className="email-link">info@yesmart.solutions</a>
         <a className="tel-link">12345</a>
         <a className="external-link">FB</a>
         </div>
        </div>
        </footer>
      </Fragment>
    )
  }
}

export default Home
