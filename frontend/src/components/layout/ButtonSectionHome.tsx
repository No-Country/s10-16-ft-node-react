import { MagnifyingGlass } from '@phosphor-icons/react';
import { useFilterStore, useSearchStore } from '../../store/store';

type ButtonHome = {
  title: string;
};

export const ButtonSectionHome = () => {
  const buttonHome: ButtonHome[] = [
    { title: 'Tecnología' },
    { title: 'Entretenimiento' },
    { title: 'Educación' },
    { title: 'Agricultura' },
    { title: 'Salud' },
    { title: 'Movilidad' },
    { title: 'Equidad' },
    { title: 'Medio Ambiente' },
  ];

  const setFilter = useFilterStore(
    (FilterStoreState) => FilterStoreState.setFilter,
  );

  const filter = useFilterStore((FilterStoreState) => FilterStoreState.filter);

  const handleFilterButtonClick = (title: string) => {
    if (title === filter) {
      setFilter('');
    } else {
      setFilter(title);
    }
  };

  const setSearch = useSearchStore(
    (SearchStoreState) => SearchStoreState.setSearch,
  );

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchInput = e.currentTarget.searchInput.value;
    console.log(searchInput);
    setSearch(searchInput);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full md:w-[774px] mx-auto mb-10 px-4 md:px-0">
      <form
        onSubmit={handleSearchSubmit}
        className="flex w-full md:w-[774px] h-16 rounded-full bg-[#F3F8F7] shadow px-4 py-2 md:py-5 justify-between items-center"
        action=""
      >
        <input
          name="searchInput"
          className="bg-[#F3F8F7] w-full text-sm md:text-base"
          type="text"
          placeholder="Buscar proyectos..."
        />
        <MagnifyingGlass weight="thin" className="text-2xl text-[#9EA1B4]" />
      </form>
      <div className="flex flex-wrap justify-between items-center gap-4">
        {buttonHome.map((pass, index) => (
          <div key={index}>
            <button
              className={`p-2.5 flex justify-center items-center gap-1 border-[#13ADB7] border-[1px] rounded-full text-primary text-xs font-medium ${
                pass.title === filter ? 'bg-primary text-white' : ''
              }`}
              onClick={() => handleFilterButtonClick(pass.title)}
            >
              {pass.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
