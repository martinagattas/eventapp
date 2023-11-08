import React, { FC } from "react";
import { ProvidersLoginForm } from "../login/ProvidersLoginForm";

export const ProvidersHero:FC = () => {
    return (
        <main className="container providersHero">
            <ProvidersLoginForm/>
        </main>
    )
}