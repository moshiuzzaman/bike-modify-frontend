import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";
import React from "react";

const index = () => {
    return (
        <>
            <SeoHead title="Car modify | Services" />
            <Layout>
                <div className="h-96 bg-black text-white flex items-center justify-center">
                    <h1 className="text-6xl">Services</h1>
                </div>
                {/* 2 grid 1st 1/3 2nd 2/3 */}
                <div className="grid grid-cols-2 container">
                    <div className="h-96 bg-black text-white flex items-center justify-center">
                        <h1 className="text-6xl">Services</h1>
                    </div>
                    <div className="h-96 bg-black text-white flex items-center justify-center">
                        <h1 className="text-6xl">Services</h1>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default index;
