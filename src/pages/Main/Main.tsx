import * as S from './main.styled'
import {Button} from "../../shared/components/Button/Button";

export const Main = () => {
    const clickHandler = () => {
        console.log('click')
    }
    return (
        <>
            <S.Input $borderColor='red'/>
            <S.Textarea $color='#dedede'/>
            <h1>Main</h1>
            <Button variant='primary' onClick={clickHandler}>Я кнопка</Button>
        </>
    )
}