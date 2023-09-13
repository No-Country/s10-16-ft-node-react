import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASEAPP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCXQNbnhkJXLuoUhfnkrfhPDVm8F517Oug',
  authDomain: 'rallyfund-1b44f.firebaseapp.com',
  projectId: 'rallyfund-1b44f',
  storageBucket: 'rallyfund-1b44f.appspot.com',
  messagingSenderId: '693560298400',
  appId: '1:693560298400:web:cf23115ed345b7b6aeb2c5',
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export default db;