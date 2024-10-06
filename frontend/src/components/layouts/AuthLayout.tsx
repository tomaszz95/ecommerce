import AuthHeader from '../header/AuthHeader'
import AuthFooter from '../footer/AuthFooter'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header>
                <AuthHeader />
            </header>
            <main>{children}</main>
            <footer>
                <AuthFooter />
            </footer>
        </>
    )
}

export default AuthLayout
