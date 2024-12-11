import car from "/logistic.png";

// eslint-disable-next-line react/prop-types
export const MiniServ = ({ titulo, descripcion }) => {
  return (
    <div className="mt-[80px] mb-[80px] flex m-8">
        <div className="flex justify-center items-center flex-col">
          <div>
            <img src={car} alt="icon car" className="w-20 mb-[25px]" />
          </div>
          <div>
            <h3 className="text-[3vh] mb-[25px]">{titulo}</h3>
          </div>
          <div>
            <p className="text-center">
              {descripcion}
            </p>
          </div>
        </div>
      </div>
  )
}
