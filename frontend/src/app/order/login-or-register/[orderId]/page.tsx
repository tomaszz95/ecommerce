'use client'

import AuthLayout from '../../../../components/layouts/AuthLayout'

import LoginOrRegister from '../../../../components/loginOrRegisterPage/LoginOrRegister'

import useProtect from '../../../../hooks/useProtect'
import useMetadata from '../../../../hooks/useMetadata'

type Props = {
    params: { orderId: string }
}

const LoginOrRegisterPage = ({ params }: Props) => {
    useProtect({ from: 'User' })
    useMetadata({ title: 'Authentication', description: 'Authentication page' })

    const orderId = params.orderId

    return (
        <AuthLayout>
            <LoginOrRegister orderId={orderId} />
        </AuthLayout>
    )
}

export default LoginOrRegisterPage