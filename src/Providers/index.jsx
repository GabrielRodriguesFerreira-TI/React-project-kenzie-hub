import { TechProvider } from "../contexts/TechContext"
import { UserProvider } from "../contexts/UserContext"

export const Providers = ({ children }) => {
    return (
        <UserProvider>
            <TechProvider>
                {children}
            </TechProvider>
        </UserProvider>
    )
}