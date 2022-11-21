import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import {HangmanDrawing,HangmanWord,Keyboard} from "./components/index"
import styled from 'styled-components'

const getWord=()=>(words[Math.floor(Math.random()*words.length)])

const App=()=> {
  const [wordToGuess, setWordToGuess]= useState(getWord())
  const [guessedLetters, setGuessedLetters]=useState<string[]>([])
  const inCorrectLetters=guessedLetters.filter(letter=>!wordToGuess.includes(letter))

  const isLoser=inCorrectLetters.length>=6
  const isWinner=wordToGuess.split('').every(letter=>guessedLetters.includes(letter))

  const addGuessedLetter=useCallback((letter:string)=>{
    if(guessedLetters.includes(letter)||isLoser||isWinner) return

    setGuessedLetters(currentLetters=>[...currentLetters,letter])

  },[guessedLetters,isWinner,isLoser])



  

  useEffect(()=>{
  const handler=(e:KeyboardEvent)=>{
   const key=e.key
   if(!key.match(/^[a-z]$/)) return

   e.preventDefault()
   addGuessedLetter(key)
  }
  document.addEventListener('keypress',handler)

  return ()=>{
    document.removeEventListener('keypress',handler)
  }

  },[guessedLetters])

  useEffect(()=>{
   const handler=(e:KeyboardEvent)=>{
   const key=e.key
   if(key!=='Enter') return
   e.preventDefault()
   setGuessedLetters([])
   setWordToGuess(getWord())
  }
  document.addEventListener('keypress',handler)

  return ()=>{
    document.removeEventListener('keypress',handler)
  }

  },[])
  return  <WrapperContainer>
    <WinOrLose>
      {isWinner&&"We have a winner !!!- Refresh or Press enter to play again"}
      {isLoser&&"Nice Try !!!- Refresh or Press enter to play again"}
    </WinOrLose>
    <HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>
    <HangmanWord showAnswer={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    <KeyboardContainer>
    <Keyboard 
    disabled={isWinner||isLoser}
    activeLetters={guessedLetters.filter(letter=>wordToGuess.includes(letter))}
    inActiveLetters={inCorrectLetters}
    addGuessedLetter={addGuessedLetter}/>
    </KeyboardContainer>
  </WrapperContainer>

}


export default App
const WrapperContainer=styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  gap: 2rem;
`

const WinOrLose=styled.div`
  font-size: 2rem;
  text-align: center;
`
const KeyboardContainer=styled.div`
  align-self: stretch;
`
