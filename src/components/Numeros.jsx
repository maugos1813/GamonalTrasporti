import React from 'react'

export const Numeros = () => {
  return (
    <div>
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
    </div>
  )
}
