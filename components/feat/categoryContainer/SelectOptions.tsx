import styled from "styled-components";

const StyledUl = styled.ul`
display: flex;
flex-direction: column;
margin-left: 0;
padding-left: 0;
border: 1px solid;
padding: 10px;
border-radius: 10px;
margin-top: 10px;
align-items: center;
width: inherit;
`
const StyledCategory = styled.div`
    padding: 5px 0px;
`

type Props = {
    listName : string
    menuList : string[]
}

function SelectOptions({listName, menuList} : Props) {
    return(
        <StyledUl id={listName}>
            {menuList.map(
                category => <StyledCategory key={category}>{category}</StyledCategory>
            )}
        </StyledUl>
    );
}

export default SelectOptions;