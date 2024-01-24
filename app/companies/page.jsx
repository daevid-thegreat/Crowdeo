import React from 'react'
import Nav from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import CompanyCard from "@/Components/CompanyCard";

const AllCompanies = async () => {
    return await fetch('http://localhost:3000/api/company')
}
const Companies = () => {
    return (
        <div className={"flex flex-col"}>
        <Nav />
        <div className={"grid grid-cols-3 gap-3 mx-14 my-4"}>
            {
                AllCompanies().then((res) => {
                    return res.json()
                }).then((data) => {
                    return data.map((company) => {
                        return <CompanyCard key={company.id} company={company}/>
                    })
                })
            }
        </div>
        <Footer/>
    </div>
    )
}
export default Companies
