import { MiniServ } from "./MiniServ";
import { Link } from "react-router-dom";

export const TypeServices = () => {
  return (
    <div className="border border-green-300 flex flex-col items-center">
      <div>
        <h2 className="text-[#252d5c] text-[5vh] sm:text-[6vh] font-bold text-center mt-[80px]">
          I nostri servizi
        </h2>
      </div>
      <div className="lg:flex">
      <MiniServ
        titulo={"hola soy un titutlo"}
        descripcion={
          "Esta es una breve descripcion de prueva así que no se asusten, todo está bien!"
        }
      />

      <MiniServ
        titulo={"hola soy un titutlo 2"}
        descripcion={
          "Esta es una breve descripcion de prueva así que no se asusten, todo está bien!"
        }
      />

      <MiniServ
        titulo={"hola soy un titutlo 3"}
        descripcion={
          "Esta es una breve descripcion de prueva así que no se asusten, todo está bien!"
        }
      />
      </div>
      

      <div>
        <Link to="/services">
          <button className="border p-3 rounded-3xl bg-[#252d5c] text-white mb-[80px] w-[200px] shadow-2xl">
            Altri servizi
          </button>
        </Link>
      </div>
    </div>
  );
};
