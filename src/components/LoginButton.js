import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {

    // pegando função e estado
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    // retornando somente se o usuário não estiver logado
    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                Log In
            </button>
        )
    )
}

export default LoginButton
