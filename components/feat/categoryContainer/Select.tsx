import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import React, { SetStateAction } from "react";

const StyledSelectedValue = styled.div`
    display: flex;
    border: 1px solid;
    padding: 10px;
    align-items: center;
    width: inherit;
    font-size: 15px;
    justify-content: space-around;
    position: relative;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
`

type Props = {
    selectName : string
    setIsClicked : React.Dispatch<SetStateAction<boolean>>
}

function Select({selectName, setIsClicked} : Props) {
    const SelectOnClick = () => {
        setIsClicked(currrent => !currrent);
    }

    return(
        <StyledSelectedValue onClick={SelectOnClick}>
            <div>{selectName}</div>
            <StyledFontAwesomeIcon icon={faAngleDown} />
        </StyledSelectedValue>
    )
}
export default Select;