
export const inputMaskPhone = (phone: string) => {
    const noMask = phone.replace(/\D/g, '')
    const { length } = noMask
    if(length <= 11){
        const maskedPhone = noMask.replace(/(\d{2})(\d)/, '($1) $2' )
        .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2')
        return maskedPhone;
    }
    return phone;
}

export const inputMaskValue = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '')
    return numericValue;
}