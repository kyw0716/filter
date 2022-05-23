import { useState } from "react";
import styled from "styled-components";
import { options } from "../../../dummy/options";
import Select from "./Select";
import SelectOptions from "./SelectOptions";

const StyledSelectTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px
`
type Props = {
    selectName: keyof typeof options
    listName: keyof typeof options
    menuList: string[]
}

function CustomSelect({selectName, listName, menuList} : Props){
    const [isClicked, setIsClicked] = useState(false);
    return(
        <StyledSelectTag>
            <Select selectName={selectName} setIsClicked={setIsClicked}/>
            {
                isClicked &&
                    <SelectOptions listName={listName} menuList={menuList}/>
            }
        </StyledSelectTag>
    )
}
export default CustomSelect;