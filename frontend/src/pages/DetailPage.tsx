import { useEffect, useState } from 'react';
import { similar } from '../assets';
import { CheckBox, CarouselCards } from '../components';
import { useParams } from 'react-router';
// import { useAuthStore } from '../api/auth';
import db from '../api/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';
import { PopUpDonation } from '../components/layout';

type Project = {
  id: string;
  category_id: string;
  tittle: string;
  description: string;
  goal_amount: number;
  goal_acumulated: number;
  goal_currency: string;
  end_of_fundraiser: string;
  image: string;
};

export const DetailPage = () => {
  const [project, setProject] = useState<Project>();
  const [selectedValue, setSelectedValue] = useState<number | string>(0);
  // const [token, setToken] = useState<string | null>('');

  const [isChecked, setIsChecked] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const { id } = useParams();

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  // const detailProject = useAuthStore((state)=>state.detailProject);
  // const findProject = useAuthStore((state)=>state.findProject);

  // console.log(detailProject);
  
  useEffect(() => {
    const getProject = async () => {
      if (id) { // Verifica si id está definido
        const projectDoc = doc(db, 'projects', id);
        const projectSnapshot = await getDoc(projectDoc);
        const data = { ...projectSnapshot.data(), id: projectSnapshot.id } as Project;
        setProject(data);
        window.scrollTo(0, 0);
      }
    };

    getProject();
  }, [id]);
  // useEffect(()=>{
  //   if (sessionStorage.getItem('token')) {
  //     setToken(sessionStorage.getItem('token'));
  //     if (token) {
  //       findProject(id, token);
  //     }
      
  //   }
  // }, [id, findProject, token]);

  const handleCheckboxChange = () => {
    /* setIsChecked(!isChecked); */
  };

  const handleCheckboxClick = (value: string | number) => {
    setSelectedValue(value);
    setIsChecked(value === 'otro');
  };

  const cantidad = [50, 100, 200, 500, 750, 1000, 1500, 'otro'];

  const svgUnchecked = (
    <div
      className="w-[15px] h-[15px] rounded-full border border-[#13ADB7]"
      onClick={handleCheckboxChange}
    ></div>
  );

  const svgChecked = (
    <div
      className="w-[15px] h-[15px] rounded-full bg-[#108087] relative"
      onClick={handleCheckboxChange}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        className="absolute bottom-0"
      >
        <path
          d="M18.8786 6.28913L8.87858 16.2891C8.79148 16.3765 8.68799 16.4459 8.57403 16.4932C8.46008 16.5405 8.3379 16.5649 8.21452 16.5649C8.09113 16.5649 7.96895 16.5405 7.855 16.4932C7.74104 16.4459 7.63755 16.3765 7.55045 16.2891L3.17545 11.9141C3.08825 11.8269 3.01907 11.7234 2.97188 11.6095C2.92468 11.4955 2.90039 11.3734 2.90039 11.2501C2.90039 11.1267 2.92468 11.0046 2.97188 10.8907C3.01907 10.7767 3.08825 10.6732 3.17545 10.586C3.26266 10.4988 3.36619 10.4296 3.48013 10.3824C3.59407 10.3352 3.71619 10.3109 3.83952 10.3109C3.96284 10.3109 4.08496 10.3352 4.1989 10.3824C4.31284 10.4296 4.41637 10.4988 4.50358 10.586L8.2153 14.2977L17.552 4.96256C17.7281 4.78644 17.967 4.6875 18.2161 4.6875C18.4651 4.6875 18.704 4.78644 18.8801 4.96256C19.0563 5.13868 19.1552 5.37755 19.1552 5.62663C19.1552 5.8757 19.0563 6.11457 18.8801 6.29069L18.8786 6.28913Z"
          fill="#F2F5F7"
        />
      </svg>
    </div>
  );

  if (!project) {
    return (
      <div className="w-full h-screen grid place-items-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#13ADB7] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <section className="mx-auto my-20 max-w-[65rem] px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between my-10" >
          <div className="font-Poppins w-[37.375rem]">
            <h1 className="font-semibold text-2xl mb-2">
              {project?.tittle}
            </h1>
            <p className="text-xs font-normal mb-6">
              <span className="text-primary">$ {project?.goal_acumulated}</span> de{' '}
              <span className="text-primary">$ {project?.goal_amount}</span> recaudados
            </p>
            <img src={project?.image} alt="" />
            {/* <p className="text-sm text-[#6E6E6E] my-8">
                Proyecto E-learning con el que esperamos desarrollar un aplicacion
                educativa para los niños y jovenes de ecuador, asi tengan acceso a
                la informacion, desarrollar un aplicacion educativa para los niños y
                jovenes de ecuador, asi tengan acceso a la informacion, Proyecto
                E-learning con el que esperamos desarrollar un aplicacion educativa
                para los niños y jovenes de.
            </p> */}
            <h2 className="text-base mb-2">Esto queremos hacer</h2>
            <p className="text-sm text-[#6E6E6E]">
              {project?.description}
            </p>
            {/* <ul className="text-sm text-[#6E6E6E] list-disc my-6 pl-4">
              <li>Asi tengan acceso a la informacion.</li>
              <li>Lograr objetivos.</li>
              <li>Transformar vidas.</li>
              <li>Llevar la educacion a cada rincon.</li>
            </ul> */}
            <div className="w-full bg-[#13ADB70D] rounded-2xl p-6">
              <div className="flex flex-col gap-7">
                <span className="text-primary">$ {selectedValue}</span>
                <fieldset className="flex justify-between">
                  {cantidad.map((item) => (
                    <CheckBox
                      key={item}
                      value={item}
                      isSelected={selectedValue === item}
                      onClick={() => handleCheckboxClick(item)}
                    />
                  ))}
                </fieldset>
              </div>
              <fieldset className="my-6 cursor-pointer flex gap-3 items-center">
                {isChecked ? svgChecked : svgUnchecked}
                <label htmlFor="checkbox9">Hacer donación anónima</label>
              </fieldset>
              <button onClick={togglePopup} className="py-2 px-4 rounded-lg text-white bg-primary hover:bg-hover transition-all duration-300">
                  Donar ahora
              </button>
              <PopUpDonation isOpen={openPopup} onClose={handleClosePopup} image={project?.image} category={project?.category_id} isChecked={isChecked}selectedValue={selectedValue} onCheckboxChange={handleCheckboxChange} onCheckboxClick={handleCheckboxClick} id={project?.id} setSelectedValue={setSelectedValue} project={project}/>
            </div>
          </div>
          <div className="w-80 flex flex-col gap-4">
            <div className="p-6 bg-[#13ADB733] rounded-2xl">
              <div className="flex">
                <input
                  type="text"
                  className="pl-3 pt-3 pr-4 pb-3 rounded-s-full focus:outline-none text-xs w-full"
                  placeholder="Buscar proyectos..."
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="flex items-center w-14 justify-center bg-primary hover:bg-hover cursor-pointer rounded-e-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.3702 13.4556C15.6172 11.8479 16.2049 9.8256 16.0137 7.80003C15.8225 5.77446 14.8669 3.89779 13.3411 2.55182C11.8154 1.20585 9.83422 0.491685 7.80062 0.554613C5.76702 0.617541 3.83378 1.45284 2.39419 2.89057C0.953343 4.32929 0.115317 6.26329 0.0508851 8.29843C-0.0135467 10.3336 0.700465 12.3167 2.04742 13.8437C3.39437 15.3707 5.27289 16.3266 7.30016 16.5167C9.32744 16.7067 11.3509 16.1166 12.9582 14.8666L13.0012 14.9116L17.2432 19.1546C17.3361 19.2475 17.4464 19.3212 17.5678 19.3715C17.6892 19.4217 17.8193 19.4476 17.9507 19.4476C18.0821 19.4476 18.2122 19.4217 18.3336 19.3715C18.455 19.3212 18.5653 19.2475 18.6582 19.1546C18.7511 19.0617 18.8248 18.9514 18.8751 18.83C18.9254 18.7086 18.9512 18.5785 18.9512 18.4471C18.9512 18.3157 18.9254 18.1856 18.8751 18.0642C18.8248 17.9428 18.7511 17.8325 18.6582 17.7396L14.4152 13.4976C14.4006 13.4832 14.3856 13.4692 14.3702 13.4556ZM12.2942 4.30557C12.8588 4.86105 13.3078 5.52281 13.6154 6.2527C13.923 6.98259 14.083 7.76615 14.0862 8.55819C14.0894 9.35022 13.9358 10.1351 13.6342 10.8674C13.3326 11.5998 12.8889 12.2652 12.3289 12.8253C11.7688 13.3853 11.1034 13.8289 10.371 14.1306C9.63868 14.4322 8.85384 14.5858 8.06181 14.5826C7.26977 14.5793 6.48621 14.4193 5.75632 14.1118C5.02644 13.8042 4.36467 13.3552 3.80919 12.7906C2.69911 11.6623 2.07984 10.141 2.08629 8.55819C2.09273 6.97536 2.72436 5.45921 3.8436 4.33998C4.96283 3.22074 6.47899 2.58911 8.06181 2.58267C9.64463 2.57622 11.1659 3.19548 12.2942 4.30557Z"
                      fill="#F2F5F7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-[0.625rem] border rounded-2xl">
              <h3 className="w-full text-center">Categorias</h3>
              <hr className="my-[0.625rem]" />
              <div className="mb-[0.625rem] text-primary text-xs flex justify-between">
                <span className="block border border-primary p-[0.625rem] rounded-full cursor-pointer">
                    Movilidad
                </span>
                <span className="block border border-primary p-[0.625rem] rounded-full cursor-pointer">
                    Agricultura
                </span>
                <span className="block border border-primary p-[0.625rem] rounded-full cursor-pointer">
                    Tecnología
                </span>
              </div>
            </div>
            <div className="p-[0.625rem] border rounded-2xl">
              <h3 className="pb-[0.625rem] w-full text-center">
                  Proyectos similares
              </h3>
              <div className="flex gap-6">
                <img src={similar} alt="" />
                <div className="flex flex-col justify-center">
                  <p className="text-[0.875rem] text-[#6E6E6E]">
                      Enviar un satelite para mejorar la comunicación
                  </p>
                  <p className="text-xs text-[#9E9E9E]">12 diciembre</p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex gap-6">
                <img src={similar} alt="" />
                <div className="flex flex-col justify-center">
                  <p className="text-[0.875rem] text-[#6E6E6E]">
                      Enviar un satelite para mejorar la comunicación
                  </p>
                  <p className="text-xs text-[#9E9E9E]">12 diciembre</p>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex gap-6">
                <img src={similar} alt="" />
                <div className="flex flex-col justify-center">
                  <p className="text-[0.875rem] text-[#6E6E6E]">
                      Enviar un satelite para mejorar la comunicación
                  </p>
                  <p className="text-xs text-[#9E9E9E]">12 diciembre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         
        <CarouselCards />
      </section>
    );
  
  }

};
