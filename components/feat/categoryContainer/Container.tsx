import SelectedCategories from "./CategoryStack"
import styled from 'styled-components';
import { useState } from "react";
import { options } from "../../../dummy/options";
import CustomSelect from "./CustomSelect";

const StyledContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: center;
    position: relative;
`
const StyledSelectSection = styled.div`
    margin-top: 50px;
    display: flex;
    width: 60%;
    justify-content: space-between;
`

const Container = () => {
    const [selected, setSelected] = useState([""]);

    return(
        <StyledContainer>
            <StyledSelectSection>
                <CustomSelect 
                    key="type" 
                    listName={"유형"} 
                    selectName={"유형"} 
                    menuList={options.type.menuList} 
                    setSelected={setSelected}
                    selected={selected}
                />
                <CustomSelect 
                    key="adjective" 
                    listName={"형용사"} 
                    selectName={"형용사"} 
                    menuList={options.adjective.menuList} 
                    setSelected={setSelected}
                    selected={selected}
                />
                <CustomSelect 
                    key="genre" 
                    listName={"장르" as keyof typeof options} 
                    selectName={"장르" as keyof typeof options} 
                    menuList={options.genre.menuList} 
                    setSelected={setSelected}
                    selected={selected}
                />
                <CustomSelect 
                    key="extension" 
                    listName={"확장자" as keyof typeof options} 
                    selectName={"확장자" as keyof typeof options} 
                    menuList={options.extension.menuList} 
                    setSelected={setSelected}
                    selected={selected}
                />
                <CustomSelect 
                    key="sort" 
                    listName={"정렬" as keyof typeof options} 
                    selectName={"정렬" as keyof typeof options} 
                    menuList={options.sort.menuList} 
                    setSelected={setSelected}
                    selected={selected}
                />
            </StyledSelectSection>
            <SelectedCategories selectedArray={selected} setSelected={setSelected}/>
        </StyledContainer>
    )
}

export default Container