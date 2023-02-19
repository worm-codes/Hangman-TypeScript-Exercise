import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import {HangmanDrawing,HangmanWord,Keyboard} from "./components/index"
import styled from 'styled-components'
import useResponsive from '../hooks/useResponsive'

const getWord=(isTablet:boolean)=>{
  if(isTablet){
    for(let i=0;i<words.length;i++){
      const word=words[Math.floor(Math.random()*words.length)]
    if(word.length<=11){
      return word;
    }
   }
  }
  else{
    return words[Math.floor(Math.random()*words.length)] 
  }
}

const App=()=> {
  const {isTablet}=useResponsive()
  const [wordToGuess, setWordToGuess]= useState(getWord(isTablet))
  
  const [guessedLetters, setGuessedLetters]=useState<string[]>([])
  const inCorrectLetters=guessedLetters.filter(letter=>!wordToGuess?.includes(letter))

  const isLoser=inCorrectLetters.length>=6
  const isWinner=wordToGuess?.split('').every(letter=>guessedLetters.includes(letter))

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
   setWordToGuess(getWord(isTablet))
  }
  document.addEventListener('keypress',handler)

  return ()=>{
    document.removeEventListener('keypress',handler)
  }

  },[])

  return  <WrapperContainer isGameFinished={isLoser||isWinner} isTablet={isTablet}>
    
    {isTablet?
    <>
     <WinOrLose>
      {isWinner&&"You Win,refresh page to play again"}
      {isLoser&&"You Lose,refresh page to play again"}
    </WinOrLose>
    {!isWinner&&<HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>}
    <HangmanWord showAnswer={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
    </>
    :
     <DesktopView>
     {!isWinner&&<HangmanDrawing numberOfGuesses={inCorrectLetters.length}/>}
    <AnswerAndWinContainer>
       <HangmanWord isWinner={isWinner} showAnswer={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
      <WinOrLose isTablet={isTablet}>
      {isWinner&&"You Win,refresh page to play again"}
      {isLoser&&"You Lose,refresh page to play again"}
    </WinOrLose>
    </AnswerAndWinContainer>
    </DesktopView>
    }
   
 

    <KeyboardContainer>
    <Keyboard 
    disabled={isWinner||isLoser}
    activeLetters={guessedLetters.filter(letter=>wordToGuess?.includes(letter))}
    inActiveLetters={inCorrectLetters}
    addGuessedLetter={addGuessedLetter}/>
    </KeyboardContainer>
  </WrapperContainer>

}


export default App;
const DesktopView=styled.div`
    display: flex;
    gap: 13rem;
    justify-content: center;
    align-items: center;
`
const AnswerAndWinContainer=styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  `
const WrapperContainer=styled.div<{isTablet:boolean,isGameFinished?:boolean}>`
  max-width: 800px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  gap: ${({isTablet,isGameFinished})=>isTablet&&isGameFinished?'1rem':'2rem'};
`

const WinOrLose=styled.div<{isTablet?:boolean}>`
  font-size: ${({isTablet})=>isTablet?'1rem':'1.5rem'};
  text-align: center;
`
const KeyboardContainer=styled.div`
  align-self: stretch;
`
