import styled from "styled-components";
// import {ProfileLeftContainer} from "../pages/ProfileBase.jsx";

export const MainContainer = styled.div`
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //min-height: 100vh;
    position: relative;
    margin-top: 20px;
`;
export const ContentContainer = styled.div`

    width: 587px;
    height: 148px;
    display: grid;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: justified;


`
export const TopMiddleContainer = styled.div`
    display: grid;
    margin-top: -190px;
    top: 0px;
    width: 100%;
    position: absolute;
    justify-content: center;
    align-items: flex-start;

    padding: 10px; /* For spacing */
    z-index: 10; /* Ensure it's on top */
    font-family: Roboto;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    text-align: center;
    color: white;

`

export const ProfileLeftContainer = styled.div`
    width: 232px;
    height: 185px;
    font-family: Roboto, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    text-align: left;
    margin-top: 12px;
    margin-left: 68px;
    position: absolute;
    left: 0;
    top: 0;
`
//  border-bottom: 1px solid #979797;
//  padding-bottom: 10px;


export const Paragraph = styled.p`
    margin: 0 10px; /* Adjust spacing between paragraphs */
`

export const RightContainer = styled.div`
    position: absolute;
    right: 11%;
    top: -10%;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 300;
    line-height: 23.44px;
    text-align: left;

`

export const SelectionContainer = styled.div`
    border-bottom: 2px solid grey;
    display: flex;
    align-items: center;

`
export const EditContainer = styled.div`

`
export const GreyBackground = styled.div`
    background-color: grey;
`
export const LargeInput = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px;
    display: block;
    border-radius: 6px;
    font-size: 24px;
    font-weight: 500;
    color: #111827;
    border: 1px solid #00000039;
`