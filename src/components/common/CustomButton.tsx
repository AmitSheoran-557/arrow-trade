import React from 'react';

interface CustomButtonProps {
    title: string;
    customStyles?: string;
    onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onClick ,customStyles}) => {
    return (
        <button onClick={onClick} className={`flex items-center justify-center !leading-[120%] whitespace-nowrap linear-gradient transition-all ease-linear duration-300 rounded-[72px] lg:text-base text-sm font-semibold py-3 ${customStyles}`}>
            {title}
        </button>
    );
};

export default CustomButton;
