import { FC, useState } from 'react';

export const Navbar: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navigation = [
    { name: 'INICIO', to: '/' },
    { name: 'PROYECTO', to: '/proyecto' },
    { name: 'COMO FUNCIONA', to: '/como-funciona' },
    { name: 'RESEÑAS', to: '/reseñas' },
    { name: 'CONTACTO', to: '/contacto' },
  ];
  return (
    <nav className="bg-[#F2F5F7]">
      <div className="mx-auto max-w-[90rem] px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-[3.75rem] items-center justify-between">
          <div className="absolute inset-y-0 sm:left-0 right-0 flex items-center md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[#6E6E6E]"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {openMenu ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div className="hidden sm:ml-6 md:block w-full">
              <ul className="flex text-[#6E6E6E] gap-[1.5rem] text-xs font-normal justify-center w-full">
                {navigation.map((nav) => (
                  <li key={nav.name}>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2"
                      aria-current="page"
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative sm:block hidden rounded-lg bg-[#13ADB7] p-[10px] text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-lg font-medium leading-5"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#F2F5F7] w-full md:flex transition-all duration-300 ease-in-out absolute ${
          openMenu ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'
        }`}
        id="mobile-menu"
      >
        <ul className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((nav) => (
            <li key={nav.name}>
              <a
                href="#"
                className="text-[#6E6E6E] block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5 pb-3 pt-2">
          <button
            type="button"
            className="relative sm:block md:hidden rounded-lg bg-[#13ADB7] p-[10px] text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-lg font-medium leading-5"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};
