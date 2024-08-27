import {useEffect, useState} from 'react';
import axios from 'axios';
import {
    MainContainer, ProfileLeftContainer, RightContainer, TopMiddleContainer, Paragraph, SelectionContainer,
} from '../components/Profile.styled.js';
// import HeaderProfile from '../components/HeaderProfile.jsx';
import ProfileComments from './ProfileComments';
import ProfileReviews from './ProfileReviews';
import ProfileRestaurants from './ProfileRestaurants';
import EditProfile from './EditProfile';
import Avatar from '../assets/svg/avatar.jpeg';
import styled from "styled-components";
import Star from '../assets/svg/star.svg'
import Comment from '../assets/svg/comment.svg'
import Restaurant from '../assets/svg/restaurant.svg'
import Edit from '../assets/svg/edit.svg'
import ProfileBG from '../assets/img/zurich.jpg'

export const HeaderProfile = styled.div`
    position: relative;
    background-image: url(${ProfileBG});
    width: 100%;
    height: 25%;
`

export const ProfileImg = styled.img`
    height: 235px;
    width: auto;
    position: absolute;
    top: -200px;
    left: 62px;
`

export const ProfileHeaderInfo = styled.div`
    position: absolute;
    top: 100px;
    left: 27%;
    color: white;
`

export const ProfileNavigation = styled.div`
    position: absolute;
    top: 50%;
    left: 9%;
    width: 16.5%;
`


function ProfileBase() {
    const token = localStorage.getItem('token');
    const [currentSection, setCurrentSection] = useState('reviews');
    const [userData, setUserData] = useState([]);

    // const [error, setError] = useState(null);
    const GetMe = async () => {
        // const token = window.localStorage.getItem('token');

        try {
            const res = await axios.get('https://luna1.propulsion-learn.ch/backend/api/users/me/', {
                headers: {Authorization: `Bearer ${token}`},
            },);
            setUserData(res.data);
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setCurrentSection('reviews');
        GetMe();
    }, []);

    const renderSection = () => {
        switch (currentSection) {
            case 'comments':
                return <ProfileComments/>;
            case 'reviews':
                return <ProfileReviews/>;
            case 'restaurants':
                return <ProfileRestaurants/>;
            case 'editProfile':
                return <EditProfile/>;
            default:
                return <ProfileComments/>;
        }
    };

    // if (error) {
    //   return <div>Error loading user data</div>;
    // }
    console.log(userData);

    return (<>
        <HeaderProfile/>
        <ProfileHeaderInfo>
            <div style={{
                margin: '0', fontSize: '24px', fontWeight: '700', marginBottom: '12px'
            }} className={'name'}>
                <div>{userData?.username}</div>
            </div>
            <div style={{
                marginBottom: '5px', fontSize: '18px', fontWeight: '300',
            }} className={'location'}>
                {userData?.location}
            </div>
            <div style={{
                marginBottom: '5px', fontSize: '18px', fontWeight: '300',
            }}
                 className={'reviews'}>
                {userData?.review} Reviews
            </div>
            <div style={{
                marginBottom: '5px', fontSize: '18px', fontWeight: '300',
            }}
                 className={'comments'}>
                {userData?.comments} Comments
            </div>
        </ProfileHeaderInfo>
        <MainContainer>
            <ProfileLeftContainer>
                <div className={'profileimage'}>
                    <ProfileImg
                        src={!userData?.profile_picture ? `${Avatar}` : userData?.profile_picture}
                    />
                </div>
            </ProfileLeftContainer>

            <ProfileNavigation>
                <h3>{userData?.username}'s profile</h3>
                <SelectionContainer onClick={() => setCurrentSection('reviews')}>
                    <img style={{
                        marginRight: '24px'
                    }} src={Star} alt={'reviews'}/>
                    <h3 style={{
                        fontSize: '18px', fontWeight: '300',
                    }}>Reviews</h3>
                </SelectionContainer>
                <SelectionContainer onClick={() => setCurrentSection('comments')}>
                    <img style={{
                        marginRight: '24px'
                    }} src={Comment} alt={'comment'}/>
                    <h3 style={{
                        fontSize: '18px', fontWeight: '300',
                    }}>Comments</h3>
                </SelectionContainer>
                <SelectionContainer onClick={() => setCurrentSection('restaurants')}>
                    <img style={{
                        marginRight: '24px'
                    }}
                         src={Restaurant}
                         alt={'restaurant'}
                    />
                    <h3 style={{
                        fontSize: '18px', fontWeight: '300',
                    }}>Restaurants</h3>

                </SelectionContainer>
                <SelectionContainer onClick={() => setCurrentSection('editProfile')}>
                    <img style={{
                        marginRight: '24px'
                    }} src={Edit} alt={'edit'}/>
                    <h3 style={{
                        fontSize: '18px', fontWeight: '300',
                    }}>Edit profile</h3>
                </SelectionContainer>
            </ProfileNavigation>


            <div>{renderSection()}</div>

            <RightContainer>
                <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '27px'}}
                >ABOUT {userData?.username}</h3>
                <div style={{
                    marginBottom: '25px'
                }} className={'location2'}>
                    <h3 style={{
                        margin: "0", marginBottom: '5px',
                    }}>Location</h3>
                    <p style={{
                        margin: "0",
                    }}>{userData?.location}</p>
                </div>
                <div style={{
                    marginBottom: '25px'
                }} className={'review 1'}>
                    <h3 style={{
                        margin: "0", marginBottom: '5px',
                    }}>Luna member since</h3>
                    <p style={{
                        margin: "0",
                    }}>{new Date(userData?.date_joined).toLocaleDateString()}</p>
                </div>
                <div style={{
                    marginBottom: '25px'
                }} className={'things I love'}>
                    <h3 style={{
                        margin: "0", marginBottom: '5px',
                    }}>Things I love</h3>
                    <p style={{
                        margin: "0",
                    }}>{userData?.things_i_love}</p>
                </div>
                <div className={'description'}>
                    <h3 style={{
                        margin: "0", marginBottom: '5px',
                    }}>Description</h3>
                    <p style={{
                        margin: "0",
                    }}>{userData?.description}</p>
                </div>
            </RightContainer>


        </MainContainer>
    </>);
}

export default ProfileBase;
