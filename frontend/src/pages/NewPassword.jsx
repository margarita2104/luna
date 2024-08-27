import { useForm } from 'react-hook-form';
import { HeadingForm } from '../../ui/HeadingForm';
import Input from '../components/Input';
import { StyledContainer, SytledContainerForm } from './Login';

import styled from 'styled-components';
import { Button } from '../../ui/Button';

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 24px;
`;

function NewPassword() {
  const { register } = useForm();
  return (
    <StyledContainer>
      <SytledContainerForm>
        <div>
          <HeadingForm>REGISTRATION</HeadingForm>
        </div>
        <StyledForm>
          <Input
            htmlFor="email"
            type="text"
            register={register}
            name="email"
            isRequired={true}
          >
            EMAIL
          </Input>

          <Input htmlFor="code" type="text" register={register} name="code">
            CODE
          </Input>
          <Input
            htmlFor="new_password"
            type="password"
            register={register}
            name="new_password"
          >
            NEW PASSWORD
          </Input>
          <Input
            htmlFor="new_password_repeat"
            type="password"
            register={register}
            name="new_password_repeat"
          >
            NEW PASSWORD REPEAT
          </Input>

          <Button
            style={{
              gridColumn: 'span 2',
              placeSelf: 'center',
            }}
          >
            Set New Password
          </Button>
        </StyledForm>
      </SytledContainerForm>
    </StyledContainer>
  );
}

export default NewPassword;
