type Props = {
    selectOptions : string[];
}

function Select({selectOptions} : Props) {
    return(
        <select>
            {
                selectOptions.map(
                    current => <option key={current} value={current}>{current}</option>
                )
            }
        </select>
    )
}
export default Select;