import styled from "styled-components"
import KEYS from "./keys.json"
type KeyboardProps={
  activeLetters:string[],
  inActiveLetters:string[],
  addGuessedLetter:(letter:string)=>void,
  disabled?:boolean
}
const Keyboard = ({activeLetters,inActiveLetters,addGuessedLetter,disabled}:KeyboardProps) => {
  return (
    <div>
      <KeyboardWrapper>
        {KEYS.map((key)=>{
        const isActive=activeLetters.includes(key)
        const isInActive=inActiveLetters.includes(key)
         return <KeyboardKey 
          onClick={()=>addGuessedLetter(key)}
          disabled={isActive||isInActive||disabled} 
          isActive={isActive}
          isInActive={isInActive}>{key}</KeyboardKey>
})}
      </KeyboardWrapper>
    </div>
  )
}

export default Keyboard

const KeyboardWrapper=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(75px,1fr));
  gap: 0.5rem;
`
interface KeyboardButtonProps {
  readonly isActive: boolean;
  readonly isInActive: boolean;
}
const KeyboardKey=styled.button<KeyboardButtonProps>`
  width: 100%;
  border: 3px solid black;
  background: none;
  aspect-ratio: 1/1;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({isActive})=>isActive?'white':'black'};
  &:hover:not(:disabled),&:focus:not(:disabled){
    background-color: hsl(200,100%,75%);
  }
  background-color: ${({isActive})=>isActive?'hsl(200,100%,50%)':''};
  opacity:${({isInActive})=>isInActive?'0.3':''}
`