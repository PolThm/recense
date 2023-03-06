// This database can only be read from, not written to.

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyA68IHFCQ0ysps9M9wJVjsxf13G0a2IYkQ',
  authDomain: 'recense-7dd15.firebaseapp.com',
  databaseURL:
    'https://recense-7dd15-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'recense-7dd15',
  storageBucket: 'recense-7dd15.appspot.com',
  messagingSenderId: '20554665614',
  appId: '1:20554665614:web:61bb7af219aacc290f43df',
  measurementId: 'G-9RM0PFPRLN',
};

const app = initializeApp(firebaseConfig);

// eslint-disable-next-line import/prefer-default-export
export const database = getDatabase(app);
