import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StaffsUni from "../Images/footerImages/staffs-uni.png";
import Erasmus from "../Images/footerImages/erasmus.svg";
import Unitemps from "../Images/footerImages/unitemps.png";

import logo from "../Images/logo.svg";
import StaffsUniImage from "../Images/footerImages/connected_university.jpg";
import EuropeanUnionImage from "../Images/footerImages/european_union.png";


class Footer extends React.Component {
    render(){
        return (
            <FooterContainer>
                <ContentContainer>
                    <LeftSide>
                        <Logo>
                            <img src = {logo} alt = "wave"/>
                        </Logo>
                    </LeftSide>
                    <RightSide>
                        <Sponsors>
                            <div>
                                <p className = "sponsors-text"> 
                                    Wavemaker Future Proof was developed with support
                                    from Staffordshire University as part of the 
                                    Staffordshire Digital Innovation Partnerships Programme (SDIPs)
                                    and is part funded by the European Regional Development Fund 2014 - 2020
                                </p>
                                <div className = "sponsors-images">
                                    <img src = {StaffsUniImage} alt = "connected university"/>
                                    <img src = {EuropeanUnionImage} alt = "european union"/>
                                </div>
                            </div>
                        </Sponsors>
                    </RightSide>

                </ContentContainer>
                <Bottom>
                    <Copyright>
                        <p> Copyright © 2020 Wavemaker Stoke </p>
                    </Copyright>
                    <SocialMedia>
                        <a href = "https://www.facebook.com/wavemakerstoke"> <p> <FontAwesomeIcon icon={['fab', 'facebook-square']} /></p> </a>
                        <a href = "https://twitter.com/wavemakerstoke"> <p> <FontAwesomeIcon icon={['fab', 'twitter']} /></p> </a>
                    </SocialMedia>
                </Bottom>
            </FooterContainer>
        );
    }
}

const FooterContainer = styled.div`
    background: #595858;
    color: white;
    position: relative;
    overflow: hidden;
    // padding: 2.5% 5%;
`
const ContentContainer = styled.div`
    width: 80% !important;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 600px) and (min-width: 450px){
        display: block;
    }
    @media only screen and (max-width: 450px){
        width: 100% !important;
        display: block;
    }
`
const LeftSide = styled.div`
    width: 20% !important;
    // padding-left: 4%;
    @media only screen and (max-width: 600px){
        width: 100% !important;  
        margin: 0 auto;
    }
`
const RightSide = styled.div`
    width: 80% !important;
    padding-left: 4%;
    @media only screen and (min-width: 450px) and (max-width: 600px){
        width: 100% !important;
        margin: 0 auto;
        padding-left: 0%;
    }
    @media only screen and (max-width: 450px){
        width: 80% !important;
        margin: 0 auto;
        padding-left: 0%;
    }
`
const Logo = styled.div`
    img{
        width: 84%;
        margin: 0 auto;
        display: block;
        opacity: 1;
        filter: invert(102%) sepia(103%) saturate(1352%) hue-rotate(87deg) brightness(11119%) contrast(119%);
    }
    padding-bottom: 136px;
    @media only screen and (max-width: 600px){
        padding-bottom: 40px;
        width: 70%;
        margin: 0 auto;
    }
`
const Sponsors = styled.div`
    color: white;
    padding-bottom: 20px;
    h5{
        text-align: center;
        font-size: 1.6em;
        padding-top: 20px;
        color: #595858;
    }
    div{
        width: 100%;
        margin: 0 auto;
        .sponsors-images{
            padding-top: 30px;
        }
        p{
            color: white;
            font-size: 1em;
            @media only screen and (min-width: 2000px){
                font-size: 1.4em;
            }
            @media only screen and (max-width: 800px) and (min-width: 450px){
                font-size: 0.85em;
            }
            @media only screen and (max-width: 450px){
                font-size: 0.7em;
            }
        }
        img{
            height: 40px;
            margin: 0 auto;
            &:nth-child(1){
                width: 100px;
                @media only screen and (min-width: 2000px){
                    height: 70px;
                    width: 180px;
                }
                @media only screen and (max-width: 600px) and (min-width: 340px){
                    margin: 0;
                }
                @media only screen and (max-width: 340px){
                    height: 36px;
                    width: 88px;
                }
            } 
            &:nth-child(2){
                width: 150px;
                padding-left: 2.5%;
                @media only screen and (min-width: 2000px){
                    width: 260px;
                    height: 70px;
                }
                @media only screen and (max-width: 340px){
                    height: 36px;
                    width: 132px;
                }
            }
        }
    }
`
const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    a{
        text-decoration: none;
        width: 50%;
        p{
            transition: .6s all;
            color: white;
            font-size: 2em;
            padding: 0 14px;
            &:hover{
                color: #aaaaaa;
            }
            @media only screen and (min-width: 2000px){
                font-size: 3em;
            }
            @media only screen and (max-width: 800px) and (min-width: 450px){
                font-size: 1.6em;
            }
            @media only screen and (max-width: 450px){
                font-size: 1.4em;
            }
        }
    }

`
const Copyright = styled.div`
    text-align: left;
    color: white;
    padding-top: 30px;
    p{
        color: white;
        font-size: 1em;
        @media only screen and (min-width: 2000px){
            font-size: 1.4em;
        }
        @media only screen and (max-width: 800px) and (min-width: 450px){
            font-size: 0.85em;
        }
        @media only screen and (max-width: 450px){
            font-size: 0.7em;
        }
    }
`
const Bottom = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid white;
    justify-content: space-between;

`
export default Footer;