import MainHeader from './mainheader/MainHeader'
import Navigation from './navigation/Navigation'
import TopBar from './topbar/TopBar'

const Header = () => {
    return (
        <>
            <TopBar />
            <MainHeader />
            <Navigation />
        </>
    )
}

export default Header
