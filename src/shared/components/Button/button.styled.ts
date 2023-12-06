import {css, styled,} from 'styled-components'

interface ButtonProps {
    $variant: string
}

export const Button = styled.button<ButtonProps>`
    background-color: ${({theme}) => theme.body};
    border: 1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    min-width: 200px;
    max-width: 200px;
    transition: .3s all;
    border-radius: 8px;
    display: flex;
    padding: 8px;
    justify-content: center;
    ${({$variant}) => $variant === 'primary' && css`
      background-color: ${({theme}) => theme.secondary};
    `}
    
    &:hover {
        background-color: ${({theme}) => theme.primaryHover};
        border: 1px solid ${({theme}) => theme.primaryTextHover};
        color: ${({theme}) => theme.primaryTextHover};
    }
`

