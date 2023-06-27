import { BrowserRouter, Routes, Route } from "react-router-dom";
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav"
import VilageFcst from "./VilageFcst";
import UltraFcst from "./UltraFcst";


const Fcst = () => {

    return (
        <BrowserRouter>
            <main className="container">
                <FcstNav />
                <Routes>
                    <Route path='/' element={<FcstMain />} />
                    <Route path='/ultra/:dt/:area/:x/:y' element={<UltraFcst />} />
                    <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default Fcst;