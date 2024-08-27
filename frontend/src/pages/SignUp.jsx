import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';
import { HeadingForm } from '../../ui/HeadingForm';
import Input from '../components/Input';
import { StyledContainer, SytledContainerForm } from './Login';
import axios from 'axios';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import SuccessRegistration from '../components/SuccessRegistration.jsx';

function SignUp() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  async function signup(obj) {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const res = await axios.post(
        `https://luna1.propulsion-learn.ch/backend/api/registration/`,
        obj,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setIsSuccess(true);
      setIsLoading(false);

      return res.data;
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
      setErrorMessage(error.response.data.email);
      setIsLoading(false);
    }
  }

  function onSubmit(data) {
    signup(data);
  }

  return (
    <>
      {isSuccess ? (
        <SuccessRegistration />
      ) : (
        <StyledContainer>
          <SytledContainerForm>
            <div>
              <HeadingForm>SIGN UP</HeadingForm>
            </div>

            {isLoading ? (
              <BeatLoader />
            ) : (
              <div style={{ marginTop: '40px' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    htmlFor="email"
                    type="email"
                    register={register}
                    name="email"
                  >
                    Email Address
                  </Input>
                  {errorMessage ? (
                    <p style={{ color: 'red' }}>{errorMessage}</p>
                  ) : null}

                  <div>
                    <Button>SIGN UP </Button>
                  </div>
                </form>
              </div>
            )}
          </SytledContainerForm>
        </StyledContainer>
      )}
    </>
  );
}

export default SignUp;
