import * as S from './button.styled'
import {ReactNode} from "react";
import {Link} from "react-router-dom";

interface ButtonProps {
    variant?: string,
    onClick: () => void
    children: ReactNode,
}

export const Button = ({variant = '', onClick, children}: ButtonProps) => {
    return (
        <>
            <S.Button as={Link} to={'/'} onClick={onClick} $variant={variant}>{children}</S.Button>
        </>
    )
}