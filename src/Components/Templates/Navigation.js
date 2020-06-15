import React from "react";
import styled from "styled-components";

class Navigation extends React.Component {
    render(){
        return (
            <Container style = {{background: this.props.headerColour}}>
                <ContentContainer>
                    {!!this.props.previousNavigation && this.props.previousNavigation.map((content) =>
                        <div className = "previous">
                            <h1> Previous Topic </h1>
                            <a href = {content.link}> {content.text} </a>
                        </div>
                    )}
                    {!!this.props.nextNavigation && this.props.nextNavigation.map((content) =>
                        <div className = "next">
                            <h1> Next Topic</h1>
                            <a href = {content.link}> {content.text}</a>
                        </div>
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
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "one two three";
    padding: 20px 0;
    h1{
        font-size: 2em;
        color: white;
    }
    a{
        color: white;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
        @media only screen and (max-width: 800px){
            text-decoration: underline;
        }
    }
    .previous{
        grid-are: one;
    }
    .next{
        margin-left: auto;
        margin-right: 0;
        grid-area: three;
    }
    @media only screen and (min-width: 1350px) and (max-width: 2000px){
        width: 78%;
    }
    @media only screen and (min-width: 2000px){
        width: 70%;
    }
`
export default Navigation;