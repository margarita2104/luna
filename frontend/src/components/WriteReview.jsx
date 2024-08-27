/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import StarRating from '../../ui/StarRatings';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding-bottom: 16px;
`;

const FormStyled = styled.form`
  width: 66%;
  padding: 80px;
  text-align: center;
`;
const TextareStyled = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  padding: 16px;
  font-size: 24px;
  color: #111827;
`;

function WriteReview({ setIsReviewButtonClicked, restaurantId }) {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token');
  const { register, handleSubmit, setValue } = useForm();
  const [rating, setRating] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  console.log(restaurantId);

  useEffect(() => {
    setValue('rating', rating);
    setIsReviewButtonClicked(true);
  }, [rating, setValue]);

  async function postReview(obj) {
    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage('');
    try {
      const res = await axios.post(
        `https://luna1.propulsion-learn.ch/backend/api/reviews/new/${restaurantId}/`,
        obj,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      setIsError(false);
      setIsSuccess(true);
      setIsLoading(false);

      return res.data;
    } catch (error) {
      setIsError(true);
      setIsSuccess(false);
      setErrorMessage(error.response.data.detail);
      setIsLoading(false);
      console.log(error);
    }
  }

  function onSubmit(data) {
    console.log(data);
    postReview(data);
  }
  console.log(errorMessage);

  return (
    <>
      <Flex>
        {isSuccess ? (
          navigate(0)
        ) : isLoading ? (
          <BeatLoader />
        ) : (
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <FlexCenter>
              <StarRating
                maxRating={5}
                rating={rating}
                onSetRating={setRating}
              />
              <input
                hidden
                {...register('rating', { required: true })}
                value={rating}
                readOnly
              />

              <p>Select your rating</p>
            </FlexCenter>
            <div>
              <div style={{ marginTop: '8px' }}>
                <TextareStyled
                  {...register('text_content', {
                    required: true,
                  })}
                  rows={3}
                  placeholder="Your review helps others learn about great local businesses.
            Please don't review this business if you received a freebie for writing this review, or if you are connected in any way to the owner or employees."
                />
              </div>
            </div>
            <FlexCenter style={{ justifyContent: 'end', paddingTop: '8px' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '18px',
                  justifyContent: 'end',
                }}
              >
                <button
                  onClick={() => setIsReviewButtonClicked(false)}
                  style={{
                    backgroundColor: 'inherit',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '18px',
                  }}
                >
                  CANCEL
                </button>
                <Button>SUBMIT</Button>
              </div>
              {isError && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </FlexCenter>
          </FormStyled>
        )}
      </Flex>
    </>
  );
}

export default WriteReview;
