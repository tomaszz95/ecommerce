import AuthOverlay from '../auth/AuthOverlay'
import LoginForm from './LoginForm'

const LoginView = () => {
    return (
        <AuthOverlay pageType="login">
            <LoginForm />
        </AuthOverlay>
    )
}

export default LoginView
