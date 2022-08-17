import React, {useEffect, useState} from "react";
import LandingPageService from "../Service/LandingPageService";
import {Link} from "@mui/material";
import {Detail} from "./Detail";
import {useNavigate} from "react-router-dom";
import "../Css/LandingPage.css"
import {Kyklop} from "../Types/Kyklop";



function LandingPage() {

    const navigate = useNavigate();
    const [kyklops, setKyklops] = useState<Kyklop[]>([]);

    useEffect(() => {
        LandingPageService()
            .getAllKyklop()
            .then((kyklopList) => {
                setKyklops(kyklopList);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleAdd = ()=>{
        navigate("addKyklop/")
    }



    return (
        <>
            <div className="topnav">
                <button className="addKyklop/" onClick={() => {
                    handleAdd();
                }}>Add Kyklop</button>

                <div className="search-container">
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search.." name="search"/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
        </div>
        <ul className="card-grid">
            {kyklops.map((kyklop: Kyklop, i: number) => (
                <>
                <Link href={"detail/"+kyklop.id} style={{color: 'inherit', textDecoration: 'none' }}>
                    <li>
                        <article className="card" key={i}>
                            <div className="card-content">
                                <h2 className="card-name">{kyklop.vulgo}</h2>
                                <ol className="card-list">
                                    <li>ID: <span>{kyklop.id}</span></li>
                                    <li>PW: <span>{kyklop.password}</span></li>
                                </ol>
                            </div>
                        </article>
                    </li>
                </Link>
                </>
            ))}
        </ul>
        </>
    );
}


export default LandingPage;
