import React from 'react';
import { Button, Header } from 'carbon-components-react';

const AppHeader = () => {
  const headerStyle = {
    display: 'flex', 
    justifyContent: "space-between",
    height: '120px', 
    borderColor: "#8F9EB9",
    borderWidth: "1px"
  }; 
  const buttonStyle = {
    background: '#2E4EAD',  
    marginRight: "40px",
    fontSize: '16px',
    fontWeight:"500"
  }; 
   const imgStyle = {

    height: "42px",
    weight: "222px",
    marginLeft: "40px"

   };
 


  return (
    <Header aria-label="Carbon Tutorial" style={headerStyle}>
     <img src="/assets/hukuksal.png" alt="Logo" className="logo" style={imgStyle}/>


     <Button kind="secondary" size="small" renderIcon={null}>
        Text Button
      </Button>

      <Button style={buttonStyle}>
        Kayıt ol
      </Button>





    </Header>
  );
};

export default AppHeader;
