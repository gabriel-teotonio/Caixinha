export const formattedNewDate = (date: string) => {
   const currentDate = new Date(date)
   const formattedDate = currentDate.toLocaleDateString("pt-BR", {
       day:'numeric',
       month:'numeric',
       year:'numeric'
   });
 return formattedDate;
}

export const ajustedDate = (date:string):Date => {
   let [year,month,day] = date.split('-').map(Number);
   const currentDate = new Date(year, month -1, day); 
   console.log(currentDate)
   return currentDate;
}
