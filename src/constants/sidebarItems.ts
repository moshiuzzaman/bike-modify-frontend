
const sidebarItems= (role:string) => {
  
    
    const defaultItems = [
        {
            label:"Profile",
            href:"/dashboard",
            icon : null
        }
    ]

    const adminItems = [
        ...defaultItems,
        {
            label:"Manage Users",
            href:"/dashboard/manage-users",
            icon : null
        },
        {
            label:"Manage Services",
            href:"/dashboard/manage-services",
            icon : null
        },
        {
            label:"Manage Bookings",
            href:"/dashboard/manage-bookings",
            icon : null
        },
        {
            label:"Manage Content",
            href:"/dashboard/manage-content",
            icon : null
        },
        
    ]

    const superAdminItems = [
        ...adminItems,
        {
            label:"Manage Admin",
            href:"/dashboard/manage-admin",
            icon : null
        },
    ]
    const userItems = [
        ...defaultItems,
       
        {
            label:"Bookings",
            href:"/dashboard/bookings",
            icon : null
        },
        
    ]

    if(role === "ADMIN"){
        return adminItems
    }else if(role === "SUPER_ADMIN"){
        return superAdminItems
    }else if(role === "USER"){
        return userItems
    }else{
        return defaultItems
    }
}  
export default sidebarItems;