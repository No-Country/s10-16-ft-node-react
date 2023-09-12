import axios from 'axios';
import { create } from 'zustand';

const API = 'https://rallyfund.onrender.com';
export type User = {
  id: string,
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  type: string,
  address: string | null,
  postal_code: string | null,
  phone_number: string | null,
  profile_picture: string | null,
  country: string | null,
  document_type: string | null,
  document_number: string | null,
  verified: boolean | null,
  is_active: boolean | null,
  createdAt: string,
  updatedAt: string,
};

type LoginUser = {
  email: string,
  password: string
};

export type CreateProject = {
  tittle: string,
  description: string,
  goal_currency: string,
  goal_amount: number,
  category_id: string,
  end_of_fundraiser: string,
  /* image: string */
};

export type Projects = {
  id: string,
  tittle: string,
  description: string,
  goal_amount: number,
  category_id: string
};

type AuthStore = {
  project: boolean
  loginUser: User | null
  user: User | null; 
  singUp: (user: User) => void
  login: (user: LoginUser) =>void
  createProject: (data: CreateProject, token: string | null)=> void
  logout: () => void
  projects: Projects[] | null
  findProjects: ()=>void
  detailProject: Projects | null
  findProject: (id: string | undefined, token: string | null)=>void
};


export const useAuthStore = create<AuthStore>((set)=>({
  project: false,
  loginUser: null,
  user: null,
  singUp: (user) =>{
    axios.post(`${API}/auth/register`, user)
      .then((res) => {
        const userData = res.data.user;
        console.log(res.data);
        set({ loginUser: userData });
      })
      .catch((error)=>{
        console.error(error);
      });
  }, 
  login: (user) =>{
    axios.post(`${API}/auth/login`, user)
      .then((res) => {
        const userData = res.data.user;
        sessionStorage.setItem('token', res.data.token);
        console.log(res.data);
        set({ loginUser: userData });
        return res;
      })
      .catch((error)=>{
        console.error(error);
      });
  },
  createProject: ( data, token)=>{
    axios.post(`${API}/projects`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res)=>{
        console.log(res.data);
        set({ project: true });
      });
  },

  logout: () => {
    sessionStorage.removeItem('token');
    set({ loginUser: null });
  },

  projects: [],
  findProjects: ()=>{
    axios.get(`${API}/projects`)
      .then((res)=> set({ projects: res.data }),
      );
  },
  detailProject: null,
  findProject: (id, token)=>{
    axios.get(`${API}/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res)=>set({ detailProject: res.data }));
  },
}));
