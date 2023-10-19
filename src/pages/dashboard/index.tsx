"use client";
import DashboardLayout from "@/components/Layout/DashboardLayout";

import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Dashboard = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/dashboard/profile");
      }, []);
    return (
        <div>
            <DashboardLayout>
                <h1>Loading</h1>
            </DashboardLayout>
        </div>
    );
};

export default Dashboard;
