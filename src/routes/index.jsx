import { Route, Routes } from "react-router-dom"
import { DashBoardPage } from "../pages/dashboard"
import { LoginPage } from "../pages/login"
import { RegisterPage } from "../pages/register"
import { Providers } from "../Providers"

export const RoutesMain = () => {

    return (
        <Providers>
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/register" element={<RegisterPage />}></Route>
                <Route path="/dashboard" element={<DashBoardPage />}></Route>
                <Route path="*" element={<LoginPage />}></Route>
            </Routes>
        </Providers>
    )
}