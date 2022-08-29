// setTimeout()

// const tes = setTimeout(function () {
//   console.log('ok');
// }, 5000);

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click', function () {
//   clearTimeout(tes);
//   console.log('berhenti');
// });

// setInterval()
// const interval = setInterval(() => {
//   console.log('heo');
// }, 1000);

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click', function () {
//   clearInterval(interval);
//   console.log('berhenti');
// });

// Program Hitung Mundur
const tanggalTujuan = new Date('Aug 29, 2022 08:07:00').getTime();

const hitungMundur = setInterval(() => {
  const sekarang = new Date().getTime();
  const selisih = tanggalTujuan - sekarang;
  // console.log(selisih);

  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  const teks = document.getElementById('teks');
  teks.innerHTML = `Waktu anda tinggal : ${hari}hari ${jam}jam ${menit}menit ${detik}detik lagi!`;
  if (selisih < 1000) {
    clearInterval(hitungMundur);
    console.log('waktu sudah habis');
  }
}, 1000);
