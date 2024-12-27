import AuthOverlay from '../auth/AuthOverlay'
import LoginForm from '../loginPage/LoginForm'

type ComponentType = {
    orderId: string
}

const LoginOrRegister = ({ orderId }: ComponentType) => {
    return (
        <AuthOverlay pageType="login" loginOrRegister={true} orderId={orderId}>
            <LoginForm orderId={orderId} />
        </AuthOverlay>
    )
}

export default LoginOrRegister
