import React from 'react'

interface DescriptionProps {
title?: string;
customStyle?: string; 
}
const Description : React.FC<DescriptionProps> = ({title, customStyle}) => {
  return (
   <p className={`text-white/70 lg:text-base text-sm text-center ${customStyle}`}>{title}</p>
  )
}

export default Description
