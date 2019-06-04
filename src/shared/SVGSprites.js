import React, { Component } from 'react'

class SVGSprites extends Component {
  render() {
    return (
<svg className="svg-icons" width="0" height="0" aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
<symbol id="ipv-icon" viewBox="-4 -4 30 20">
<rect x="-1.5" y="-4" width="23" height="23" className="icon-wrapper" />
<g className="icon-internals">
<rect x="2" y="1" width="16" height="9"  />
<rect x="2" y="10" width="16" height="2" />
<circle cx="10" cy="11" r=".2" strokeWidth=".3" fill="black" />
<path d="M9 12 L 8 14 M 12 12 L 13 14 M 6 14 H 14" />
</g>
</symbol>
<symbol id="as-icon" viewBox="-4 -6 30 25">
<defs>
<rect y="9" width="3" height="3" id="non-as" />
</defs>
<rect x="-1.5" y="-5" width="23" height="23" className="icon-wrapper" />
<g className="icon-internals">
<rect x="7.5" y="-1" width="5" height="3" />
<path d="M10 2 L10 9 M3 5 L 17 5 M3 5 L 3 9 M 17 5 L 17 9" strokeLinejoin="round" strokeLinecap="square" />
<use xlinkHref="#non-as" x="1.5" />
<use xlinkHref="#non-as" x="8.5" />
<use xlinkHref="#non-as" x="15.5" />
</g>
</symbol>
<symbol id="monitor-icon" viewBox="-4 -6 30 25">
<rect x="-1.5" y="-6" width="23" height="23" className="icon-wrapper" />
<path d="M 1 7 L 4 7 L 6 1 L 9 12 L 12 -2 L 15 11 L 17 7 L 20 7" className="icon-internals" fill="none" strokeLinejoin="round" strokeLinecap="square" />
</symbol>
<symbol viewBox="-5 -6 30 25" id="lir-icon">
<defs>
<g id="scroll-line" className="icon-details">
<line x1="4.5" x2="6" y1="4" y2="4" id="line-small" />
<line x1="7.7" x2="14" y1="4" y2="4" id="line-big" />
</g>
</defs>
<rect x="-1.5" y="-5" width="23" height="23" className="icon-wrapper" />
<path d="
  M 3 -2 
  A 1 1 0 0 0 3 1 
  L 3 12 
  C 3.7 14.3 5 14.2 6 14.5 
  L 16.3 14.5
  M 3 -2
  L 14 -2
  A 1 1 0 0 0 14 1 
  L 3 1
  M 14 -2 
  C 15.5 -1.5 15.8 -.5 15.7 1 
  L 15.7 13.5
  A 1 1 0 0 0 17.7 13.5
  L 15.7 13.5
  " 
  className="icon-internals" strokeLinejoin="round" strokeLinecap="square" />
  <use xlinkHref="#scroll-line" />
  <use xlinkHref="#scroll-line" transform="translate(0, 2)"/>
  <use xlinkHref="#scroll-line" transform="translate(0, 4)"/>
  <use xlinkHref="#scroll-line" transform="translate(0, 6)"/>
  <use xlinkHref="#scroll-line" transform="translate(0, 8)"/>
</symbol>
<symbol viewBox="-4 -6 30 25" id="domain-icon">
<rect x="-1.5" y="-5" width="23" height="23" className="icon-wrapper" />
<circle 
  r="9"
  cx="10"
  cy="6"
  className="icon-internals"
/>

<path d="M 1 6 
         L 19 6
         M 10 -3
         Q 1 6 10 15
         Q 19 6 10 -3
         M 3 .5
         Q 10 4 17 .5
         M 3 11.5
         Q 10 8 17 11.5
         
  " 
  className="icon-internals" 
  strokeLinejoin="round" strokeLinecap="square" />
</symbol>
<symbol viewBox="-4 -7 30 25" id="consult-icon">
<rect x="-2" y="-6" width="23" height="23" className="icon-wrapper" />
<path d="M 1 -1.5 
         L 18 -1.5
         M 9.5 -1.5
         L 9.5 -2.2
         M 1.7 -1.5
         L 1.7 8
         M 1 8 
         L 18 8
         M 17.3 8
         L 17.3 -1.5
         M 9.5 8
         L 9.5 13
         M 9.5 8
         L 6 13
         M 9.5 8
         L 13 13
         M 3 5
         L 6 2
         L 8 4
         L 11.5 0
         
  " 
  className="icon-details"
  />
  <g className="icon-details">
  <line x1="13" x2="16" y1=".5" y2=".5" />
  <line x1="13" x2="16" y1="2" y2="2" />
  <line x1="11.5" x2="11.5" y1="6" y2="1.5"/>
  <line x1="9.7" x2="9.7" y1="6" y2="3.5" />
  <line x1="8" x2="8" y1="6" y2="5"/>
  <line x1="6" x2="6" y1="6" y2="4" />
  <line x1="4" x2="4" y1="6" y2="5" />
  </g>
</symbol>
</svg>
    )
  }
}

export default SVGSprites
