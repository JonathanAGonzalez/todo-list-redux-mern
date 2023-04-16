import { toast, TypeOptions } from "react-toastify"


interface useToastI {
    message: string,
    type: TypeOptions
}


const useToast = ({ message, type }: useToastI) => {

    toast(message, {
        type
    });

}

export default useToast