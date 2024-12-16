import { TypeServices } from "./TypeServices.jsx";
import { HowWork } from "./HowWork.jsx";
import { Contact } from "./Contact.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col bg-cover bg-center bg-[url('/camioni.jpg')] h-[80vh]">
        <div className="mb-4">
          <h1 className="text-[5vh] text-center px-3 mt-[80px] ml-5 text-white font-bold lg:text-start lg:mt-24">
            Il nostro servizio logistico!
          </h1>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-full p-3">
            <div className="flex items-center justify-center lg:justify-start">
              <Link to="/contact">
                <button className="ml-4 mt-4 px-6 py-2 bg-[#252d5c] text-white text-[2vh] sm:text-[2.5vh] rounded-lg hover:bg-green-500 h-[8vh] ">
                  Contattaci ora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TypeServices />

      <HowWork />

      <Contact />
    </>
  );
};
