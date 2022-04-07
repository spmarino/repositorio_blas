import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDytFRaoyxZUEY0j2JOGw7D9MVy1Bd7hiE',
  authDomain: 'reactjs25470blaspawluk.firebaseapp.com',
  projectId: 'reactjs25470blaspawluk',
  storageBucket: 'reactjs25470blaspawluk.appspot.com',
  messagingSenderId: '271893164512',
  appId: '1:271893164512:web:b889628435fccfd0007b85',
  measurementId: 'G-2SH2XJEM6F',
};

const app = initializeApp(firebaseConfig);
export const dbFireBase = getFirestore(app);
