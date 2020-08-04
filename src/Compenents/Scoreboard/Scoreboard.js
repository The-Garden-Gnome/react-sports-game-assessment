import React from 'react'
import Game from '../Game/Game'
import Team from'../Team/Team'

function ScoreBoard(props) {
    return(
        <div className="ScoreBoard">
            <div className="teamStats">
                <h4>Alpha</h4>
                <h4 className="score">{props.alphaTeamStats.score}</h4>
            </div>
            <h3>ScoreBoard</h3>
            
            <div className="teamStats">
                <h4>Bravo</h4>
                <h4 className="score">{props.bravoTeamStats.score}</h4>
            </div>
        </div> 
    )
}

export default ScoreBoard