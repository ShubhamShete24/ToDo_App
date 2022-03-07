import React from 'react'
import { useSelector } from 'react-redux'
import App from './App'
import Login from './components/Login'
import { selectUser } from './redux/reducer/userSlice'

function App1() {
    const user = useSelector(selectUser)

    return (
        <div>
            {user ? <App/> : <Login />}
        </div>
    )
}

export default App1
