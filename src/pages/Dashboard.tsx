import React from "react"
import apiEndpoint from "../constants/apiEndpoint"
import { apiCall } from "../utils/axios"
import { useNavigate } from "react-router-dom"
function Dashboard(): React.ReactElement {
    const navigate = useNavigate()
    const logout = () => {
        apiCall(
            {
                method: "post",
                url: apiEndpoint.LOGOUT,
                cb: (data: { message: string }) => {
                    console.log(data)
                    navigate("/")

                }
            }
        )
    }

    return (
        <main className="w-screen h-screen p-8">
            <h1>DASHBOARD</h1>
            <button onClick={logout} className="bg-blue-500 cursor-pointer">Logout</button>
        </main>
    )
}

export default Dashboard