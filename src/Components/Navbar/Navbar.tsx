import Image from "next/image";
import { navLinks } from "./links";
import Logo from "@/assets/logo.png";

import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { useState } from "react";

const Navbar = () => {
    const [isMenu, setIsMenu] = useState(false);

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };

    return (
        // main
       

export default Navbar;
