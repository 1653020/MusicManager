import React from 'react'
import ReactPlayer from 'react-player'

const Player = ({url, stateCompute}) => {

    const playerRef = React.useRef(null);

    const handleGetDuration = () => {
        stateCompute.setStateDuration(playerRef.current.getDuration());
    }

    return (
        <ReactPlayer 
            ref={playerRef}
            className='reactPlayer' 
            url="https://www.youtube.com/watch?v=N-fZp-M342I&ab_channel=EpicMusicWorld"
            onReady={() => {
                stateCompute.setStatePlay(true)
                handleGetDuration()
            }}
            playing={stateCompute.statePlay!=null? stateCompute.statePlay : false}
            controls={false}
            muted={stateCompute.stateMute!=null? stateCompute.stateMute : false}
            loop={stateCompute.stateLoop!=null? stateCompute.stateLoop : false}
            volume={stateCompute.stateVolume!=null? stateCompute.stateVolume : null}
            onProgress={() => {
                if (playerRef) {
                    stateCompute.setStateValueSeek(playerRef.current.getCurrentTime())
                }
            }}
        />
    )
}

export default Player;