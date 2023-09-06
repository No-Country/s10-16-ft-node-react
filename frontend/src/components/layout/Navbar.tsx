import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navigation = [
    { name: 'INICIO' },
    { name: 'PROYECTO' },
    { name: 'COMO FUNCIONA' },
    { name: 'RESEÑAS' },
    { name: 'CONTACTO' },
  ];
  return (
    <nav className="bg-[#F2F5F7] font-Ubuntu">
      <div className="mx-auto max-w-[65rem] px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-[3.75rem] items-center justify-between">
          <div className="absolute inset-y-0 xs:left-0 right-0 flex items-center md:hidden">
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
          <div className="absolute flex flex-1 w-full items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 md:block w-full">
              <ul className="flex text-[#6E6E6E] gap-[1.5rem] text-xs font-normal justify-center w-full">
                {navigation.map((nav) => (
                  <li key={nav.name}>
                    <div
                      className="py-[2px] hover:border-b-2 border-primary cursor-pointer"
                      aria-current="page"
                    >
                      {nav.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full justify-end flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              to="/auth/login"
              className="relative xs:block hidden rounded-lg bg-primary py-[0.4rem] px-3 hover:ring-2 hover:ring-primary text-white text-[18px] font-normal leading-5"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
      {openMenu && (
        <div
          className="bg-[#F2F5F7] z-10 w-full md:flex transition-all duration-300 ease-in-out absolute opacity-100 max-h-full"
          id="mobile-menu"
        >
          <ul className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((nav) => (
              <li key={nav.name}>
                <div
                  className="text-[#6E6E6E] block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  {nav.name}
                </div>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-3 pt-2">
            <Link
              to="/auth/login"
              className="relative xs:hidden rounded-lg bg-primary py-[0.4rem] px-3 text-white text-[18px] font-normal leading-5"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
};
