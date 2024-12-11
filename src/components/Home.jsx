import logogam from "/logogam.jpeg";
import divrazones from "/divrazones.webp";
import carlogo from "/carlogo.webp";
import time from "/time.png";
import vehi from "/vehiculo.png";
import temp from "/temperatgris.png";
import { TypeServices } from "./TypeServices.jsx";
import { HowWork } from "./HowWork.jsx";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col bg-cover bg-center bg-[url('/camioni.jpg')] h-[80vh]">
        <div className="mb-4">
          <h1 className="text-[5vh] text-center px-3 mt-[80px] ml-5 text-white font-bold">
          Il nostro servizio logistico!
          </h1>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-full p-3">
            <div className="flex items-center justify-center">
              <button className="ml-4 mt-4 px-6 py-2 bg-[#252d5c] text-white text-[2vh] sm:text-[2.5vh] rounded-lg hover:bg-green-500 h-[8vh] ">
                Contattaci ora
              </button>
            </div>
          </div>
        </div>
      </div>

      <TypeServices/>

      <HowWork/>

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
            <img
              src={carlogo}
              alt="car with logo"
              className="rounded-3xl md:w-[50vw]"
            />
          </div>
          <div className="md:w-[50vw] items-center p-5">
            <div>
              <h2 className="text-[25px] text-[#252d5c] font-semibold text-center m-3">
                Perché scegliere Gamonal Trasporti
              </h2>
            </div>
            <div className="flex m-2 gap-2 justify-center items-center">
              <img
                src={time}
                alt="icon time"
                className="w-[25vw] p-3 md:w-[8vw]"
              />
              <h3 className="font-serif font-semibold text-[14px]">
                Comprendiamo quanto sia importante ricevere i farmaci
                puntualmente. Per questo garantiamo spedizioni rapide e sicure
                in tutta Italia, rispettando sempre i tempi concordati.
              </h3>
            </div>
            <div className="flex m-2 gap-2 justify-center items-center">
              <h3 className="font-serif font-semibold text-[14px]">
                Disponiamo di veicoli attrezzati per garantire il trasporto
                sicuro dei farmaci in tutto il Paese, rispettando i più alti
                standard di sicurezza e conservazione.
              </h3>
              <img
                src={vehi}
                alt="vehicle icon"
                className="w-[25vw] p-3 md:w-[8vw]"
              />
            </div>
            <div className="flex m-2 gap-2 justify-center items-center">
              <img
                src={temp}
                alt="temperature icon"
                className="w-[25vw] p-3 md:w-[8vw]"
              />
              <h3 className="font-serif font-semibold text-[14px]">
                Distribuzione a temperatura controllata con servizi logistici
                dedicati a farmacie, personale medico e informatori scientifici.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
