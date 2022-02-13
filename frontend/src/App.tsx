import React from 'react';
import { Routing } from "./routes/Routing";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Routing>
                <NavBar/>
            </Routing>
            <Footer />
        </>
    );
}

export default App;
