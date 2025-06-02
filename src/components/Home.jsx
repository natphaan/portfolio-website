import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
    {/* {navbar section} */}
      <Navbar />


        {/* {main section of Home} */}
      <div className="flex flex-col items-start justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-green-600">Hi, my name is Nathan! </h1>


      </div>
    </>
  );
};


export default Home;