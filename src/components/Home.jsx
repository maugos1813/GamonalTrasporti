import React from "react";
import imagef from "/carimage.webp";
import refri from "/refrigeradorcar.png";
import temperature from "/temperatura.png";
import edit from "/editar.png";
import carretilla from "/carretilla.png";
import { Link } from "react-router-dom";
import car from "/car.png";
import leaves from "/leaves.png";
import logogam from "/logogam.jpeg";
import divrazones from "/divrazones.webp";
import carlogo from "/carlogo.webp";
import time from "/time.png";
import vehi from "/vehiculo.png"
import temp from "/temperatgris.png"

export const Home = () => {
  return (
    <>
      <div className="flex flex-col border m-5 rounded-xl shadow-2xl bg-cover bg-center border-green-300">
        <div className="mb-4">
          <h1 className="text-[5vh] sm:text-[7vh] text-center px-3 mt-3 text-gray-600 font-bold">
            Farmaci Puntuali: Distribuzione Affidabile in Tutto il Paese holi holi
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

      <div className="border border-green-300 bg-gradient-to-b from-[#252d5c] via-[#6c9993] to-[#77ad57] rounded-xl p-2 m-5">
        <div>
          <h2 className="uppercase font-semibold text-white text-[30px] text-center">
          I nostri servizi
          </h2>
        </div>
        <hr className="border-white" />
        <div className="mt-5">
          <div className="flex flex-col items-center gap-5 mb-5 md:flex-row md:m-5">
            <div className="border border-gray-600 rounded-xl w-[60vw] bg-white md:flex md:flex-col md:items-center">
              <Link
                to="/services"
                className=" md:flex md:flex-col md:items-center"
              >
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
              <Link
                to="/services"
                className=" md:flex md:flex-col md:items-center"
              >
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
              <Link
                to="/services"
                className=" md:flex md:flex-col md:items-center"
              >
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
              <Link
                to="/services"
                className=" md:flex md:flex-col md:items-center"
              >
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

      {/*Division*/}

      <div className="border-[4px] border-[#6c9993] p-9 uppercase text-gray-500 font-bold text-center text-[20px] ">
        <h2 className="md:text-[35px]">
          Antipasti a temperatura controllata: preparati secondo i più alti
          standard GDP per garantire precisione e qualità in ogni spedizione.
        </h2>
        <div className="lg:flex lg:gap-5">
          <div className="border-b-4 shadow-2xl rounded-2xl flex flex-col items-center">
            <img src={car} alt="car icon" className="p-20" />
            <h3 className="md:text-[30px] m-2">CONSEGNE CON VAN COIBENTATI</h3>
          </div>
          <div className="border-b-4 shadow-2xl rounded-2xl flex flex-col items-center">
            <img src={leaves} alt="leaves icon" className="p-20" />
            <h3 className="md:text-[30px] m-2">VEICOLI A BASSO IMPATTO</h3>
          </div>
          <div className="border-b-4 shadow-2xl rounded-2xl flex flex-col items-center">
            <img src={temperature} alt="temperate icon" className="p-20" />
            <h3 className="md:text-[30px] m-2">MONITORAGGIO TEMPERATURA</h3>
          </div>
        </div>
      </div>

      {/*Numeros*/}

      <div className="mt-8 bg-gradient-to-r from-[#252d5c] via-[#6c9993] to-[#77ad57] rounded-xl">
        <div className="flex flex-col items-center">
          <img
            src={logogam}
            alt="logo image"
            className="w-[65%] mt-14 border rounded-xl md:w-[25%]"
          />
          <h3 className="uppercase text-white font-bold text-[40px] mt-5 border-b-4">
            I nostri numeri
          </h3>
        </div>
        <div className=" pb-5 md:flex md:gap-5 md:justify-between m-5">
          <div className="flex flex-col items-center md:flex-1">
            <h2 className="uppercase text-white font-extrabold text-[80px]">
              ?+
            </h2>
            <h4 className="text-blue-950 font-bold text-[25px] md:text-[30px]">
              VEICOLI
            </h4>
          </div>
          <div className="flex flex-col items-center md:flex-1">
            <h2 className="uppercase text-white font-extrabold text-[80px]">
              ?+
            </h2>
            <h4 className="text-blue-950 font-bold text-[25px] text-center md:text-[30px]">
              ANNI DI ESPERIENZA NEL SETTORE
            </h4>
          </div>
          <div className="flex flex-col items-center md:flex-1">
            <h2 className="uppercase text-white font-extrabold text-[80px]">
              ?+
            </h2>
            <h4 className="text-blue-950 font-bold text-[25px] text-center md:text-[30px]">
              CONSEGNE A TEMPERATURA CONTROLLATA
            </h4>
          </div>
          <div className="flex flex-col items-center md:flex-1">
            <h2 className="uppercase text-white font-extrabold text-[80px]">
              ?+
            </h2>
            <h4 className="text-blue-950 font-bold text-[25px] text-center md:text-[30px]">
              FARMACIE SERVITE OGNI GIORNO IN TUTTA ITALIA
            </h4>
          </div>
        </div>
      </div>

      {/*Razones*/}

      <div>
        <div className=" border-green-600 pb-5 pt-5 flex justify-center items-center">
          <img
            src={divrazones}
            alt="random image"
            className="rounded-xl lg:w-[50vw]"
          />
        </div>
        <div className="w-[80vw] ml-[10vw]">
          <h2 className="text-[25px] text-[#252d5c] font-semibold text-center m-3">
            Specialisti della logistica attiva della catena del freddo:
            sicurezza e conformità in ogni consegna
          </h2>
        </div>
        <div className="md:flex items-center">
          <div>
            <img src={carlogo} alt="car with logo" className="rounded-3xl md:w-[50vw]" />
          </div>
          <div className="md:w-[50vw] items-center p-5">
            <div>
              <h2 className="text-[25px] text-[#252d5c] font-semibold text-center m-3">
                Perché scegliere Gamonal Trasporti
              </h2>
            </div>
            <div className="flex m-2 gap-2 justify-center items-center">
              <img src={time} alt="icon time" className="w-[25vw] p-3 md:w-[8vw]" />
              <h3 className="font-serif font-semibold text-[14px]">
              Comprendiamo quanto sia importante ricevere i farmaci puntualmente. Per questo garantiamo spedizioni rapide e sicure in tutta Italia, rispettando sempre i tempi concordati.
              </h3>
            </div>
            <div className="flex m-2 gap-2 justify-center items-center">
              <h3 className="font-serif font-semibold text-[14px]">Disponiamo di veicoli attrezzati per garantire il trasporto sicuro dei farmaci in tutto il Paese, rispettando i più alti standard di sicurezza e conservazione.</h3>
              <img src={vehi} alt="vehicle icon" className="w-[25vw] p-3 md:w-[8vw]"/>
            </div>
            <div className="flex m-2 gap-2 justify-center items-center">
              <img src={temp} alt="temperature icon" className="w-[25vw] p-3 md:w-[8vw]" />
              <h3 className="font-serif font-semibold text-[14px]">Distribuzione a temperatura controllata con servizi logistici dedicati a farmacie, personale medico e informatori scientifici.</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
