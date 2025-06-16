import { Newspaper } from "lucide-react";
import { Linkedin } from "lucide-react";
import {Github} from "lucide-react"
import {Mail} from "lucide-react"


const Navbar = () => {
        return (
                <nav className="bg-[#00CC8E] p-5">
                <div className="container mx-auto flex justify-between items-center">




                <ul className="flex space-x-4">

                                <li> 
                                <a href = "/resume.pdf" target = "_blank" rel = "noopener noreferrer">
                                        <Newspaper color = "white"/> 
                                </a>        
                                </li>
                                <li>
                                        <a href = "https://www.linkedin.com/in/natphaan">
                                                <Linkedin color="white"/>
                                        </a>
                                </li>

                                <li>
                                        <a href = "https://github.com/natphaan">
                                                <Github color = "white"/>
                                        </a>
                                </li>

                                <li>
                                        <a href = "mailto:nathanphan22@gmail.com" target = "_blank" rel = "noopener noreferrer">
                                               <Mail color = "white"/> 
                                        </a>
                                        
                                </li>
                </ul>



                <ul className="flex space-x-4">
                        <li><a href="/" className="text-white hover:text-white">Home</a></li>
                        <li><a href="#about-section" className="text-white hover:text-white">About</a></li>
                        <li><a href="#experience-section" className="text-white hover:text-white">Experience</a></li>
                        {/* <li><a href="/Projects" className="text-white hover:text-white">Projects</a></li> */}
                        <li><a href="#skills-section" className="text-white hover:text-white">Skills</a></li>
                </ul>
        </div>
        </nav>
        );
        }
export default Navbar;