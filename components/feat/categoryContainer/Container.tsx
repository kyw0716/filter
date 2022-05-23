import SelectedCategories from "./SelectedCategories"
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { options } from "../../../dummy/options";
import CustomSelect from "./CustomSelect";

const StyledSelectBox = styled.div`
    margin-top: 50px;
    display: flex;
    width: 60%;
    justify-content: space-around;
`

const StyledContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`;

const Container = () => {
    useEffect(()=>{
        localStorage.setItem("options",JSON.stringify(options));
    },[]);

    return(
        <StyledContainer>
            <StyledSelectBox>
                <CustomSelect key="type" listName={"유형" as keyof typeof options} selectName={"유형" as keyof typeof options} menuList={options.type.menuList}/>
                <CustomSelect key="adjective" listName={"형용사" as keyof typeof options} selectName={"형용사" as keyof typeof options} menuList={options.adjective.menuList}/>
                <CustomSelect key="genre" listName={"장르" as keyof typeof options} selectName={"장르" as keyof typeof options} menuList={options.genre.menuList}/>
                <CustomSelect key="extension" listName={"확장자" as keyof typeof options} selectName={"확장자" as keyof typeof options} menuList={options.extension.menuList}/>
                <CustomSelect key="sort" listName={"정렬" as keyof typeof options} selectName={"정렬" as keyof typeof options} menuList={options.sort.menuList}/>
            </StyledSelectBox>
            <SelectedCategories />
        </StyledContainer>
    )
}

export default Container