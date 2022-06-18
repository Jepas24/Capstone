import React, {useState} from 'react'
import './header-Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Login = () => {
    setModal(!modal);
      };
  const Register = () => {
        setModal1(!modal1);
          };    
  if (modal || modal1){
    document.body.classList.add('active-modal')
  }  else{
    document.body.classList.remove('active-modal')
  } 
  return (
    
    <div className='ams__header'>
         <div className='ams__header-content'>
            <h1>Monitoring and Control System</h1>
         </div>
         <button className="ams__header-button button2" onClick={Login}>Log in Account</button>
         
         {modal && (
            <div className="modal">
              <div onClick={Login} className="overlay"></div>
                <div className="modal-content">
                  <h2>Log in Account</h2>
                      <form >
                      <label>UserName:</label>
                        <div className="input-container">
                          <i className="fa fa-sign-in iconm"></i>
                          <input type="text" name="name" required/>
                        </div>
                      <label>Password:</label> 
                    <div className="input-container">
                       <i className="fa fa-key iconm"></i>
                   <input type="password" name="name" required/>
                    </div> 
                   <button type="submit" className="btn1">Submit</button>
                   <button className="btn2" onClick={Register}>Register Account</button>
              </form>
                   <button className="close-modal" onClick={Login}>
                   <i className="fa fa-window-close-o iconm"></i>
              </button>
          </div>
        </div>
        )}
        {modal1 && (
            <div className="modal">
              <div onClick={Register} className="overlay"></div>
                <div className="modal-content">
                  <h2>Register Account</h2>
                      <form >
                      <label>UserName:</label>
                        <div className="input-container">
                          <i className="fa fa-user iconm"></i>
                          <input type="text" name="name" required/>
                        </div>
                        <label>Email Address:</label> 
                    <div className="input-container">
                       <i className="fa fa-envelope iconm"></i>
                   <input type="text" name="name" required/>
                    </div> 
                      <label>Password:</label> 
                    <div className="input-container">
                       <i className="fa fa-key iconm"></i>
                   <input type="password" name="name" required/>
                    </div> 
                    <label>Confirm Password:</label> 
                    <div className="input-container">
                       <i className="fa fa-key iconm"></i>
                   <input type="password" name="name" required/>
                    </div> 
                   <button type="submit" className="btn">Submit</button>
                 
              </form>
                   <button className="close-modal" onClick={Register}>
                   <i className="fa fa-window-close-o iconm"></i>
              </button>
          </div>
        </div>
        )}
    </div>
  )
}

export default Home