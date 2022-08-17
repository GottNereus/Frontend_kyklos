import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {Kyklop} from "../Types/Kyklop";
import LandingPageService from "../Service/LandingPageService";


export function Detail() {

    const navigate = useNavigate();
    const {id} = useParams();
    const [kyklop, setKyklop] = useState<Kyklop>();
    const [editMode, setEditMode] = useState<boolean>(false);
    let intId:number = parseInt(id!);
    useEffect(() => {
            LandingPageService().getKyklopById(id!).then((data) => setKyklop(data)).catch((error) => {
                console.log(error);
            });
        }, []
    )

    const handleDelete = () => {
        LandingPageService().deleteKyklop(id!)
        navigate("/")
    }

    const handleEdit = () => {
        setEditMode(true);
    }

    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault()
        LandingPageService().putKyklos(id!,event.target.vulgo.value,event.target.password.value)
        setEditMode(false)
        navigate("/")
    }

    return (
        <div>
            {!editMode ?
                <article className="card">
                    <div className="card-content">
                        <h2 className="card-name">{kyklop ? kyklop.vulgo : ""}</h2>
                        <ol className="card-list">
                            <li>ID: <span>{kyklop ? kyklop.id : ""}</span></li>
                            <li>PW: <span>{kyklop ? kyklop.password : ""}</span></li>
                        </ol>
                    </div>
                </article> :
                <article className="card">
                    <div className="card-content">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="vulgo">Vulgo: </label>
                            <input onChange={event => kyklop ? kyklop.vulgo=event.target.value : ""}
                                type="text"
                                id="vulgo"
                                name="vulgo"
                                placeholder="vulgo"
                            ></input>
                            <label htmlFor="password">Password: </label>
                            <input  onChange={event => kyklop ? kyklop.password=event.target.value : ""}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="new password"
                            ></input>
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                </article>
            }
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

