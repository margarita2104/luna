/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Card } from './RestaurantCard';
import LikeImg from '../assets/svg/Like.svg';
import Avatar from '../assets/svg/avatar.jpeg';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const ImageContainer = styled.div`
  height: 70px;
  width: 65px;
  overflow: hidden;
  margin-right: 7px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100%;
`;

const ButtonLike = styled.button`
  padding: 3px 15px;
  border: none;
  background-color: rgba(145, 145, 145, 0.6);
  color: white;
  border-radius: 100px 0 0 100px;
  min-height: 33px;
  margin-right: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 120px;
  justify-content: space-between;

  &:hover {
    background-color: #757575;
    transform: scale(0.96);
  }
`;

const ButtonComment = styled.button`
  padding: 3px 15px;
  border: none;
  background-color: rgba(145, 145, 145, 0.6);
  color: white;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  display: flex;
  min-height: 33px;
  justify-content: space-between;
  align-items: center;
  width: 120px;

  &:hover {
    background-color: #757575;
    transform: scale(0.96);
  }
`;

function ReviewCard({ review }) {
  return (
    <div>
      <Card>
        <div>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #EBEBEB',
            }}
          >
            <ImageContainer>
              <Image
                src={
                  !review?.user.profile_picture
                    ? `${Avatar}`
                    : review?.user.profile_picture
                }
              />
            </ImageContainer>
            <div>
              <div>
                <h3
                  style={{
                    color: 'orange',
                    margin: '0',
                    marginTop: '10px',
                    marginBottom: '5px',
                  }}
                >
                  {!review.user.first_name ? 'Not' : review.user.first_name}{' '}
                  {!review.user.last_name ? 'Specified' : review.user.last_name}
                </h3>
                <p
                  style={{
                    margin: '0',
                  }}
                >
                  Total Reviews
                </p>
              </div>
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            <p style={{ marginTop: '4px', color: 'orange', fontWeight: '700' }}>
              {review.restaurant.name}
            </p>
            <p
              style={{
                marginBottom: '8px',
                fontSize: '14px',
              }}
            >
              {review.text_content}
            </p>
            <Flex>
              <ButtonLike>
                <img alt={'like'} src={LikeImg}></img>
                <span>Like</span>
                <span>63</span>
              </ButtonLike>

              <ButtonComment>
                <span>Comment</span>
                <span>63</span>
              </ButtonComment>
            </Flex>

            <p
              style={{
                fontSize: '20px',
                fontWeight: '300',
              }}
            >
              Latest comments
            </p>
            <p
              style={{
                color: 'orange',
                margin: '0',
                marginBottom: '3px',
                fontWeight: '700',
              }}
            >
              Cristiano Ronaldo
            </p>
            <p style={{ margin: '0', marginBottom: '10px' }}>I love it</p>
            <p
              style={{
                color: 'orange',
                margin: '0',
                marginBottom: '3px',
                fontWeight: '700',
              }}
            >
              Ruben Villalon
            </p>
            <p style={{ margin: '0', marginBottom: '10px' }}>Crazyyyy</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ReviewCard;
