import { useForm } from 'react-hook-form';
import { Button } from '../../ui/Button';
import { HeadingForm } from '../../ui/HeadingForm';
import Input from '../components/Input';
import { StyledContainer, SytledContainerForm } from './Login';

function ForgotPassword() {
  const { register } = useForm();
  return (
    <StyledContainer>
      <SytledContainerForm>
        <div>
          <HeadingForm>FORGOT PASSWORD</HeadingForm>
        </div>
        <div style={{ marginTop: '40px' }}>
          <form>
            <Input htmlFor="email" type="text" register={register} name="email">
              Email Address
            </Input>

            <div>
              <Button>SEND CODE</Button>
            </div>
          </form>
        </div>
      </SytledContainerForm>
    </StyledContainer>
  );
}

export default ForgotPassword;
