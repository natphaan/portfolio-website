import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills"
import { CircleArrowDown } from "lucide-react";


const Home = () => {
  return (
    <>
    {/* navbar section */}
      <Navbar />


      {/* {main section of Home} */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url(/blob-scene-haikei-3.svg)] bg-no-repeat bg-cover bg-center">
        <h1 className="text-4xl font-bold m-12 text-white animate-typewriter">Hi, my name is Nathan! </h1>
        <a href = "#about-section" aria-label = "scroll to about section">
          <CircleArrowDown color = "white"  className="size-6 animate-bounce mt-20" />
        </a>



      </div>

      {/* about section */}
      <section id = "about-section"> 
          <About/>
      </section>
 
      {/* experience section */}
      <section id = "experience-section"> 
          <Experience/>
      </section>

      <section id = "skills-section">
          <Skills/>
      </section>



    </>
  );
};


export default Home;