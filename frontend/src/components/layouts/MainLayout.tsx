import Header from '../header/Header'
import Footer from '../footer/Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default MainLayout
