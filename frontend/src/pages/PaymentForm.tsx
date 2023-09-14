import { FC } from 'react';
import { amex, discover, master, visa } from '../assets';
import { countries } from '../data/countries';

type PaymentProps = {
  isOpenPayment: boolean;
  onClosePayment: () => void;
  onClickPayment: () => void;
};

export const PaymentForm: FC<PaymentProps> = ({ isOpenPayment, onClosePayment, onClickPayment }) => {

  if (!isOpenPayment) {
    return null;
  }

  return (
    <section className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none py-6">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full h-screen grid place-content-center z-10">
        <div className="p-s p-12 bg-white">
          <div className="text-sm font-semibold text-[#727F96] flex gap-4">
            <button className="py-2.5 px-3 border-2 rounded-md w-36 h-16 flex flex-col justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H0V3.25C0 2.56 0.448 2 1 2H15C15.552 2 16 2.56 16 3.25V4ZM16 6.5V13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H1C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13V6.5H16ZM4 10C3.73478 10 3.48043 10.1054 3.29289 10.2929C3.10536 10.4804 3 10.7348 3 11C3 11.2652 3.10536 11.5196 3.29289 11.7071C3.48043 11.8946 3.73478 12 4 12H5C5.26522 12 5.51957 11.8946 5.70711 11.7071C5.89464 11.5196 6 11.2652 6 11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10H4Z" fill="#0570DE"/>
            </svg>Card</button>
            <button className="py-2.5 px-3 border-2 rounded-md w-36 h-16 flex flex-col justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
              <path d="M20.0838 11.2286C20.0838 10.4965 20.0179 9.79588 19.8954 9.12219H10.4188V12.9818L15.8766 12.983C15.6552 14.2672 14.9428 15.362 13.8513 16.0918V18.5959H17.1C18.997 16.852 20.0838 14.2742 20.0838 11.2286Z" fill="#4285F4"/>
              <path d="M13.8524 16.0918C12.9481 16.6977 11.7835 17.0521 10.4211 17.0521C7.78939 17.0521 5.55684 15.2907 4.75731 12.9164H1.40613V15.4988C3.06641 18.7714 6.47883 21.017 10.4211 21.017C13.1459 21.017 15.435 20.1269 17.1011 18.5947L13.8524 16.0918Z" fill="#34A853"/>
              <path d="M4.44169 11.0006C4.44169 10.3339 4.55356 9.68946 4.75727 9.08362V6.50116H1.40608C0.719595 7.85437 0.333374 9.38186 0.333374 11.0006C0.333374 12.6193 0.720772 14.1468 1.40608 15.5L4.75727 12.9175C4.55356 12.3117 4.44169 11.6672 4.44169 11.0006Z" fill="#FABB05"/>
              <path d="M10.4211 4.94794C11.9083 4.94794 13.2401 5.45671 14.2916 6.45086L17.1706 3.59356C15.422 1.97601 13.1423 0.983032 10.4211 0.983032C6.48001 0.983032 3.06641 3.22864 1.40613 6.50115L4.75731 9.08361C5.55684 6.70934 7.78939 4.94794 10.4211 4.94794Z" fill="#E94235"/>
            </svg>Google Pay</button>
            <button className="py-2.5 px-3 border-2 rounded-md w-36 h-16 flex flex-col justify-center"><svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.87329 2.99023C9.28931 3.69775 8.30103 4.22559 7.51489 4.22559C7.42505 4.22559 7.33521 4.21436 7.27905 4.20312C7.26782 4.1582 7.24536 4.02344 7.24536 3.88867C7.24536 2.99023 7.70581 2.0918 8.19995 1.53027C8.82886 0.789062 9.88452 0.23877 10.7605 0.205078C10.783 0.306152 10.7942 0.429688 10.7942 0.553223C10.7942 1.45166 10.4124 2.33887 9.87329 2.99023ZM10.491 4.4165C10.9851 4.4165 12.7708 4.46143 13.9387 6.146C13.8376 6.22461 12.0632 7.22412 12.0632 9.45898C12.0632 12.042 14.3206 12.9629 14.3879 12.9854C14.3767 13.0415 14.0286 14.2319 13.1975 15.4561C12.4563 16.5229 11.6702 17.6011 10.491 17.6011C9.30054 17.6011 8.99731 16.9048 7.63843 16.9048C6.302 16.9048 5.83032 17.6235 4.7522 17.6235C3.66284 17.6235 2.9104 16.624 2.04565 15.4111C1.03491 13.9736 0.226318 11.75 0.226318 9.63867C0.226318 6.2583 2.42749 4.46143 4.59497 4.46143C5.74048 4.46143 6.69507 5.21387 7.42505 5.21387C8.11011 5.21387 9.177 4.4165 10.491 4.4165Z" fill="black"/>
            </svg>Apple Pay</button>
          </div>
          <div className="flex flex-col gap-1 my-2.5">
            <label className="text-sm font-semibold text-[#4F5B76]">Card number</label>
            <div className="relative flex">
              <input type="text" aria-label='a' className="border-2 px-3 py-2.5 text-[0.8125rem] text-[#A5ACB8] font-semibold rounded-md w-full" placeholder='1234 1234 1234 1234' />
              <div className="absolute flex px-3 py-3 right-0 gap-2">
                <img src={visa} alt="" />
                <img src={master} alt="" />
                <img src={discover} alt="" />
                <img src={amex} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap my-2.5 justify-between">
            <div className="w-full md:w-[49%]">
              <label className="text-sm font-semibold text-[#4F5B76]">Expiry</label>
              <input type="text" aria-label='a' className="border-2 px-3 py-2.5 text-[0.8125rem] text-[#A5ACB8] font-semibold rounded-md block w-full" placeholder='MM/YY' />
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-sm font-semibold text-[#4F5B76]">CVC</label>
              <input type="text" aria-label='a' className="border-2 px-3 py-2.5 text-[0.8125rem] text-[#A5ACB8] font-semibold rounded-md block w-full" placeholder='CVC' />
            </div>
          </div>
          <div className="flex flex-wrap my-2.5 justify-between">
            <div className="w-full md:w-[49%]">
              <label className="text-sm font-semibold text-[#4F5B76]">Country</label>
              <div className="relative">
                <select className="border-2 px-3 py-2.5 text-[0.8125rem] text-[#A5ACB8] font-semibold rounded-md block w-full appearance-none">
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#A5ACB8]">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[49%]">
              <label className="text-sm font-semibold text-[#4F5B76]">Postal code</label>
              <input type="text" aria-label='a' className="border-2 px-3 py-2.5 text-[0.8125rem] text-[#A5ACB8] font-semibold rounded-md block w-full" placeholder='90210' />
            </div>
          </div>
          
          <div className="w-full flex justify-center flex-col gap-5 px-24 mt-10">
            <button type="submit" onClick={onClickPayment} className="bg-primary text-white py-2 px-4 rounded-md">Pagar ahora</button>
            <button onClick={onClosePayment} className="bg-primary text-white py-2 px-4 rounded-md">Cancelar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
