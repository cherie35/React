import React from 'react';
import { ReactComponent as Css} from "../assets/images/css3.svg";
import { ReactComponent as Boots} from "../assets/images/bootstrap-brands.svg";
import { ReactComponent as Reactt} from "../assets/images/react-brands.svg";
import { ReactComponent as FA} from "../assets/images/font-awesome-flag-brands.svg";
import { Col } from 'react-bootstrap';

function Footer() {
	return (
		<div classname="Footer">
			<Col  md={12}  className="Footer">
				<a title={"Css"} href="javascript:void(0)" target="blank">
				<Css className='footoes' title={"Css"}/>
				</a>
				<a title={"Bootstrap"} href="https://getbootstrap.com/" target="blank">
				<Boots className='footoes'/>
				</a>
				<a title={"React"} href="https://reactjs.org/" target="blank">
				<Reactt className='footoes'/>
				</a>
				<a title={"Font Awesome"} href="https://fontawesome.com/" target="blank">
				<FA className='footoes'/>
				</a>
			</Col>

		</div>
	);
}


export default Footer;
