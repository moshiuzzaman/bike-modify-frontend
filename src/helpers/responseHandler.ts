import { toast } from "react-toastify";

export const responseHandler = (response: any, errorMessage?: string) => {
    toast.dismiss();

    if (response?.data?.success || response?.success) {
        toast.success(response.data.message || response.message);
    } else {
        toast.error(
            response?.data?.message ||
                response.error.data.message ||
                errorMessage ||
                "Something went wrong"
        );
    }
};
