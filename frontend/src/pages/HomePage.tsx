import { home2 } from '../assets';
import {
  Hero,
  CardsHome,
  Step,
  ButtonSectionHome,
  Review,
} from '../components/layout';

export const HomePage = () => {
  return (
    <div className="w-full bg-backgroundHome">
      <div>
        <Hero />
      </div>

      <div className="flex w-full py-10 justify-center items-center gap-2.5">
        <h2 className=" text-primary text-center font-Raleway text-4xl  font-bold   ">
          ¿Cómo Funciona?
        </h2>
      </div>

      <div>
        <Step />
      </div>

      <div className="flex w-full py-10 justify-center items-center  ">
        <h2 className=" text-primary text-center font-Raleway text-4xl  font-bold gap-2.5  ">
          Proyectos Abiertos
        </h2>
      </div>

      <div>
        <ButtonSectionHome />
      </div>

      <div>
        <CardsHome />
      </div>

      <div className="flex w-full py-10 md:py-20 flex-col items-center">
        <div className="flex flex-col md:flex-row w-full mx-auto py-10 md:py-20 items-center  justify-center bg-primary">
          <div className="flex p-4 md:p-6 items-center gap-4 self-stretch justify-center">
            <h4 className="text-white text-2xl md:text-2xl lg:text-4xl font-bold ">
              1M+
            </h4>
            <p className="w-24 md:w-44 text-white font-Poppins text-xs md:text-sm lg:text-base font-normal">
              Proyectos en listados en nuestra plataforma
            </p>
          </div>
          <div className="flex p-4 md:p-6 items-center gap-4 self-stretch justify-center">
            <h4 className="text-white text-2xl md:text-2xl lg:text-4xl font-bold ">
              98%
            </h4>
            <p className="w-24 md:w-44 text-white font-Poppins text-xs md:text-sm lg:text-base font-normal">
              De Crowfundings logran sus objetivos
            </p>
          </div>
          <div className="flex p-4 md:p-6 items-center gap-4 self-stretch justify-center">
            <h4 className="text-white text-2xl md:text-2xl lg:text-4xl font-bold ">
              4.9
            </h4>
            <p className="w-24 md:w-44 text-white font-Poppins text-xs md:text-sm lg:text-base font-normal">
              De 5 estrellas entre las mejores Crowfundings
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <img className="w-full object-cover" src={home2} alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center mt-8 md:mt-0">
          <h4 className="text-white font-Raleway text-3xl md:text-5xl lg:text-7xl text-center font-bold">
            Apoya los mejores Proyectos
          </h4>
          <p className="text-white font-Raleway text-lg  lg:text-4xl text-center w-full md:w-[619px] h-[78px] mt-2 md:mt-4">
            Dirigidos por emprendedoras
          </p>
          <div className="flex gap-2">
            <button className="text-white font-Raleway text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-5 flex p-[12px] md:p-[16px] rounded-lg bg-primary mx-auto mb-6 md:mb-0">
              Crear Proyecto
            </button>
            <button className="text-white font-Raleway text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-5 flex p-[12px] md:p-[16px] rounded-lg bg-primary mx-auto mb-6 md:mb-0">
              Apoya Ahora
            </button>
          </div>
        </div>
      </div>

      <div>
        <Review />
      </div>
    </div>
  );
};
