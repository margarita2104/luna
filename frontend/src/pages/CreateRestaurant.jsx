import { useForm } from 'react-hook-form';
import Input from '../components/Input.jsx';
import { HeadingForm } from '../../ui/HeadingForm.jsx';
import { Button } from '../../ui/Button.jsx';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 64px;
`;
const FormStyled = styled.form`
  display: grid;
  width: 50%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 16px;
  margin-top: 80px;
`;

const InputFileStyled = styled.input`
  display: block;
  width: fit-content;
  font-size: 14px;
  background-color: orange;
`;
const LabelSelectStyled = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
`;
const LabelDiv = styled.div`
  width: 100%;
  place-self: start;
  justify-self: center;
`;

function CreateRestaurant() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token');
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  async function create(obj) {
    setIsLoading(true);
    setErrorMessage('');
    setIsSuccess(false);

    try {
      const res = await axios.post(
        `https://luna1.propulsion-learn.ch/backend/api/restaurants/new/`,
        obj,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setIsError(false);
      setIsSuccess(true);
      setIsLoading(false);

      return res.data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setIsSuccess(false);
      setErrorMessage(error.response.data);
    }
  }

  function onSubmit(data) {
    create({ ...data, image: data?.image[0] });
  }

  return (
    <>
      {isSuccess ? (
        navigate('/profile')
      ) : (
        <ContainerStyled>
          <HeadingForm>CREATE NEW RESTAURANT</HeadingForm>
          {isLoading ? (
            <BeatLoader />
          ) : (
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  htmlFor="name"
                  type="text"
                  register={register}
                  name="name"
                  isRequired={true}
                >
                  Name *
                </Input>
              </div>

              <LabelDiv>
                <LabelSelectStyled>Category *</LabelSelectStyled>
                <div style={{ marginTop: '10px' }}>
                  <select
                    {...register('category', {
                      required: true,
                    })}
                  >
                    <option value="">Select...</option>
                    <option value="Asian">Asian</option>
                    <option value="Italian">Italian</option>
                    <option value="Burger">Burger</option>
                    <option value="Arab">Arab</option>
                    <option value="Mexican">Mexican</option>
                  </select>
                </div>
              </LabelDiv>

              <Input
                htmlFor="country"
                type="text"
                register={register}
                name="country"
                isRequired={true}
              >
                Country *
              </Input>

              <Input
                htmlFor="street"
                type="text"
                register={register}
                name="street"
                isRequired={true}
              >
                Street *
              </Input>
              <Input
                htmlFor="city"
                type="text"
                register={register}
                name="city"
                isRequired={true}
              >
                City *
              </Input>
              <Input
                htmlFor="zip"
                type="number"
                register={register}
                name="zip"
                isRequired={true}
              >
                Zip *
              </Input>

              <Input
                htmlFor="website"
                type="text"
                register={register}
                name="website"
                isRequired={false}
              >
                Website
              </Input>
              <Input
                htmlFor="phone"
                type="number"
                register={register}
                name="phone"
                isRequired={true}
              >
                Phone *
              </Input>
              <Input
                htmlFor="email"
                type="text"
                register={register}
                name="email"
                isRequired={false}
              >
                Email address
              </Input>

              <Input
                htmlFor="opening_hours"
                type="text"
                register={register}
                name="opening_hours"
                isRequired={true}
              >
                Opening Hours *
              </Input>
              <Input
                htmlFor="price_level"
                type="text"
                register={register}
                name="price_level"
                isRequired={false}
              >
                Price level
              </Input>
              <div>
                <label>Image</label>
                <div>
                  <InputFileStyled
                    {...register('image', {
                      required: true,
                    })}
                    type="file"
                  />
                </div>
              </div>
              {isError && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <Button
                style={{ gridColumn: 'span 3 / span 3', placeSelf: 'center' }}
              >
                CREATE
              </Button>
            </FormStyled>
          )}
        </ContainerStyled>
      )}
    </>
  );
}

export default CreateRestaurant;
