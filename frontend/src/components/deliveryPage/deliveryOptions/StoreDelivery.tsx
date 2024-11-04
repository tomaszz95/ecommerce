import styles from './StoreDelivery.module.css'

type ComponentType = {
    selectedMethodDelivery: string
    onSelectMethodDelivery: (value: string) => void
}

const StoreDelivery = ({ selectedMethodDelivery, onSelectMethodDelivery }: ComponentType) => {
    return <div>StoreDelivery</div>
}

export default StoreDelivery
