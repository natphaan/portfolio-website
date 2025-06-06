import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";

const Home = () => {
  return (
    <>
    {/* navbar section */}
      <Navbar />


      {/* {main section of Home} */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold m-12 text-green-600">Hi, my name is Nathan! </h1>
      </div>

      {/* about section */}
      <section id = "about-section"> 
          <About/>
      </section>
 
      {/* experience section */}
      <section id = "experience-section"> 
          <Experience/>
      </section>
    </>
  );
};


export default Home;