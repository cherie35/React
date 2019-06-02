import React from 'react';
import {Link} from "react-scroll";


function Navbar() {
	return (
		<div classname="Navbar">
			<Link
				activeClass="active"
				to="mainPage"
				spy={true}
				smooth={true}
				duration= {500}
			>
			Main
			</Link>
			<Link
				activeClass="active"
				to="projectsPage"
				spy={true}
				smooth={true}
				duration= {500}
			>
			Projects
			</Link>
			<Link
				activeClass="active"
				to="aboutPage"
				spy={true}
				smooth={true}
				duration= {500}
			>
			About
			</Link>
			<Link
				activeClass="active"
				to="interestsPage"
				spy={true}
				smooth={true}
				duration= {500}
			>
			huh
			</Link>
		</div>
	);
}


export default Navbar;
