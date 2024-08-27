import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';
import styled from 'styled-components';

const SuccessDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const SuccessDivChild = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

function SuccessRegistration() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/registrationValidation');
  }

  return (
    <SuccessDiv>
      <SuccessDivChild>
        <p>
          Thank you for your registration.<br></br>
          Our hard working monkeys are preparing a digital<br></br>
          message called E-Mail that will be sent to you soon.<br></br>
          Since monkeys arent good in writing the message could<br></br>
          end up in your junk folder. Our apologies for any<br></br>
          inconvienience. Thanks
        </p>
        <Button onClick={() => handleClick()}>Continue</Button>
      </SuccessDivChild>
    </SuccessDiv>
  );
}

export default SuccessRegistration;
