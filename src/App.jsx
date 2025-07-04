import { useState } from "react"
import Header from "./components/Header"
import Languages from "./components/Languages"
import Result from "./components/Result"
import "./index.css"
import {languages} from "./languages"
import { clsx } from "clsx"
import Confetti from 'react-confetti'
import { getRandomWord } from "./utils"

const App = () => {

  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  // console.log(currentWord)
  const currentWordArray = currentWord.word.trim(" ").split("");
  // console.log(currentWordArray)

  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuessesCount = 
      guessedLetters.filter(letter => 
        !currentWordArray.includes(letter)
      ).length

  const isGameWon = 
        currentWordArray.every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessesCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost

  const alphabets = "qwertyuiopasdfghjklzxcvbnm".split("");

  const addGuessedLetter = (letter) => {
    setGuessedLetters(prevLetters => 
        guessedLetters.includes(letter) ? 
          prevLetters : 
          [...prevLetters, letter]
      )
  }

  const startNewGameHandler = () => {
    setGuessedLetters([])
    setCurrentWord(getRandomWord())
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={800} />}
      <Header wrongGuessesCount={wrongGuessesCount} />
      <Result 
        isGameOver={isGameOver} 
        isGameWon={isGameWon} 
        lastGuessedLetter={guessedLetters[guessedLetters.length - 1]}
        currentWordArray={currentWordArray}  
        wrongGuessesCount={wrongGuessesCount} 
      />
      <Languages langData={languages} wrongGuessesCount={wrongGuessesCount}/>
      <section className="letter-container">
        {currentWordArray.map((eachLetter, index) => {
          const missedLetterClassName = clsx(
            isGameLost && !guessedLetters.includes(eachLetter) && "missed-letter"
          )
          return(
            <span key={index} className={missedLetterClassName}>
            {
              isGameOver ? eachLetter.toUpperCase() : 
              (guessedLetters.includes(eachLetter) ? 
              eachLetter.toUpperCase() : "")
            }
          </span>
          )
        })}
      </section>
      <p style={{ textAlign:"center" }}>Hint: {currentWord.hint}</p>
      <section className="keyboard">
        {alphabets.map(letter => {
          const isGuessed = guessedLetters.includes(letter)
          const isCorrect = isGuessed && currentWord.word.includes(letter)
          const isWrong = isGuessed && !currentWord.word.includes(letter)
          const className = clsx({
            correct: isCorrect,
            wrong: isWrong,
          })

          return(
            <button 
              className={className}
              key={letter} 
              disabled={isGameOver}
              onClick={() => 
                addGuessedLetter(letter)}
            >{letter.toUpperCase()}</button>
          )
        }
        )}
      </section>
      {guessedLetters.length > 0 ? <button onClick={startNewGameHandler} className="new-game">{isGameOver ? "New Game" : "Reset Game"}</button> : null}
    </main>
  )
}

export default App