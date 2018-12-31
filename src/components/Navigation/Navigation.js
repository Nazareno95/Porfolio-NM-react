import React from 'react';
import mail from './mail.svg';
import linkedin from './linkedin.svg';
import Popup from 'reactjs-popup';

const Navigation = () => {
    
    return (

      <div>
         <a href="https://www.linkedin.com/in/nazareno-medrano-5b0602114/" 
              target ="_blank" 
              rel = "noopener noreferrer">
              <img 
                className= "logo-linkedin" 
                alt="linkedin" 
                src= {linkedin}/>          
        </a>
        
           <Popup trigger = {<img 
                className= "logo-mail" 
                alt= "mail" 
                src={mail} 
                />}
                modal
                closeDocumentClick>
                <span className = "mail"> E-mail de contacto: nazarenomedrano16@gmail.com</span>
            </Popup>
      </div>        
        
    );
}

export default Navigation;