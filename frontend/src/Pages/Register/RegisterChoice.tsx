import { useState } from 'react';
import phonePersonal from '../Register/img/phone-personal.png';
import phoneTercero from '../Register/img/phone-terceros.png';

export const RegisterChoice = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleChoice = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="lg:w-3/5 w-full flex md:px-16 lg:pr-0 px-0 z-0">
      <div className="absolute lg:hidden z-10 inset-0 bg-login-background bg-no-repeat bg-cover bg-center items-center bg-[#66928c]">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      </div>
      <div className="w-full h-full lg:h-full py-6 z-20">
        <h1 className="text-primary text-6xl font-medium font font-Ubuntu mb-10">
          RallyFund
        </h1>
        <p className="font-bold text-4xl text-white lg:text-black w-2/3">
          Unite a nuestra comunidad
        </p>
        <p className="text-2xl mt-4 text-white lg:text-black w-2/3">
          Elegí el rol que sea más adecuado para vos.
        </p>
        <form className="grid grid-cols-2 gap-9 px-4 lg:p-1 mt-14">
          <div
            className={`${
              isClicked
                ? 'bg-primary text-white cursor-pointer'
                : 'hover:bg-primary hover:text-white cursor-pointer bg-white text-black'
            } transition-all duration-300 flex rounded-xl flex-col gap-4 outline outline-1 outline-[#dfe1e6] p-6`}
            onClick={handleChoice}
          >
            <img
              src={phoneTercero}
              alt=""
              className="w-10 aspect-square object-contain"
            />
            <h2 className="font-bold text-2xl">Terceros</h2>
            <p className="text-xl w-2/3">Para organizaciones o empresas.</p>
          </div>
          <div
            className={`${
              isClicked
                ? 'bg-primary text-white cursor-pointer'
                : 'hover:bg-primary hover:text-white cursor-pointer bg-white text-black'
            } transition-all duration-300 flex rounded-xl flex-col gap-4 outline outline-1 outline-[#dfe1e6] p-6`}
            onClick={handleChoice}
          >
            <img
              src={phonePersonal}
              alt=""
              className="w-10 aspect-square object-contain"
            />
            <h2 className="font-bold text-2xl">Personal</h2>
            <p className="text-xl w-2/3">
              Crea tu crowfunding o ayuda a otros.
            </p>
          </div>
          <button className="col-span-2 p-4 rounded-lg bg-primary hover:bg-hover transition-all duration-300 text-white font-bold text-base mt-10">
            Continuar
          </button>
        </form>
        <div className="flex text-center justify-center mt-5 gap-3 text-xs font-normal">
          <p className="text-white lg:text-black">¿Ya tenes una cuenta?</p>
          <p className="text-primary hover:text-hover font-bold underline cursor-pointer">
            Ingresá
          </p>
        </div>
      </div>
    </div>
  );
};
