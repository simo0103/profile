import { FaInstagram, FaFacebookF, FaYoutube   } from "react-icons/fa";

function Socials() {
	return (
		<ul className="socials flex text-white gap-8 mt-8 justify-center">
            <li><a href="#"><FaInstagram className="text-lg" /></a></li>
            <li><a href="#"><FaFacebookF className="text-lg" /></a></li>
            <li><a href="#"></a><FaYoutube className="text-lg" /></li>
        </ul>
	);
}

export default Socials;
