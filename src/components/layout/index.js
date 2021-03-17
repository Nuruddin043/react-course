import Header from '../header';
import Footer from '../footer';
import Container from '@material-ui/core/Container'
const Layout = ({children}) => {
    return ( 
        <>
            <Header />
            <Container>
              
                {children}

                <Footer />
            </Container>
        </>
        
    
    
     );
}
 
export default Layout;