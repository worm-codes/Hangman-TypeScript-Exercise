import styled from "styled-components"

const HangmanWord = () => {
    const word='test'
    const guessedLetters=['t','e']
  return (
    <WordContainer>
     
        {word.split('').map((letter,index)=>( <UnderLine key={index}>
        <Letter correct={guessedLetters.includes(letter)}>{letter}</Letter>
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
const Letter=styled.div`
  visibility: ${({correct})=>correct?'visible':'hidden'};;
`