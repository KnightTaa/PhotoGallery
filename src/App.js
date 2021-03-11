import React, { useState, useEffect } from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal';
import Login from './Login';
import { config } from '../src/firebase/config'
import { Container } from 'react-bootstrap';


function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  }

  const handleLogin = () => {
    clearErrors();
    config
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignup = () => {
    clearErrors();
    config
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
          case "auth/invalid-email":
              setEmailError(err.message);
              break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleLogout = () => {
    config.auth().signOut();
  };

  const authListener = () => {
    config.auth().onAuthStateChanged((user) => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    })
  }

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      {user ? (
        <>
              <Title handleLogout={handleLogout}/>
              <UploadForm />
              <ImageGrid setSelectedImg={setSelectedImg} />
              { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
        </>
      ) : (
        <>
        <Container className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh"}}
        >
          <div className="w-100" style={{ maxWidth: '400px'}}>
          <Login 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}

              />
          </div>
        
        </Container>
              
        </>
      )}
      
      
    </div>
  );
}

export default App;
