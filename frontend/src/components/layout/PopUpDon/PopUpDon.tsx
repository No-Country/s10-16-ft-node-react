import { CheckBox } from '../..';
import { master, visa, google, apple } from '../../../assets';
// import { CaretLeft } from '@phosphor-icons/react';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import db from '../../../api/firebaseConfig';

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
  

export const PopUpDon = ({ project, closeModal }: { project: Project, closeModal: () => void }) => {
  const [selectedValue, setSelectedValue] = useState < number | string >(0);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleCheckboxClick = (value: string | number) => {
    setSelectedValue(value);
    setIsChecked(value === 'otro');
  };

  const handleCheckboxPayment = (value: string) => {
    setSelectedPayment(value);
  };

  const cantidad = [50, 100, 200, 500, 750, 1000, 1500, 'otro'];
  const payment = [{ img: master, img1: visa, pay: 'Credit or debit card' }, { img: google, pay: 'Google pay' }, { img: apple, pay: 'Apple pay' }];

  const donationAmount = (project.goal_acumulated) + Number(selectedValue);

  const makeDonation = async () => {
    try {
      const projectRef = doc(db, 'projects', project.id);

      await updateDoc(projectRef, {
        goal_acumulated: project.goal_acumulated + Number(selectedValue),
      });
      console.log('Donacion realizada con exito', project.goal_acumulated);
    } catch (error) {
      console.error('Error al realizar la donacion', error);
    }
  };

  const handlePayment = async () => {
    console.log('selectedValue', selectedValue);

    await makeDonation();

    closeModal();
  };

  return (
    <section className="w-[550px] h-[70vh] md:h-[65vh] mx-auto mt-6 font-Poppins">
      <div className='flex flex-col items-center gap-8'>
        <div className='flex flex-col gap-[11px]'>
          <img src={project.image} alt="" />
          <div className='text-center'>
            <p className='font-Poppins text-lg'> Estas apoyando a: <span className=' text-primary'>{project.category_id}</span></p>
            <p className='font-Poppins text-lg'>Tu donacion sera para: <span className='text-primary'>{project.tittle}</span></p>
          </div>
        </div>
        <div>
          {
            !isChecked
              ? (
                <input 
                  className='text-primary mb-2' 
                  value={`$ ${selectedValue}`} 
                />)
              : 
              (
                <>
                  <span className='text-primary mb-2 mr-1'>$</span>
                  <input 
                    type='number'
                    className='text-primary mb-2' 
                    ref={isChecked ? (input) => input && input.focus() : null} 
                    onChange={(e) => {
                      const numericValue = Number(e.target.value);
                      if (!isNaN(numericValue)) {
                        setSelectedValue(numericValue);
                      }
                    }}
                  />
                </>
              )
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
              payment.map((pay, index) => (
                <div className={`flex items-center pl-4 ${index < 2 ? 'border-b-[1px] border-black pb-4' : ''}`}>
                  <CheckBox key={index} value='' isSelected={selectedPayment === pay.pay} onClick={() => handleCheckboxPayment(pay.pay)} />
                  <img className='w-6 mr-2.5' src={pay.img} alt='' />
                  {
                    pay.img1 && <img className='w-6 mr-2.5' src={pay.img1} alt='' />
                  }
                  <p className=' text-xs'>{pay.pay}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='text-cards'>
          <div className='flex gap-3'>
            <input type='checkbox' id="nameDonation" />
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
              <p>$ {donationAmount}</p>
            </div>
          </div>
        </div>
        <button className="m-auto mb-6 p-2.5 rounded-lg bg-primary text-white hover:bg-hover" onClick={handlePayment}>Pagar ahora</button>
      </div>
    </section>
  );
};

