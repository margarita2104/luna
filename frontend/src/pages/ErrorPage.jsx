import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button.jsx';
const MainStyled = styled.main`
  display: grid;
  min-height: 100%;
  align-items: center;
  background-color: white;
`;

const H1Styled = styled.h1`
  margin-top: 16px;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #111827;
  line-height: 1;
`;

const DIV = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.5rem;
`;

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <MainStyled>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '70px', fontWeight: '600', color: '#f59e0b' }}>
            404
          </p>
          <H1Styled>Page not found</H1Styled>
          <p style={{ fontSize: '40px', marginTop: '24px', color: '#4b5563' }}>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '24px', marginRight: '12px' }}>
              Go back to home page
            </span>
            <Button onClick={() => navigate('/')}>HOME</Button>
          </div>
          <DIV></DIV>
        </div>
      </MainStyled>
    </>
  );
}

export default ErrorPage;
