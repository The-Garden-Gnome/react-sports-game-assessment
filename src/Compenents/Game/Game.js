import React from 'react'
import vexSound from '../../media/vex_mythoclast.mp3'
import killSound from '../../media/crucible_kill.mp3'
import resetSound from '../../media/get_back_out_there.mp3'
import ScoreBoard from '../Scoreboard/Scoreboard'
import Team from '../Team/Team'
import destinyIcon from '../../media/destiny_icon.png'

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            resetCount:0,

            alphaTeamStats: {
                shots: 0,
                score: 0,
            },

            bravoTeamStats: {
                shots: 0,
                score: 0,
            }
        }

        this.vexSound = new Audio(vexSound);
        this.killSound = new Audio(killSound);
        this.resetSound = new Audio(resetSound);
    }

    shoot = (team) => {
        const teamStatsKey = `${team}TeamStats`
        let score = this.state[teamStatsKey].score
        this.vexSound.play()

        if (Math.random() > 0.5) {
            score += 1

            setTimeout(() => {
                this.killSound.play()
            }, 1000)
        }

        this.setState((state, props) => ({
            [teamStatsKey]: {
                shots: state[teamStatsKey].shots + 1,
                score
            }
        }))
    }

    resetGame = () =>{
        this.resetSound.play()
        this.setState((state, props) => ({
            resetCount: state.resetCount + 1,
            alphaTeamStats: {
                shots: 0,
                score: 0,
            },
            bravoTeamStats: {
                shots: 0,
                score: 0,
            }
        }))
    }

    render() {
        return (
            <div className="Game">
                <div className="mainContainer">
                    <div className="header">
                        <img src={destinyIcon} id="logo" />
                        <h1>Welcome to {this.props.venue}! </h1>
                    </div>
                    <div className="scoreBoardDiv"><ScoreBoard 
                        alphaTeamStats={this.state.alphaTeamStats}
                        bravoTeamStats={this.state.bravoTeamStats}
                    /></div>
                    <div className="resetCount">
                        <strong>Resets: </strong>{this.state.resetCount}
                        </div>
                        <div className="resetButton">
                        <button onClick={this.resetGame}>Reset Game</button>
                        </div>
                    <div className="mainBody">
                        <div className="alphaLeft">
                            <Team
                                name={this.props.alpha.name}
                                logoSrc={this.props.alpha.logoSrc}
                                stats={this.state.alphaTeamStats}
                                takeShot={() => this.shoot('alpha')}
                            />
                        </div>
                        <div className="bravoRight">
                            <Team
                                name={this.props.bravo.name}
                                logoSrc={this.props.bravo.logoSrc}
                                stats={this.state.bravoTeamStats}
                                takeShot={() => this.shoot('bravo')}
                            />
                        </div>
                    </div>
                    <div className="bottom">
                    </div>
                </div>
            </div>
        )
    }
}

    export default Game