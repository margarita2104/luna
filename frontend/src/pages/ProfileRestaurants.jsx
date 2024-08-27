import {Button} from "../../ui/Button.jsx";
import {ContentContainer, SelectionContainer} from "../components/Profile.styled.js";
import { useNavigate } from 'react-router-dom';
function ProfileRestaurants()
{
    const navigate = useNavigate();

    const handleCreateRestaurantClick = () => {
        navigate('/createRestaurant');
    };
    return(
        <>
            <ContentContainer>

                    <h3>Restaurants</h3>

                <SelectionContainer>

                    {/*<p>{userdata.restaurants}</p>*/}
                    {/*<p>{userdata.restaurantsDescription}</p>*/}

                    </SelectionContainer>


            </ContentContainer>
            <div>
                <Button onClick={handleCreateRestaurantClick}>Create Restaurant</Button>
            </div>
        </>
    )
}


export default ProfileRestaurants