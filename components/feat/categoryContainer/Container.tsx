import SelectBox from "./SelectBox"
import SelectedCategories from "./SelectedCategories"
import styled from 'styled-components';

const StyledContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`;

const Container = () => {
    return(
        <StyledContainer>
            <SelectBox />
            <SelectedCategories />
        </StyledContainer>
    )
}

export default Container