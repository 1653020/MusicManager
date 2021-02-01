import React from 'react'
import Player from '../component/player'
import Controller from '../component/controller'

const Body = ({ language }) => {

    const [statePlay, setStatePlay] = React.useState(false)
    const [stateLoop, setStateLoop] = React.useState(false)
    const [stateMute, setStateMute] = React.useState(false)
    const [stateVolume, setStateVolume] = React.useState(null)
    const [stateDuration, setStateDuration] = React.useState(0)
    const [stateValueSeek, setStateValueSeek] = React.useState(0)

    const stateCompute = {
        statePlay: statePlay,
        stateLoop: stateLoop,
        stateMute: stateMute,
        stateVolume: stateVolume,
        stateDuration: stateDuration,
        stateValueSeek: stateValueSeek,
        
        setStatePlay: (value) => {setStatePlay(value)},
        setStateLoop: (value) => {setStateLoop(value)},
        setStateMute: (value) => {setStateMute(value)},
        setStateVolume: (value) => {setStateVolume(value)},
        setStateDuration: (value) => {setStateDuration(value)},
        setStateValueSeek: (value) => {setStateValueSeek(value)}
    }

    return (
        <div className="body">
            <Player stateCompute={stateCompute}/>
            <Controller stateCompute={stateCompute} language={language}/>
        </div>
    )
}

export default Body