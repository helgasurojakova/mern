import React from 'react'
import {Routes, Route} from "react-router-dom"
import LinksPage from "./pages/LinksPage"
import CreatePage from "./pages/CreatePage"
import DetailPage from "./pages/DetailPage"
import AuthPage from "./pages/AuthPage"
import SignUpPage from "./pages/SignUpPage"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/links" element={<LinksPage/>} exact={true}/>
                <Route path="/create" element={<CreatePage/>} exact={true}/>
                <Route path="/detail/:id" element={<DetailPage/>} exact={true}/>
                <Route path={"*"} element={<CreatePage/>} exact={true}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path={"*"} element={<AuthPage/>} exact={true}/>
            <Route path={"/signup"} element={<SignUpPage/>} exact={true}/>
        </Routes>
    )
}