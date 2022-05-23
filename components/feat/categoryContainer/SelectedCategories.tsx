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
    margin-right: 30px;
`
const StyledCategory = styled.div`
    border: 1.5px solid;
    padding: 5px 25px;
    border-radius: 15px;
    display: flex;
    align-items: center;
`
const StyledDelete = styled.div`
    margin-left: 15px;
    margin-right: -15px;
`

const SelectedCategories = ({selectedArray, setSelected}: Props) => {
    const deleteCategory = (event : React.MouseEvent<HTMLDivElement>) => {
        setSelected(current => selectedArray.filter(category => category != (event.target as HTMLDivElement).id))
    }
    return(
        <StyledCategoryBox>
            {
                selectedArray.filter(current => current != "").map(
                    selectedCategory => 
                        <StyledCategory key={selectedCategory}>
                            {selectedCategory}
                            <StyledDelete onClick={deleteCategory} id={selectedCategory}>X</StyledDelete>
                        </StyledCategory>
                )
            }
        </StyledCategoryBox>
    )
}
export default SelectedCategories;