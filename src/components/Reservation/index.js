import {useState} from 'react';
import { Container, Row, Col, Button, Form, FloatingLabel } from 'react-bootstrap';

import {Input, TextField, MenuItem,FormControl, InputLabel, Select, Box } from '@mui/material';
import { LocalizationProvider, DesktopDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import about3 from '../../Assets/img/about3.jpg'
import CustomAlert from '../CustomAlert';
import {io} from 'socket.io-client';
import { EscalatorWarning, FamilyRestroom } from '@mui/icons-material';
const socket = io('http://localhost:4049')
function Reservation() {
  const [showAlert, setShowAlert] = useState();
    const [alertMessage, setAlertMessage] = useState({});
  const [newBooking, setNewBooking] = useState({
    full_name:'',
    phone_number: '', 
    booking_date: `${new Date().getFullYear()}-${String(new Date().getMonth() +1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`, 
    booking_time: `${String(new Date().getHours()).padStart(2, '0')}:${String(new Date().getMinutes()).padStart(2, '0')}:00`, 
    period_time:1, 
    time_unit: 'hour', 
    note: '', 
    adult_quantity: 1, 
    children_quantity:0
  });
  const handleChangeInput = (name, value)=>{
    if(name ==='booking_date')
      {
          var booking_date = `${value.$y}-${("0" + (value.$M + 1)).slice(-2)}-${("0" + value.$D).slice(-2)}`;
          var booking_time = `${("0" + value.$H).slice(-2)}:${("0" + value.$m).slice(-2)}:00`;
          setNewBooking(prevValue=>({...prevValue, booking_date,booking_time }))
      }
      else 
          setNewBooking(prevValue=>({...prevValue, [name]:value}))
  }
  const handleChange = ()=>{

  }
  const handleSubmit  =async ()=>{
    try 
    {
      if(newBooking.full_name ==='' || newBooking.phone_number === '' || newBooking.adult_quantity === '' || newBooking.period_time === ''){
        alert("Vui lòng nhập đầy đủ thông tin")
      }
      else {
        socket.emit('notification', newBooking)
        setShowAlert(true);
        setAlertMessage({status:'success', message:'Gửi đơn đặt bàn thành công'})
      }

      
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s" id="booking">
      <Container>
        <Row className="g-0">
          <Col md={6}>
            <div className="video">
              <img src={about3} style={{width:'100%'}}/>
            </div>
          </Col>
          <Col md={6} className="bg-light d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
              <h5 className="section-title ff-secondary text-start fw-normal"  style={{color:'#FEA116'}}>Reservation</h5>
              <h1 className="text-dark mb-4" style={{fontSize:'33px'}}>Đặt bàn Online</h1>
                <Row className="g-3">
                  <Col md={6}>
                    <TextField id="outlined-basic" label="Họ tên" variant="outlined" fullWidth={true} sx={{fontFamily:'Nunito'}} 
                    onChange={(e)=>handleChangeInput('full_name',e.target.value)} size='small' required/>
                  </Col>
                  <Col md={6}>
                      <TextField id="outlined-basic" label="Số điện thoại" variant="outlined" fullWidth={true} 
                      onChange={(e)=>handleChangeInput('phone_number',e.target.value)} size='small' type='number' required/>
                  </Col>
                  <Col md={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs} size="small">
                        <DesktopDateTimePicker size="small" 
                        sx={{'input':{fontSize:'14px'}, 'svg':{fontSize:'20px'}, 'input':{padding:'9px 10px'}}}
                        slotProps={{textField:{fullWidth:true, variant:'outlined'}}} 
                        defaultValue={dayjs(new Date())} format='DD/MM/YY h:m' onChange={(value)=>handleChangeInput('booking_date', value)}
                        />
                    </LocalizationProvider>
                  </Col>
                  <Col md={6}>
                    <Row>
                    <Col md={6}>
                        <TextField id="outlined-basic" label="Thời gian" variant="outlined" fullWidth={true} 
                        onChange={(e)=>handleChangeInput('period_time',e.target.value)} defaultValue="1" size="small" type='number' required/>
                      </Col>
                      <Col md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Đơn vị</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              label="Số lượng"
                              onChange={(e)=>handleChangeInput('time_unit',e.target.value)}
                              defaultValue='hour'
                              size='small'
                            >
                              <MenuItem value='hour'>Giờ</MenuItem>
                              <MenuItem value='minute'>Phút</MenuItem>
                            </Select>
                          </FormControl>
                      </Col>
                      
                    </Row>
                  </Col>
                  <Col md={12}>
                    <Row>
                      <Col md={6}>
                      <Row>
                          <Col md={3}>
                            <EscalatorWarning   fontSize="large"/>
                          </Col>
                          <Col md={9} >
                          <TextField id="outlined-basic" label="Người lớn" variant="outlined" fullWidth={true} type="number"
                            onChange={(e)=>handleChangeInput('adult_quantity',e.target.value)} defaultValue="1" size='small' required/>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <FamilyRestroom   fontSize='large'/>
                          </Col>
                          <Col md={9} >
                          <TextField id="outlined-basic" label="Trẻ em" variant="outlined" fullWidth={true}  type="number"
                            onChange={(e)=>handleChangeInput('children_quantity',e.target.value)}  size='small'/>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                      <TextField id="outlined-basic" label="Ghi chú" variant="outlined" fullWidth={true} 
                      onChange={(e)=>handleChangeInput('note',e.target.value)} size='small'/>
                  </Col>
                  <Col>
                    <Button variant="primary" type="submit" className="w-100 py-3 fw-bold" onClick={handleSubmit}>Đặt ngay</Button>
                  </Col>
                </Row>
            </div>
          </Col>
        </Row>
      </Container>
    {showAlert && <CustomAlert alert={alertMessage} open={showAlert} onClose={()=>setShowAlert(false)}/>}
    </div>
  );
}

export default Reservation;
