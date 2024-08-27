import {ContentContainer, SelectionContainer} from "../components/Profile.styled.js";

function ProfileReviews() {
    return(
    <>
<ContentContainer>
            <div className={'comments'}>
                <h3>Reviews</h3>
                {/*<p>{userdata.created}</p>*/}
            </div>
    <SelectionContainer>
            <div className={'review 1'}>
                <h3>Review 1</h3>
                {/*<p>{userdata.comments}</p>*/}
            </div>
        </SelectionContainer>
            <SelectionContainer>
            <div className={'review 2'}>
                <h3>Review 2</h3>
                {/*<p>{userdata.comments}</p>*/}
            </div>
                </SelectionContainer>

        </ContentContainer>
        </>
        )}
export default ProfileReviews