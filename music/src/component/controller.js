import React from 'react'
import { Button, Slider } from 'antd';

const Controller = ({stateCompute, language}) => {

    const [stateValueSeek, setStateValueSeek] = React.useState(0)

    React.useEffect(() => {
        setStateValueSeek(stateCompute.stateValueSeek)
    },[stateCompute.stateValueSeek])

    return (
        <div className='rightPanel'>
            <div className='buttons'>
                {/* Play button */}
                <Button type={stateCompute.statePlay? "danger" : "primary"} onClick={() => {
                    stateCompute.statePlay? stateCompute.setStatePlay(false) : stateCompute.setStatePlay(true)
                    }}>{stateCompute.statePlay? language.pause : language.play}</Button>

                {/* Loop Button */}
                <Button type={stateCompute.stateLoop? "ghost" : "primary"} onClick={() => {
                    stateCompute.stateLoop? stateCompute.setStateLoop(false) : stateCompute.setStateLoop(true)
                    }}>{language.loop}</Button>

                {/* Button Mute */}
                <Button type={stateCompute.stateMute? "ghost" : "primary"} onClick={() => {
                    stateCompute.stateMute? stateCompute.setStateMute(false) : stateCompute.setStateMute(true)
                    }}>{language.mute}</Button>
            </div>

            <div className="sliders">
                {/* Volume Slider */}
                <Slider
                    min={0}
                    max={1}
                    onChange={(value) => {stateCompute.setStateVolume(value)}}
                    value={typeof stateCompute.stateVolume === 'number' ? stateCompute.stateVolume : 1}
                    step={0.01}
                    tipFormatter={(value) => `${language.volume}: ${value}`}
                />

                {/* Duration Slider */}
                <Slider
                    min={0}
                    max={stateCompute.stateDuration}
                    onChange={(value) => {
                        stateCompute.setStateValueSeek(value)
                        stateCompute.setStatePlay(false)
                    }}
                    value={stateValueSeek}
                    step={1}
                    tipFormatter={(value) => `Duration: ${value}`}
                    onAfterChange={(value) => {stateCompute.setStateValueSeek(value)}}
                />
            </div>
        </div>
    )
}

export default Controller;