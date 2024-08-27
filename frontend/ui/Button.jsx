import styled from 'styled-components';

export const Button = styled.button`
    font-family: "Roboto", sans-serif;
    border-radius: 100px;
    background-color: #f59e0b;
    cursor: pointer;
    font-size: 16px;
    color: white;
    padding: 12px 24px;
    border: none;
    text-transform: uppercase;


    &:hover {
        background-color: #d97706;
        transform: scale(0.95);
    }
`;

export const HeaderNavButtonLogin = styled(Button)`
    text-transform: uppercase;
    border-radius: 100px 0 0 100px;
    margin-right: 1px;
    width: 110px;
`

export const HeaderNavButtonSignUp = styled(Button)`
    text-transform: uppercase;
    border-radius: 0 100px 100px 0;
    width: 110px;
`

export const SearchButtonHero = styled(Button)`
    width: 200px;
    height: 57px;
    border-radius: 100px;
    font-size: 20px;
    text-transform: capitalize;

`
