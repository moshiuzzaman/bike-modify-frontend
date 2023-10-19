import { toast } from "react-toastify";

export const responseHandler = (response: any, errorMessage?: string) => {
    toast.dismiss();
    
    console.log(response);
    if (response?.data?.success||response?.success) {
        toast.success(response.data.message||response.message);
    } else {
        console.log();
        
        toast.error(response?.data?.message || errorMessage||"Something went wrong");
    }
};
