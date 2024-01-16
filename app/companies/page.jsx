import React from 'react'
import Nav from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import CompanyCard from "@/Components/CompanyCard";

const Companies = () => {
    return (
        <div className={"flex flex-col"}>
        <Nav />
        <div className={"grid grid-cols-3 gap-3 mx-14 my-4"}>
            <CompanyCard />
        </div>
        <Footer/>
    </div>
    )
}
export default Companies
