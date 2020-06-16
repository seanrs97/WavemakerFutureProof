import React from "react";
import styled from "styled-components";

class Navigation extends React.Component {
    render(){
        return (
            <Container style = {{background: this.props.headerColour}}>
                <ContentContainer>
                    {!!this.props.previousNavigation && this.props.previousNavigation.map((content) =>
                        <a className = "previous" href = {content.link}>
                            <div>
                                <h1> Previous Topic </h1>
                                <a className = "link" href = {content.link}> {content.text} </a>
                            </div>
                        </a>
                    )}
                    {!!this.props.nextNavigation && this.props.nextNavigation.map((content) =>
                        <a className = "next" href = {content.link}>
                            <div>
                                <h1> Next Topic</h1>
                                <a className = "link" href = {content.link}> {content.text}</a>
                            </div>
                        </a>
                    )}
                </ContentContainer>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    background: blue;
`
const ContentContainer = styled.div`
    width: 90%;
    color: white;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "one three";
    padding: 20px 0;
    a{
        color: white;
        text-decoration: none;
    }
    h1{
        font-size: 2.8em;
        color: white;
        @media only screen and (min-width: 2200px){
            font-size: 5em;
        }
        @media only screen and (min-width: 1600px) and (max-width: 2200px){
            font-size: 3.8em;
        }
        @media only screen and (max-width: 960px) and (min-width: 760px){
            font-size: 2.2em;
        }
        @media only screen and (max-width: 760px) and (min-width: 630px){
            font-size: 1.8em;
        }
        @media only screen and (max-width: 400px) and (min-width: 300px){
            font-size: 2.3em;
        }
        @media only screen and (max-width: 300px){
            font-size: 2em;
        }
    }
    .link{
        color: white;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
        @media only screen and (min-width: 2200px){
            font-size: 1.8em;
        }
        @media only screen and (min-width: 1600px) and (max-width: 2200px){
            font-size: 1.5em;
        }
        @media only screen and (max-width: 960px) and (min-width: 760px){
            font-size: 1em;
        }
        @media only screen and (max-width: 760px) and (min-width: 630px){
            font-size: 1em;
        }

    }
    .previous{
        div{
            @media only screen and (max-width: 630px){
                border-bottom: 2px solid white;
                padding-bottom: 30px;
            }
        }
    }
    .next{
        margin-left: auto;
        margin-right: 0;
        grid-area: three;
        div{
            @media only screen and (max-width: 630px){
                padding-top: 10px;
            }
        }
    }
    @media only screen and (min-width: 1350px) and (max-width: 2000px){
        width: 78%;
    }
    @media only screen and (min-width: 2000px){
        width: 70%;
    }
    @media only screen and (max-width: 630px){
        display: block;
        text-align: center;
    }
`
export default Navigation;