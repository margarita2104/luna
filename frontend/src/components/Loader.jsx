import styled from 'styled-components';

const LoaderDiv = styled.div`
  position: absolute;
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(226 232 240 / 0.2);
`;

function Loader() {
  return (
    <LoaderDiv>
      <div className="loader"></div>
    </LoaderDiv>
  );
}

export default Loader;
