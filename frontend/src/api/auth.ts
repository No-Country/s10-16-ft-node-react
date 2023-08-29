import axios from 'axios';
import create from 'zustand';


const API = 'https://rallyfund.onrender.com';
type User = {
  email: string,
  password: string
  first_name: string,
  last_name: string,
  type: string
};

type AuthStore = {
  singUp: (user: User) => Promise<void>
};

export const useAuthStore = create<AuthStore>(()=>({
  singUp: async (user)=>{
    try {
      const res = await axios.post(`${API}/auth/register`, user);
      console.log(res.data);
    } catch (error) {
      console.error(error);    
    }
  },
}));
