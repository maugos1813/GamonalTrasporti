import React from "react";
import entregando from "/entregando.webp";
import temp from "/temperatgris.png";

export const HowWork = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <p className="mt-[100px] border-l-4 border-green-500 w-[140px] bg-gray-200 text-center">
          Our Goodness
        </p>
        <h1 className="mt-[20px] text-[4vh] mb-[80px]">How we works</h1>
      </div>

      <div className="lg:flex lg:gap-10 lg:pb-[100px] lg:justify-around">
        <div className="flex items-center justify-center lg:items-start lg:justify-start">
          <img
            src={entregando}
            alt="giving a packet image"
            className="w-[90vw] rounded-3xl md:w-[50vw] lg:w-[30vw] lg:ml-10 flex justify-center items-center"
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-[80px] pb-[80px] gap-12 md:flex md:flex-col lg:mt-[0px] lg:justify-center lg:items-center lg:gap-20">
          <div className="flex w-[80vw] gap-8 lg:w-[35vw]">
            <div>
              <img
                src={temp}
                alt="temperature icon"
                className="w-[15vw] lg:w-[6vw]"
              />
            </div>
            <div className="">
              <h3 className="text-[3vh]">Prueba de Título</h3>
              <p>texrto de prueba para mejorar en programación</p>
            </div>
          </div>
          <div className="flex w-[80vw] gap-8 lg:w-[35vw]">
            <div>
              <img
                src={temp}
                alt="temperature icon"
                className="w-[15vw] lg:w-[6vw]"
              />
            </div>
            <div className="">
              <h3 className="text-[3vh]">Prueba de Títutlo</h3>
              <p>texrto de prueba para mejorar en programación</p>
            </div>
          </div>
          <div className="flex w-[80vw] gap-8 lg:w-[35vw]">
            <div>
              <img
                src={temp}
                alt="temperature icon"
                className="w-[15vw] lg:w-[6vw]"
              />
            </div>
            <div className="">
              <h3 className="text-[3vh]">Prueba de Títutlo</h3>
              <p>texrto de prueba para mejorar en programación</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
