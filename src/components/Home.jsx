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
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold m-12 text-green-600 animate-typewriter">Hi, my name is Nathan! </h1>
        <CircleArrowDown color = "green"  className="size-6 animate-bounce mt-20"/>



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