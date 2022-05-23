import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import React, { SetStateAction } from "react";

const StyledSelectedValue = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    width: inherit;
    font-size: 15px;
    justify-content: space-around;
    position: relative;
    border-radius: 7px;
    border: 2px solid #cfd1d0;
    background-color: #262626;
    color: #cfd1d0;
    font-weight: bold;
`
const StyledSelectedValueClicked = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    width: inherit;
    font-size: 15px;
    justify-content: space-around;
    position: relative;
    border-radius: 7px;
    border: 2px solid #fa2911;
    background-color: #242424;
    color: #cfd1d0;
    font-weight: bold;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
`

type Props = {
    selectName : string
    setIsClicked : React.Dispatch<SetStateAction<boolean>>
    isClicked : boolean
}

function Select({selectName, setIsClicked, isClicked} : Props) {
    const SelectOnClick = () => {
        setIsClicked(currrent => !currrent);
    }

    return(
        <>
        {
            isClicked ?
                <StyledSelectedValueClicked onClick={SelectOnClick}>
                    <div>{selectName}</div>
                    <StyledFontAwesomeIcon icon={faAngleDown} />
                </StyledSelectedValueClicked>
            :
                <StyledSelectedValue onClick={SelectOnClick}>
                    <div>{selectName}</div>
                    <StyledFontAwesomeIcon icon={faAngleDown} />
                </StyledSelectedValue>
        }
        </>
    )
}
export default Select;