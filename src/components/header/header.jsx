import React, {useState} from 'react'
import './header-Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const [modal, setModal] = useState(false);
  const Login = () => {
    setModal(!modal);
      };
  return (
    
    <div className='ams__header' id='CloudOverDrive'>
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
                        <div className="input-container">
                          <i className="fa fa-sign-in iconm"></i>
                          <input type="text" name="name"/>
                        </div>
                    <div className="input-container">
                       <i className="fa fa-key iconm"></i>
                   <input type="text" name="name" />
                    </div> 
                   <button type="submit" className="btn">Submit</button>
              </form>
                   <button className="close-modal" onClick={Login}>
                   <i className="fa fa-window-close-o iconm"></i>
              </button>
          </div>
        </div>
        )}
    </div>
  )
}

export default Home