import React from 'react'

import './Controls.scss'

export default class Controls extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    setWPM = (event) => {
        this.props.setWpm(event.target.value)
    }

    render(){
        return (
            <div className="controls">
                <h1 className="current-word"> {this.props.word || " "} </h1>
                <h2> {this.props.wpm} WPM </h2>
                <input className="controls-slider" disabled={this.props.isReading} type="range" onChange={this.setWPM} value={this.props.wpm} min="60" max="500" />
                <div className="controls-buttons">
                    <button className="controls-button" onClick={this.props.playPausePressed}>
                        {this.props.isReading ? "Pause" : "Play"}
                    </button>
                    <button className="controls-button" disabled={this.props.isReading} onClick={this.props.resetPressed} >
                        Reset
                    </button>
                    <button className="controls-button" id="about-open-button" onClick={this.props.toggleAbout}>
                        About
                    </button>
                </div>
            </div>
        )
    }
}