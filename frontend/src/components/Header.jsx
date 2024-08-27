import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Button,
  HeaderNavButtonLogin,
  HeaderNavButtonSignUp,
} from '../../ui/Button';
import LogoImg from '../assets/svg/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 32px;
`;

const DivNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

function Header() {
  const navigate = useNavigate();

  const token = window.localStorage.getItem('token');

  function handleLogout() {
    window.localStorage.clear();

    navigate('/login');
  }
  return (
    <StyledHeader>
      <div>
        <img src={LogoImg} alt="logo" />
      </div>
      <DivNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <button
          style={{
            border: 'none',
            backgroundColor: 'inherit',
            fontSize: '20px',
          }}
          onClick={() => {
            if (!token) return navigate('/login');
          }}
        >
          <NavLink to="/profile">Profile</NavLink>
        </button>
        {token && <Button onClick={() => handleLogout()}>Logout</Button>}
        {!token && (
          <>
            <div>
              <Link to="/login">
                <HeaderNavButtonLogin>Login</HeaderNavButtonLogin>
              </Link>
              <Link to="/signup">
                <HeaderNavButtonSignUp>Sign up</HeaderNavButtonSignUp>
              </Link>
            </div>
          </>
        )}
      </DivNav>
    </StyledHeader>
  );
}

export default Header;
