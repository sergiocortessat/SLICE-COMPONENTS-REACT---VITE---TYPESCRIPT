import React from 'react';

interface TextAreaComponentProp {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeHolder: string;
}

const TextAreaComponent: React.FC<TextAreaComponentProp> = ({value, onChange, placeHolder}) => {
    return (
        <textarea className="textarea" value={value} placeholder={placeHolder} onChange={onChange} />
    )
}

export default TextAreaComponent;