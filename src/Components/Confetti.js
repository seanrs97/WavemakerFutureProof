import React from 'react'
import styled from "styled-components";

// Custom Confetti component. Bit buggy at the moment
// Works by generating a bunch of small divs and gives them random properties i.e. height, width, rotate, transform etc. and then animates them using keyframes

class Confetti extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      values: [],
      height: props.height
    }
  }
  randomNumberGenerator = (min, max) => {
    let range = max - min;
    let random = Math.random();
    random = random * (range + 1);
    random = random + min;

    return random;
  }
  randomColourGenerator = () => {

    // BLUE COLOUR
    let colour1 = 42;
    let colour2 = 181;
    let colour3 = 227;

    // GREEN COLOUR
    let colour4 = 87;
    let colour5 = 178;
    let colour6 = 142;

    // YELLOW / ORANGE COLOUR
    let colour7 = 255;
    let colour8 = 211;
    let colour9 = 43;

    // RED COLOUR
    let colour10 = 251;
    let colour11 = 24;
    let colour12 = 66;


    // let finalBlueColour = `linear-gradient(90deg, rgba(42,181,227,1) 0%, rgba(11,146,191,1) 12%)`;
    // let finalGreenColour = `linear-gradient(90deg, rgba(87,178,142,1) 0%, rgba(60,157,82,1) 12%)`;
    // let finalYellowColour = ` linear-gradient(90deg, rgba(255,211,43,1) 0%, rgba(243,146,0,1) 12%)`;
    // let finalRedColour = `linear-gradient(90deg, rgba(251,24,66,1) 0%, rgba(208,0,86,1) 12%)`;
    let blueColour = `#2ab5e3`;
    let redColour = `#fb1842`;
    let greenColour = `#57b28e`;
    let yellowColour = `#ffd32b`;

    let finalColour = `rgb(${colour1}, ${colour2}, ${colour3})`;
    let finalColour2 = `rgb(${colour4}, ${colour5}, ${colour6})`;
    let finalColour3 = `rgb(${colour7}, ${colour8}, ${colour9})`;
    let finalColour4 = `rgb(${colour10}, ${colour11}, ${colour12})`;

    let colours = []
    colours.push(blueColour, redColour, greenColour, yellowColour);

    let realFinalColour = colours[Math.floor(Math.random() * colours.length)];

    return realFinalColour;
  }
  randomWordGenerator = (word1, word2, word3, word4, word5) => {
    let arr = [word1, word2, word3, word4, word5]
    let random = arr[Math.floor(Math.random() * arr.length)];

    return random;
  }
  componentDidMount(){
    this.setState({
      width: window.innerWidth
    })
  }
  render(){
    let confettiItems = [];

    let leftAtt1;
    let leftAtt2;
    let topAtt1;
    let topAtt2;
    let confettiNumber;

    if(this.state.width >= 0 && this.state.width <= 500){
      leftAtt1 = -300;
      leftAtt2 = 800;
      topAtt1 = -340;
      topAtt2 = -40;
      confettiNumber = 200;
    } else if (this.state.width > 500 && this.state.width <= 1200) {
      leftAtt1 = -300;
      leftAtt2 = 1900;
      topAtt1 = -340;
      topAtt2 = 1740;
      confettiNumber = 320;
    } else if (this.state.width > 1200 && this.state.width <= 1900){
      leftAtt1 = -700;
      leftAtt2 = 2400;
      topAtt1 = -340;
      topAtt2 = 1340;
      confettiNumber = 400;
    } else {
      leftAtt1 = -600;
      leftAtt2 = 3000;
      topAtt1 = -300;
      topAtt2 = 1500;
      confettiNumber = 450
    }

    console.log(this.state.width, confettiNumber);

    for(let i = 0; i < confettiNumber; i++){
      confettiItems.push(
        <FallingConfetti
          style = {{
            height: `${this.randomNumberGenerator(6, 10)}px`,
            width: `${this.randomNumberGenerator(8, 14)}px`,
            position: "absolute", 
            left: `${this.randomNumberGenerator(leftAtt1, leftAtt2)}px`,
            top: `${this.randomNumberGenerator(topAtt1, topAtt2)}px`,
            background: this.randomColourGenerator(),
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDuration: `${this.randomNumberGenerator(1.8, 7.5)}s`,
          }}
        />
      )
    }
    return (
      <div>
        <div>
          {confettiItems}
        </div>
        {/* <FallingConfetti transY1 = "100px"
        /> */}
      </div>
    )
  }
}
const FallingConfetti = styled.div`
  @keyframes falling {
    0%{
      transform: translateY(0) translateX(0) scaleX(0) scaleY(0) rotate(0);
    }
    25%{
      transform: translateY(130px) translateX(-50px) scaleX(-1) scaleY(-1) rotate(40deg);
    }
    50%{
      transform: translateY(260px) translateX(-100px) scaleX(0) scaleY(0) rotate(60deg);
    }
    75%{
      transform: translateY(390px) translateX(-150px) scaleX(1) scaleY(1) rotate(80deg)
    }
    100%{
      transform: translateY(520px) translateX(-200px) scaleX(-1) scaleY(-1) rotate(100deg);
    }
  }
  height: 4px;
  width: 12px;
  animation-name: falling;
`
export default Confetti;