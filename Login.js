
import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { FacebookAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAk6pyT2eFhZpnFC3c8g_rV4013CpzI1Bg",
  authDomain: "logingrupito15601-72752.firebaseapp.com",
  projectId: "logingrupito15601-72752",
  storageBucket: "logingrupito15601-72752.appspot.com",
  messagingSenderId: "762448603404",
  appId: "1:762448603404:web:d2f18b9cbb3a6299634129"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  
  const provider = new FacebookAuthProvider();



  const Login = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    
  

  useEffect (()=> {
    if (!firebase.apps.length){
      initializeApp(firebaseConfig);
    }
  },[]);

  const handleLogin = async () =>{
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      alert('Bienvenida BubuRufus');
      console.log('Inicio de sesión:', response.user);
    } catch(error){
        alert('Usuario y/o contraseñano válidos');
        console.error('Error durante el inicio de sesión:', error.message);
    }
  }

    const signInWithGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      alert('Bienvenida Buburufus');
     
    } catch (error) {
   
      alert('Error en el inicio');
      console.error("Error al inicIar sesión con Google:", error.message);
    }
    };

    const signInWithFacebook = async () => {
      try {
        const provider = new firebase.auth.FacebookAuthProvider();
        await auth.signInWithPopup(provider);
        alert('Inicio de sesión en Facebook exitoso');
        // El usuario ha iniciado sesión con éxito, puedes redireccionar a la página de bienvenida o hacer otras operaciones.
      } catch (error) {
        // Manejar errores de inicio de sesión.
        console.error("Error al iniciar sesión con Facebook:", error.message);
      }
      };

   
  return (
    <div>
      <h2>Login</h2>
      <label>Email</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <label>Password:</label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      
      <button id='loginButton' className='my-button' onClick={handleLogin}>Login</button>
	
      <br/>
      <h2 >Ingresar con Google</h2>
      <button id='mybuttonfacegoogle' onClick={signInWithGoogle}>Ingresar con Google</button>
      <br/>
      <h2>Log in with Facebook</h2>
      <button id='mybuttonfacegoogle' onClick={signInWithFacebook}>Log in with Facebook</button>


    </div>
  );
};

export default Login;




