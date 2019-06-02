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
</svg>
    )
  }
}

export default SVGSprites
