import React, { FC, useState, useRef, useReducer } from 'react'

interface IProps {
    name: string;
    description?: string;
    label?: string;
    onSmthHappen: (name: string) => void;
}
interface CountNode {
    age: number | string | null
}

interface Note {
    content: string;
}

type Actions = { type: "add", content: string } | { type: "remove", id: number }

type State = Note[];
const NotesReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, { content: action.content }]
        case "remove":
            return state.filter((_, i) => action.id !== i)
        default:
            return [...state];
    }
}


const Hello: FC = ({ }) => {
    // const handleChange = (event: React.FormEvent<HTMLDivElement>): void => {
    //     // event.target.value   
    // }

    // Type Inference
    // const [count, setCount] = useState<number | string | null | undefined>(1453);
    // setCount(undefined)

    // const [count, setCount] = useState<CountNode>({ age: 43 });
    // setCount({ age: null })

    // const inputRef = useRef<HTMLInputElement>(null);
    // const divRef = useRef<HTMLDivElement>(null);
    // const buttonRef = useRef<HTMLButtonElement>(null);

    const [notes, dispatch] = useReducer(NotesReducer, [])
    return (
        <div>
            {/* 
            <h1>Hello {name} {description}</h1>
            <div onChange={handleChange} />
            <input type="text" ref={inputRef}/>
            <button ref={buttonRef}></button> 
            */}
            <h1> Hello </h1>
            <button onClick={() => {
                dispatch({ type: "add", content: "Note1" })
            }} />
        </div>
    )
}

export default Hello
