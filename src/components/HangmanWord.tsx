import styled from "styled-components"
type HangmanWordProps={
  wordToGuess:string,
  guessedLetters:string[],
  showAnswer?:boolean
}
const HangmanWord = ({wordToGuess,guessedLetters,showAnswer=false}:HangmanWordProps) => {
  return (
    <WordContainer>
        {wordToGuess.split('').map((letter,index)=>( <UnderLine key={index}>
        <Letter 
        remainingLetters={!guessedLetters.includes(letter)||showAnswer}
        isCorrect={guessedLetters.includes(letter)||showAnswer}
        >{letter}</Letter>
      </UnderLine>))}
    </WordContainer>
  )
}

export default HangmanWord

const WordContainer=styled.div`
    display: flex;
    gap: .25em;
    font-size: 6rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
`
const UnderLine=styled.div`
  border-bottom: 0.1em solid black;
`
interface LettterProps {
  readonly isCorrect: boolean;
  readonly remainingLetters: boolean;
}
const Letter=styled.div<LettterProps>`
  visibility: ${({isCorrect})=>isCorrect?'visible':'hidden'};;
  color:${({remainingLetters})=>remainingLetters?'red':'black'}
`