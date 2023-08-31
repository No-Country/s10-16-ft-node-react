import { CheckBox } from '../../components';
import { imgExample } from '../../assets';
import { CaretLeft } from '@phosphor-icons/react';
import { useState } from 'react';
export const PopUpDonation = () => {
  const [selectedValue, setSelectedValue] = useState<number | string>(0);
  /*const [isChecked, setIsChecked] = useState(false);*/

  const handleCheckboxClick = (value: string | number) => {
    setSelectedValue(value);
  };

  const cantidad = [50, 100, 200, 500, 750, 1000, 1500, 'otro'];


  return (
    <section className="w-[550px] h-[843px] m-auto">
      <div className='flex flex-col items-start gap-8'>
        <button className='flex items-center px-3 font-Poppins text-sm gap-3 border-solid border-disabled border-[1px] rounded-md'><CaretLeft /><p className='p-2.5'>Volver a la donacion </p></button>
        <div className='flex gap-[11px]'>
          <img src={imgExample} alt="" />
          <div>
            <p className='font-Poppins text-sm'> Estas apoyando a : <span className=' text-primary'>La educacion</span></p>
            <p className='font-Poppins text-sm'>Tu donacion sera para : <span className='text-primary'>ProSkills</span></p>
          </div>
        </div>
        <div>
          <div className='text-primary mb-2'>$ {selectedValue}</div>
          <hr />
          <fieldset className="flex justify-between mt-4">
            {cantidad.map((item, index) => (
              <CheckBox
                key={index}
                value={item}
                isSelected={selectedValue === item}
                onClick={() => handleCheckboxClick(item)}
              />
            ))}
          </fieldset>
        </div>
        <div className='border-[1px] border-black rounded-lg w-[90%]'>
          <div className='py-4 px-2 flex gap-2.5' >
            <input type="radio" name='payment' id="creditDebit" />
            <label htmlFor="creditDebit">Credit or debit card</label>
          </div>
          <div className='border-t-[1px] border-black border-b-[1px] py-4 px-2 flex gap-2.5'>
            <input type="radio" name='payment' id="googlePay" />
            <label htmlFor="googlePay">Google pay</label>
          </div> 
          <div className='py-4 px-2 flex gap-2.5' >
            <input type="radio" name='payment' id="applePay" />
            <label htmlFor="applePay">Apple Pay</label>
          </div>   
        </div>
        <div>
          <div>
            <input type='checkbox' id="nameDonation"  />
            <label htmlFor='nameDonation'>No mostras mi nombre en la donacion</label>
          </div>
          <div>
            <input type='checkbox' id="emailProyect" />
            <label htmlFor='emailProyect'>Obtener ocasionalmente Email sobre nuevos proyectos</label>
          </div>
        </div>
        <div>
          <p>Tu donacion</p>
          <div>
            <div className='flex'>
              <p>Tu donacion</p>
              <p>$ 100</p>
            </div>
            <div className='flex'>
              <p>Impuestos</p>
              <p>0%</p>
            </div>
            <hr />
            <div className='flex'>
              <p>Total</p>
              <p>$ 100</p>
            </div>
          </div>
        </div>
        <button>Pagar ahora</button>
      </div>
    </section>
  );
};

