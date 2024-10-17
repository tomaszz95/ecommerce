import AuthOverlay from '../auth/AuthOverlay'
import RegisterForm from './RegisterForm'

const Login = () => {
    return (
        <AuthOverlay pageType="register">
            <RegisterForm />
        </AuthOverlay>
    )
}

export default Login
