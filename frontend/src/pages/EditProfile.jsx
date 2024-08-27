import { useState, useEffect } from 'react';
import axios from 'axios';
import { Paragraph, EditContainer } from '../components/Profile.styled.js';
import Input from '../components/Input.jsx';
import { Button } from '../../ui/Button.jsx';
import { BeatLoader } from 'react-spinners';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
function EditProfile() {
  const token = window.localStorage.getItem('token');
  const { register, handleSubmit, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          'https://luna1.propulsion-learn.ch/backend/api/users/me/',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const {
          username,
          firstName,
          lastName,
          location,
          phone,
          thingsILove,
          description,
        } = response.data;
        setValue('username', username);
        setValue('firstName', firstName);
        setValue('lastName', lastName);
        setValue('location', location);
        setValue('phone', phone);
        setValue('thingsILove', thingsILove);
        setValue('description', description);
        setIsLoading(false);
      } catch (err) {
        setErrorMessage('Error loading profile data.');
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, [token, setValue]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await axios.patch(
        'https://luna1.propulsion-learn.ch/backend/api/users/me/',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setIsLoading(false);
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      setErrorMessage('Error updating profile.');
      setIsLoading(false);
      console.error('Error updating profile:', error);
    }
  };

  return (
    <EditContainer>
      {isLoading ? (
        <BeatLoader />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paragraph>Username</Paragraph>
          <Input
            htmlFor="username"
            type="text"
            name="username"
            register={register}
          />
          <Paragraph>First Name</Paragraph>
          <Input
            htmlFor="first-name"
            type="text"
            name="firstName"
            register={register}
          />
          <Paragraph>Last Name</Paragraph>
          <Input
            htmlFor="last-name"
            type="text"
            name="lastName"
            register={register}
          />
          <Paragraph>Location</Paragraph>
          <Input
            htmlFor="location"
            type="text"
            name="location"
            register={register}
          />
          <Paragraph>Phone</Paragraph>
          <Input htmlFor="phone" type="text" name="phone" register={register} />
          <Paragraph>Things I Love</Paragraph>
          <Input
            htmlFor="thingsILove"
            type="text"
            name="thingsILove"
            register={register}
          />
          <Paragraph>Description</Paragraph>
          <Input
            htmlFor="description"
            type="text"
            name="description"
            register={register}
          />
          {errorMessage && <div>{errorMessage}</div>}
          <div>
            <Button type="submit">Save</Button>
          </div>
        </form>
      )}
    </EditContainer>
  );
}

export default EditProfile;
