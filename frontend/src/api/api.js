import axios from 'axios';

export const getUsers = async (setUsers, token) => {
  // const token = window.localStorage.getItem('token');

  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/users/list/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    console.log(res.data);
    setUsers(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurants = async (setRestaurants) => {
  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/restaurants/`,
      // {
      //   headers: { Authorization: `Bearer ${token}` },
      // },
    );
    console.log(res.data);
    setRestaurants(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getRestaurantsHome = async (setRestaurants) => {
  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/restaurants/`,
      // {
      //   headers: { Authorization: `Bearer ${token}` },
      // },
    );
    console.log(res.data);
    setRestaurants(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRestaurantByID = async (setRestaurantData, id) => {
  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/restaurants/${id}/`,
    );

    setRestaurantData(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getReviewsByID = async (setReviewsData, id) => {
  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/reviews/restaurant/${id}/`,
    );

    setReviewsData(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async (setReviews, token) => {
  // const token = window.localStorage.getItem('token');

  try {
    const res = await axios.get(
      `https://luna1.propulsion-learn.ch/backend/api/reviews/`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    console.log(res.data);
    setReviews(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
