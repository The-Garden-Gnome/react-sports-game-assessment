import React from 'react'
import Game from '../Game/Game'
import Scoreboard from '../Scoreboard/Scoreboard'

function Team(props) {
    let shotPercentageDiv

    if (props.stats.shots) {
        const shotPercentage = Math.round((props.stats.score / props.stats.shots * 100))
        shotPercentageDiv = (
            <div>
                <li><strong>Shooting %:</strong> {shotPercentage}</li>
            </div>
        )
    }

    return (
        <div className="Team">
            <h2>{props.name}</h2>
            <img src={props.logoSrc} />
            <div className="stats">
                <ul>
                    <li><strong>Shots Taken: </strong>{props.stats.shots}</li>
                    <li><strong>Team Score: </strong>{props.stats.score}</li>
                    {shotPercentageDiv}
                </ul>
            </div>
            <br />
            <button onClick={props.takeShot}>Fire!</button>
        </div>
    )
}

export default Team