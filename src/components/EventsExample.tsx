import React, {FC, useRef, useState} from 'react';

interface EventsExampleProps {

}

const EventsExample: FC<EventsExampleProps> = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (even: React.ChangeEvent<HTMLInputElement>) => {
        setValue(even.target.value)
    };

    const clickHandler = (even: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    };

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    };

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    };
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    };

    return (
        <div>
            <input value={value} type="text" onChange={changeHandler} placeholder="managed"/>
            <input ref={inputRef} type="text"  placeholder="unmanaged"/>
            <button onClick={clickHandler}>adfadfasdf</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div onDrag={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler}
                 style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample;
