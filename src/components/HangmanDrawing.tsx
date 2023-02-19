import styled from "styled-components"
type HangmanDrawingProps={
    numberOfGuesses:number
}

const HangmanDrawing = ({numberOfGuesses}:HangmanDrawingProps) => {
    const BODY=[<Head/>,<Body/>,<RightArm/>,<LeftArm/>,<RightLeg/>,
<LeftLeg/>,]
  return (
    <Rack>
        {BODY.slice(0,numberOfGuesses)}
        <Acnhor4/>
        <Acnhor3/>
       <Acnhor2/>
      <Acnhor1/>
    </Rack>
  )
}

export default HangmanDrawing

const Rack= styled.div`
    position: relative;
`
const Acnhor1=styled.div`
    height: 10px;
    width: 90px;
    position: absolute;
    left:-40px;
    background-color: black;
`
const Acnhor2=styled.div`
    height: 350px;
    width: 10px;
    background-color: black;
 
`
const Acnhor3=styled.div`
    height: 10px;
    width: 180px;
    /* margin-left: 10px; */
    background-color: black;
`
const Acnhor4=styled.div`
    height: 50px;
    width: 10px;
    background-color: black;
    position: absolute;
    top: 0;
    right: 0;

`
const Head=styled.div`
    width: 50px;
    height: 50px;
    border-radius:100%;
    border: 10px solid black;
    position: absolute;
    top: 50px;
    right: -30px;
`
const Body=styled.div`
    width: 10px;
    height: 100px;
    background-color: black;
    position: absolute;
    top: 120px;
    right: 0;
`
const RightArm=styled.div`
    width: 100px;
    height: 10px;
    background-color: black;
    position: absolute;
    top: 150px;
    right: -100px;
    rotate: -30deg;
    transform-origin: left bottom;
`
const LeftArm=styled.div`
    width: 100px;
    height: 10px;
    background-color: black;
    position: absolute;
    top: 150px;
    right: 10px;
    rotate: 30deg;
    transform-origin: right bottom;
`

const RightLeg=styled.div`
    width: 100px;
    height: 10px;
    background-color: black;
    position: absolute;
    top: 210px;
    right: -90px;
    rotate: 60deg;
    transform-origin: left bottom;
`
const LeftLeg=styled.div`
    width: 100px;
    height: 10px;
    background-color: black;
    position: absolute;
    top: 210px;
    right: 0;
    rotate: -60deg;
    transform-origin: right bottom;
`