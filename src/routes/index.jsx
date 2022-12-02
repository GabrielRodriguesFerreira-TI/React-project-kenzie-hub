import { Route, Routes } from "react-router-dom"
import { DashBoardPage } from "../pages/dashboard"
import { LoginPage } from "../pages/login"
import { RegisterPage } from "../pages/register"

export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register/:name" element={<RegisterPage />}></Route>
            <Route path="/dashboard/:name" element={<DashBoardPage />}></Route>
            <Route path="*" element={<LoginPage />}></Route>
        </Routes>
    )
}