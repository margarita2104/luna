/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Card } from './RestaurantCard';
import Avatar from '../assets/svg/avatar.jpeg';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const ImageContainer = styled.div`
  height: 70px;
  width: 65px;
  overflow: hidden;
  margin-right: 7px;
`;

function UserCard({ user }) {
  return (
    <div>
      <Card>
        <div>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #ebebeb',
              justifyContent: 'space-start',
            }}
          >
            <ImageContainer>
              <Image
                src={
                  !user?.profile_picture ? `${Avatar}` : user?.profile_picture
                }
              />
            </ImageContainer>

            <div style={{ marginLeft: '14px' }}>
              <h3
                style={{
                  color: 'orange',
                  margin: '0',
                  marginTop: '10px',
                  marginBottom: '5px',
                }}
              >
                {user?.username}
              </h3>
              <p style={{ margin: '0' }}>6 Reviews in total</p>
            </div>
          </div>

          <p style={{ marginBottom: '8px', padding: '8px' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            totam obcaecati doloremque ipsam. Iusto quisquam dolores, explicabo
            sed soluta nostrum dolor ratione omnis corrupti ea!
          </p>
        </div>
      </Card>
    </div>
  );
}

export default UserCard;
