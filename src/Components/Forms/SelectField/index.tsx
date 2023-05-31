import { FieldBox, Label, Option, Select } from './styles'

interface IProps {
   title: string;
   value?: string;
}

export const SelectField = ({ title }:IProps) => {
  return (
    <FieldBox>
      <Label>{title}</Label>
      <Select>
         <Option value="Gabriel">Gabriel</Option>
         <Option value="Jean">Jean</Option>
         <Option value="Julio">Julio</Option>
      </Select>
    </FieldBox>
  )
}
