import { InputDefault } from "./styles";

interface IProps {
    type: string;
    name?: string;
    placeholder?: string;
    value:string;
    onChange:(event:  React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name,placeholder,type,value, onChange }: IProps) => {
  return (
    <InputDefault
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
  )
}
