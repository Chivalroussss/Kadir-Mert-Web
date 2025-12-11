<?php
// Türkçe karakter sorunu olmaması için karakter seti ayarı
header("Content-Type: text/html; charset=utf-8");

if ($_POST) {
    // Formdan gelen verileri alıyoruz
    $ad_soyad = strip_tags($_POST['adsoyad']);
    $email = strip_tags($_POST['eposta']);
    $konu = strip_tags($_POST['konu']);
    $mesaj = strip_tags($_POST['mesaj']);

    // Kendi mail adresinizi buraya yazın
    $alici_email = "mail@kadirmert.com";

    // Mail içeriği tasarımı
    $icerik = "Web Sitenizden Yeni Bir Mesaj Var!\n\n";
    $icerik .= "Gönderen: " . $ad_soyad . "\n";
    $icerik .= "E-posta: " . $email . "\n";
    $icerik .= "Konu: " . $konu . "\n";
    $icerik .= "Mesaj:\n" . $mesaj;

    // Mail başlıkları
    $basliklar = "From: " . $email . "\r\n";
    $basliklar .= "Reply-To: " . $email . "\r\n";

    // Gönderme işlemi
    if (mail($alici_email, $konu, $icerik, $basliklar)) {
        echo "<script>alert('Mesajınız başarıyla gönderildi!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Bir hata oluştu, lütfen tekrar deneyin.'); window.history.back();</script>";
    }
}
?>