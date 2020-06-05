import React, { ChangeEvent, MouseEvent } from "react";

interface AddItemBlockProps {
    toDoList: ListItem[]
}

const AddItemBlock: React.FC<AddItemBlockProps> = (props) => {
    const { toDoList } = props;
    const [newItemState, setNewItemState] = React.useState<string>("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewItemState(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.value);
    }

    return (
        <>
            <input type="text" value={newItemState} onChange={handleChange} />
            <button name="add-item" onClick={handleClick}>Add Item</button>
        </>
    );
};
export default AddItemBlock;