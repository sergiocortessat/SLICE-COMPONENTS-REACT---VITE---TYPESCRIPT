import React from 'react';

interface ErrorProps {
    message: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({message}) => {
    return (
        // create a div with a class of error-popup
        <div className="error-popup">
            {/* create a div with a class of error-popup__content */}
            <div className="error-popup__content">
                {/* create a div with a class of error-popup__content__message */}
                <div className="error-popup__content__message">
                    {/* display the message prop */}
                    {message}
                </div>
            </div>
        </div>
    )
}

export default ErrorComponent;