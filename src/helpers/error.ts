import { toast } from "react-toastify";

export interface CustomError extends Error {
    data?: {
        message?: string;
    };
}

function handleFetchError(error?: CustomError) {
    if (error?.data?.message) {
        toast(error.data.message);
    } else if (error) {
        console.error(error.message);
    }
}

const handleFetchResponse = (response: any, errorMessage?: string) => {
  
    toast.dismiss();
    

    if (!("error" in response) && response.success) {
        toast.success(response.message);
    } else {
        toast.error(response.error.message || errorMessage);
    }
};
export { handleFetchError, handleFetchResponse };
