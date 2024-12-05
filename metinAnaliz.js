function metinAnalizi(metin) {
  // Metnin kelimelere ayrılması
  let kelimeler = metin.split(' ');

  // Toplam karakter sayısı
  let toplamKarakterSayisi = metin.length;

  // Harf sayısı (boşluklar hariç)
  let harfSayisi = metin.replace(/[^a-zA-Z]/g, '').length;

  // Kelime sayısı
  let kelimeSayisi = kelimeler.length;

  // En uzun kelimeyi bulma
  let enUzunKelime = kelimeler.reduce((enUzun, kelime) => {
      return kelime.length > enUzun.length ? kelime : enUzun;
  }, '');

  // Sonuçları nesne olarak döndürme
  return {
      toplamKarakterSayisi: toplamKarakterSayisi,
      harfSayisi: harfSayisi,
      kelimeSayisi: kelimeSayisi,
      enUzunKelime: enUzunKelime
  };
}

// Fonksiyonu test etme
let metin = "JavaScript, modern web geliştirme için çok güçlü bir dildir.";
let analizSonucu = metinAnalizi(metin);
console.log(analizSonucu);
