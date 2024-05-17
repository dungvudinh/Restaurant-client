import { useEffect } from 'react';
import styles from './Home.module.scss';
import classnames from 'classnames/bind';
import Navbar from '../../components/Navbar';
import ServiceSection  from '../../components/ServiceSection';
import AboutSection from '../../components/AboutSection';
import FoodMenu from '../../components/FoodMenu';
import Reservation from '../../components/Reservation';
import VideoModal from '../../components/videoModal';
import TeamMembers from '../../components/TeamMembers';
import OurStory from '../../components/OurStory';
import Footer from '../../components/Footer';
import bghero from '../../Assets/img/bghero.jpg';
import hero from '../../Assets/img/hero.png'
import menu9 from '../../Assets/img/menu9.jpg'
import menu10 from '../../Assets/img/menu10.jpg'
import menu11 from '../../Assets/img/menu11.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';
const heroSlides = [
    {
        title: `Hương Vị Tuyệt Vời, Trải Nghiệm Khó Quên`, 
        desc: `Tại nhà hàng của chúng tôi, chúng tôi không chỉ tạo ra những bữa ăn ngon mà còn tạo ra những trải nghiệm đầy ấn tượng.
         Hãy thưởng thức mỗi món ăn như một tác phẩm nghệ thuật, được chuẩn bị cẩn thận để kích thích vị giác 
         của bạn và nâng cao hành trình ẩm thực của bạn.`, 
         imgSrc: menu9
    }, 
    {
        title: 'Nơi Niềm Đam Mê Ẩm Thực Gặp Gỡ Những Kỷ Niệm Khó Quên', 
        desc: `Hãy tham gia cùng chúng tôi tại nhà hàng của chúng tôi, nơi niềm đam mê với đồ ăn gặp gỡ sự tận tâm trong
         việc tạo ra những kỷ niệm không thể nào quên. Từ những giọt nước đầu tiên đến những miếng thức ăn cuối cùng, 
         hòa mình vào một không gian nơi mọi chi tiết được thiết kế để gợi lên niềm vui, sự kết nối và niềm hứng thú với ẩm thực.`, 
         imgSrc: menu10
    }, 
    {
        title: 'Nâng Tầm Ẩm Thực Vượt Trội', 
        desc: `Trải nghiệm ẩm thực được định nghĩa lại tại nhà hàng của chúng tôi. Bước vào một bầu không khí nơi sự sáng tạo,
         thanh lịch và hương vị hội tụ để vượt xa những mong đợi của bạn. Từ những tác phẩm sáng tạo của đầu bếp đến dịch vụ 
         hoàn hảo của chúng tôi, mỗi khoảnh khắc với chúng tôi là một sự kỷ niệm về hương vị tinh tế và sự hoàn thiện.`, 
         imgSrc: menu11
    }, 
]
function Home() {
    
    return ( 
        <div className="container-xxl bg-white p-0">
            {/* <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>      
            </div> */}


        <div className="container-xxl position-relative p-0">
            <Navbar />
            <Carousel>
                {heroSlides.map((slide, index)=>(
                    <Carousel.Item key={index}> 
                        <div className="container-xxl py-5 bg-dark hero-header mb-5" style={{background: `linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)), url(${bghero})`}}>
                            <div className="container my-5 py-5">
                                <div className="row align-items-center g-5">
                                    <div className="col-lg-6 text-center  text-center">
                                        <h1 className="display-3 text-white animated slideInLeft hero-header_title" style={{fontSize:'30px', textAlign:'center'}}>{slide.title}</h1>
                                        <p className="text-white animated slideInLeft mb-4 pb-2  hero-header_desc mt-2" style={{textAlign:'center', fontSize:'16px'}}>
                                            {slide.desc}
                                        </p>
                                        <a href="" className="btn py-sm-3 px-sm-5 me-3 animated slideInLeft btn-primary hero-header_btn" >Book A Table</a>
                                    </div>
                                    <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                        <img className="img-fluid" src={slide.imgSrc} alt="" style={{maxHeight:'500px', marginRight:'50px', borderRadius:'15px'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                ))}
                
            </Carousel>
        </div>
        <ServiceSection />
        <AboutSection />
        <FoodMenu />
        <Reservation />
        <TeamMembers />
        <OurStory />
        <Footer />
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
            <FontAwesomeIcon icon={faArrowUp}/>
            <i className="bi bi-arrow-up"></i>
            </a>
    </div>
     );
}

export default Home;