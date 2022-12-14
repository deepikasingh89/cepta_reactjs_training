
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {

    return (
      <>
        <div className="bg-warning leftbar">
          <Navbar expand="lg">
            <Nav.Link>
              <Link to="/home" className="btn btn-outline-success">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/counter" className="btn btn-outline-success">
                Counter
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/todo" className="btn btn-outline-success">
                ToDo List
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/compmodal" className="btn btn-outline-success">
                Modal Component
              </Link>
            </Nav.Link>
      
            
            <Nav.Link>
              <Link to="/funtodolist" className="btn btn-outline-success">
                Functional ToDOLIst
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/digiclock" className="btn btn-outline-success">
                Digital Clock Functional
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/digiclockclass" className="btn btn-outline-success">
                Digital Clock Class
              </Link>
            </Nav.Link>
            
            <Nav.Link>
              <Link to="/emicalc" className="btn btn-outline-success">
                EMI Calculator Class
              </Link>
            </Nav.Link>
           
            <Nav.Link>
              <Link to="/expensetracker" className="btn btn-outline-success">
                Expense Tracker
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/currencyconverter" className="btn btn-outline-success">
                Currency Converter
              </Link>
            </Nav.Link>
            
            <Nav.Link>
              <Link to="/jsonserver" className="btn btn-outline-success">
                JSON Server API
              </Link>
            </Nav.Link>
            {/* <Nav.Link><Link to="/themeswitch" className='btn btn-outline-success'>Theme Switcher</Link></Nav.Link> */}
           
            <Nav.Link>
              <Link to="/weatherapp" className="btn btn-outline-success">
                Weather App
              </Link>
            </Nav.Link>
          </Navbar>
        </div>
      </>
    );
}

export default Menu;