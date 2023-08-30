import { Outlet } from 'react-router-dom';
import { useBgStore } from '../store/store';

export const LayoutAuth = () => {
  const { backgroundClass } = useBgStore();

  return (
    <section className="bg-background font-Raleway">
      <div className="max-w-screen-2xl min-h-screen mx-auto flex gap-10 items-stretch p-6 lg:pr-0 sm:p-14">
        <Outlet />

        <div
          className={`lg:flex w-2/5 hidden ${backgroundClass} bg-no-repeat bg-cover bg-center rounded-l-3xl relative items-center`}
        >
          <div className="bottom-0 absolute pb-16 pl-14 pr-28 right-0 left-0 flex flex-col text-white gap-7">
            <h2 className="font-bold text-4xl">conecta</h2>
            <p className="text-sm font-Poppins">
              Creamos un Crowfunding para esas ideas que merecen ir mas alla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
