import React, {useState, useMemo}  from 'react'
import '../CSS_Request_Song/RequestSong.css';
import { BrowserRouter as Rauter, Link, Switch, Route } from "react-router-dom";
import GraisePraise_Data from './../Data/GraisePraise_DATA.json'
import axios from 'axios';

const GracePraiseRequest = () => {
    const RequestRadioData = useMemo(()=> GraisePraise_Data,[]);
    const RequestRadioDataA = RequestRadioData.A.concat(RequestRadioData.B,RequestRadioData.C,RequestRadioData.D,RequestRadioData.E,RequestRadioData.F,RequestRadioData.G);
    const RequestRadioDataB = RequestRadioDataA.concat(RequestRadioData.H,RequestRadioData.I,RequestRadioData.J,RequestRadioData.K,RequestRadioData.L,RequestRadioData.M,RequestRadioData.N,RequestRadioData.O,RequestRadioData.P);
    const RequestRadioDataC = RequestRadioDataB.concat(RequestRadioData.Q,RequestRadioData.R,RequestRadioData.S,RequestRadioData.T,RequestRadioData.U,RequestRadioData.V,RequestRadioData.W,RequestRadioData.Y,RequestRadioData.Z);
    const [value, SetValue] = useState('');
    const [dataSource, SetDataSource] = useState(RequestRadioDataC);
    const [tableFilter, SetTableFilter] = useState([]);
    const [modal, setModal] = useState(false);
    const [state, setState] = useState({});
    const [requstMusic, setRequstMusic] = useState(false);

    const filterData = (e) => {
        if(e.target.value !== ""){
            SetValue(e.target.value);
            const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
                SetTableFilter([...filterTable]);  
        }else{
            SetValue(e.target.value);
            SetDataSource([...dataSource]);
        }
    }

    const RequestSong = event => {
            const Artist = event.currentTarget.getAttribute("data-rowartist");
            const Title = event.currentTarget.getAttribute("data-rowtitle");
            setState({Artist,Title});
            setModal(!modal);
          };

    const RequestMusic = () => {
        setRequstMusic(!requstMusic);
          };

          
    const reqSong = () =>{
        //const article = { text: '`Title:` ' + state.Title  ,previewText: ' \n`Artist:`  ' + state.Artist};
        const MusicRequest = { text:'`Genre: ` Graise&Praise' +  '\n`Title: ` ' + state.Title + '\n`Artist:` ' + state.Artist };
        const url = 'https://chat.googleapis.com/v1/spaces/AAAAcAGLfQA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=4d6ONRO_G9PZrm97CkGd4wMu9qGnO-hNbFSZQtaRKjc%3D';
        axios.post(url, MusicRequest)
        .then((response) => {
            console.log(response);
        });
        };     
         
    
    return(
        <div className='csRadio__Request'>
            <div className='csRadio_Request-Content'>
                <h1 className='csRadio__Request-Content-text'>Grace & Praise Request</h1>
            </div>
            
            <div className='csRadio_Request-Content-all'>
            <div className='csRadio_Request-Content-SearchBox'>
            <input type="text" placeholder="Title-Artist" name="search" value={value} onChange = {filterData}></input>
            <p>List songs by artist 
               <br /> names starting with</p>
            </div>
           
            <div className='csRadio__Request-table'>
                <div className='csRadio__Request-table-text'> 
                <p onClick={RequestMusic}>Requested Songs()</p> 
                </div>
                {requstMusic ? 
                <table className='csRadio__Request-Content-table-Content-Request'>
                        <thead>                   
                            <tr >
                                <th > Time </th> 
                                <th > Artist </th> 
                                <th > Title </th>                   
                            </tr>
                            </thead> 
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                
                            </tbody>        
                </table>
                :
                null}
                      
                                <Switch>      
                                        <Route exact path="/Grace-Praise/A"> 
                                        <table className='csRadio__Request-Content-table-Content'>
                                            <thead>    
                                                <p>Song A</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                                <tbody>
                                                {value.length > 0 ? tableFilter.map((data) => {
                                                        return(
                                                            <tr>
                                                                <td>{data.Artist}</td>
                                                                <td>{data.Title}</td>
                                                            </tr>
                                                        )
                                                    })
                                                :
                                                RequestRadioData.A.map((data) => {
                                                    return(
                                                        <tr>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>
                                                        </tr>
                                                    )
                                                })               
                                                }         
                                                </tbody>
                                            </table>    
                                        </Route>
                                        <Route exact path="/Grace-Praise/B">  
                                        <table className='csRadio__Request-Content-table-Content'>
                                                <thead>    
                                                    <p>Song B</p>      
                                                    <tr >
                                                        <th > Artist </th> 
                                                        <th > Title </th>                   
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    {value.length > 0 ? tableFilter.map((data) => {
                                                            return(
                                                                <tr key={data.id} data-rowartist={data.Title} data-rowTitle={data.Artist} onClick={RequestSong}>
                                                                    <td>{data.Artist}</td>
                                                                    <td>{data.Title}</td>   
                                                                </tr>
                                                                
                                                            )
                                                        })
                                                    :
                                                    RequestRadioData.B.map((data) => {
                                                        return(
                                                            <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                                <td>{data.Artist}</td>
                                                                <td >{data.Title}</td>
                                                            </tr>
                                                        )
                                                    })       
                                                        }
                                                </tbody>
                                            </table>
                                                {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text"  name="Artist" value={state.Artist}  disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="Title" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                        </Route>
                                        <Route exact path="/Grace-Praise/C">  
                                        <table className='csRadio__Request-Content-table-Content'>
                                            <thead>    
                                                <p>Song C</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {value.length > 0 ? tableFilter.map((data) => {
                                                        return(
                                                            <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                                <td>{data.Artist}</td>
                                                                <td>{data.Title}</td>   
                                                            </tr>
                                                            
                                                        )
                                                    })
                                                    :
                                                    RequestRadioData.C.map((data) => {
                                                        return(
                                                            <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                                <td>{data.Artist}</td>
                                                                <td >{data.Title}</td>
                                                            </tr>
                                                        )
                                                    })       
                                                        }
                                             </tbody>
                                            </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/D">
                                        <table className='csRadio__Request-Content-table-Content'>  
                                            <thead>    
                                                <p>Song D</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                                :
                                                RequestRadioData.D.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td >{data.Title}</td>
                                                        </tr>
                                                    )
                                                })       
                                                    }
                                            </tbody>
                                            </table>
                                                 {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                         
                                        </Route>
                                        <Route exact path="/Grace-Praise/E"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song E</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.E.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                                </table>
                                                 {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/F">
                                        <table className='csRadio__Request-Content-table-Content'>    
                                            <thead>    
                                                <p>Song F</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.F.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                 </tbody>
                                        </table>
                                                 {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                        CLOSE
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                           
                                        </Route>
                                        <Route exact path="/Grace-Praise/G">  
                                        <table className='csRadio__Request-Content-table-Content'>  
                                            <thead>    
                                                <p>Song G</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.G.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                                 {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/H">
                                        <table className='csRadio__Request-Content-table-Content'>    
                                            <thead>    
                                                <p>Song H</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.H.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                                 {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/I"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song I</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.I.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                                 {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/J"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song J</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.J.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                           {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/K">
                                        <table className='csRadio__Request-Content-table-Content'>    
                                            <thead>    
                                                <p>Song K</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.K.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                            </tbody>
                                    </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                         
                                        </Route>
                                        <Route exact path="/Grace-Praise/L">
                                        <table className='csRadio__Request-Content-table-Content'>    
                                            <thead>    
                                                <p>Song L</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.L.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                             </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                           
                                        </Route>
                                        <Route exact path="/Grace-Praise/M">
                                        <table className='csRadio__Request-Content-table-Content'>    
                                            <thead>    
                                                <p>Song M</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.M.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                             </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" classNamelass="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                           
                                        </Route>
                                        <Route exact path="/Grace-Praise/N"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song N</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.N.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                            </tbody>
                                    </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                           
                                        </Route>
                                        <Route exact path="/Grace-Praise/O"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song O</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.O.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/P">
                                        <table className='csRadio__Request-Content-table-Content'>    
                                            <thead>    
                                                <p>Song P</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.P.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/Q">  
                                        <table className='csRadio__Request-Content-table-Content'>  
                                            <thead>    
                                                <p>Song Q</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.Q.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/R">  
                                        <table className='csRadio__Request-Content-table-Content'>  
                                            <thead>    
                                                <p>Song R</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.R.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                            </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/S"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song S</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.S.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/T"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song T</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.T.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/U"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song U</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.U.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/V"> 
                                        <table className='csRadio__Request-Content-table-Content'>   
                                            <thead>    
                                                <p>Song V</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.V.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/W">
                                        <table className='csRadio__Request-Content-table-Content'>    
                                            <thead>    
                                                <p>Song W</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.W.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/X">  
                                        <table className='csRadio__Request-Content-table-Content'>  
                                            <thead>    
                                                <p>Song X</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.X.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                        <Route exact path="/Grace-Praise/Y">  
                                        <table className='csRadio__Request-Content-table-Content'>  
                                            <thead>    
                                                <p>Song Y</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.Y.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                 </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong}>
                                                    <div className="input-container">
                                                        <i className="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                           
                                        </Route>
                                        <Route exact path="/Grace-Praise/Z">  
                                        <table className='csRadio__Request-Content-table-Content'>  
                                            <thead>    
                                                <p>Song Z</p>      
                                                <tr >
                                                    <th > Artist </th> 
                                                    <th > Title </th>                   
                                                </tr>
                                            </thead>
                                            <tbody >
                                               {value.length > 0 ? tableFilter.map((data) => {
                                                    return(
                                                        <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                            <td>{data.Artist}</td>
                                                            <td>{data.Title}</td>   
                                                        </tr>
                                                        
                                                    )
                                                })
                                            :
                                            RequestRadioData.Z.map((data) => {
                                                return(
                                                    <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                                        <td>{data.Artist}</td>
                                                        <td >{data.Title}</td>
                                                    </tr>
                                                )
                                            })       
                                                }
                                                </tbody>
                                        </table>
                                            {modal && (
                                                <div className="modal">
                                                <div onClick={RequestSong} className="overlay"></div>
                                                <div className="modal-content">
                                                    <h2>Request A Song</h2>
                                                    <form onSubmit = { reqSong} >
                                                    <div className="input-container">
                                                        <i classnameName="fa fa-music icon"></i>
                                                        <input type="text" name="name" value={state.Artist} disabled={true}/>
                                                    </div>
                                                    <div className="input-container">
                                                    <i className="fa fa-user icon"></i>
                                                        <input type="text" name="name" value={state.Title} disabled={true}/>
                                                    </div> 
                                                        
                                                    <button type="submit" className="btn">Submit</button>
                                                    </form>
                                                    <button className="close-modal" onClick={RequestSong}>
                                                    <i className="fa fa-window-close-o icon"></i>
                                                    </button>
                                                </div>
                                                </div>
                                            )}
                                            
                                        </Route>
                                    
                                </Switch>
                   
            </div>
            <div className='csRadio__Request-Link'>
                <p><Link to="/Grace-Praise/A">A</Link></p> 
                <p><Link to="/Grace-Praise/B">B</Link></p> 
                <p><Link to="/Grace-Praise/C">C</Link></p> 
                <p><Link to="/Grace-Praise/D">D</Link></p> 
                <p><Link to="/Grace-Praise/E">E</Link></p> 
                <p><Link to="/Grace-Praise/F">F</Link></p> 
                <p><Link to="/Grace-Praise/G">G</Link></p> 
                <p><Link to="/Grace-Praise/H">H</Link></p> 
                <p><Link to="/Grace-Praise/I">I</Link></p> 
                <p><Link to="/Grace-Praise/J">J</Link></p> 
                <p><Link to="/Grace-Praise/K">K</Link></p> 
                <p><Link to="/Grace-Praise/L">L</Link></p> 
                <p><Link to="/Grace-Praise/M">M</Link></p> 
                <p><Link to="/Grace-Praise/N">N</Link></p> 
                <p><Link to="/Grace-Praise/O">O</Link></p> 
                <p><Link to="/Grace-Praise/P">P</Link></p> 
                <p><Link to="/Grace-Praise/Q">Q</Link></p> 
                <p><Link to="/Grace-Praise/R">R</Link></p> 
                <p><Link to="/Grace-Praise/S">S</Link></p> 
                <p><Link to="/Grace-Praise/T">T</Link></p> 
                <p><Link to="/Grace-Praise/U">U</Link></p> 
                <p><Link to="/Grace-Praise/V">V</Link></p> 
                <p><Link to="/Grace-Praise/W">W</Link></p> 
                <p><Link to="/Grace-Praise/X">X</Link></p> 
                <p><Link to="/Grace-Praise/Y">Y</Link></p> 
                <p><Link to="/Grace-Praise/Z">Z</Link></p>
            </div>
            </div>
        </div>
    )
}
export default GracePraiseRequest