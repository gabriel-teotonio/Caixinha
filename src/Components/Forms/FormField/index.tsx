import * as C from './styles'

interface IProps {
   name?:string;
   placeholder?:string;
   value: string | number;
   type:string;
   title: string;
   onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormField = ({title,name,onChange,value,placeholder,type}:IProps) => {
  return (
   <C.FieldBox>
      <C.Label>{title}</C.Label>
      <C.Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
</C.FieldBox>
  )
}
