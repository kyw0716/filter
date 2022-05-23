import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {options} from '../../../dummy/options';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const StyledSelectBox = styled.div`
    margin-top: 50px;
    display: flex;
    width: 60%;
    justify-content: space-around;
`
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
const StyledSelectTag = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px
`

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

const StyledCategory = styled.div`
    padding: 5px 0px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
`

const SelectBox = () => {
    const [selected, setSelected] = useState("");
    const selectArray : string[] = ["유형", "형용사", "장르", "확장자명", "정렬"];
    let count : number = -1;

    useEffect(()=>{
        if(selected != ""){
            console.log(selected);
        }
    },[selected]);

    const onClick = (event : React.MouseEvent<HTMLDivElement>) => {
        setSelected((event.target as HTMLDivElement).innerHTML);
    }

    return(
        <StyledSelectBox>
            {options.map(
                (current) =>
                {
                    count += 1;
                    return(
                        <StyledSelectTag key={selectArray[count]} id={selectArray[count]}>
                            <StyledSelectedValue>
                                <div>{selectArray[count]}</div>
                                <StyledFontAwesomeIcon icon={faAngleDown} />
                            </StyledSelectedValue>
                            <StyledUl>
                                {current.map(
                                    category => <StyledCategory key={category} onClick={onClick}>{category}</StyledCategory>
                                )}
                            </StyledUl>
                        </StyledSelectTag>
                    )
                }
            )}
        </StyledSelectBox>
    )
}
export default SelectBox;