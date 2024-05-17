import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import chef1 from '../../Assets/img/chef1.jpg';
import chef2 from '../../Assets/img/chef2.jpg';
import chef3 from '../../Assets/img/chef3.jpg';
import chef4 from '../../Assets/img/chef4.jpg';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
function TeamMembers() {
  return (
    <div className="container-xxl pt-5 pb-3">
      <Container>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s" id="team">
          <h5 className="section-title ff-secondary text-center  fw-normal" style={{color:'#FEA116'}}>Team Members</h5>
          <h1 className="mb-5">Our Master Chefs</h1>
        </div>
        <Row className="g-4">
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4" style={{width:'213px', height:'213px'}}>
                <img className="img-fluid" src={chef1} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
              <h5 className="mb-0">Dương Huỳnh Khải</h5>
              <small>Designation</small>
              <div className="d-flex justify-content-center mt-3">
                <Button className="btn-square btn-primary mx-1 d-flex align-items-center" href=""><Facebook /></Button>
                <Button className="btn-square btn-primary mx-1  d-flex align-items-center" href=""><Twitter /></Button>
                <Button className="btn-square btn-primary mx-1  d-flex align-items-center" href=""><Instagram /></Button>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4" style={{width:'213px', height:'213px'}}>
                <img className="img-fluid" src={chef2} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}  />
              </div>
              <h5 className="mb-0">Bảo Huỳnh</h5>
              <small>Designation</small>
              <div className="d-flex justify-content-center mt-3">
              <Button className="btn-square btn-primary mx-1 d-flex align-items-center" href=""><Facebook /></Button>
                <Button className="btn-square btn-primary mx-1  d-flex align-items-center" href=""><Twitter /></Button>
                <Button className="btn-square btn-primary mx-1  d-flex align-items-center" href=""><Instagram /></Button>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4" style={{width:'213px', height:'213px'}}>
                <img className="img-fluid" src={chef3} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <h5 className="mb-0">Luke Nguyễn</h5>
              <small>Designation</small>
              <div className="d-flex justify-content-center mt-3">
              <Button className="btn-square btn-primary mx-1 d-flex align-items-center" href=""><Facebook /></Button>
                <Button className="btn-square btn-primary mx-1  d-flex align-items-center" href=""><Twitter /></Button>
                <Button className="btn-square btn-primary mx-1  d-flex align-items-center" href=""><Instagram /></Button>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item text-center rounded overflow-hidden">
              <div className="rounded-circle overflow-hidden m-4" style={{width:'213px', height:'213px'}}>
                <img className="img-fluid" src={chef4} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
              <h5 className="mb-0">Trần Văn Hai</h5>
              <small>Designation</small>
              <div className="d-flex justify-content-center mt-3">
                <Button className="btn-square btn-primary mx-1 d-flex align-items-center" href=""><Facebook /></Button>
                <Button className="btn-square btn-primary mx-1  d-flex align-items-center" href=""><Twitter /></Button>
                <Button className="btn-square btn-primary mx-1  d-flex align-items-center" href=""><Instagram /></Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeamMembers;
