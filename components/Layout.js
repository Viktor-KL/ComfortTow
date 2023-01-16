import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const Layout = ({children}) => (
    <>
    <Nav />
    <main>
        {children}
    </main>    
    <Footer />
    </>
)

export default Layout;