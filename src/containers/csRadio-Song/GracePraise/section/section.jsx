import React, {useState, useEffect} from 'react'
import AudioPlayer, { RHAP_UI }from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../CSS/section.css';
import axios from 'axios';


const GraisePraiseSection = () => {
  const [posts, setPosts] = useState({})
  useEffect(() =>{
    let isMounted = true;
    axios.get('https://api.codetabs.com/v1/proxy?quest=https://radio.cloudstaff.com/apis/playlist/rockfest?_=1649812689416')
    .then(res => {
      if(isMounted ){
        const currentMusicTitle = res.data.current.title;
        const currentMusicArtist = res.data.current.artist;
        setPosts({currentMusicTitle,currentMusicArtist})
        } 
    }).catch(err => {
      console.log(err)
    });
    return () => {
      isMounted = false;
      };
  })
  return (
    <div className='csRadio__section'>
        <div className='csRadio__section-Content'>
            <h2>{posts.currentMusicTitle}</h2>
            <p className='csRadio__section-Content-Band'>{posts.currentMusicArtist}</p>
        </div>
            

        <div className='csRadio__section-Content-logo'>
            <AudioPlayer
            customVolumeControls={[]}
            customProgressBarSection={[
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.VOLUME,
            ]}  
            layout="horizontal-reverse"
            customAdditionalControls={[]}
            showJumpControls={false}
            autoPlay
            
            src="https://cs-streamradio.cloudstaff.com:8010/rockfest.mp3"
            onPlay={e => console.log("onPlay")}
            // other props here
          />    
        </div>
    </div>
  )
}

export default GraisePraiseSection