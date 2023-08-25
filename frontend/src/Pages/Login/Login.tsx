import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="lg:w-3/5 w-full flex items-center justify-center text-center md:px-16 lg:pr-0 px-0 z-0">
      <div className="absolute lg:hidden z-10 inset-0 bg-login-background bg-no-repeat bg-cover bg-center items-center bg-[#66928c]">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      </div>
      <div className="w-full h-full lg:h-full py-6 z-20">
        <h1 className="text-primary text-6xl font-medium font pb-20 sm:pb-40 font-Ubuntu">
          RallyFund
        </h1>
        <p className="font-bold text-4xl text-white lg:text-black">
          ¡Hola nuevamente!
        </p>
        <form
          action=""
          className="sm:w-2/3 w-full lg:h-2/3 px-4 lg:p-1 mx-auto"
        >
          <div className="relative my-6">
            <input
              type="email"
              className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6] input"
            />
            <label
              htmlFor="email"
              className="absolute top-0 left-0 mt-4 ml-4 cursor-text text-gray-400 transition-all duration-200 ease-out label"
            >
              Ingresá tu correo electrónico
            </label>
          </div>
          <div className="relative my-2">
            <input
              type="password"
              className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6] input"
            />
            <label
              htmlFor="password"
              className="absolute top-0 left-0 mt-4 ml-4 cursor-text text-gray-400 transition-all duration-200 ease-out label"
            >
              Ingresá tu contraseña
            </label>
          </div>
          <div>
            <p className="text-primary hover:text-hover font-bold underline text-xs text-start cursor-pointer">
              Recupera tu contraseña
            </p>
          </div>
          <div className="my-6">
            <button className="w-full p-4 rounded-lg bg-primary hover:bg-hover transition-all duration-300 text-white font-bold text-base">
              Iniciar sesión
            </button>
          </div>
          <div className="flex text-center justify-center gap-3 text-xs font-normal">
            <p className="text-white lg:text-black">¿No tenes una cuenta?</p>
            <p className="text-primary hover:text-hover font-bold underline cursor-pointer">
              <Link to="registerchoice">Registrate</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};