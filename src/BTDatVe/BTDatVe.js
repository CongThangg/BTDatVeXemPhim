import React, { Component } from 'react'
import './BTDatVe.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BTDatVe extends Component {


  renderHangGhe=()=>{
    return danhSachGheData.map((hangGhe,index) => {
      return <div key={index} >
          <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
    })

   
  }


  render() {
    return (
      <div style={{position:'fixed',width:'100%',height:'100%',backgroundImage:"url(./img/bgmovie.jpg)",backgroundSize:'100%'}}>
        <div style={{backgroundColor:'rgba(0,0,0,0.5)',position:'fixed',width:'100%',height:'100%'}}>
            <div className='row'>
                <div className="col-8 text-center">
                    <h1 className='' style={{color:'orange'}}>ĐẶT VÉ XEM PHIM</h1>
                    <h5 style={{fontSize:'15px', color:'white'}}>Màn hình</h5>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                    <div className='screen'></div>
                    {this.renderHangGhe()}
                    </div>
                </div>
                <div className="col-4">
                    <h2 className='text-light mt-5 text-center'>DANH SÁCH GHẾ BẠN CHỌN</h2>
                    <ThongTinDatGhe/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
