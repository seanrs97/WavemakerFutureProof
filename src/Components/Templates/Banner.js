import React from "react";
import styled from "styled-components"; 

class Banner extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div>
                {!!this.props.bannerOne && this.props.bannerOne.map((banner) =>
                    <HalfwayBanner style = {{background: banner.colour}}>
                        <div key = {banner.id}>
                            <h1> {banner.text} </h1>
                            <p> {banner.desc} </p>
                        </div>
                    </HalfwayBanner>
                )}
                {!!this.props.bannerTwo && this.props.bannerTwo.map((banner) =>
                    <HalfwayBanner style = {{background: banner.colour}}>
                        <div key = {banner.id}>
                            <h1> {banner.text} </h1>
                            <p> {banner.desc} </p>
                        </div>
                    </HalfwayBanner>
                )}
            </div>
        )
    }
}
const HalfwayBanner = styled.div`
    width: 100%;
    margin-bottom: 20px;
    position: relative;

    
    div{
        padding: 30px 0;
        width: 90%;
        margin: 0 auto;
        @media only screen and (max-width: 2000px) and (min-width: 1280px){
            width: 78%;
            padding: 40px 0;
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
            padding: 50px 0;
        }
    h1{
        font-size: 4em;
        line-height: 1.2em;
        color: white;
        font-weight: 800;
        width: 100%;
        margin-bottom: 12px;
        margin: 0 auto;
        @media only screen and (min-width: 1900px) and (max-width: 2350px){
            font-size: 7em;
        }
        @media only screen and (min-width: 2350px){
            font-size: 6em;
        }
        @media only screen and (max-width: 600px) and (min-width: 500px){
            font-size: 3.6em;
        }
        @media only screen and (max-width: 500px) and (min-width: 400px){
            font-size: 3.4em;
        }
        @media only screen and (max-width: 400px){
            font-size: 2.4em;
        }
        @media only screen and (max-width: 750px){
            width: 100%;
        }
    }
    p{
        color: white;   
        font-size: 1em;
        width: 70%;
        padding-left: 10px
        @media only screen and (min-width: 2350px){
            font-size: 1.75em;
        }
        @media only screen and (min-width: 1900px) and (max-width: 2350px){
            font-size: 1.5em;
        }
        @media only screen and (min-width: 2350px){
            font-size: 1.7em;
        }
        @media only screen and (max-width: 750px){
            width: 90%;
        }
    }
`
export default Banner;