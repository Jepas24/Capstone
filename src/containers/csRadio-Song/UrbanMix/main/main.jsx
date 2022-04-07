import React, {useState, useEffect}from 'react'
import '../../CSS/main.css';
import logo from '../../../../assets/Filscap.PNG';
import axios from 'axios';
const UrbanMixMain = () => {
  const [posts, setPosts] = useState({})
  useEffect(() =>{
    let isMounted = true;
    axios.get('https://api.codetabs.com/v1/proxy?quest=https://radio.cloudstaff.com/apis/playlist/urbanmix?_=1649234825089')
    .then(res => {
      if(isMounted ){
        const nextMusicTitle = res.data.next.title;
        const nextMusicArtist = res.data.next.artist;
        const nextMusicTitle1 = res.data.recent1.title;
        const nextMusicArtist1 = res.data.recent1.artist;
        const nextMusicTitle2 = res.data.recent2.title;
        const nextMusicArtist2 = res.data.recent2.artist;
        const nextMusicTitle3 = res.data.recent3.title;
        const nextMusicArtist3 = res.data.recent3.artist;
        setPosts({nextMusicTitle, nextMusicArtist , nextMusicTitle1,nextMusicArtist1,  nextMusicTitle2,nextMusicArtist2,   nextMusicTitle3,nextMusicArtist3})
        } 
     
    }).catch(err => {
      console.log(err)
    })
    return () => {
      isMounted = false;
      };
  })
  return (
    <div className='csRadio__Main'>
       <div className='csRadio__Main-Context-text'>
            <p className='csRadio__Main-Context-text-1'>PLAYING NEXT</p>
            <p className='csRadio__Main-Context-text-2'>{posts.nextMusicTitle}</p>
            <p className='csRadio__Main-Context-text-3'>{posts.nextMusicArtist}</p>
        </div>
        <div className='csRadio__Main-Context-Song'>
            <p className='csRadio__Main-Context-Song-1'>PREVIOUSLY PLAYED</p>
            <p className='csRadio__Main-Context-Song-2'>{posts.nextMusicTitle1}</p>
            <p className='csRadio__Main-Context-Song-3'>{posts.nextMusicArtist1}</p>
            <p className='csRadio__Main-Context-Song-2'>{posts.nextMusicTitle2}</p>
            <p className='csRadio__Main-Context-Song-3'>{posts.nextMusicArtist2}</p>
            <p className='csRadio__Main-Context-Song-2'>{posts.nextMusicTitle3}</p>
            <p className='csRadio__Main-Context-Song-3'>{posts.nextMusicArtist3}</p>
        </div>
        <div className='csRadio__Main-Context-Filscap'>
            <p className='csRadio__Main-Context-Filscap-1'>FILSCAP</p>
            <p className='csRadio__Main-Context-Filscap-2'>
            Content for this radio station is officially licensed from FILSCAP
            <br /> - Filipino Society of Composers, Authors and Publishers, Inc.
            </p>
            
            <img src={logo} alt="logo"  />
        </div>
    </div>
  )
}

export default UrbanMixMain