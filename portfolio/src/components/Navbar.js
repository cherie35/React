import React from 'react';
import {Link} from "react-scroll";


function Navbar() {
	return (
		<div classname="Navbar">
			<nav className="navMenu">
				<ul>
					<li>
						<Link activeClass="active" to="mainPage" spy={true}	smooth={true} duration= {500}				>
							main
						</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link activeClass="active" to="projectsPage" spy={true}	smooth={true} duration= {500}				>
							projects
						</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link activeClass="active" to="MePage" spy={true} smooth={true} duration= {500}				>
						about
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}


export default Navbar;
