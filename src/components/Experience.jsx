import ctc from "../assets/CTCYYCLogo_Cropped.png"
import kumon from "../assets/kumonLogo.png"


const Experience = () => {
        return (
                <div className="flex flex-col items-center justify-center min-h-screen p-4">
                        <h1 className="text-4xl font-bold mb-10 text-green-600 text-center"> Experience </h1>
                        <div className = "w-full max-w-4xl lg:max-w-5xl" id = "experience-section">
                                <div>
                                        <ul className = "flex flex-row justify-around items-center py-8 px-3">
                                                <li> 
                                                        <img 
                                                        src = {ctc}
                                                        alt = "CTC Logo"
                                                        className = "w-32 h-32 object-contain rounded-md"
                                                        />
                                                </li>
                                                <div>
                                                        <h3 className = "text-black mb-4 text-2xl font-extrabold"> Code the Change YYC </h3>
                                                        <h3 className = "text-black text-xl mb-1"> Co-President</h3>
                                                        <h3 className = "text-gray-500"> January 2025 - Present </h3>
                                                        <h3 className = "text-gray-500"> University of Calgary </h3>
                                                </div>


                                        </ul>
                                </div>
                        
                                <div>
                                        <ul className = "flex flex-row justify-around items-center py-8 px-3"> 
                                                <li>
                                                        <img
                                                        src = {kumon}
                                                        alt = "Kumon Logo"
                                                        className = "w-32 h-32 object-contain rounded-md"
                                                        />

                                                </li>
                                                <div>
                                                        <h3 className = "text-black mb-4 text-2xl font-extrabold"> Kumon North America</h3>
                                                        <h3 className = "text-black text-xl mb-1"> Chief Assistant </h3>
                                                        <h3 className = "text-gray-500"> July 2018 - August 2024 </h3>
                                                        <h3 className = "text-gray-500"> Chestermere, AB </h3>
                                                </div>
                                        </ul>
                                        
                                </div>

                        </div>
                </div>
                
        );
};

export default Experience;
