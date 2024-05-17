import { useEffect, useMemo, useState } from 'react';
import { faBowlFood, faCoffee, faHamburger, faMartiniGlassCitrus, faUtensils, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import menu1 from '../../Assets/img/menu1.jpg'
import axios from 'axios';
const  navList = [
  {
    id: 1 , 
    title:'Phổ biến', 
    detail:'Món khai vị', 
    icon: faBowlFood, 
    menu_type_id:1, 
    menu_group_id:2
  }, 
  {
    id: 2 , 
    title:'Đặc biệt', 
    detail:'Món chính', 
    icon: faHamburger, 
    menu_type_id:1, 
    menu_group_id:1
  }, 
  {
    id: 3 , 
    title:'Kết thúc', 
    detail:'Món tráng miệng', 
    icon: faUtensils, 
    menu_type_id:1, 
    menu_group_id:3
  }, 
  {
    id: 4 , 
    title:'Đồ uống', 
    detail:'Rượu', 
    icon: faWineGlass, 
    menu_type_id:2, 
    menu_group_id:5
  }, 
  {
    id: 5 , 
    title:'Đồ uống', 
    detail:'Nước ép', 
    icon: faMartiniGlassCitrus, 
    menu_type_id:2, 
    menu_group_id:4
  }, 
  
]
function FoodMenu() {
  const [listMenu,setListMenu ] = useState([]);
  const [menuCategory, setMenuCategory] = useState({
    menu_type_id:1, 
    menu_group_id:2
  })
  useEffect(()=>{
    axios.get(`http://localhost:4049/api/menu/client?menu_type_id=${menuCategory.menu_type_id}&menu_group_id=${menuCategory.menu_group_id}`)
    .then(res=>setListMenu(res.data));
  },[menuCategory.menu_group_id, menuCategory.menu_group_id])
  
  const formatMoney = (money)=>{
    const NumberFormat = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    return NumberFormat.format(money);
  }
  return (
    <div className="container-xxl py-5">
      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s" id='menu'>
          <h5 className="section-title ff-secondary text-center  fw-normal" style={{color:'#FEA116'}}>Thực đơn</h5>
          <h1 className="mb-5" style={{fontWeight:'800'}}>Thực đơn phổ biến nhất</h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
          <Nav className="nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            {navList.map(navItem=>(
              <Nav.Item key={navItem.id} onClick={()=>setMenuCategory({menu_group_id:navItem.menu_group_id, menu_type_id:navItem.menu_type_id})}>
                <Nav.Link href={`#tab-${navItem.id}`} className="d-flex align-items-center text-start mx-3 ms-0 pb-3 " style={{color:'none', backgroundColor:'none'}}>
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <FontAwesomeIcon icon={navItem.icon} className='fa-2x ' style={{color:'#FEA116'}}/>
                  <div className="ps-3">
                    <small className="text-body">{navItem.title}</small>
                    <h6 className="mt-n1 mb-0">{navItem.detail}</h6>
                  </div>
                </Nav.Link>
              </Nav.Item>
            ))}
            
          </Nav>
          <Tab.Content>
            <Tab.Pane className="tab-pane fade show p-0 active tab-content" >
              <Row className="g-4">
              {listMenu.length > 0 && listMenu.map(menuItem=>(
                  <Col lg={6} key={menuItem.id}>
                      <div className="d-flex align-items-center">
                        <img 
                          src={JSON.parse(menuItem.image_url)[0]}
                          alt="" 
                          rounded 
                          fluid 
                          style={{ width: '80px', height:'80px', objectFit:'cover', borderRadius:'10px' }} 
                          className="flex-shrink-0"
                        />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2" style={{fontSize:'17px'}}>
                            <span>{menuItem.name}</span>
                            <span style={{ color:'#FEA116'}}>{formatMoney(menuItem.price)}</span>
                          </h5>
                          <small className="fst-italic">{menuItem.description}</small>
                        </div>
                      </div>
                    </Col>

              ))}
              </Row>
            </Tab.Pane>
            
           
           
          </Tab.Content>
        </div>
      </Container>
    </div>
  );
}

export default FoodMenu;
