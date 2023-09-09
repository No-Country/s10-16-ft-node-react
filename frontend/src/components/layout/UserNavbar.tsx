import { profile } from '../../assets';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';

export const UserNavbar = ({ user }) => {

  return (
    <div className="flex h-full gap-[1.125rem]">
      <div className="flex items-center relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M21.4745 16.5956L20.3196 14.6492C20.077 14.2153 19.8576 13.3945 19.8576 12.9138V9.94727C19.8562 8.63876 19.49 7.35739 18.8012 6.2514C18.1124 5.14542 17.1293 4.26002 15.9656 3.69765C15.6686 3.1622 15.2353 2.71757 14.7112 2.41024C14.187 2.10291 13.5912 1.94415 12.9859 1.95057C11.7271 1.95057 10.5953 2.64236 9.99472 3.73282C7.74265 4.87018 6.18353 7.22699 6.18353 9.94727V12.9138C6.18353 13.3945 5.96409 14.2153 5.72156 14.6374L4.55511 16.5956C4.09315 17.3812 3.98921 18.2488 4.27793 19.0462C4.55511 19.8318 5.21341 20.4415 6.06804 20.7346C8.30855 21.5085 10.6646 21.8837 13.0206 21.8837C15.3766 21.8837 17.7326 21.5085 19.9731 20.7463C20.7815 20.4767 21.4052 19.8552 21.7055 19.0462C22.0057 18.2371 21.9249 17.346 21.4745 16.5956Z" fill="#F59426"/>
          <g filter="url(#filter0_d_3135_38768)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61084 21.6167C10.7387 21.7953 11.8796 21.8833 13.0205 21.8833C14.1472 21.8833 15.2738 21.7975 16.3879 21.6246C16.0491 23.1352 14.6611 24.2666 13.0002 24.2666C11.3365 24.2666 9.94653 23.1313 9.61084 21.6167Z" fill="#F59426"/>
          </g>
          <path d="M11.917 8.01662C11.917 7.41831 12.402 6.93329 13.0003 6.93329C13.5986 6.93329 14.0837 7.41831 14.0837 8.01662V11.9166C14.0837 12.5149 13.5986 13 13.0003 13C12.402 13 11.917 12.5149 11.917 11.9166V8.01662Z" fill="white"/>
          <defs>
            <filter id="filter0_d_3135_38768" x="0.61084" y="18.6167" width="24.7771" height="20.65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="6"/>
              <feGaussianBlur stdDeviation="4.5"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3135_38768"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3135_38768" result="shape"/>
            </filter>
          </defs>
        </svg>
        <div className="w-2.5 h-2.5 bg-[#F53226] rounded-full border border-white absolute top-1.5 right-0.5"></div>
      </div>
      <div className="flex items-center gap-[1.125rem]">
        {user?.profile_picture ? (
          <img src={profile} alt="" className="w-10 h-10 border-2 rounded-full p-px" />
        ) : (
          <BsPersonCircle className="w-8 h-8 text-gray-500 rounded-full p-px border-2" /> 
        )}
        <Link to="/user-profile" className="text-sm font-medium text-primary">{user?.first_name}{' '}{user?.last_name}</Link>
      </div>
    </div>
  );
};
