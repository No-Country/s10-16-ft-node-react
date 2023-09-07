import axios from 'axios';
import { create } from 'zustand';

const API = 'https://rallyfund.onrender.com';

type User = {
  email: string,
  password: string
  first_name: string,
  last_name: string,
  type: string
};

type LoginUser = {
  email: string,
  password: string
};

type CreateProject = {
  tittle: string,
  description: string,
  goal_currency: string,
  goal_amount: number | string,
  category_id: string,
  end_of_fundraiser: string,
  image: string
};


type AuthStore = {
  project: boolean
  loginUser: User | null
  singUp: (user: User) => void
  login: (user: LoginUser) =>void
  createProject: (data: CreateProject, token: string)=> void
};


export const useAuthStore = create<AuthStore>((set)=>({
  project: false,
  loginUser: null,
  singUp: (user) =>{
    axios.post(`${API}/auth/register`, user)
      .then((res)=>{
        console.log(res.data);
      })
      .catch((error)=>{
        console.error(error);
      });
  }, 
  login: (user) =>{
    axios.post(`${API}/auth/login`, user)
      .then((res)=>{
        sessionStorage.setItem('token', JSON.stringify(res.data.token));
        console.log(res.data);
        set({ loginUser: res.data });
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

}));


