import React, { useState } from 'react'
import Logo from '../images/logo.svg'
import iClose from '../images/icon-close.svg'
import RuleImg from '../images/image-rules.svg'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'

const App = () => {

    const [isShow,setShow] = useState(true)

    return(
        <div>
            <header>
                <img id='Logo' src={Logo}/>
                <div id='score-div'>
                    <p>SCORE</p>
                    <h1>11</h1>
                </div>
            </header>

            {isShow && 
            <div id='rule-div'>
                <h1>RULES</h1>
                <img id='btn' src={iClose}/>
                <img id='img' src={RuleImg}/>
            </div>}

            <img id='btn' src={paper}/>
            <img id='btn' src={scissors}/>
            <img id='btn' src={rock}/>

            <p id='ruleBtn'>RULES</p>


            {/* You Picked
            The House Picked

            You Win
            You Lose

            Play Again */}
        </div>
    )
}

export default App;