import ReviewCard from '../components/ReviewCard';
import UserCard from '../components/UserCard';
import RestaurantCard, { Container } from '../components/RestaurantCard';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardContainer } from './Home';
import { getRestaurants, getReviews, getUsers } from '../api/api';

const InputContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  border: 1px solid #05050513;
`;

const Input = styled.input`
  width: 80%;
  height: 100%;
  padding-left: 33px;
  border: none;
  border-right: 1px solid #05050513;
  background-color: white;
  font-size: 19px;
`;

const TextContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 130px;
  margin-bottom: 68px;

  button {
    font-size: 30px;
    background-color: inherit;
    border: none;
    border-bottom: orange;
    cursor: pointer;
  }
`;

function Search() {
  // const [currentPage, setCurrentPage] = useState(<RestaurantCard />);
  const [restaurantIsClicked, setRestaurantIsClicked] = useState(false);
  const [usersIsClicked, setUsersIsClicked] = useState(false);
  const [reviewsIsClicked, setReviewsIsClicked] = useState(false);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [restaurants, setRestaurant] = useState([]);
  const token = window.localStorage.getItem('token');

  function handleRestaurantClick() {
    setRestaurantIsClicked(true);
    setReviewsIsClicked(false);
    setUsersIsClicked(false);
  }
  function handleUsersClick() {
    setUsersIsClicked(true);
    setRestaurantIsClicked(false);
    setReviewsIsClicked(false);
  }
  function handleReviewsClick() {
    setReviewsIsClicked(true);
    setUsersIsClicked(false);
    setRestaurantIsClicked(false);
  }

  useEffect(() => {
    getUsers(setUsers, token);
    getRestaurants(setRestaurant);
    getReviews(setReviews, token);
    setRestaurantIsClicked(true);
  }, []);
  console.log(restaurants);
  console.log(users);
  console.log(reviews);

  return (
    <div>
      <InputContainer>
        <Input type="text" placeholder="Search..." />

        <select
          style={{
            width: '20%',
            height: '38px',
            border: 'none',
            fontSize: '20px',
            color: 'gray',
            padding: '0 15px',
          }}
        >
          <option>Select a category</option>
        </select>
      </InputContainer>
      <TextContainer>
        <button
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          onClick={() => handleRestaurantClick()}
        >
          RESTAURANTS
        </button>

        <button
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          onClick={() => handleReviewsClick()}
        >
          REVIEWS
        </button>
        <button
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          onClick={() => handleUsersClick()}
        >
          USERS
        </button>
      </TextContainer>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {restaurantIsClicked && (
          <Container>
            {!restaurants.length
              ? null
              : restaurants?.map((restaurant, index) => (
                  <RestaurantCard key={index} restaurant={restaurant} />
                ))}
          </Container>
        )}

        {reviewsIsClicked && (
          <Container>
            {!reviews.length
              ? null
              : reviews?.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
          </Container>
        )}

        {usersIsClicked && (
          <Container>
            {!users.length
              ? null
              : users?.map((user, index) => (
                  <UserCard key={index} user={user} />
                ))}
          </Container>
        )}
      </div>
    </div>
  );
}

export default Search;
