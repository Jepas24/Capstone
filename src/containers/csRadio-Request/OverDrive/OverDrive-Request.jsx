import React, {useState, useMemo}  from 'react'
import '../CSS_Request_Song/RequestSong.css';
import { BrowserRouter as Rauter, Link, Switch, Route } from "react-router-dom";
import OverDrive_Data from './../Data/OverDrive_DATA.json'
import axios from 'axios';

const OverDriveRequest = () => {
    const RequestRadioData = useMemo(()=> OverDrive_Data,[]);
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
            const Title = event.currentTarget.getAttribute("data-rowTitle");
            setState({Artist,Title});
            setModal(!modal);
          };

    const RequestMusic = () => {
        setRequstMusic(!requstMusic);
          };   
    const reqSong = () =>{
        //const article = { text: '`Title:` ' + state.Title  ,previewText: ' \n`Artist:`  ' + state.Artist};
        const MusicRequest = { text:'`Genre: ` CloudOverDrive' +  '\n`Title: ` ' + state.Title + '\n`Artist:` ' + state.Artist };
        const url = 'https://chat.googleapis.com/v1/spaces/AAAAcAGLfQA/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=4d6ONRO_G9PZrm97CkGd4wMu9qGnO-hNbFSZQtaRKjc%3D';
        axios.post(url, MusicRequest)
        .then((response) => {
            console.log(response);
        });
        };      
    
    return(
    <div className='csRadio__Request'>
            <div className='csRadio_Request-Content'>
                <h1 className='csRadio__Request-Content-text'>Cloud Over Request</h1>
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
                <Route exact path="/OverDrive/A"> 
                    <table className='csRadio__Request-Content-table-Content'>
                        <thead>    
                            <p>Song A</p>      
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
                                    </tr> )})
                                                    :
                            RequestRadioData.A.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/B"> 
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
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td>{data.Title}</td>   
                                    </tr> )})
                                                    :
                            RequestRadioData.B.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/C"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.C.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/D"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.D.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/E"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.E.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/F"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.F.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/G"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.G.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/H"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.H.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/I"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.I.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/J"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.J.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/K"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.K.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/L"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.L.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/M"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.M.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/N"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.N.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/O"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.O.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/P"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.P.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/Q"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.Q.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/R"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.R.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/S"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.S.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/T"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.T.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/U"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.U.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/V"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.V.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/W"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.W.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/X"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.X.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
                <Route exact path="/OverDrive/Y"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.Y.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
                                <form onSubmit = {reqSong}>
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
                <Route exact path="/OverDrive/Z"> 
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
                                    </tr> )})
                                                    :
                            RequestRadioData.Z.map((data) => {
                                return(
                                   <tr key={data.id} data-rowartist={data.Artist} data-rowTitle={data.Title} onClick={RequestSong}>
                                        <td>{data.Artist}</td>
                                        <td >{data.Title}</td>
                                    </tr>)})       
                            }
                        </tbody>
                    </table>
                    {modal && (
                        <div className="modal">
                            <div onClick={RequestSong} className="overlay"></div>
                            <div className="modal-content">
                                <h2>REQUEST A SONG</h2>
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
            </Switch>
            </div>
            <div className='csRadio__Request-Link'>
                <p><Link to="/OverDrive/A">A</Link></p> 
                <p><Link to="/OverDrive/B">B</Link></p> 
                <p><Link to="/OverDrive/C">C</Link></p> 
                <p><Link to="/OverDrive/D">D</Link></p> 
                <p><Link to="/OverDrive/E">E</Link></p> 
                <p><Link to="/OverDrive/F">F</Link></p> 
                <p><Link to="/OverDrive/G">G</Link></p> 
                <p><Link to="/OverDrive/H">H</Link></p> 
                <p><Link to="/OverDrive/I">I</Link></p> 
                <p><Link to="/OverDrive/J">J</Link></p> 
                <p><Link to="/OverDrive/K">K</Link></p> 
                <p><Link to="/OverDrive/L">L</Link></p> 
                <p><Link to="/OverDrive/M">M</Link></p> 
                <p><Link to="/OverDrive/N">N</Link></p> 
                <p><Link to="/OverDrive/O">O</Link></p> 
                <p><Link to="/OverDrive/P">P</Link></p> 
                <p><Link to="/OverDrive/Q">Q</Link></p> 
                <p><Link to="/OverDrive/R">R</Link></p> 
                <p><Link to="/OverDrive/S">S</Link></p> 
                <p><Link to="/OverDrive/T">T</Link></p> 
                <p><Link to="/OverDrive/U">U</Link></p> 
                <p><Link to="/OverDrive/V">V</Link></p> 
                <p><Link to="/OverDrive/W">W</Link></p> 
                <p><Link to="/OverDrive/X">X</Link></p> 
                <p><Link to="/OverDrive/Y">Y</Link></p> 
                <p><Link to="/OverDrive/Z">Z</Link></p>
            </div>
            </div>
    </div>
    )
}
export default OverDriveRequest