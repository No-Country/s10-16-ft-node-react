import { FaTwitter, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-primary font-Ubuntu">
      <div className="mx-auto max-w-[65rem] px-2 sm:px-6 lg:px-8 flex justify-between flex-wrap py-16 text-white">
        <div>
          <h3 className="text-[1.575rem] font-bold">Ponte en contacto</h3>
          <p className="text-[0.91875rem] text-[#8EC2F2] w-[13rem] my-[1.64063rem]">the quick fox jumps over the 
            lazy dog</p>
          <div className="p-[0.65625rem] flex gap-[2.23125rem]">
            <FaTwitter className="w-[2rem] h-[2rem]" />
            <FaFacebookSquare className="w-[2rem] h-[2rem]" />
            <FaInstagram className="w-[2rem] h-[2rem]" />
          </div>
        </div>
        <div>
          <h3 className="text-[1.575rem] font-bold">Información</h3>
          <p className="text-[0.91875rem] text-[#8EC2F2] font-bold w-[13rem] mt-[1.64063rem]">Sobre nosotros</p>
          <p className="text-[0.91875rem] text-[#8EC2F2] font-bold w-[13rem] mt-[0.65625rem]">Sobre nosotros</p>
        </div>
        <div>
          <h3 className="text-[1.575rem] font-bold">Dona ahora</h3>
          <p className="text-[0.91875rem] text-[#8EC2F2] font-bold w-[13rem] mt-[1.64063rem]">Proyectos</p>
          <p className="text-[0.91875rem] text-[#8EC2F2] font-bold w-[13rem] mt-[0.65625rem]">Ayudas</p>
          <p className="text-[0.91875rem] text-[#8EC2F2] font-bold w-[13rem] mt-[0.65625rem]">Personas</p>
        </div>
      </div>
    </footer>
  );
};
