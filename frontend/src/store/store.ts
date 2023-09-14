import { create } from 'zustand';

interface BgStoreState {
  backgroundClass: string;
  setBackgroundClass: (className: string) => void;
}

export const useBgStore = create<BgStoreState>()((set) => ({
  backgroundClass: 'bg-register-background',
  setBackgroundClass: (className) => set({ backgroundClass: className }),
}));

interface FilterStoreState {
  filter: string;
  setFilter: (filter: string) => void;
}

export const useFilterStore = create<FilterStoreState>()((set) => ({
  filter: '',
  setFilter: (filter) => set({ filter }),
}));

interface SearchStoreState {
  search: string;
  setSearch: (search: string) => void;
}

export const useSearchStore = create<SearchStoreState>()((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}));

interface ProjectIDStoreState {
  projectID: string;
  setProjectID: (projectID: string) => void;
}

export const useProjectIDStore = create<ProjectIDStoreState>()((set) => ({
  projectID: '',
  setProjectID: (projectID) => set({ projectID }),
}));