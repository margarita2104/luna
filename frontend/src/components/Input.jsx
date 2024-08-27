/* eslint-disable react/prop-types */

import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  text-align: left;
`;
const InputStyled = styled.input`
  display: block;
  width: 100%;
  border-radius: 6px;
  padding: 6px 0 6px 8px;
  font-size: 24px;
  font-weight: 500;
  color: #111827;
  border: 1px solid #00000039;
`;

function Input({ register, children, htmlFor, type, name, value, isRequired }) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{children}</Label>
      <div style={{ marginTop: '8px', marginBottom: '12px' }}>
        <InputStyled
          {...register(`${name}`, {
            required: isRequired,
          })}
          type={type}
          defaultValue={value}
        />
      </div>
    </div>
  );
}

// function form() {
//   const { register, handleSubmit } = useform();
// }

export default Input;
