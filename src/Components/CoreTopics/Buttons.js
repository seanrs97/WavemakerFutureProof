import React  from "react";
import styled from "styled-components";

class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <ButtonsContainer>
                {Object.values(this.props).map((button) =>
                    <div>
                        {!!button.buttons && button.buttons.map((val) => (
                            <div key = {val.id}>
                                <a href = {val.id}>
                                    <img src = {val.image} alt = {val.text}/>
                                </a>
                                <p> {val.text} </p>
                            </div>
                        ))}
                    </div>
                )}
            </ButtonsContainer>
        )
    }
}
const ButtonsContainer = styled.div`
    div{
        div{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            border-top: 1px solid grey;
            padding: 80px 0;
            position: relative;
            width: 90%;
            margin: 0 auto;
            &:nth-child(1){
                border-top: none;
            }
            @media only screen and (max-width: 500px){
                display: block;
            }
            @media only screen and (min-width: 2000px){
                width: 70%;
            }
            @media only screen and (min-width: 1700px) and (max-width: 2000px){
                width: 78%;
            }
            @media only screen and (min-width: 1280px) and (max-width: 1700px){
                width: 78%;
            }
        }
        img{
            width: 300px;
            padding: 5% 0;
            @media only screen and (min-width: 2200px) {
                width: 500px;
            }
            @media only screen and (min-width: 1800px) and (max-width: 2200px){
                width: 460px;
            }
            @media only screen and (max-width: 800px){
                width: 340px;
            }
            @media only screen and (max-width: 540px){
                width: 90%;
            }
        }
        p{
            margin-top: 20px;
            @media only screen and (min-width: 2200px){
                font-size: 1.8em;
            }
            @media only screen and (min-width: 1800px) and (max-width: 2200px){
                font-size: 1.5em;
            }
        }
        @media only screen and (max-width: 950px){
            grid-gap: 30px;
        }
        @media only screen and (max-width: 800px){
            display: block;
            text-align: center;
        }
    }
`

export default Buttons;