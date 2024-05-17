import React from 'react';
import about1 from '../../Assets/img/about1.jpg';
import about2 from '../../Assets/img/about2.jpg';
import about3 from '../../Assets/img/about3.jpg';
import about4 from '../../Assets/img/about4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
function AboutSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center"  id='aboutus'>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about1} alt="About Image 1" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={about2} style={{ marginTop: '25%' }} alt="About Image 2" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about3} alt="About Image 3" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about4} alt="About Image 4" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start fw-normal" style={{ color:'#FEA116'}}>Về chúng tôi</h5>
            <h1 className="mb-4" style={{fontWeight:'800', color:'#FEA116'}}><FontAwesomeIcon icon={faUtensils} className='me-2' color='#FEA116'/>HN Cuisine Corner</h1>
            <p className="mb-4">
            Thực đơn của chúng tôi được lựa chọn cẩn thận để giới thiệu di sản ẩm thực đa dạng của Việt Nam đồng thời tăng thêm nét sáng tạo cho từng món ăn. Ngay từ khi bước vào bên trong, bạn sẽ được chào đón bởi hương thơm hấp dẫn của các món ăn, tạo tiền đề cho một hành trình ẩm thực đáng nhớ
            </p>
            <p className="mb-4">
            Chúng tôi cố gắng vượt quá sự mong đợi của khách hàng và cung cấp trải nghiệm ăn uống thực sự khó quên. Hãy tham gia cùng chúng tôi tại Ha Noi Cuisine Corner và để vị giác của bạn thưởng thức sự hòa quyện hài hòa của các hương vị đồng thời tận hưởng lòng hiếu khách ân cần mà chúng tôi nổi tiếng. Vòm miệng của bạn sẽ cảm ơn bạn, và trái tim của bạn sẽ cảm thấy như ở nhà
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1 className="flex-shrink-0 display-5  mb-0" style={{color:'#FEA116', fontWeight:'800'}}>15</h1>
                  <div className="ps-4">
                    <p className="mb-0"  style={{color:'#666565'}}>Năm</p>
                    <h6 className="text-uppercase mb-0" style={{fontWeight:'800'}}>Kinh nghiệm</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1 className="flex-shrink-0 display-5  mb-0" style={{color:'#FEA116', fontWeight:'800'}}>50</h1>
                  <div className="ps-4">
                    <p className="mb-0"  style={{color:'#666565'}}>Nổi tiếng</p>
                    <h6 className="text-uppercase mb-0" style={{fontWeight:'800'}}>Đầu bếp</h6>
                  </div>
                </div>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="" style={{fontWeight:'600'}}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
