import { faCartPlus, faHeadset, faUserTie, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you're using React Bootstrap

function ServiceItem({ iconClass, title, description }) {
  return (
    <div className="service-item rounded pt-3">
      <div className="p-4">
        <FontAwesomeIcon icon={iconClass} className='fa fa-3x  mb-4' style={{color:'#FEA116'}}/>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

function ServiceSection() {
  return (
    <div className="container-xxl py-5">
      <Container>
        <Row className="g-4">
          <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.1s">
            <ServiceItem
              iconClass={faUserTie}
              title="Đầu bếp"
              description="Đầu bếp hàng đầu Việt Nam. Có nhiều năm kinh nghiệm."
            />
          </Col>
          <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.3s">
            <ServiceItem
              iconClass={faUtensils}
              title="Chất lượng đồ ăn"
              description="Chúng tôi đặt chất lượng và trải nghiệm khách hàng lên hàng đầu."
            />
          </Col>
          <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.5s">
            <ServiceItem
              iconClass={faCartPlus}
              title="Order trực tuyến"
              description="Giờ đây bạn có thể đặt bàn trực tiếp trên website của chúng tôi."
            />
          </Col>
          <Col lg={3} sm={6} className="wow fadeInUp" data-wow-delay="0.7s">
            <ServiceItem
              iconClass={faHeadset}
              title="Dịch vụ 24/7"
              description="Chúng tôi có mặt bất kì lúc nào bạn cần."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceSection;
