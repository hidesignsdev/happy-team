import React from 'react';

export const myInput = props => {
    const { meta: {touched, error}} = props
    return (
        <div>
            <input 
            {...props.input} 
             type={props.type} 
             placeholder={props.placeholder} 
             />
          {touched && (error && <span>{error}</span>)}       
        </div>
    );
};