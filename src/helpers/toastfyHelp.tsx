import { toast } from "react-toastify";

export const toastSuccess = (content:string) => {
    toast.success(content);
}
export const toastWarning = (content:string) => {
    toast.warning(content);
}
export const toastError = (content:string) => {
    toast.error(content);
}