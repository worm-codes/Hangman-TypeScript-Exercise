import { useState } from "react"
import words from "./wordList.json"
import {HangmanDrawing,HangmanWord,Keyboard} from "./components/index"
import styled from 'styled-components'
const App=()=> {
  const [wordToGuess, setWordToGuess]= useState(()=>{
    return words[Math.floor(Math.random()*words.length)]
  })
  console.log(wordToGuess)
  return  <WrapperContainer>
    <WinOrLose>Win Lose</WinOrLose>
    <HangmanDrawing/>
    <HangmanWord/>
    <Keyboard/>
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
