import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Facebook from '../assets/svg/facebook.svg'
import Twitter from '../assets/svg/twitter.svg'
import Googleplus from '../assets/svg/googleplus.svg'
import Instagram from '../assets/svg/instagram.svg'


const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  gap: 24px;
  width: 100%;
  border-bottom: 1px solid #00000022;
`;

const LinksDiv = styled.div`
  display: flex;
  gap: 16px;
`;

const IconsDiv = styled.div`
  display: flex;
  gap: 20px;
  padding-right: 24px;
`;

const ButtonLink = styled.button`
  border-radius: 8px;
  color: black;
  padding: 4px 32px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

const StyledImgDiv = styled.div`
  cursor: pointer;
`;

const Copyright = styled.p`
    padding-left: 40px;
    color: #454545;
    font-size: 12px;
`;

function Footer() {
  return (
    <FooterStyled>
      <Flex>
        <div>
          <LinksDiv>
            <Link to="#">
              <ButtonLink>About us</ButtonLink>
            </Link>
            <Link to="#">
              <ButtonLink>Press</ButtonLink>
            </Link>
            <Link to="#">
              <ButtonLink>Blog</ButtonLink>
            </Link>
            <Link to="#">
              <ButtonLink>IOS</ButtonLink>
            </Link>
            <Link to="#">
              <ButtonLink>Android</ButtonLink>
            </Link>
          </LinksDiv>
        </div>
        <IconsDiv>
          <StyledImgDiv>
            <img src={Facebook} />
          </StyledImgDiv>
          <StyledImgDiv>
            <img src={Twitter} />
          </StyledImgDiv>
          <StyledImgDiv>
            <img src={Googleplus} />
          </StyledImgDiv>
          <StyledImgDiv>
            <img src={Instagram} />
          </StyledImgDiv>
        </IconsDiv>
      </Flex>

      <Copyright>Copyright © reserved by Group 1</Copyright>
    </FooterStyled>
  );
}

export default Footer;
