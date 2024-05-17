import React from 'react';
import about1 from '../../Assets/img/about1.jpg';
import about2 from '../../Assets/img/about2.jpg';
import about3 from '../../Assets/img/about3.jpg';
import about4 from '../../Assets/img/about4.jpg';
import { Carousel } from 'react-bootstrap';

function OurStory() {
  return (
    <div className="container-xxl py-5">
      <div className="container" id="story">
        <Carousel>
          <Carousel.Item>
              <div className="row g-5 align-items-center">
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
                <h5 className="section-title ff-secondary text-start fw-normal" style={{ color:'#FEA116'}}>Our Story</h5> <br/> 
                <h3 className="ff-secondary text-start fw-normal mt-2">The Past</h3>
                <p className="mb-4">
                  Được xây dựng tại số 36 phố Hàng Mành ngay trung tâm khu phố cổ Hà Nội, Vườn Hà Nội mở cửa đón những vị khách đầu tiên vào năm 1998.
                    Qua gần 20 năm hoạt động, Vườn Hà Nội đã chào đón những khách hàng sành điệu từ khắp nơi trên thế giới, không chỉ mang đến trải nghiệm ẩm thực Việt Nam đích thực mà còn là cánh cửa tiếp cận văn hóa Việt Nam.
                </p>
                <p className="mb-4">
                    Về tiền đề, tinh thần Đông Dương mang tính biểu tượng đã được kiến trúc sư nổi tiếng Hồ Thiếu Trí nắm bắt một cách khéo léo, thiết kế một khu phức hợp có sân trong ngoài trời quyến rũ và khung cảnh trong nhà trang nhã.
                </p>
                
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
              <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-100 wow zoomIn img-1" data-wow-delay="0.1s" src={about1} alt="About Image 1" />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-75 wow zoomIn img-2" data-wow-delay="0.3s" src={about2} style={{ marginTop: '25%' }} alt="About Image 2" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-75 wow zoomIn img-3" data-wow-delay="0.5s" src={about3} alt="About Image 3" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-100 wow zoomIn img-4" data-wow-delay="0.7s" src={about4} alt="About Image 4" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start fw-normal" style={{ color:'#FEA116'}}>Our Story</h5> <br/> 
                <h3 className="ff-secondary text-start fw-normal mt-2">The Future</h3>
                <p className="mb-4">
                  Năm 2016, sau gần 20 năm chất lượng phục vụ, đã đến lúc được nâng cấp nhằm nâng cao trải nghiệm của khách hàng với Vườn Hà Nội.
                </p>
                <p className="mb-4">
                Nắm bắt di sản của mình, Vườn Hà Nội đã ký hợp đồng với công ty của ông Hồ Thiếu Trí để đứng đầu việc thiết kế lại nhà hàng, cập nhật không gian với trọng tâm là bảo tồn những nét đặc trưng nguyên thủy của Đông Dương.
                </p>
                <p className="mb-4">
                Việc cải tạo này sẽ không thể hoàn thành nếu không có nỗ lực không mệt mỏi của đội ngũ nhà bếp trong việc thiết kế và đổi mới thực đơn. Dựa trên truyền thống nấu ăn tại nhà và nghiên cứu cả kỹ thuật truyền thống và hiện đại, Vườn Hà Nội đã xây dựng một danh mục ẩm thực Việt Nam hiện đại mới sẽ gây được tiếng vang với người dân địa phương và mê hoặc nhiều du khách.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        
      </div>
    </div>
  );
}

export default OurStory;
