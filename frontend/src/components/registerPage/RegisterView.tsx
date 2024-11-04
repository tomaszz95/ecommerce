import AuthOverlay from '../auth/AuthOverlay'
import RegisterForm from './RegisterForm'

const RegisterView = () => {
    return (
        <AuthOverlay pageType="register">
            <RegisterForm />
        </AuthOverlay>
    )
}

export default RegisterView
