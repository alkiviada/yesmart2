import React, { Component } from 'react'

class Title extends Component {

  render() {
    return (
      <div className="title-wrapper">
         <span className="visually-hidden">
           ye smart smart solutions for your business
         </span>
        <svg 
          viewBox="-20 -6 65 20" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          width="100%" 
          height="100%" 
          className="title-svg" 
          aria-hidden="true"
        > 
<text x="0" y="0" className="title big">Y</text>
<text x="4" y="0" className="title small">E</text>
<text x="8" y="0" className="title big">S</text>
<text x="12" y="1.7" className="title small">MART</text>
<text x="-14.5" y="7.5" className="subtitle shadow">УМНЫЕ РЕШЕНИЯ</text>
<text x="4.5" y="13.5" className="subtitle shadow">ДЛЯ ВАШЕГО БИЗНЕСА</text>
<text x="-15" y="7" className="subtitle">УМНЫЕ РЕШЕНИЯ</text>
<text x="4" y="13" className="subtitle">ДЛЯ ВАШЕГО БИЗНЕСА</text>
        </svg>
      </div>
    )
  }
}

export default Title
