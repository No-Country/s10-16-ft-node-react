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
  singUp: (user: User) => Promise<void>
  login: (user: LoginUser) =>Promise<void>
};



export const useAuthStore = create<AuthStore>((set)=>({
  token: '',
  singUp: async (user)=>{
    try {
      const res = await axios.post(`${API}/auth/register`, user);
      console.log(res.data);
    } catch (error) {
      console.error(error);    
    }
  },
  login: async (user) =>{
    try {
      const res = await axios.post(`${API}/auth/login`, user);
      set({ token: res.data.token });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  },
  
  
}));

