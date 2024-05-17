import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {ChevronRight, FacebookOutlined, LinkedIn, Twitter, YouTube} from '@mui/icons-material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <Container>
        <Row className="g-5">
          <Col lg={3} md={6}>
            <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{color:'#FEA116'}}>Company</h4>
            <a class="btn btn-link" href=""> <ChevronRight />  Về Chúng Tôi</a>
            <a class="btn btn-link" href=""> <ChevronRight /> Liên Hệ</a>
            <a class="btn btn-link" href=""> <ChevronRight /> Phục Vụ</a>
            <a class="btn btn-link" href=""> <ChevronRight />Chính Sách</a>
            <a class="btn btn-link" href=""> <ChevronRight />Điều Khoản & Điều Kiện</a>
          </Col>
          <Col lg={3} md={6}>
            <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{color:'#FEA116'}}>Contact</h4>
            <p className="mb-2"> <FontAwesomeIcon icon={faMapMarkerAlt} className='me-3' />123 Phổ Nhổn, Nam Từ Liêm, Hà Nội</p>
            <p className="mb-2"><FontAwesomeIcon icon={faPhoneAlt} className="me-3"/>+012 345 67890</p>
            <p className="mb-2"><FontAwesomeIcon icon={faEnvelope}  className="me-3"/>anhkho881@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#">
                <Twitter />
                 </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <FacebookOutlined />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <YouTube />
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <LinkedIn />
              </a>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{color:'#FEA116'}}>Opening</h4>
            <h5 className="text-light fw-normal " style={{fontSize:'18px'}}>Thứ hai - Thứ bảy</h5>
            <p>8:30 AM - 9:00 PM</p>
            <h5 className="text-light fw-normal" style={{fontSize:'18px'}}>Chủ nhật</h5>
            <p>10:00 AM - 8:00 PM</p>
          </Col>
          <Col lg={3} md={6}>
            <h4 className="section-title ff-secondary text-start  fw-normal mb-4" style={{color:'#FEA116'}}>Newsletter</h4>
            <p>Gửi Email để nhận tư vấn</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <Form.Control className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Email ... " />
              <Button variant="primary" className="btn py-2 position-absolute top-0 end-0 mt-2 me-2">Đăng Ký</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="copyright">
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Dungg from VTS</a>, All Right Reserved. <br />
              Designed By <a className="border-bottom" href="https://htmlcodex.com">Dungg Vu Dinh</a><br /><br />
              Distributed By <a className="border-bottom" href="https://themewagon.com" target="_blank">Dungg Vu Dinh</a>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FQAs</a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
