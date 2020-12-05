
// Khởi tạo mảng DSNV
var danhSachNhanVien = new DanhSachNhanVien();

var validation = new Validation();

// ẩn btn "Cập nhật"
getElement('btnThem').addEventListener('click', function () {
    getElement('btnCapNhat').style.display = "none";
});

// Thêm Nhân Viên
getElement('btnThemNV').addEventListener('click', function () {
    // Lấy thông tin nhập liệu từ 6 ô input
    var maNV = getElement('msnv').value;
    var hoTen = getElement('name').value;
    var email = getElement('email').value;
    var matKhau = getElement('password').value;
    var date = getElement('datepicker').value;
    var chucVu = getElement('chucvu').value;

    // KIỂM TRA VALIDATION
    var isValid = true;
   isValid &= validation.kiemTraRong (maNV, 'tbMaNV', "maNV");
   isValid &= validation.kiemTraRong (email, 'tbEmail', "email");
   isValid &= validation.kiemTraRong (hoTen, 'tbTen', "hoTen");
   isValid &= validation.kiemTraRong (matKhau, 'tbMatKhau', "matKhau");
   isValid &= validation.kiemTraRong (date, 'tbNgay', "date");
    // dấu &=: kiểm tra và gán giá trị

    // cách 2
    if (!isValid) return;

        // Khởi tạo đối tượng nhanVien từ lớp đối tượng NhanVien
        var nhanVien = new NhanVien(maNV, hoTen, email, matKhau, date, chucVu);

        // Thêm NV vào DSNV: gọi phương thức thêm NV trong mảng DSNV
        danhSachNhanVien.themNhanVien(nhanVien);

        // xuất mảng: <tên mảng>.arr
        console.log(danhSachNhanVien.arr);


});


// tạo function DOM
function getElement(id) {
    return document.getElementById(id);
}

