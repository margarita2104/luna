import HeroHeader from '../components/HeroHeader';
import { HeadingForm } from '../../ui/HeadingForm';
// import RestaurantCard from '../components/RestaurantCard';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getRestaurantsHome } from '../api/api';
import { Container } from '../components/RestaurantCard';
import RestaurantHome from '../components/RestaurantHome';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-content: center;
  justify-items: center;
  /* column-gap: 12px; */
  width: 83%;
  margin-bottom: 8%;
  row-gap: 30px;
`;

function Home() {
  const [restaurantsHome, setRestaurantsHome] = useState([]);
  useEffect(() => {
    getRestaurantsHome(setRestaurantsHome);
  }, []);
  console.log(restaurantsHome);
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <HeroHeader />
      <div
        style={{
          width: 'fit-content',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <HeadingForm
          style={{
            marginTop: '0px',
          }}
        >
          BEST RATED RESTAURANTS
        </HeadingForm>
      </div>
      <Container>
        {!restaurantsHome.length
          ? null
          : restaurantsHome
              .slice(0, 4)
              .map((restaurant, index) => (
                <RestaurantHome key={index} restaurant={restaurant} />
              ))}
      </Container>
    </div>
  );
}

export default Home;
