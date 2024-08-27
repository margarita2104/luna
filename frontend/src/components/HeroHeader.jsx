import styled from 'styled-components';
import {Button, SearchButtonHero} from '../../ui/Button';
import HomeBG from '../assets/img/homepage_bg.jpg';

export const HeroContainer = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background-color: #111827;
  background-image: linear-gradient(black, black);
  padding: 156px 0;
  width: 100%;
  height: 4%;
  margin-bottom: 40px;
`;

export const HeroImage = styled.img`
    position: absolute;
    inset: 0;
    z-index: -10;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
`;

export const ContainerAll = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding: 0 24px 0 24px;
`;

export const InputDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  font-size: 30px;
  width: 100%;
`;

export const Input = styled.input`
    height: 55px;
    width: 515px;
    margin-right: 25px;
    border-radius: 6px;
    padding: 0 8px 0 8px;
    font-size: 20px;
`;

function HeroHeader() {
  return (
    <>
      <HeroContainer>
        <HeroImage src={HomeBG} />

        <ContainerAll>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '672px',
            }}
          ></div>
          <div
            style={{
              marginTop: '40px',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '672px',
            }}
          ></div>
        </ContainerAll>
        <InputDiv>
          <div style={{ display: 'flex' }}>
            <Input type="text" placeholder="Search..." />
            <SearchButtonHero>Search</SearchButtonHero>
          </div>
        </InputDiv>
      </HeroContainer>
    </>
  );
}

export default HeroHeader;
