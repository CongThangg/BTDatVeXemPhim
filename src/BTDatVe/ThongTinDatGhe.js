import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button><span style={{ color: 'white', fontSize: '20px' }}> Ghế đã chọn</span>
                    <br />
                    <button className='gheDangChon'></button><span style={{ color: 'white', fontSize: '20px' }}> Ghế đang chọn</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: '0' }}></button><span style={{ color: 'white', fontSize: '20px' }}> Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table">
                        <thead>
                            <tr className='text-light' style={{ fontSize: '25px' }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Hủy</th>
                            </tr>
                        </thead>
                        <tbody style={{color:'orange',fontWeight:'bold'}}>

                            {this.props.danhSachGheDangChon.map((gheDangChon, index) => {
                                return <tr key={index}>
                                    <td>{gheDangChon.soGhe}</td>
                                    <td>{gheDangChon.gia.toLocaleString()+" VNĐ"}</td>
                                    <td>
                                        <button style={{backgroundColor:'red',borderRadius:'50%',border:'red'}} onClick={() => { 
                                            this.props.dispatch({
                                                type:'HUY_GHE',
                                                soGhe:gheDangChon.soGhe
                                            });
                                         }}>
                                            <i  className="fa-solid fa-x" />
                                         </button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                        <tfoot style={{color:'orange',fontWeight:'bold'}}>
                            <tr>
                                <td></td>
                                <td>
                                    Tổng tiền
                                </td>
                                <td>{this.props.danhSachGheDangChon.reduce((tongTien,gheDangChon,index)=>{
                                    return tongTien +=gheDangChon.gia; 
                                },0).toLocaleString()+" VNĐ"}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangChon: state.BaiTapDatVeReducer.danhSachGheDangChon
    }
}
export default connect(mapStateToProps)(ThongTinDatGhe)

