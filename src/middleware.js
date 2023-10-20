export { default } from "next-auth/middleware";

export const config = { matcher: [
        "/dashboard",
        "/dashboard/bookings",
        "/dashboard/bookings/[id]",
        "/dashboard/manage-services",
        "/dashboard/manage-services/add-service",
        "/dashboard/manage-services/edit",
        "/dashboard/manage-services/edit/[id]",
        "/dashboard/manage-users",
        "/dashboard/manage-users/add-user",
        "/dashboard/manage-users/edit-user",
        "/dashboard/manage-users/edit-user/[id]",
        "/dashboard/profile",
        "/dashboard/profile/edit-profile",
        "/services/bookings",
        "/services/bookings/[id]",



] };
