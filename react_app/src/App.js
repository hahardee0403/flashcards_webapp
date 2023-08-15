import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import CreatePage from "./pages/createPage";

export default function App(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/create" element={<CreatePage/>}/>
        </Routes>
    );
}