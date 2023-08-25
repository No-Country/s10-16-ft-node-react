export const Register = () => {
  return (
    <div className="lg:w-3/5 w-full flex md:px-16 lg:pr-0 px-0 z-0">
      <div className="absolute lg:hidden z-10 inset-0 bg-login-background bg-no-repeat bg-cover bg-center items-center bg-[#66928c]">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      </div>
      <div className="w-full h-full lg:h-full py-6 z-20">
        <h1 className="text-primary text-3xl font-medium font font-Ubuntu mb-10">
          RallyFund
        </h1>
        <p className="font-bold text-4xl text-white lg:text-black w-2/3">
          Registrate y haz crecer tus proyectos o los de otros.
        </p>
        <form className="grid grid-cols-2 gap-9 px-4 lg:p-1 mt-10">
          <div>
            <input
              type="text"
              placeholder="Ingresá tu nombre"
              className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Ingresá tu apellido"
              className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Ingresá tu correo electrónico"
              className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6]"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Ingresá tu DNI"
              className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Elegi tu contraseña"
              className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Repeti la contraseña"
              className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6]"
            />
          </div>
          <div className="col-span-2 flex gap-2 pl-5 border-l-[#13ADB7] border-l-8 flex-col outline outline-1 outline-[#dfe1e6] bg-white p-3 rounded-lg">
            <h2 className="font-bold">¿Por qué te pedimos el DNI?</h2>
            <p className="text-sm">
              Lo usamos para validar tu identidad y así poder crear un espacio
              seguro para todos asegurándonos que no es una cuenta spam.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" className="scale-150"/>
            <label className="text-sm">Acepto los <span className="text-primary hover:text-hover underline cursor-pointer">términos y condiciones</span></label>
          </div>
          <button className="col-span-2 p-4 rounded-lg bg-primary hover:bg-hover transition-all duration-300 text-white font-bold text-base">
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
