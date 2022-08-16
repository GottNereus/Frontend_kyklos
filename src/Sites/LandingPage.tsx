import React, {useEffect, useState} from "react";
import LandingPageService from "../Service/LandingPageService";
import {Link} from "@mui/material";
import {Detail} from "./Detail";
import {useNavigate} from "react-router-dom";

export type Kyklop = {
    vulgo: string;
    password: string;
    id: number;
};

function LandingPage() {

    const navigate = useNavigate();

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

    const [kyklops, setKyklops] = useState<Kyklop[]>([]);

    return (
        <ul className="card-grid">
            {kyklops.map((kyklop: Kyklop, i: number) => (
                <>
                <Link href={"detail/"+kyklop.id} style={{color: 'inherit', textDecoration: 'none'}}>
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
    );
}


export default LandingPage;
