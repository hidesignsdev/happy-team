import React from 'react';

export const myInput = props => {
    return (
        <div>
            <input {...props.input}  type={props.type} placeholder={props.placeholder}  />
            
        </div>
    );
};