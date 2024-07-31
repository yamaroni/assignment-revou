// Ini Javascript

function formValidation() {
    let name = document.getElementById('input-name').value;
    console.log(name);

    // Pengecekan dimana name tidak boleh ''
    if (name == '') {
        // Code ini akan di eksekusi ketika name = ''
        alert('Maaf inputan anda kosong');
    } else {
        // Code ini akan di eksekusi ketika name tidak ''
        alert('Sukses menginput');
    }
}

let indexSlide = 1; // [0, 1, 2]
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);

    // Algoritma untuk mereset index dari slidenya
    if (n > listImage.length) indexSlide = 1;

    // Algoritma untuk menghilangkan semua gambar
    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    // Algoritma untuk memunculkan 1 gambar saja
    listImage[indexSlide - 1].style.display = 'block';
}

// Algoritma untuk auto slidenya
setInterval(() => nextSlide(1), 3000);