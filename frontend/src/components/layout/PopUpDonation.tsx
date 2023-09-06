import { CheckBox } from '../../components';
import { imgExample, master, visa, google, apple } from '../../assets';
import { CaretLeft } from '@phosphor-icons/react';
import { useState } from 'react';
export const PopUpDonation = () => {
  const [selectedValue, setSelectedValue] = useState<number | string >(0);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleCheckboxClick = (value: string | number ) => {
    setSelectedValue(value);
    setIsChecked(value === 'otro');
  };

  const handleCheckboxPayment = (value: string)=>{
    setSelectedPayment(value);
  };

  const cantidad = [50, 100, 200, 500, 750, 1000, 1500, 'otro'];
  const payment = [{ img: master, img1: visa, pay: 'Credit or debit card' }, { img: google, pay: 'Google pay' }, { img: apple, pay: 'Apple pay' }];


  return (
    <section className="w-[550px] h-[843px] m-auto font-Poppins">
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
          {
            !isChecked
              ? <input className='text-primary mb-2' value={`$ ${selectedValue}`} />
              : <input className='text-primary mb-2' ref={isChecked ? (input)=> input && input.focus() : null} onChange={(value)=> setSelectedValue(value.target.value)}/>
          }
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
          <div className='py-4 flex gap-2.5 flex-col text-cards' >
            {
              payment.map((pay, index)=>(
                <div className={`flex items-center pl-4 ${index < 2 ? 'border-b-[1px] border-black pb-4' : ''}`}>
                  <CheckBox  key={index} value='' isSelected={selectedPayment === pay.pay} onClick={()=>handleCheckboxPayment(pay.pay)}/>
                  <img className='w-6 mr-2.5' src={pay.img} alt=''/>
                  {
                    pay.img1 && <img className='w-6 mr-2.5' src={pay.img1} alt=''/>
                  }
                  <p className=' text-xs'>{pay.pay}</p>
                </div>
              ))
            }
          </div> 
        </div>
        <div className='text-cards'>
          <div className='flex gap-3'>
            <input type='checkbox' id="nameDonation"  />
            <label htmlFor='nameDonation'>No mostrar mi nombre en la donacion</label>
          </div>
          <div className='flex gap-3'>
            <input type='checkbox' id="emailProyect" />
            <label htmlFor='emailProyect'>Obtener ocasionalmente Email sobre nuevos proyectos</label>
          </div>
        </div>
        <div className='text-cards w-full'>
          <p className='text-sm pb-4'>Tu donacion</p>
          <div className='text-xs'>
            <div className='flex justify-between pb-[13px]'>
              <p>Tu donacion</p>
              {
                selectedValue === 'otro'
                  ? <p>0</p>
                  : <p>$ {selectedValue}</p>
              }
            </div>
            <div className='flex justify-between pb-[13px]'>
              <p>Impuestos</p>
              <p>0%</p>
            </div>
            <hr className='pb-[13px] border-black' />
            <div className='flex justify-between text-base'>
              <p>Total</p>
              <p>$ 100</p>
            </div>
          </div>
        </div>
        <button className="m-auto p-2.5 rounded-lg bg-primary text-white hover:bg-hover">Pagar ahora</button>
      </div>
    </section>
  );
};

