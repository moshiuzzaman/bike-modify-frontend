import { useSession } from "next-auth/react";
import { IUser } from "@/types";

const useAuth = () => {
    const { data: session } = useSession();
    const user: IUser | null = session?.user || null;
    const role = user?.role || null;
    const token = user?.token || null;

    return {
        session,
        user,
        token,
        role,
    };
};

export default useAuth;
