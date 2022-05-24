import styled from "styled-components";
import React, {SetStateAction} from "react";

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    margin-left: 0;
    padding-left: 0;
    border-radius: 10px;
    margin-top: 10px;
    align-items: center;
    width: inherit;
    border: 2px solid #fa2911;
    background-color: #262626;
    color: #cfd1d0;
    z-index: 100;
`
const StyledCategory = styled.div`
    padding: 10px 0px;
    width: 140px;
    height: 100%;
    text-align: center;
    border-radius: 10px;
    &:hover{
        background-color: #fa2911;
        cursor: pointer;
    }
`

type Props = {
    listName : string
    menuList : string[]
    setSelected: React.Dispatch<SetStateAction<string[]>>
    selected : string[]
    setIsClicked : React.Dispatch<SetStateAction<boolean>>
}

function SelectOptions({listName, menuList, setSelected, selected, setIsClicked} : Props) {
    
    const categoryOnClick = (event : React.MouseEvent<HTMLDivElement>) => {
        let selectedValue : string = (event.target as HTMLDivElement).id;
        if(selected.filter(current => current === selectedValue).length === 0){
            setSelected(current => [selectedValue ,...current]);
        }
        setIsClicked(false);
    }

    return(
        <StyledUl id={listName}>
            {menuList.map(
                category => <StyledCategory key={category} id={category} onClick={categoryOnClick}>{category}</StyledCategory>
            )}
        </StyledUl>
    );
}

export default SelectOptions;