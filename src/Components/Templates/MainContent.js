import React  from "react";
import styled from "styled-components";

import sal from "sal.js";
import '../../../node_modules/sal.js/dist/sal.css';

class MainContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        sal({
            once: false,
        });
    }
    render(){
        return (
            <ContentContainer>
                {!!this.props.what && this.props.what.map((cont) =>

                    // WHAT CONTENT 
                    <div className = "contentContainer contentContainerComplex" key = {cont.id}>
                        <img 
                            src = {cont.image} alt = {cont.id}
                            data-sal = "zoom-in"
                            data-sal-easing = "ease-out-back"
                            data-sal-duration = "1300"
                            data-sal-delay = "200"
                        />
                        <p className = "content-text">{cont.text}</p>
                    </div>
                )}

                {!!this.props.why && this.props.why.map((cont) =>

                    // WHY CONTENT 
                    <div className = "contentContainer contentContainerComplex" key = {cont.id}>
                        <img
                            src = {cont.image} alt = {cont.id}
                            data-sal = "zoom-in"
                            data-sal-easing = "ease-out-back"
                            data-sal-duration = "1300"
                            data-sal-delay = "200"
                        />
                        <p className = "content-text">{cont.text}</p>
                    </div>
                )}
                {!!this.props.how && this.props.how.map((cont) =>

                    //HOW CONTENT 
                    <div className = "contentContainer contentContainerComplex" key = {cont.id}>
                        <img 
                            src = {cont.image} alt = {cont.id}
                            data-sal = "zoom-in"
                            data-sal-easing = "ease-out-back"
                            data-sal-duration = "1300"
                            data-sal-delay = "200"
                        />
                        <ContentContainer className = "content-text">
                            <div className = "wrapper">
                                <h1>{cont.mainHeader}</h1>
                                <div className = "firstTextContainer">
                                    <h2> {cont.headingText1}</h2>
                                    <p> {cont.text1} </p>
                                </div>
                                <div className = "secondTextContainer">
                                    <h2> {cont.headingText2}</h2>
                                    <p> {cont.text2} </p>
                                </div>
                                <div className = "thirdTextContainer">
                                    <h2> {cont.headingText3}</h2>
                                    <ul> {!!cont.text3 && cont.text3.map((data) =>
                                        <li key = {data.text}> {data.text} </li>
                                    )}
                                    </ul>
                                </div>
                            </div>
                        </ContentContainer>
                    </div>
                )}
            </ContentContainer>
        )
    }
}

const ContentContainer = styled.div`
    .contentContainer{
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        padding: 25px 0;
        min-height: 30vh;
        padding: 86px 0;
        justify-content: space-around;
        &:nth-of-type(even){
            min-height: 30vh;
            flex-direction: row-reverse;
            justify-content: space-between;
            @media only screen and (max-width: 770px){
                min-height: 30vh;
                padding: 86px 0;
            }
            img{
                @media only screen and(max-width: 770px){
                    left: 0;
                }
            }
        }
        h1{
            font-size: 1.8em;
            font-weight: 200;
            @media only screen and (min-width: 2000px){
                font-size: 2.2em;
            }
        }
        h2{
            display: inline-block;
            font-size: 1em;
            font-weight: 800;
            margin-right: 8px;
            @media only screen and (max-width: 480px){
                margin-right: 0;
            }
            @media only screen and (min-width: 2000px){
                font-size: 1.4em;
            }
        }
        p{
            @media only screen and (min-width: 2000px){
                font-size: 1.2em;
            }
        }
        ul{
            font-size: 0.85em;
            margin-left: 20px;
            line-height: 1.5em;
            li{
                @media only screen and (min-width: 2000px){
                    font-size: 1.2em;
                    padding: 20px 0;
                }
            }
            @media only screen and (max-width: 480px){
                margin-left: 0;
                list-style: none;
                padding-left: 0;
                margin-top: 0;
            }
        }
        .wrapper{
            justify-content: center;
            h1{
                text-align: left;
                @media only screen and (max-width: 500px){
                    text-align: center;
                }
            }
            p{
                display: inline-block;
                font-size: 0.85em;
                @media only screen and (max-width: 480px){
                    display: block;
                }
                @media only screen and (min-width: 2000px){
                    font-size: 1.2em;
                }
            }
            .firstTextContainer{
                text-align: left;
                @media only screen and (max-width: 480px){
                    text-align: center;
                }
            }
            .secondTextContainer{
                text-align: left;
                @media only screen and (max-width: 480px){
                    text-align: center;
                }
            }
            .thirdTextContainer{
                text-align: left;
                @media only screen and (max-width: 480px){
                    text-align: center;
                }
            }
        }
        .content-text{
            position: initial !important;
            display: flex;
            max-width: 45%;
            font-size: 1.4em;
            width: 100%;
            align-items: center;
            justify-content: left;
            @media only screen and (min-width: 2200px){
                font-size: 2.4em;
            }
            @media only screen and (min-width: 1900px) and (max-width: 2200px){
                font-size: 2.1em;
                text-align: left;
            }
            @media only screen and (min-width: 1500px) and (max-width: 1900px){
                font-size: 1.8em;
            }
            @media only screen and (max-width: 480px){
                padding-bottom: 20px;
                position: initial;
                max-width: 100%;
            }
        }
        img{
            height: 100%;
            max-width: 45%;
            position: initial;
            width: 70%;
            @media only screen and (max-width: 480px){
                padding-bottom: 50px;
            }
            @media only screen and (min-width: 2000px){
                max-width: 38%;
            }    
        }
        @media only screen and (max-width: 770px){
            padding: 50px 0;
        }
        @media only screen and (max-width: 480px){
            width: 85%;
            display: block !important;
            text-align: center;
        }
        &:nth-of-type(even){
            .content-text{
                justify-content: space-between;
                @media only screen and (max-width: 500px){
                    justify-content: center;
                }
            }
        }
        &:nth-of-type(odd){
            .content-text{
                @media only screen and (max-width: 500px){
                    padding-left: 0;
                }
                justify-content: space-around;
            }
        }
        @media only screen and (min-width: 1280px) and (max-width: 2000px){
            width: 78%;
            justify-content: space-between;
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
            justify-content: space-between;
        }
    }
`
export default MainContent;