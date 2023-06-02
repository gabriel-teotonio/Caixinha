import { FieldBox, Label, Option, Select } from "./styles"

interface IProps {
   name?:string;
   value: string;
   onChange: React.ChangeEventHandler<HTMLSelectElement>;
}
export const TypesSelectField = ({onChange,value,name}:IProps) => {
   const typeList = [
      {
         id:'1',
         type:'payment'
      },
      {
         id:'2',
         type:'loan'
      },
   ]

  return (
   <FieldBox>
   <Label>Selecione o tipo de transação</Label>
   <Select name={name} value={value} onChange={onChange}>
     <Option value={""}>Selecionar</Option>
     {typeList.map((item) => (
      <Option key={item.id} value={item.type}>{ item.type === 'payment' ? 'Pagamento':'Empréstimo' }</Option>
     ))}
   </Select>
 </FieldBox>
  )
}
