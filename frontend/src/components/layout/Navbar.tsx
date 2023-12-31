import { FC, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserNavbar } from './UserNavbar';
import { useAuthStore } from '../../api/auth';

export const Navbar: FC = () => {

  const { loginUser, user } = useAuthStore();
 
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();  

  const redirectToHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navigation = [
    { name: 'INICIO', path: 'inicio' },
    { name: 'PROYECTO', path: 'proyecto' },
    { name: 'COMO FUNCIONA', path: 'como-funciona' },
    { name: 'RESEÑAS', path: 'reseñas' },
    { name: 'CONTACTO', path: 'contacto' },
  ];

  const showLoginAndRegister = (
    <Link
      to="/auth/login"
      className="relative rounded-lg bg-primary py-[0.4rem] px-3 hover:ring-2 hover:ring-primary text-white text-[18px] font-normal leading-5"
    >
      Iniciar sesión
    </Link>
  );

  const showUserNavbar = (
    <UserNavbar user={user} />
  );

  return (
    <nav className="bg-[#F2F5F7] font-Ubuntu fixed z-10 w-full top-0">
      <div className="mx-auto max-w-[80rem] px-2 sm:px-6 lg:px-8">
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
          <Link to="/" className="text-4xl font-medium text-primary md:block hidden">RallyFund</Link>
          <div className="flex flex-1 w-full items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 md:block w-full">
              <ul className="flex text-[#6E6E6E] gap-[1.5rem] text-xs font-normal justify-center w-full">
                {navigation.map((nav) => (
                  <li key={nav.name}>
                    {location.pathname !== '/' ? (
                      <a
                        onClick={redirectToHome}
                        className="py-[2px] hover:border-b-2 border-primary cursor-pointer"
                      >
                        {nav.name}
                      </a>
                    ) : (
                      <ScrollLink
                        to={nav.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="py-[2px] hover:border-b-2 border-primary cursor-pointer"
                        aria-current="page"
                      >
                        {nav.name}
                      </ScrollLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="xs:block hidden">
              {loginUser ? showUserNavbar : showLoginAndRegister}
            </div>
          </div>
        </div>
      </div>
      {openMenu && (
        <div
          className="bg-[#F2F5F7] z-10 w-full md:flex transition-all duration-300 ease-in-out absolute opacity-100 max-h-full"
          id="mobile-menu"
        >
          <ul className="bg-[#F2F5F7] space-y-1 px-2 pb-3 pt-2">
            {navigation.map((nav) => (
              <li key={nav.name}>
                {location.pathname !== '/' ? (
                  <a
                    onClick={redirectToHome}
                    className="py-[2px] hover:border-b-2 border-primary cursor-pointer"
                  >
                    {nav.name}
                  </a>
                ) : (
                  <ScrollLink
                    to={nav.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-[#6E6E6E] block rounded-md px-3 py-2 text-base font-medium"
                    aria-current="page"
                  >
                    {nav.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
          <div className="bg-[#F2F5F7] px-5 pb-3 pt-2">
            {loginUser ? showUserNavbar : showLoginAndRegister}
          </div>
        </div>
      )}

    </nav>
  );
};
