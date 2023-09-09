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

type AuthStore = {
  token: string
  user: User | null; 
  singUp: (user: User) => void
  login: (user: LoginUser) => void
  logout: () => void;
};



export const useAuthStore = create<AuthStore>((set)=>({
  token: '',
  user: null,
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
        set({ token: res.data.token, user: res.data.user });
        return res;
      })
      .then((res)=>{
        console.log(res.data);
        console.log(res.status);
        
        
      })
      .catch((error)=>{
        console.error(error);
      });
  },
  logout: () => {
    set((state) => ({
      ...state,
      token: '',
      user: null,
    }));
  },
}));
