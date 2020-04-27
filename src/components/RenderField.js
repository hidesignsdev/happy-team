import React from 'react';

export const myInput = ({field,...props}) => {
    return (
        <div>
            <input {...field}
            // {...props.input} 
             type={props.type} 
             placeholder={props.placeholder} 
             />   
        </div>
    );
};