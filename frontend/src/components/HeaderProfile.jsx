import {HeroContainer, HeroImage, ContainerAll} from "./HeroHeader.jsx"

function HeaderProfile() {
    return (
        <>
            <HeroContainer>
                <HeroImage src="/Users/emirmurati/Downloads/restaurant.jpeg"/>

                <ContainerAll>
                    <div
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxWidth: '672px',
                        }}
                    ></div>
                    <div
                        style={{
                            marginTop: '40px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxWidth: '672px',
                        }}
                    ></div>
                </ContainerAll>

            </HeroContainer>
        </>
    );
}

export default HeaderProfile;