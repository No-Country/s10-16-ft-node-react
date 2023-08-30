import { home3, user } from '../../assets';
import { Star } from '@phosphor-icons/react';

export const Review = () => {
  return (
    <div className='flex w-full py-20   justify-center items-center'>
      <div className='flex  md: flex-col lg:flex-row w-[1039px] justify-center items-center  md: mx-6 lg:mx-0 gap-16 '>
        <img className='w-[432px] h-[473px] object-cover rounded-xl  shadow-lg' src={home3} alt="" />
        
        <div className='flex  items-start gap-6  '>
          <img src={user} alt="" />
          <div>
            <div className='flex mb-2'>
              <Star className='text-yellow-400' size={22} weight="fill" />
              <Star className='text-yellow-400' size={22} weight="fill" />
              <Star className='text-yellow-400' size={22} weight="fill" />
              <Star className='text-yellow-400'size={22} weight="fill" />
              <Star className='text-yellow-400' size={22} weight="thin" />
            </div>
            <p className='font-Raleway text-2xl font-bold text-primary my-5 '>RallyFund y su genial comunidad han llevado mi proyecto innovador a alcanzar cientos de personas alrededor del mundo.</p>
            <div className='font-Raleway text-sm font-bold tracking-[0.2px] text-primary'>
              <p >Regina Miles</p>
              <p >Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
