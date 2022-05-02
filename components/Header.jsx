import React, { useContext } from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 2xl:px-28 mb-8">
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabindex="0" className="btn btn-ghost btn-circle">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
							stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
						</svg>
					</label>
					<ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						<li><a>Homepage</a></li>
						<li><a>Portfolio</a></li>
						<li><a>About</a></li>
					</ul>
				</div>
			</div>
			<div className="navbar-center">
				<a href='/' className="btn btn-ghost normal-case text-xl">
					<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 93.000000 104.000000"> <g transform="translate(0.000000,104.000000) scale(0.100000,-0.100000)" className="fill-current" stroke="none"> <path d="M280 841 c0 -119 -4 -211 -11 -230 -20 -58 -70 -67 -122 -21 l-34 29 -56 -50 c-32 -28 -57 -57 -57 -64 0 -21 76 -81 119 -93 60 -18 169 -15 216 7 22 10 89 63 150 117 60 55 183 166 275 248 91 82 167 154 169 160 3 8 0 8 -10 0 -8 -6 -114 -86 -236 -178 l-223 -166 0 220 0 220 -90 0 -90 0 0 -199z" /> <path d="M328 363 c-169 -152 -306 -279 -303 -281 2 -3 102 68 222 157 l218 162 3 -97 c2 -74 -1 -102 -13 -120 -22 -34 -71 -32 -115 5 l-35 29 -55 -50 c-30 -28 -56 -54 -58 -59 -5 -13 59 -69 103 -90 29 -13 63 -19 126 -19 80 0 89 2 134 32 70 46 95 106 98 235 3 162 -2 373 -10 373 -5 -1 -146 -125 -315 -277z" /> </g> </svg>
					Joseph's Blog
				</a>
			</div>
			<div className="navbar-end">
				<label className="swap swap-rotate btn btn-ghost btn-circle">
					<input id="theme-switch" type="checkbox" />
					<svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /> </svg>
					<svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /> </svg>
				</label>
				<button className="btn btn-ghost btn-circle">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
				</button>
			</div>
		</div>
	</div>
  )
}

export default Header