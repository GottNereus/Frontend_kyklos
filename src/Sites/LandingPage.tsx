import React, { useEffect, useState } from "react";
import LandingPageService from "../Service/LandingPageService";


export type Kyklop = {
    Vulgo: string;
    Password: string;
    id: number;
};

function LandingPage() {
    useEffect(() => {
        LandingPageService()
            .getAllKyklop()
            .then((res) => {
                setKyklops(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [kyklops, setKyklops] = useState<Kyklop[]>([]);


    return (
        <div>
            <div>
                {kyklops.map((kyklop: Kyklop, i: number) => (
                    <div className="row">
                        <div className="column">
                            <div className="card">
                                <h1>ID: {kyklop.id}</h1>
                                <h1>Vulgo: {kyklop.Vulgo}</h1>
                                <h1>PW: {kyklop.Password}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LandingPage;
