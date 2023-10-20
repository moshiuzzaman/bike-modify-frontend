import { Label } from 'flowbite-react';

const sidebarItems= (role:string) => {
  
    
    const defaultItems = [
        {
            label:"Profile",
            href:"/dashboard",
            icon : null
        },
        {
            label: "Bookings",
            href: "/dashboard/bookings",
            icon: null,
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
            label:"Manage Content",
            href:"/dashboard/manage-content",
            icon : null
        },
        
    ]

    const superAdminItems = [
        ...adminItems,
        
    ]
    const userItems = [
        ...defaultItems,
       
       
        
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