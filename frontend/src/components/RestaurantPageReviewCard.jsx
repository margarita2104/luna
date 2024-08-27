/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Input } from './HeroHeader';
import { Button } from '../../ui/Button';
import Avatar from '../assets/svg/avatar.jpeg';
import StarRating from '../../ui/StarRatings';

const ButtonStyled = styled.button`
  cursor: pointer;
  background-color: #bcbcbc;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  gap: 15px;
  color: white;
  &:hover {
    background-color: #b1b1b1;
    transform: scale(0.97);
  }
`;
const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const CommentsCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
  border-top: 2px solid rgba(0, 0, 0, 0.105);
  p {
    margin: 0;
    color: orange;
    font-size: 20px;
  }
  span {
    color: #232323;
    font-size: 18px;
  }
`;

function RestaurantPageReviewCard({ setIsClicked, isClicked, review }) {
  return (
    <div
      style={{
        width: '100%',
        marginTop: '30px',
        border: '1px solid #00000025',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '12px',
          }}
        >
          <div style={{ width: '112px', overflow: 'hidden' }}>
            <img
              src={
                !review.user.profile_picture ? `${Avatar}` : review.user.profile_picture
              }
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div>
            <h3 style={{ color: '#f59e0b' }}>
              {!review.user.first_name
                ? 'Not Specified'
                : review.user.first_name}
            </h3>

            <StarRating maxRating={5} rating={review.rating} />
          </div>
        </div>
      </div>
      <div style={{ padding: '8px 8px' }}>
        <p>{review.text_content}</p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {isClicked ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                gap: '10px',
                marginBottom: '12px',
              }}
            >
              <Input
                style={{ border: '1px solid gray' }}
                type="text"
                placeholder="Hide comments"
              />
              <Button>POST</Button>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <ButtonStyled style={{ marginRight: '2px' }}>
                <img src="src/assets/svg/money.svg" />
                <p>Total Likes Likes</p>
              </ButtonStyled>

              <ButtonStyled>
                <p>Comments Total comments</p>
              </ButtonStyled>
            </div>
          )}

          <button
            style={{
              backgroundColor: 'inherit',
              border: 'none',
              color: 'orange',
              fontSize: '18px',
              cursor: 'pointer',
              marginRight: '12px',
            }}
            onClick={() => setIsClicked((prev) => !prev)}
          >
            {isClicked ? 'Hide' : 'View all comments'}
          </button>
        </div>
        {isClicked && (
          <>
            <CommentsContainer>
              <CommentsCard>
                <p>Cristiano Ronaldo</p>
                <span>I love it</span>
              </CommentsCard>
              <CommentsCard>
                <p>Cristiano Ronaldo</p>
                <span>I love it</span>
              </CommentsCard>
            </CommentsContainer>
          </>
        )}
      </div>
    </div>
  );
}

export default RestaurantPageReviewCard;
