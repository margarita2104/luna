import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

function AppLayout() {
  return (
    <StyledLayout>
      <Header />
      <div style={{ overflow: 'scroll' }}>
        <main style={{ height: '100%', backgroundColor: '#f8f8f8' }}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </StyledLayout>
  );
}

export default AppLayout;
