import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

const firebaseConfig = {
  apiKey: 'AIzaSyDpo3ulkAAeHdBcfniwQ7MR6E9V_mph5z4',
  authDomain: 'rolegate-52c03.firebaseapp.com',
  projectId: 'rolegate-52c03',
  storageBucket: 'rolegate-52c03.appspot.com',
  messagingSenderId: '951116438359',
  appId: '1:951116438359:web:d054ecb97ceb037a16fc12',
  measurementId: 'G-FWPM0XGMHZ'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const auth = getAuth(app)
export { db }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
