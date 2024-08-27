import { Button } from '../../ui/Button';
import { useForm } from 'react-hook-form';
import Input from '../components/Input';
import { HeadingForm } from '../../ui/HeadingForm';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 48px 24px;
  min-height: 100%;
`;

export const SytledContainerForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function login(obj) {
    setIsLoading(true);
    setIsSuccess(false);
    setErrorMessage('');
    try {
      const res = await axios.post(
        `https://luna1.propulsion-learn.ch/backend/api/token/`,
        obj,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const accessToken = res.data.access;
      const refreshToken = res.data.access;

      window.localStorage.setItem('token', `${accessToken}`);
      window.localStorage.setItem('refreshToken', `${refreshToken}`);
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
    login(data);
  }
  console.log(errorMessage);

  return (
    <>
      {isSuccess ? (
        navigate('/')
      ) : (
        <StyledContainer>
          <SytledContainerForm>
            <div>
              <HeadingForm>LOG IN TO YOUR ACCOUNT</HeadingForm>
            </div>
            <div style={{ marginTop: '40px' }}>
              {isLoading ? (
                <BeatLoader />
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    htmlFor="username"
                    type="text"
                    register={register}
                    name="username"
                  >
                    Username
                  </Input>
                  <Input
                    htmlFor="password"
                    type="password"
                    register={register}
                    name="password"
                  >
                    Password
                  </Input>
                  <Link
                    style={{
                      display: 'flex',
                      justifyContent: 'end',
                      marginBottom: '16px',
                    }}
                    to="/forgotPassword"
                  >
                    Forgot Password?
                  </Link>
                  <div>
                    {isError ? (
                      <p style={{ color: 'red' }}>{errorMessage}</p>
                    ) : null}
                    <Button>Log In </Button>
                  </div>
                </form>
              )}
            </div>
          </SytledContainerForm>
        </StyledContainer>
      )}
    </>
  );
}

export default Login;
