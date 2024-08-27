import { useEffect, useState } from 'react';
import WriteReview from '../components/WriteReview';
import {
  ContainerAll,
  HeroContainer,
  HeroImage,
  Input,
} from '../components/HeroHeader';
import { Button } from '../../ui/Button';
import RestaurantPageReviewCard from '../components/RestaurantPageReviewCard';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getRestaurantByID, getReviewsByID } from '../api/api';
import Money from '../assets/svg/money.svg';
import Clock from '../assets/svg/clock.svg';

const HeroTextContainer = styled.div`
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);

  h2 {
    color: white;
  }

  p {
    color: white;
  }
`;

function RestaurantPage() {
  const params = useParams();
  const restaurantId = params.restaurantId;
  const [restaurantData, setRestaurantData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isReviewButtonClicked, setIsReviewButtonClicked] = useState(false);

  useEffect(() => {
    getReviewsByID(setReviewsData, restaurantId);
    getRestaurantByID(setRestaurantData, restaurantId);
  }, []);
  console.log(reviewsData);

  return (
    <>
      <HeroContainer>
        <HeroImage src={restaurantData?.image} />

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
        <HeroTextContainer>
          <h2>{restaurantData?.name}</h2>
          <p>{restaurantData?.category}</p>
          <div>
            <p>%STAR% </p>
            <p>%NUMBER REVIEWS% reviews</p>
          </div>
        </HeroTextContainer>
      </HeroContainer>
      {isReviewButtonClicked ? (
        <WriteReview
          restaurantId={restaurantId}
          setIsReviewButtonClicked={setIsReviewButtonClicked}
        />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          <div
            style={{
              display: 'flex',

              width: '60%',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                gap: '120px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  backgroundColor: 'white',
                  padding: '24px',
                }}
              >
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <Input
                          style={{
                            width: '80%',
                            border: '1px solid rgba(0, 0, 0, 0.105)',
                          }}
                          type="text"
                          placeholder="Filter"
                        />
                        <Button style={{ width: '20%' }}>FILTER</Button>
                      </div>
                    </div>
                  </div>
                  {!reviewsData.length
                    ? null
                    : reviewsData.map((review, index) => (
                        <RestaurantPageReviewCard
                          key={index}
                          review={review}
                          setIsClicked={setIsClicked}
                          isClicked={isClicked}
                        />
                      ))}
                </div>
              </div>
              <div
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.105)',
                    paddingBottom: '12px',
                    alignItems: 'center',
                  }}
                >
                  <img style={{ paddingRight: '12px' }} src={Clock} />
                  <p style={{ color: 'black' }}>
                    Opening Hours:{' '}
                    {!restaurantData.opening_hours
                      ? 'Not specified'
                      : restaurantData.opening_hours}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    paddingBottom: '14px',
                    alignItems: 'center',
                  }}
                >
                  <img style={{ paddingRight: '12px' }} src={Money} />
                  <p>
                    Price Level:{' '}
                    {!restaurantData?.price_level
                      ? 'Not Specified'
                      : restaurantData?.price_level}
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '7px',
                    paddingTop: '20px',
                  }}
                >
                  <Button
                    onClick={() => setIsReviewButtonClicked((prev) => !prev)}
                  >
                    WRITE A REVIEW
                  </Button>
                  <Button>EDIT DATA</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantPage;
