import styled from "styled-components"
import KEYS from "./keys.json"
import useResponsive from "../../hooks/useResponsive"
type KeyboardProps={
  activeLetters:string[],
  inActiveLetters:string[],
  addGuessedLetter:(letter:string)=>void,
  disabled?:boolean
}
const Keyboard = ({activeLetters,inActiveLetters,addGuessedLetter,disabled}:KeyboardProps) => {
  const {isTablet}=useResponsive()
  return (
    <div>
      <KeyboardWrapper isTablet={isTablet}>
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

const KeyboardWrapper=styled.div<{isTablet:boolean}>`
  display: grid;
  grid-template-columns: ${({isTablet})=>isTablet?' repeat(auto-fit,minmax(50px,1fr))':' repeat(auto-fit,minmax(80px,1fr))'};
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