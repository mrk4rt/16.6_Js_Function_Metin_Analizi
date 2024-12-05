# Metin Analizi

---

## Proje Amacı
Kullanıcının girdiği metin üzerinde çeşitli analizler yapan bir fonksiyon yazmak. Bu fonksiyon, metnin toplam karakter sayısını, harf sayısını (boşluklar hariç), kelime sayısını ve en uzun kelimeyi analiz eder. Analiz sonuçları bir nesne olarak döndürülür.

---

## Kullanılacak Değişkenler ve Anahtar Kelimeler

### Değişkenler:
- **`metin`**: Kullanıcının girdiği metni saklayacak değişken.
- **`karakterSayisi`**: Metnin toplam karakter sayısını tutacak değişken.
- **`harfSayisi`**: Metindeki harf sayısını tutacak değişken (boşluklar hariç).
- **`kelimeSayisi`**: Metindeki kelime sayısını tutacak değişken.
- **`enUzunKelime`**: Metindeki en uzun kelimeyi tutacak değişken.

### Anahtar Kelimeler:
- **`function`**: İşlemleri bir fonksiyon içinde düzenlemek için.
- **`let`**: Değişkenleri tanımlamak için.
- **`split()`**: Metni kelimelere ayırmak için.
- **`length`**: Dizinin uzunluğunu veya bir string'in karakter sayısını bulmak için.
- **`filter()`**: Boşlukları hariç tutmak için kullanılabilir.
- **`for`**: Döngü kullanarak analizleri gerçekleştirmek için.
- **`Math.max()`**: En uzun kelimeyi bulmak için.
- **`return`**: Fonksiyondan sonuç döndürmek için.

---

## İzlenecek Adımlar

1. **Fonksiyon Tanımlama:**
   - `metinAnalizi` adında bir fonksiyon oluşturun.

2. **Metnin Parçalanması:**
   - Girilen metni kelimelere ayırmak için `split()` fonksiyonunu kullanarak bir dizi oluşturun. Her kelimeyi ayırarak dizideki öğeleri elde edin.

3. **Toplam Karakter Sayısını Hesaplama:**
   - Metnin toplam karakter sayısını `length` özelliğiyle bulabilirsiniz.

4. **Harf Sayısını Hesaplama:**
   - Metni boşluklardan ayırarak sadece harfleri saymak için bir `filter()` fonksiyonu kullanın ve harflerin sayısını bulun.

5. **Kelime Sayısını Hesaplama:**
   - Oluşan kelimeler dizisinin uzunluğunu (yani kelime sayısını) `length` özelliği ile hesaplayın.

6. **En Uzun Kelimeyi Bulma:**
   - Kelimeler dizisini `Math.max()` fonksiyonuyla analiz ederek en uzun kelimeyi bulun. Bu işlemi kelimelerin uzunlukları üzerinde yapın.

7. **Sonuçları Nesne Olarak Döndürme:**
   - Analizlerin tüm sonuçlarını bir nesne içinde döndürün. Bu nesne, toplam karakter sayısı, harf sayısı, kelime sayısı ve en uzun kelimeyi içerecek.

8. **Sonuçları Görüntüleme:**
   - Döndürülen nesneyi konsola yazdırarak sonuçları görüntüleyin.

---

## Örnek Beklenen Çıktı

Metin: `"JavaScript, modern web geliştirme için çok güçlü bir dildir."`

Sonuç:
