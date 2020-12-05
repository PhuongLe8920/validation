function Validation() {
    this.kiemTraRong = function(input, spanId, mess){
        if (input === "") {
            getElement(spanId).style.display = "block";
            getElement(spanId).innerHTML = mess + " không được rỗng";
            return false;
        }   
        getElement(spanId).style.display = "none";
        getElement(spanId).innerHTML = "";
        return true;
    };

    this.kiemTraChucVu() {
        
    }
}