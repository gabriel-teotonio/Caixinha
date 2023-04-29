import * as C from './styles';

type IProps = {
    title: string;
    value: number;
}

export const InfoItem = ({title,value}: IProps) => {
  return (
    <C.Container>
        <C.Title>{title}</C.Title>
        <C.Value>R$ {value},00</C.Value>
    </C.Container>
  )
}
