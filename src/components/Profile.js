import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {

    // pegando o JSON com as informações do ususário (user)
    // e seu estado
    const { user, isAuthenticated } = useAuth0()

    // retornando as informações somente se estiver logado
    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <span>
                    Bem vindo, <strong>{user.name}</strong>!
                </span>
                <span>
                    Seu e-mail é <strong>{user.email}</strong>
                </span>
            </div>
        )
    )
}

export default Profile
