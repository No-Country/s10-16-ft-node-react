import { FC } from 'react';

interface CheckBoxProps {
  value: string | number;
  isSelected: boolean;
  onClick: () => void;
}

export const CheckBox: FC<CheckBoxProps> = ({ value, isSelected, onClick }) => {

  const svgUnchecked = (
    <div className="w-[15px] h-[15px] rounded-full border border-[#13ADB7]"></div>
  );
  
  const svgChecked = (
    <div className="w-[15px] h-[15px] rounded-full bg-[#108087] relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className="absolute bottom-0">
        <path d="M18.8786 6.28913L8.87858 16.2891C8.79148 16.3765 8.68799 16.4459 8.57403 16.4932C8.46008 16.5405 8.3379 16.5649 8.21452 16.5649C8.09113 16.5649 7.96895 16.5405 7.855 16.4932C7.74104 16.4459 7.63755 16.3765 7.55045 16.2891L3.17545 11.9141C3.08825 11.8269 3.01907 11.7234 2.97188 11.6095C2.92468 11.4955 2.90039 11.3734 2.90039 11.2501C2.90039 11.1267 2.92468 11.0046 2.97188 10.8907C3.01907 10.7767 3.08825 10.6732 3.17545 10.586C3.26266 10.4988 3.36619 10.4296 3.48013 10.3824C3.59407 10.3352 3.71619 10.3109 3.83952 10.3109C3.96284 10.3109 4.08496 10.3352 4.1989 10.3824C4.31284 10.4296 4.41637 10.4988 4.50358 10.586L8.2153 14.2977L17.552 4.96256C17.7281 4.78644 17.967 4.6875 18.2161 4.6875C18.4651 4.6875 18.704 4.78644 18.8801 4.96256C19.0563 5.13868 19.1552 5.37755 19.1552 5.62663C19.1552 5.8757 19.0563 6.11457 18.8801 6.29069L18.8786 6.28913Z" fill="#F2F5F7"/>
      </svg>
    </div>
  );

  const checkboxSvg = isSelected ? svgChecked : svgUnchecked;

  return (
    <div
      className={`p-2 flex gap-2 text-xs rounded-lg cursor-pointer ${isSelected ? 'bg-[#13ADB7] text-white' : 'bg-white text-black'}`}
      onClick={onClick}
    >
      {checkboxSvg}
      <label htmlFor="checkbox1">{value}</label>
      
    </div>
  );
};
