import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import jwt_decode from 'jwt-decode'
import { Login } from '@mui/icons-material'

const useAuth = () => {
    return JSON.parse(localStorage.getItem("Login"))
}

const useSession = () => {
    const session = useAuth()
    const decodedSession = session ? jwt_decode(session) : null
    const navigate = useNavigate()

    useEffect(() => {
        if (!session) {
            navigate("/", { replace: true })
        }
    }, [navigate, session])

    return decodedSession
}



const ProtectedRoutes = () => {
    const isAuth = useAuth()
    const session = useSession()

    return isAuth ? <Outlet /> : <Login />
}

export default ProtectedRoutes
