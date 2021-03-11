import React from 'react';
import { Button } from 'react-bootstrap';

const Title = ({handleLogout}) => {
  return (
    
    <div className="title">
      
      <Button onClick={handleLogout}>Log out</Button>
  
      <h1>Photo Gallery</h1> 
      <h2>Your Pictures</h2>
      <p>Insert Your Pictures</p>
    </div>
  )
}

export default Title;