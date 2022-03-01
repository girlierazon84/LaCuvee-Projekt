import React from 'react'
import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import RoutingPath from "./RoutingPath";
import Home from "../view/Home";
import Images from "../view/Images";
import PartyVenue from "../view/PartyVenue";
import WineCellar from "../view/WineCellar";
import TableSetting from "../view/TableSetting";
import Equipment from "../view/Equipment";
import Price from "../view/Price";
import Booking from "../view/Booking";
import Contact from "../view/Contact";
import FAQ from "../view/FAQ";
import Direction from "../view/Direction";
import January from "../components/calendar2022/January";
import February from "../components/calendar2022/February"
import March from "../components/calendar2022/March"
import April from "../components/calendar2022/April";
import May from "../components/calendar2022/May";
import June from "../components/calendar2022/June";

export const Routing = (props: { children?: React.ReactChild }) => {

    return (
        <BrowserRouter>
            { props.children }
            <Routes>
                <Route path={ RoutingPath.homeView } element={ <Home/> }/>
                <Route path={ RoutingPath.imageView } element={ <Images/> }/>
                <Route path={ RoutingPath.partyVenueView } element={ <PartyVenue/> }/>
                <Route path={ RoutingPath.wineCellarView } element={ <WineCellar/> }/>
                <Route path={ RoutingPath.tableSettingView } element={ <TableSetting/> }/>
                <Route path={ RoutingPath.equipmentView } element={ <Equipment/> }/>
                <Route path={ RoutingPath.priceView } element={ <Price/> }/>
                <Route path={ RoutingPath.bookingView } element={ <Booking/> }/>
                <Route path={ RoutingPath.januaryView } element={ <January/> }/>
                <Route path={ RoutingPath.februaryView } element={ <February/> }/>
                <Route path={ RoutingPath.marchView } element={ <March/> }/>
                <Route path={ RoutingPath.aprilView } element={ <April/> }/>
                <Route path={ RoutingPath.mayView } element={ <May/> }/>
                <Route path={ RoutingPath.juneView } element={ <June/> }/>
                <Route path={ RoutingPath.contactView } element={ <Contact/> }/>
                <Route path={ RoutingPath.faqView } element={ <FAQ/> }/>
                <Route path={ RoutingPath.directionView } element={ <Direction/> }/>
            </Routes>
        </BrowserRouter>
    )
}