import React, { SetStateAction, useState } from "react";
import styled from "styled-components";
import Select from "./Select";
import OptionList from "./OptionList";

const StyledSelectTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px
`
type Props = {
    selectName: string
    listName: string
    menuList: string[]
    setSelected: React.Dispatch<SetStateAction<string[]>>
    selected: string[]
}

function CustomSelect({selectName, listName, menuList, setSelected, selected} : Props){
    const [isClicked, setIsClicked] = useState(false);
    return(
        <StyledSelectTag>
            <Select selectName={selectName} setIsClicked={setIsClicked} isClicked={isClicked}/>
            {
                isClicked &&
                    <OptionList listName={listName} menuList={menuList} setSelected={setSelected} selected={selected} setIsClicked={setIsClicked}/>
            }
        </StyledSelectTag>
    )
}
export default CustomSelect;