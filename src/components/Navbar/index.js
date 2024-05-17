import { Navbar, Nav, NavDropdown, Button, Dropdown} from 'react-bootstrap'; // Assuming you're using React Bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
import images from '../../Assets/img';
function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0" style={{position:'fixed'}}>
        <a href="" className="navbar-brand p-0">
            <h1 className="m-0 logo-title">
              {/* <FontAwesomeIcon icon={faUtensils} className='me-2'/>
              HN Cuisine Corner */}
              <img src={images.logo4} alt="" />
            </h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
                <a href="index.html" className="nav-item nav-link active">trang chủ</a>
                <a href="#aboutus" className="nav-item nav-link">về chúng tôi</a>
                <a href="#menu" className="nav-item nav-link">Thực đơn</a>
                <Nav className="me-auto">
                  <NavDropdown title="Trang" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#booking">Đặt bàn</NavDropdown.Item>
                    <NavDropdown.Item href="#team">đội ngũ đầu bếp</NavDropdown.Item>
                    <NavDropdown.Item href="#story">Câu chuyện</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
                <a href="contact.html" className="nav-item nav-link">Liên hệ</a>
            </div>
            <a href="#booking" className="btn py-2 px-4" style={{backgroundColor:'#FEA116', borderColor:'#FEA116', color:'#fff', fontSize:'14px !important'}}>Đặt bàn</a>
        </div>
    </nav>
    
  );
}

export default NavigationBar;
