import React from 'react'

const Header = ({wrongGuessesCount}) => {
  return (
    <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the 
            programming world safe from Assembly!
        </p>
        <p className="attempts-left">{(8 - wrongGuessesCount) === 1 ? "1 attempt left..." : (wrongGuessesCount === 8 ? "No attempts left" : `${8 - wrongGuessesCount} attempts left`)}</p>
    </header>
  )
}

export default Header