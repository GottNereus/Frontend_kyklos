import React, {useEffect, useState} from "react";
import LandingPageService from "../Service/LandingPageService";
import {Link} from "@mui/material";
import {Detail} from "./Detail";
import {useNavigate} from "react-router-dom";
import "../Css/LandingPage.css"
import {Kyklop} from "../Types/Kyklop";


function LandingPage() {

    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const [kyklops, setKyklops] = useState<Kyklop[]>([]);

    let tempArray: Kyklop[];

    useEffect(() => {
        LandingPageService()
            .getAllKyklop()
            .then((kyklopList) => {
                setKyklops(kyklopList);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [navigate]);

    const handleAdd = () => {
        navigate("addKyklop/")
    }

    const handleChange = (e: any) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        let concatArray: Kyklop[];
        concatArray = (kyklops!.filter((kyklop: Kyklop) => {
            return kyklop.id.toString().match(searchInput)
        }));
        concatArray = concatArray.concat(kyklops!.filter((kyklop: Kyklop) => {
            let bool: boolean = true;
            concatArray.forEach(element => {
                if (kyklop.id === element.id) {
                    bool = false;
                }
            });
            if (bool) {
                return kyklop.vulgo.toString().match(searchInput)
            }
        }));
        tempArray = concatArray;
    } else {
        tempArray = [];
    }

    return (
        <>
            <div className="topnav">
                <button className="addKyklop/" onClick={() => {
                    handleAdd();
                }}>Add Kyklop
                </button>
                <div>
                    <input
                        type="search"
                        placeholder="Search here"
                        onChange={handleChange}
                        value={searchInput}
                    />
                    {tempArray &&
                        tempArray.map((kyklop: Kyklop) => {
                            return (
                                <button
                                    className="personButton"
                                    onClick={() => {
                                        navigate(`/detail/${kyklop.id}`);
                                    }}
                                >
                                    <div key={kyklop.id} className="personMolecule">
                                        <table>
                                            <tr>
                                                <th>ID:</th>
                                                <td>{kyklop.id}</td>
                                            </tr>
                                            <tr>
                                                <th>Vulgo:</th>
                                                <td>{kyklop.vulgo}</td>
                                            </tr>
                                            <tr>
                                                <th>Password:</th>
                                                <td>{kyklop.password}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </button>
                            );
                        })}
                </div>
                <ul className="card-grid">
                    {kyklops.map((kyklop: Kyklop, i: number) => (
                        <>
                            <Link href={"detail/" + kyklop.id} style={{color: 'inherit', textDecoration: 'none'}}>
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
            </div>
        </>
    );
}


export default LandingPage;
