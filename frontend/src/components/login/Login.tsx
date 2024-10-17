import AuthOverlay from '../auth/AuthOverlay'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <AuthOverlay pageType="login">
            <LoginForm />
        </AuthOverlay>
    )
}

export default Login
