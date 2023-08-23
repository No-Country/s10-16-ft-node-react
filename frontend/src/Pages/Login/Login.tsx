export const Login = () => {
  return (
    <section className="min-h-screen flex items-stretch bg-background">
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
        {/* <div>En este div va a ir la imagen de la derecha nuevamente para suponer el login en la version mobile</div> */}
        <div className="w-full py-6 z-20">
          <h1 className="text-primary text-6xl font-medium font pb-40 font-Ubuntu">
            RallyFund
          </h1>
          <p className="font-bold text-4xl ">¡Hola nuevamente!</p>
          <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="my-6">
              <input
                type="email"
                placeholder="Ingresá tu correo electrónico"
                className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6]"
              />
            </div>
            <div className="my-2">
              <input
                type="password"
                placeholder="Ingresá tu contraseña"
                className="w-full p-4 rounded bg-white outline outline-1 outline-[#dfe1e6]"
              />
            </div>
            <div>
              <p className="text-primary font-bold underline text-xs text-start">
                Recupera tu contraseña
              </p>
            </div>
            <div className="my-6">
              <button className="w-full p-4 rounded-lg bg-primary hover:bg-hover transition-all duration-300 text-white font-bold text-base">
                Iniciar sesión
              </button>
            </div>
            <div className="flex text-center justify-center gap-3 text-xs font-normal">
              <p>¿No tenes una cuenta?</p>
              <p className="text-primary font-bold underline ">Registrate</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
