import { useState } from 'react';
import { profile } from '../assets';
import { useAuthStore } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

export const UserProfile = () => {

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const [activeI, setActiveI] = useState<number | null>(null);

  const handleItemClick = (i: number | null) => {
    setActiveI(i);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <section className="p-6 bg-[#F2F5F7] flex gap-6 my-12">
      <div className="bg-white flex flex-col justify-between w-[11rem] h-screen py-6 px-3">
        <ul className="w-full flex flex-col gap-2">
          <li onClick={() => handleItemClick(0)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 0 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              className="fill-current group-hover:text-primary"
            >
              <path
                d="M2.25 18.5H5.625V11.75H12.375V18.5H15.75V8.375L9 3.3125L2.25 8.375V18.5ZM0 20.75V7.25L9 0.5L18 7.25V20.75H10.125V14H7.875V20.75H0Z"
              />
            </svg>
            Inicio
          </li>
          <li onClick={() => handleItemClick(1)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 1 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" className="fill-current group-hover:text-primary">
              <path d="M18.4444 20.5L11.4444 13.5C10.8889 13.9444 10.25 14.2963 9.52778 14.5556C8.80556 14.8148 8.03704 14.9444 7.22222 14.9444C5.2037 14.9444 3.49537 14.2454 2.09722 12.8472C0.699074 11.4491 0 9.74074 0 7.72222C0 5.7037 0.699074 3.99537 2.09722 2.59722C3.49537 1.19907 5.2037 0.5 7.22222 0.5C9.24074 0.5 10.9491 1.19907 12.3472 2.59722C13.7454 3.99537 14.4444 5.7037 14.4444 7.72222C14.4444 8.53704 14.3148 9.30556 14.0556 10.0278C13.7963 10.75 13.4444 11.3889 13 11.9444L20 18.9444L18.4444 20.5ZM7.22222 12.7222C8.61111 12.7222 9.79167 12.2361 10.7639 11.2639C11.7361 10.2917 12.2222 9.11111 12.2222 7.72222C12.2222 6.33333 11.7361 5.15278 10.7639 4.18056C9.79167 3.20833 8.61111 2.72222 7.22222 2.72222C5.83333 2.72222 4.65278 3.20833 3.68056 4.18056C2.70833 5.15278 2.22222 6.33333 2.22222 7.72222C2.22222 9.11111 2.70833 10.2917 3.68056 11.2639C4.65278 12.2361 5.83333 12.7222 7.22222 12.7222Z"/>
            </svg>
            Buscar
          </li>
          <li onClick={() => handleItemClick(2)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 2 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" min-width="18" min-height="14" viewBox="0 0 20 18" fill="none" className="fill-current group-hover:text-primary">
              <path d="M2 16H6V8H2V16ZM8 16H12V2H8V16ZM14 16H18V10H14V16ZM0 18V6H6V0H14V8H20V18H0Z"/>
            </svg>
            Historial de transacciones
          </li>
          <li onClick={() => handleItemClick(3)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 3 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="fill-current group-hover:text-primary">
              <path d="M7.3 20.5L6.9 17.3C6.68333 17.2167 6.47917 17.1167 6.2875 17C6.09583 16.8833 5.90833 16.7583 5.725 16.625L2.75 17.875L0 13.125L2.575 11.175C2.55833 11.0583 2.55 10.9458 2.55 10.8375V10.1625C2.55 10.0542 2.55833 9.94167 2.575 9.825L0 7.875L2.75 3.125L5.725 4.375C5.90833 4.24167 6.1 4.11667 6.3 4C6.5 3.88333 6.7 3.78333 6.9 3.7L7.3 0.5H12.8L13.2 3.7C13.4167 3.78333 13.6208 3.88333 13.8125 4C14.0042 4.11667 14.1917 4.24167 14.375 4.375L17.35 3.125L20.1 7.875L17.525 9.825C17.5417 9.94167 17.55 10.0542 17.55 10.1625V10.8375C17.55 10.9458 17.5333 11.0583 17.5 11.175L20.075 13.125L17.325 17.875L14.375 16.625C14.1917 16.7583 14 16.8833 13.8 17C13.6 17.1167 13.4 17.2167 13.2 17.3L12.8 20.5H7.3ZM10.1 14C11.0667 14 11.8917 13.6583 12.575 12.975C13.2583 12.2917 13.6 11.4667 13.6 10.5C13.6 9.53333 13.2583 8.70833 12.575 8.025C11.8917 7.34167 11.0667 7 10.1 7C9.11667 7 8.2875 7.34167 7.6125 8.025C6.9375 8.70833 6.6 9.53333 6.6 10.5C6.6 11.4667 6.9375 12.2917 7.6125 12.975C8.2875 13.6583 9.11667 14 10.1 14ZM10.1 12C9.68333 12 9.32917 11.8542 9.0375 11.5625C8.74583 11.2708 8.6 10.9167 8.6 10.5C8.6 10.0833 8.74583 9.72917 9.0375 9.4375C9.32917 9.14583 9.68333 9 10.1 9C10.5167 9 10.8708 9.14583 11.1625 9.4375C11.4542 9.72917 11.6 10.0833 11.6 10.5C11.6 10.9167 11.4542 11.2708 11.1625 11.5625C10.8708 11.8542 10.5167 12 10.1 12ZM9.05 18.5H11.025L11.375 15.85C11.8917 15.7167 12.3708 15.5208 12.8125 15.2625C13.2542 15.0042 13.6583 14.6917 14.025 14.325L16.5 15.35L17.475 13.65L15.325 12.025C15.4083 11.7917 15.4667 11.5458 15.5 11.2875C15.5333 11.0292 15.55 10.7667 15.55 10.5C15.55 10.2333 15.5333 9.97083 15.5 9.7125C15.4667 9.45417 15.4083 9.20833 15.325 8.975L17.475 7.35L16.5 5.65L14.025 6.7C13.6583 6.31667 13.2542 5.99583 12.8125 5.7375C12.3708 5.47917 11.8917 5.28333 11.375 5.15L11.05 2.5H9.075L8.725 5.15C8.20833 5.28333 7.72917 5.47917 7.2875 5.7375C6.84583 5.99583 6.44167 6.30833 6.075 6.675L3.6 5.65L2.625 7.35L4.775 8.95C4.69167 9.2 4.63333 9.45 4.6 9.7C4.56667 9.95 4.55 10.2167 4.55 10.5C4.55 10.7667 4.56667 11.025 4.6 11.275C4.63333 11.525 4.69167 11.775 4.775 12.025L2.625 13.65L3.6 15.35L6.075 14.3C6.44167 14.6833 6.84583 15.0042 7.2875 15.2625C7.72917 15.5208 8.20833 15.7167 8.725 15.85L9.05 18.5Z"/>
            </svg>
            Configuración
          </li>
        </ul>
        <button onClick={handleLogout} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 0 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none" className="fill-current group-hover:text-primary">
          <path d="M4.7619 8.11905H16.3333L14.8571 6.64286L16.1905 5.2619L20 9.07143L16.1905 12.881L14.8571 11.5L16.3333 10.0238H4.7619V8.11905ZM11.4286 6.21429V2.40476H1.90476V15.7381H11.4286V11.9286H13.3333V15.7381C13.3333 16.2619 13.1468 16.7103 12.7738 17.0833C12.4008 17.4563 11.9524 17.6429 11.4286 17.6429H1.90476C1.38095 17.6429 0.93254 17.4563 0.559524 17.0833C0.186508 16.7103 0 16.2619 0 15.7381V2.40476C0 1.88095 0.186508 1.43254 0.559524 1.05952C0.93254 0.686508 1.38095 0.5 1.90476 0.5H11.4286C11.9524 0.5 12.4008 0.686508 12.7738 1.05952C13.1468 1.43254 13.3333 1.88095 13.3333 2.40476V6.21429H11.4286Z"/>
        </svg>Cerrar sesión</button>
      </div>
      <div className="bg-white w-full">
        <div className="py-[2.375rem] px-6 flex justify-between">
          <span className="text-2xl font-bold">Configuración</span>
          <div className="flex gap-6">
            <button className="px-9 py-2 border border-primary text-sm font-bold text-primary rounded">Cancelar</button>
            <button className="px-9 py-2 text-sm font-bold bg-primary text-white rounded">Guardar</button>
          </div>
        </div>
        <div className="flex">
          <div className="bg-white flex flex-col justify-between w-[13rem] h-full  py-[3.375rem] px-6">
            <ul className="w-full flex flex-col gap-6">
              <li onClick={() => handleItemClick(3)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 3 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}>
                Mi perfil
              </li>
              <li onClick={() => handleItemClick(4)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 4 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}>
                Documentos
              </li>
              <li onClick={() => handleItemClick(5)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 5 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}>
                Pagos
              </li>
              <li onClick={() => handleItemClick(6)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 6 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-black'}`}>
                Notificaciones
              </li>
              <li onClick={() => handleItemClick(7)} className={`flex items-center cursor-pointer py-2 px-[0.875rem] gap-4 hover:bg-[#E2EAF5] hover:font-bold hover:text-primary text-[0.875rem] rounded ${activeI === 7 ? 'text-primary bg-[#E2EAF5] font-bold' : 'text-red-500'}`}>
                Eliminar cuenta
              </li>
            </ul>
          </div>
          <div className="px-6 w-full border-l-2">
            <div>
              <p className="font-bold my-3">Mi perfil</p>
              <div className="px-6 py-[1.125rem] flex justify-between w-full border border-[#E1E1E1] rounded">
                <div className="flex items-center gap-5">
                  {user?.first_name ? (
                    <BsPersonCircle className="w-12 h-12 text-gray-500 rounded-full" /> 
                  ) : (
                    <img src={profile} alt="" className="w-10 h-10 border-2 rounded-full p-px" />
                  )}
                  <p className="flex flex-col"><span className="text-lg font-bold">{user?.first_name}{' '}{user?.last_name}</span><span className="text-sm">Argentina</span></p>
                </div>
                <div>
                  <button className="border border-primary text-primary text-sm font-bold px-3 py-1 rounded-md flex items-center gap-2">Editar <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                    <path d="M0 14V11.4532H13V14H0ZM1.3 10.1797V7.79207L7.1825 2.02983L9.62 4.4175L3.7375 10.1797H1.3ZM2.6 8.90631H3.185L7.8 4.4175L7.1825 3.81262L2.6 8.33327V8.90631ZM10.3512 3.71712L7.91375 1.32945L9.08375 0.183373C9.20292 0.0560306 9.35458 -0.00498757 9.53875 0.000318355C9.72292 0.00562428 9.87458 0.0666424 9.99375 0.183373L11.5212 1.67964C11.6404 1.79637 11.7 1.94229 11.7 2.11738C11.7 2.29248 11.6404 2.4437 11.5212 2.57104L10.3512 3.71712Z" fill="#13ADB7"/>
                  </svg></button>
                </div>
              </div>
            </div>
            <div className="px-6 py-[1.125rem] my-12 border border-[#E1E1E1] rounded">
              <div className="mb-3 flex justify-between">
                <span className="font-bold">Información personal</span>
                <button className="border border-primary text-primary text-sm font-bold px-3 py-1 rounded-md flex items-center gap-2">Editar <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <path d="M0 14V11.4532H13V14H0ZM1.3 10.1797V7.79207L7.1825 2.02983L9.62 4.4175L3.7375 10.1797H1.3ZM2.6 8.90631H3.185L7.8 4.4175L7.1825 3.81262L2.6 8.33327V8.90631ZM10.3512 3.71712L7.91375 1.32945L9.08375 0.183373C9.20292 0.0560306 9.35458 -0.00498757 9.53875 0.000318355C9.72292 0.00562428 9.87458 0.0666424 9.99375 0.183373L11.5212 1.67964C11.6404 1.79637 11.7 1.94229 11.7 2.11738C11.7 2.29248 11.6404 2.4437 11.5212 2.57104L10.3512 3.71712Z" fill="#13ADB7"/>
                </svg></button>
              </div>
              <div className="flex gap-52 items-center">
                <div className="w-36">
                  <p className="text-sm flex flex-col gap-3 mb-12"><span className="text-primary">Nombre</span><span>{user?.first_name}</span></p>
                  <p className="text-sm flex flex-col gap-3"><span className="text-primary">Correr electrónico</span><span>{user?.email}</span></p>
                </div>
                <div>
                  <p className="text-sm flex flex-col gap-3 mb-12"><span className="text-primary">Apellido</span><span>{user?.last_name}</span></p>
                  <p className="text-sm flex flex-col gap-3 mb-12"><span className="text-primary">Contraseña</span><span>**********</span></p>
                  <p className="text-sm flex flex-col gap-3 font-Raleway"><span className="text-primary">Celular</span><span>+54 654 5465</span></p>
                </div>
              </div>
            </div>
            <div className="px-6 py-[1.125rem] my-12 border border-[#E1E1E1] rounded">
              <div className="mb-3 flex justify-between">
                <span className="font-bold">Dirección</span>
                <button className="border border-primary text-primary text-sm font-bold px-3 py-1 rounded-md flex items-center gap-2">Editar <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <path d="M0 14V11.4532H13V14H0ZM1.3 10.1797V7.79207L7.1825 2.02983L9.62 4.4175L3.7375 10.1797H1.3ZM2.6 8.90631H3.185L7.8 4.4175L7.1825 3.81262L2.6 8.33327V8.90631ZM10.3512 3.71712L7.91375 1.32945L9.08375 0.183373C9.20292 0.0560306 9.35458 -0.00498757 9.53875 0.000318355C9.72292 0.00562428 9.87458 0.0666424 9.99375 0.183373L11.5212 1.67964C11.6404 1.79637 11.7 1.94229 11.7 2.11738C11.7 2.29248 11.6404 2.4437 11.5212 2.57104L10.3512 3.71712Z" fill="#13ADB7"/>
                </svg></button>
              </div>
              <div className="flex gap-52 items-center">
                <div className="w-36">
                  <p className="text-sm flex flex-col gap-3 mb-12"><span className="text-primary">País</span><span>Argentina</span></p>
                  <p className="text-sm flex flex-col gap-3"><span className="text-primary">Código postal</span><span>0123</span></p>
                </div>
                <div>
                  <p className="text-sm flex flex-col gap-3 mb-12"><span className="text-primary">Provincia</span><span>Mendoza</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
