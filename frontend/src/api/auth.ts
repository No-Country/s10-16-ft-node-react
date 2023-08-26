import axios from 'axios';
import create from 'zustand';


const API = 'URL';
type User = {
  first_name: string,
  last_name: string,
  email: string,
  password: string
};

type AuthStore = {
  singUp: (user: User) => Promise<void>
};

export const useAuthStore = create<AuthStore>(()=>({
  singUp: async (user)=>{
    try {
      const res = await axios.post(`${API}/register`, user);
      console.log(res.data);
    } catch (error) {
      console.error(error);    
    }
  },
}));
