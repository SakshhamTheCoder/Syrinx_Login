import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterText = ({ text, speed, ...props }) => {
    return (
        <div {...props}>
            <Typewriter
                options={
                    { delay: speed ? speed : 50 }
                } onInit={(typewriter) => {
                    typewriter.typeString(text).start();
                }}
            />
        </div>
    );
};

export default TypewriterText;