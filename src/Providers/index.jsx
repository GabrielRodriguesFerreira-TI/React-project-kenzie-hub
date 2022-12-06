import { UserProvider } from "../contexts/UserContext"

export const Providers = ({ children }) => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}