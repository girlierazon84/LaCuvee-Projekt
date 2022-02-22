import React from 'react'
import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import RoutingPath from "./RoutingPath";
import Home from "../view/Home";
import AboutUs from "../view/AboutUs";
import PartyVenue from "../view/PartyVenue";
import WineCellar from "../view/WineCellar";
import TableSetting from "../view/TableSetting";
import Equipment from "../view/Equipment";
import Price from "../view/Price";
import Booking from "../view/Booking";
import Contact from "../view/Contact";
import FAQ from "../view/FAQ";
import Direction from "../view/Direction";

export const Routing = (props: { children?: React.ReactChild }) => {

    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <Home/> }/>
                <Route path={ RoutingPath.aboutUsView } element={ <AboutUs/> }/>
                <Route path={ RoutingPath.partyVenueView } element={ <PartyVenue/> }/>
                <Route path={ RoutingPath.wineCellarView } element={ <WineCellar/> }/>
                <Route path={ RoutingPath.tableSettingView } element={ <TableSetting/> }/>
                <Route path={ RoutingPath.equipmentView } element={ <Equipment/> }/>
                <Route path={ RoutingPath.priceView } element={ <Price/> }/>
                <Route path={ RoutingPath.bookingView } element={ <Booking/> }/>
                <Route path={ RoutingPath.contactView } element={ <Contact/> }/>
                <Route path={ RoutingPath.faqView } element={ <FAQ/> }/>
                <Route path={ RoutingPath.directionView } element={ <Direction/> }/>
            </Routes>
        </BrowserRouter>
    )
}