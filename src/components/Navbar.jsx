const Navbar = () => {
        return (
        <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-lg font-bold">Will have github, resume, and email on this section</div>
                <ul className="flex space-x-4">
                <li><a href="/" className="text-black hover:text-white">Home</a></li>
                <li><a href="#about-section" className="text-black hover:text-white">About</a></li>
                <li><a href="/Experience" className="text-black hover:text-white">Experience</a></li>
                <li><a href="/Projects" className="text-black hover:text-white">Projects</a></li>
                <li><a href="/Skills" className="text-black hover:text-white">Skills</a></li>
                </ul>
        </div>
        </nav>
        );
        }
export default Navbar;