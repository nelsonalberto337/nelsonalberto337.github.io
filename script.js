//DApatkan buttonnya:
mybutton = document.getElementById("myBtn");

// Saat pengguna melakukan scrolling ke bawah 20px dari bagian atas dokumen, maka tunjukkan tombolnya
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Saat pengguna mengklik tombol, scroll kembali ke bagian atas dokumen
function topFunction() {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE dan Opera
}