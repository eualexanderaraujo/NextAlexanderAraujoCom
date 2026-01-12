import React from 'react';

interface LogoProps {
    className?: string;
    color?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", color = "currentColor" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M50 5L89 27.5V72.5L50 95L11 72.5V27.5L50 5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                d="M50 25V75"
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
            />
            <path
                d="M30 45L50 25L70 45"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M35 60L50 75L65 60"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="50" cy="50" r="2" fill={color} />
        </svg>
    );
};

export default Logo;
