import { clsx } from "clsx"
import { languages } from "../languages"
import { getFarewellText, getCorrectGuessMsg } from '../utils'

const Result = ({isGameOver, isGameWon, lastGuessedLetter, currentWordArray, wrongGuessesCount}) => {

  const gameStatusClass = 
      clsx("game-status", 
            isGameOver ? 
              (isGameWon ? 
                "game-won" :  
                "game-lost") : 
            (wrongGuessesCount > 0) && "farewell",
            currentWordArray.includes(lastGuessedLetter) ? "guessed-right" : null
          )


  const renderGameStatus = () => {
    if (!isGameOver){
      if (currentWordArray.includes(lastGuessedLetter)) {
        return <p>{getCorrectGuessMsg(lastGuessedLetter.toUpperCase())}</p>
      }else{
        if(wrongGuessesCount > 0){
          return <p>{getFarewellText(languages[wrongGuessesCount-1].name)}</p>
        }else{
          return null
        }
      }
    }

    if (isGameWon) {
      return(
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p> 
        </>
      )
    }else{
      return(
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😔🎮</p> 
        </>
      )
    }
  }

  return (
    <section>
        <div className={gameStatusClass}>
          {lastGuessedLetter ? renderGameStatus() : <p>Start Guessing...</p>}
        </div>
    </section>
  )
}

export default Result