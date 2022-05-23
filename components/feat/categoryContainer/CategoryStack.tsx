import React, { SetStateAction } from "react"
import styled from "styled-components"

type Props = {
    selectedArray : string[]
    setSelected : React.Dispatch<SetStateAction<string[]>>
}

const StyledCategoryBox = styled.div`
    display: flex;
    color: white;
    width: 60%;
    position: absolute;
    top: 150px;
    overflow: scroll;
    overflow-y: hidden;
    overflow-x: hidden;
    padding-bottom: 15px;
    &:hover{
        overflow-x: visible;
    }
    &::-webkit-scrollbar {
        height: 10px;
        background-color: #262626;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #ccc;
    }
`
const StyledCategoryBlock = styled.div`
    border: 1.5px solid;
    border-radius: 25px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    min-width: 90px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    background-color: #262626;
    font-size: 11px;
    padding: 0px 10px;
`
const StyledDelete = styled.div`
    padding: 5px;
    font-weight: bold;
    &:hover{
        cursor: pointer;
    }
`

const SelectedCategories = ({selectedArray, setSelected}: Props) => {
    const deleteCategory = (event : React.MouseEvent<HTMLDivElement>) => {
        setSelected(selectedArray.filter(category => category != (event.target as HTMLDivElement).id))
    }
    return(
        <StyledCategoryBox>
            {
                selectedArray.filter(current => current != "").map(
                    selectedCategory => 
                        <StyledCategoryBlock key={selectedCategory}>
                            <span>{selectedCategory}</span>
                            <StyledDelete onClick={deleteCategory} id={selectedCategory}>X</StyledDelete>
                        </StyledCategoryBlock>
                )
            }
        </StyledCategoryBox>
    )
}
export default SelectedCategories;