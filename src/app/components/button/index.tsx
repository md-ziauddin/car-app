import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
        pl-5
        pr-5
        pt-3
        pb-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-semibold
        border-transparent
        border-2
        focus:outline-none
        transition-all
        duration-200
        ease-in
        m-1
    `}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
        bg-red-500
        hover:bg-transparent
        hover:text-red-500
        hover:border-red-500

    `}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
       border-red-500
       text-red-500
       hover:text-white
       hover:bg-red-500
    `};
`;

export const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-row    
    flex-wrap
    mt-4
`}
`;

export const Button = (props: IButtonProps) => {
  const { theme, text, className } = props;

  if (theme === "filled") {
    return <FilledButton className={className}>{text}</FilledButton>;
  } else {
    return <OutlinedButton className={className}>{text}</OutlinedButton>;
  }
};
