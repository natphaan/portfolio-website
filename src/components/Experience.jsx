import ctc from "../assets/CTCYYCLogo_Cropped.png"
import kumon from "../assets/kumonLogo.png"
import FadeInFrom from "./FadeInFrom"
import FadeInFromLeft from "./FadeInFromLeft";


const Experience = () => {
        return (
                <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#00CC8E] ">
                        <h1 className="text-4xl font-bold mb-10 text-white text-center"> Experience </h1>
                        <div className = "w-full max-w-4xl lg:max-w-5xl" id = "experience-section">
                                <div>

                                        <FadeInFrom>

                                        <ul className = "flex flex-col sm:flex-row justify-around items-center py-8 px-3">
                                                <li> 
                                                        <img 
                                                        src = {ctc}
                                                        alt = "CTC Logo"
                                                        className = "w-32 h-32 object-contain rounded-md"
                                                        />
                                                </li>
                                                <div c>
                                                        <h3 className = "text-white mb-4 text-2xl font-extrabold"> Code the Change YYC </h3>
                                                        <h3 className = "text-white text-xl mb-1"> Co-President</h3>
                                                        <h3 className = "text-shadow-white"> January 2025 - Present </h3>
                                                        <h3 className = "text-shadow-white"> University of Calgary </h3>
                                                </div>


                                        </ul>
                                        </FadeInFrom>
                                </div>
                        
                                <div>

                                        <FadeInFromLeft>
                                        <ul className = "flex flex-col sm:flex-row justify-around items-center py-8 px-3"> 
                                                <li>
                                                        <img
                                                        src = {kumon}
                                                        alt = "Kumon Logo"
                                                        className = "w-32 h-32 object-contain rounded-md"
                                                
                                                        />

                                                </li>
                                                <div>
                                                        <h3 className = "text-white mb-4 text-2xl font-extrabold"> Kumon North America</h3>
                                                        <h3 className = "text-white text-xl mb-1"> Chief Assistant </h3>
                                                        <h3 className = "text-shadow-white"> July 2018 - August 2024 </h3>
                                                        <h3 className = "text-shadow-white"> Chestermere, AB </h3>
                                                </div>
                                        </ul>
                                        </FadeInFromLeft>
                                        
                                </div>

                        </div>
                </div>
                
        );
};

export default Experience;
