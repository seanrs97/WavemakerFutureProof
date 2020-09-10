import styled from "styled-components";


export const MenuContainer = styled.div`
    background: black;
    width: 100%;
    position: fixed;
    z-index: 1000000000000000000;
    @media only screen and (max-width: 825px) and (max-height: 420px){
        position: initial;
    }
`
export const ContentContainer = styled.nav`
    margin: 0 auto;
    background: black;
    color: white;
    padding: 16px 0;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media only screen and (min-width: 2000px){
        width: 70%;
        padding: 24px 0;
    }
    @media only screen and (min-width: 1280px) and (max-width: 2000px){
        width: 78%;
    }
    @media only screen and (max-width: 700px){
        width: 100%;
        grid-template-areas: "nothing";
    }
    @media only screen and (max-width: 700px){
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .loginLink{
        text-decoration: none;
        color: white;
        position: absolute;
        bottom: 0;
        right: -5px;
        @media only screen and (max-width: 700px){
            display: none;
        }
    }
    .loginLinkHamburger{
        text-decoration: none;
        color: white;
        position: absolute;
        top: 20%;
        right: 5%;
    

        @media only screen and (min-width: 700px){
            display: none;
        }
    }
`
export const NavImgContainer = styled.div`
    position: relative;
    @media only screen and (min-width: 700px) and (max-width: 1200px){
        margin-left: 0;
    }
    @media only screen and (max-width: 700px){
        text-align: center;
        margin-left: 0;
    }
`
export const NavImg = styled.img`
    height: auto;
    width: 210px;
    filter: invert(102%) sepia(103%) saturate(1352%) hue-rotate(87deg) brightness(11119%) contrast(119%);
    @media only screen and (min-width: 2000px){
        width: 320px;
    }
    @media only screen and (min-width: 1650px) and (max-width: 2000px){
        width: 255px;
    }
`
export const MenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
    list-style: none;
    text-align: center;
    vertical-align: middle;
    position: relative;
    transition: 1s all;
    margin-left: auto;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -120px;

        &:last-child{
            margin-left: 0;
        }
        @media only screen and (min-width: 1650px) and (max-width: 2000px){
            // margin-left: -180px;
            margin-left: -10px;
        }
        @media only screen and (min-width: 2000px){
            margin-left: -240px;
        }
    }
    li{
        display: flex;
    }
    li img{
        height: auto;
        width: 50px;
        border-radius: 100%;
        @media only screen and (min-width: 2000px){
            width: 110px;
        }
        @media only screen and (min-width: 1650px) and (max-width: 2000px){
            width: 84px;
        }
    }
    @media only screen and (min-width: 2000px){
        grid-gap: 36px;
    }
    @media only screen and (max-width: 700px){
        display: none;
    }
`
export const MenuListText = styled.div`
    ul{
        display: none;
        padding-left: 0;
        transition: 1s all;
        
        .loggedInAvatar{
            li{
                text-align: center;
                padding-bottom: 0;
            }
            img{
                height: 150px;
                width: 150px;
            }
        }
        li{
            text-decoration: none;
            padding: 20px 0;
            border-bottom: 2px solid white;
            width: 90%;
            margin: 0 auto;
            img{
                height: 150px;
                width: 150px;
                display: block;
                margin: 0 auto;
                border-radius: 100px;
            }
            div{
                height: 14px;
                width: 14px;
                background: white;
                border-radius: 100px;
                display: inline-block;
                margin-right: 22px;
                // transform: translateY(2px);
            }
            a{
                color: white;
                text-decoration: none;
                display: inline-block;
            }
            &:last-child{
                {
                    border-bottom: none;
                }
            }
            &:nth-child(3){
                div{
                    background: linear-gradient(#2ab5e3, #0b92bf);
                }
            }
            &:nth-child(4){
                div{
                    background: linear-gradient(#fb1842, #d00056);
                }
            }
            &:nth-child(5){
                div{
                    background: linear-gradient(#57b28e, #3c9d52);
                }
            }
            &:nth-child(6){
                div{
                    background: linear-gradient(#ffd32b, #f39200);
                }
            }
        }
        @media only screen and (max-width: 700px){
            display: block;
            text-decoration: none;
            list-style: none;
            width: 100%;
            margin: 0 auto;
            position: absolute;
            background: black;
            left: 0;
            z-index: -10;
        }
    }
`
export const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    transition: .8s all;
    @media only screen and (max-width: 700px){
        display: block;
    }
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
    .bar1, .bar2, .bar3{
        width: 34px;
        height: 4px;
        background-color: white;
        margin: 8px 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }
    .change .bar1{
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
    }
    .change .bar2{
        opacity: 0;
    }
    .change .bar3{
        -webkit-transform: rotate(45deg) translate(-8px -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
`
export const Cross = styled.div`
    display: none;
    cursor: pointer;
    position: absolute;
    top: 0%;
    left: 4%;
    transition: .8s all;
    transform: translateY(-50%);

    h1{
        font-size: 3.4em;
    }
    @media only screen and (max-width: 700px){
        display: block;
    }
`