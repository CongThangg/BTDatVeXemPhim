

const stateDefault = {
    danhSachGheDangChon: [

    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangChonUpdate = [...state.danhSachGheDangChon];
            let index = danhSachGheDangChonUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                danhSachGheDangChonUpdate.splice(index, 1)
            } else {
                danhSachGheDangChonUpdate.push(action.ghe)
            }
            state.danhSachGheDangChon = danhSachGheDangChonUpdate;

            return { ...state }
        }
        case 'HUY_GHE': {
            let danhSachGheDangChonUpdate = [...state.danhSachGheDangChon];
            let index = danhSachGheDangChonUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {
                danhSachGheDangChonUpdate.splice(index, 1)
            }
            state.danhSachGheDangChon = danhSachGheDangChonUpdate;

            return { ...state }

        }


        default: return { ...state }
    }
}


export default BaiTapDatVeReducer;