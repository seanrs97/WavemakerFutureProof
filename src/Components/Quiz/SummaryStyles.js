import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    padding: 14px;
    text-align: center;
    position: relative;
    overflow: hidden;
    .content-container{
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        @media only screen and (min-width: 1300px) and (max-width: 1500px){
            top: 25%
        }
        @media only screen and (min-width: 768px) and (max-width: 1100px){
            top: 25%;
        }
        @media only screen and (max-width: 768px) and (min-width: 350px){
            top: 20%;
        }
        @media only screen and (max-width: 350px){
            top: 30%;
        }
    }
    h1{
        font-size: 5em;
        color: white;
        @media only screen and (max-width: 350px){
            font-size: 4em;
        }
        @media only screen and (max-width: 800px) and (min-width: 430px){
            font-size: 5em;
        }
        @media only screen and (max-width: 1400px) and (min-width: 800px){
            font-size: 6em;
        }
        @media only screen and (min-width: 1400px) and (max-width: 2000px){
            font-size: 7.4em;
            line-height: 1.2em;
        }
        @media only screen and (min-width: 2000px){
            font-size: 11.5em;
        }
    }
    h2{
        font-size: 2.2em;
        color: white;
        font-weight: 400;
        @media only screen and (max-width: 350px){
            font-size: 2em;
        }
        @media only screen and (max-width: 800px) and (min-width: 430px){
            font-size: 2em;
        }
        @media only screen and (max-width: 1400px) and (min-width: 800px){
            font-size: 2.3em;
        }
        @media only screen and (min-width: 1400px) and (max-width: 2000px){
            font-size: 2.6em;
        }
        @media only screen and (min-width: 2000px){
            font-size: 3.8em;
        }
    }
    p{
        color: white;
        @media only screen and (max-width: 350px){
            font-size: 1.4em;
        }
        @media only screen and (max-width: 800px) and (min-width: 430px){
            font-size: 1.6em;
        }
        @media only screen and (max-width: 1400px) and (min-width: 800px){
            font-size: 1.5em;
        }
        @media only screen and (min-width: 1400px) and (max-width: 2000px){
            font-size: 1.8em;
        }
        @media only screen and (min-width: 2000px){
            font-size: 2.2em;
        }
    }
    .top-quiz-wave{
        position: absolute;
        top: 0;
        right: 0;
        width: 350px;
        @media only screen and (max-width: 800px) and (min-width: 430px){
            width: 500px;
        }
        @media only screen and (max-width: 1050px) and (min-width: 800px){
            width: 500px;
        }
        @media only screen and (min-width: 1050px) and (max-width: 1400px){
            width: 800px;
        }
        @media only screen and (min-width: 2000px){
            width: 1400px;
        }
    }
    .bottom-quiz-wave{
        width: 200px;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;
        @media only screen and (max-width: 800px) and (min-width: 430px){
            width: 250px;
        }
        @media only screen and (max-width: 1050px) and (min-width: 800px){
            width: 300px;
        }
        @media only screen and (min-width: 1050px) and (max-width: 1400px){
            width: 300px;   
        }
        @media only screen and (min-width: 2000px){
            width: 600px;
        }
    }
`
export const ButtonContainer = styled.div`
    position: absolute;
    top: 60%;
    width: 92.5%;
    text-align: center;
    transform: translateY(-50%);
    button{
        z-index: 50000;
        text-align: center;
        margin: auto;
        padding: 14px;
        border: none;
        background: #8bb7f6;
        cursor: pointer;
        color: white;
        border-radius: 10px;
        font-size: 1.6em;
        width: 30%;
        margin-top: 40px;
        transition: .5s all;
        width: 100%;
        &:nth-child(1){
            background: rgba(43, 251, 0, 0.65);
            border: 2px solid white;
            &:hover{
                background: #31d331;
            }
        }
        &:nth-child(2){
            border: 4px solid white;
            background: rgba(121, 161, 219, 0.3);;
            border-radius: 8px;
            font-size: 1.6em;
            padding: 20px 50px;
            z-index: 2;
            position: relative;
            &:hover{
                background: rgba(121, 161, 219, 0.4);
            }
            @media only screen and (min-width: 2000px){
                font-size: 3.2em;
            }
        }
        @media only screen and (max-width: 1400px) and (min-width: 800px){
            font-size: 2.6em;
            padding: 20px;
        }
        @media only screen and (min-width: 2000px){
            font-size: 4em;
            padding: 50px;
        }
    }
    @media only screen and (max-width: 425px){
        width: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 60%;
    }
    @media only screen and (max-width: 850px) and (min-width: 425px){
        top: 54%;
        width: 52%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media only screen and (max-width: 2000px) and (min-width: 850px){
        left: 50%;
        top: 60%;
        width: 44%;
        transform: translate(-50%, -50%);
        margin-bottom: 34px;
        z-index: 30000000000;
    }
    @media only screen and (min-width: 2000px){
        width: 40%;
        top: 38%;
        z-index: 3000000;
        margin-bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
    }
`
export const SuccessContainer = styled.div`
    text-align: center;
`