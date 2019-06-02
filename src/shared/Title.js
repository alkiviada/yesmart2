import React, { Component } from 'react'

class Title extends Component {

  render() {
    return (
      <div className="title-wrapper">
         <span className="visually-hidden">
           ye smart smart solutions for your business
         </span>
        <svg 
          viewBox="-7 -2 31 15" 
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          width="100%" 
          height="100%" 
          className="title-svg" 
          aria-hidden="true"
        > 
        <defs>
          <path id="bname-path" d="M 0 3 L 5.8 3 M 6 3.5 L 7 3.5 M 6.9 4.5 L26 4.5" />
          <path id="sub-bname-path1" d="M -7 7 L 16 7"/>
          <path id="sub-bname-path2" d="M 3 10 L 29 10" />
          <path id="sub-shadow-bname-path1" d="M -6.5 7.2 L 16 7.2"/>
          <path id="sub-shadow-bname-path2" d="M 3.5 10.2 L 31 10.2" />
        </defs>
        <text className="title-text" textLength="19">
          <textPath xlinkHref="#bname-path">
            YeSmart
          </textPath>
        </text>
        <text className="subtitle-shadow-text" textLength="14" >
          <textPath xlinkHref="#sub-shadow-bname-path1" >
            УМНЫЕ РЕШЕНИЯ 
          </textPath>
        </text>
        <text className="subtitle-shadow-text" textLength="19" >
          <textPath xlinkHref="#sub-shadow-bname-path2" >
            ДЛЯ ВАШЕГО БИЗНЕСА 
          </textPath>
        </text>
        <text className="subtitle-text" textLength="14" >
          <textPath xlinkHref="#sub-bname-path1" >
            УМНЫЕ РЕШЕНИЯ 
          </textPath>
        </text>
        <text className="subtitle-text" textLength="19" >
          <textPath xlinkHref="#sub-bname-path2">
            ДЛЯ ВАШЕГО БИЗНЕСА 
          </textPath>
        </text>
        </svg>
      </div>
    )
  }
}

export default Title
