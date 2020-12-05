function DanhSachNhanVien () {
    this.arr = [];

    // method
    // thêm NV vào mảng DSNV
    this.themNhanVien = function (nhanVien) {
        this.arr.push(nhanVien);
    };
}