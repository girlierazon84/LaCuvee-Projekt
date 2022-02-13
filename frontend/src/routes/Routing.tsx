import React from 'react'
import { Route } from "react-router"
import { BrowserRouter, Navigate, Routes } from "react-router-dom"
import RoutingPath from "./RoutingPath";
import Hem from "../view/Hem";
import OmOss from "../view/OmOss";
import Festlokal from "../view/Festlokal";
import Vinkallare from "../view/Vinkallare";
import Dukning from "../view/Dukning";
import Utrustning from "../view/Utrustning";
import Pris from "../view/Pris";
import Boka from "../view/Boka";
import Kontakt from "../view/Kontakt";
import FAQ from "../view/FAQ";
import Vagbeskrivning from "../view/Vagbeskrivning";

export const Routing = (props: { children?: React.ReactChild }) => {

    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.hemView } element={ <Hem/> }/>
                <Route path={ RoutingPath.omOssView } element={ <OmOss/> }/>
                <Route path={ RoutingPath.festlokalView } element={ <Festlokal/> }/>
                <Route path={ RoutingPath.vinkallareView } element={ <Vinkallare/> }/>
                <Route path={ RoutingPath.dukningView } element={ <Dukning/> }/>
                <Route path={ RoutingPath.utrustningView } element={ <Utrustning/> }/>
                <Route path={ RoutingPath.prisView } element={ <Pris/> }/>
                <Route path={ RoutingPath.bokaView } element={ <Boka/> }/>
                <Route path={ RoutingPath.kontaktView } element={ <Kontakt/> }/>
                <Route path={ RoutingPath.faqView } element={ <FAQ/> }/>
                <Route path={ RoutingPath.vagbeskrivningView } element={ <Vagbeskrivning/> }/>
            </Routes>
        </BrowserRouter>
    )
}