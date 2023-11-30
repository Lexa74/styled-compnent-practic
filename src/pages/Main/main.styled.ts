import {styled} from 'styled-components'

interface InputProps {
    $borderColor: string
}

interface TextareaProps {
    $color: string
}

export const Input = styled.input<InputProps>`
    border: 1px solid ${({$borderColor}) => $borderColor};
`;

export const Textarea = styled.textarea<TextareaProps>`
    background-color: ${({theme}) => theme.text};
    color: ${({$color}) => $color}
`