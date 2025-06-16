import profile from "../assets/NathanPhan.jpeg"


const About = () => {
        return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="flex text-4xl font-bold mb-10 text-green-600 justify-center animate-pulse">About</h1>


                {/* Two column layout*/}
                <div className = "flex flex-col md:flex-row gap-8 w-full max-w-screen-xl lg:max-w-5xl items-center md:items-start">
                        {/* this is the left column/half */}
                        <div className = "bg-gray-600 flex justify-center items-center text-black w-full max-w-sm h-64 md:h-80 lg:h-96 rounded-lg">
                                <img
                                src = {profile}
                                alt = "Profile picture"
                                className = "object-cover w-full h-full rounded-lg"
                                />
                        </div>

                        {/* this is the right column/half */}
                        <div className = "w-full md:w-1/2">
                                <p className = "text-black text-lg mb-5">
                                I am a third-year computer science student studying at the University of Calgary. Currently I'm interested in full-stack development and embedded systems which is a current reflection of my projects so far! I am passionate about leveraging technology to drive social change and create meaningful global impact 🌎 
                                </p>
                                <p className = "text-black text-lg ">
                                In my free time, I love to cook, watch the Raptors, and play soccer!
                                </p>


                        </div>

                </div>
        </div>
        

        


        );
        }
export default About;

