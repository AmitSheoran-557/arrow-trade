import React from "react";
interface HeadingProps {
    heading: string;
    colorHeading?: string;
    headingClass?: string;
    colorHeadingClass?: string;
}

const CommonHeading = ({
    heading,
    colorHeading,
    headingClass,
    colorHeadingClass,
}: HeadingProps) => {
    return (
        <h2 className={`text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl text-white leading-[121%] ${headingClass}`}> {heading} <span className={`text-lightSkyBlue font-semibold ${colorHeadingClass}`}>
                {colorHeading}
            </span>
        </h2>
    );
};

export default CommonHeading;
