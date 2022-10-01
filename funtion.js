function print_number() {
  // Lấy number
  var number = document.getElementById("number").value;

  // Ép number sang kiểu INT
  number = parseInt(number);

  // Lặp để in kết quả
  var html = "";
  for (var i = 1; i <= number; i++) {
    html += i + " <br/>";
  }
  document.getElementById("result").innerHTML = html;
}

function change_color() {
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
    // Vị trí chẵn => màu đỏ
    if ((i + 1) % 2 == 0) {
      divs[i].style.background = "red";
    } else {
      // Vị trí lẽ => màu xanh
      divs[i].style.background = "blue";
    }
  }
}

function change_textbox() {
  document.bgColor = Maunen.value;
  document.fgColor = Mauchu.value;
  document.title = TieuDe.value;
  document.defaultStatus = TrangThai.value;
}

function change_red() {
  document.fgColor = "red";
}

function change_blue() {
  document.bgColor = "blue";
}

function giaipt() {
  
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);
  var delta = b * b - 4 * a * c;
  
  if (delta == 0) {
    var x = (-b / 2) * a;
    document.getElementById("ketQua").innerText = "Phương trình có nghiệm kép x1 = x2 = " + x;
  } else if (delta > 0) {
    var x1 = (-b + Math.sqrt(delta)) / (2*a);
    var x2 = (-b - Math.sqrt(delta)) / (2*a);
    document.getElementById("ketQua").innerText = "Phương trình có 2 nghiệm phân biệt:\n x1= " + x1 +"\n x2= "+ x2;
  } else {
    document.getElementById("ketQua").innerText = "Phương trình vô nghiệm.";
  }
}

var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';
images[3] = 'images/image4.jpg';

function slideshow(){
  document.slide.src= images[i];

  if(i < images.length - 1){
    i++;
  }else{
    i = 0;
  }

  setTimeout("slideshow()", time);
}
window.onload = slideshow;