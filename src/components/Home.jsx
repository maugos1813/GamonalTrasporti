import React from "react";
import imagef from "/carimage.webp";
import refri from "/refrigeradorcar.png";
import temperature from "/temperatura.png";
import edit from "/editar.png";
import carretilla from "/carretilla.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col border m-5 rounded-xl shadow-2xl bg-cover bg-center border-green-300">
        <div className="mb-4">
          <h1 className="text-[5vh] sm:text-[7vh] text-center px-3 mt-3 text-gray-600 font-bold">
            Farmaci Puntuali: Distribuzione Affidabile in Tutto il Paese
          </h1>
        </div>

        <div className=" flex justify-center">
          <img
            src={imagef}
            alt="car medicine image"
            className="rounded-xl w-[50vw]"
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-full p-3">
            <p className="text-center text-[3vh] sm:text-[5vh] px-3 mt-3">
              Sempre a Stock: Farmaci Puntuali
            </p>

            <div className="flex items-center justify-center">
              <button className="ml-4 mt-4 px-6 py-2 bg-green-400 text-white text-[2vh] sm:text-[2.5vh] rounded-lg hover:bg-green-300 h-[8vh] ">
                Contattaci ora
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-green-300 bg-green-400 rounded-xl p-2 m-5">
        <div>
          <h2 className="uppercase font-semibold text-white text-[30px] text-center">
            our services
          </h2>
        </div>
        <hr className="border-white" />
        <div className="mt-5">
          <div className="flex flex-col items-center gap-5 mb-5 md:flex-row md:m-5">
            <div className="border border-gray-600 rounded-xl w-[60vw] bg-white md:flex md:flex-col md:items-center">
              <Link to="/services">
                <h3 className="text-center uppercase font-semibold text-gray-500 p-4">
                  Transporto refrigerato
                </h3>
                <img
                  src={refri}
                  alt="refrigerator icon"
                  className="p-5 md:w-[20vw]"
                />
              </Link>
            </div>

            <div className="border border-gray-600 rounded-xl w-[60vw] bg-white md:flex md:flex-col md:items-center">
              <Link to="/services">
                <h3 className="text-center uppercase font-semibold text-gray-500 p-4">
                  Distribuzione Farmaci
                </h3>
                <img
                  src={temperature}
                  alt="refrigerator icon"
                  className="p-5 md:w-[20vw]"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 md:flex-row md:m-5">
            <div className="border border-gray-600 rounded-xl w-[60vw] bg-white md:flex md:flex-col md:items-center md:mt-[-15px]">
              <Link to="/services">
                <h3 className="text-center uppercase font-semibold text-gray-500 p-4">
                  Servizi Personalizzati
                </h3>
                <img
                  src={edit}
                  alt="refrigerator icon"
                  className="p-5 md:w-[20vw]"
                />
              </Link>
            </div>

            <div className="border border-gray-600 rounded-xl w-[60vw] bg-white md:flex md:flex-col md:items-center mb-5">
              <Link to="/services">
                <h3 className="text-center uppercase font-semibold text-gray-500 p-4">
                  Flotta mezzi
                </h3>
                <img
                  src={carretilla}
                  alt="refrigerator icon"
                  className="p-5 md:w-[20vw]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
