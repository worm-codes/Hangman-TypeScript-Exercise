import styled from "styled-components";
import useResponsive from '../../hooks/useResponsive';
type HangmanWordProps={
  wordToGuess?:string,
  guessedLetters:string[],
  showAnswer?:boolean
  isWinner?:boolean;
}
const HangmanWord = ({wordToGuess,guessedLetters,showAnswer=false,isWinner}:HangmanWordProps) => {
  const {isTablet}=useResponsive();
  return (
    <WordContainer isTablet={isTablet}>
        {wordToGuess?.split('').map((letter,index)=>( <UnderLine key={index}>
        <Letter 
        isWinner={isWinner}
        remainingLetters={!guessedLetters.includes(letter)||showAnswer}
        isCorrect={guessedLetters.includes(letter)||showAnswer}
        >{letter}</Letter>
      </UnderLine>))}
    </WordContainer>
  )
}

export default HangmanWord

const WordContainer=styled.div<{isTablet:boolean}>`
    display: flex;
    gap: .25em;
    font-size: ${({isTablet})=>isTablet?'2.4rem':'3rem'};
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
  readonly isWinner?:boolean;
}
const Letter=styled.div<LettterProps>`
  visibility: ${({isCorrect})=>isCorrect?'visible':'hidden'};;
  color:${({remainingLetters,isWinner})=>remainingLetters?'red':isWinner?'green':'black'}
`