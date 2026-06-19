PANDUAN PENGGUNA APLIKASI
WEBGIS AKSESIBILITAS FASILITAS KESEHATAN
KABUPATEN SUMENEP

=================================================================

1. INFORMASI UMUM
   =================================================================

Nama Aplikasi :
SUMENEPSEHAT – WebGIS Aksesibilitas Fasilitas Kesehatan Kabupaten Sumenep

Deskripsi :
SUMENEPSEHAT merupakan aplikasi WebGIS yang digunakan untuk
menampilkan persebaran fasilitas kesehatan (faskes) di Kabupaten
Sumenep serta menyediakan analisis aksesibilitas, statistik
kesehatan wilayah, pencarian fasilitas kesehatan, dan navigasi
rute menuju fasilitas kesehatan terdekat.

Tujuan Pengembangan :

1. Menyediakan informasi lokasi fasilitas kesehatan secara spasial.
2. Membantu masyarakat menemukan fasilitas kesehatan terdekat.
3. Menyajikan statistik persebaran fasilitas kesehatan.
4. Mendukung analisis aksesibilitas pelayanan kesehatan.
5. Menjadi media informasi berbasis Sistem Informasi Geografis (SIG).

=================================================================
2. PERSYARATAN SISTEM
=====================

Perangkat Lunak:

* Google Chrome (disarankan)
* Mozilla Firefox
* Microsoft Edge

Koneksi Internet:

* Diperlukan untuk memuat peta dasar OpenStreetMap dan layanan routing.

Resolusi Layar:

* Minimum 1366 x 768 piksel.

=================================================================
3. STRUKUR HALAMAN APLIKASI
===========================

Aplikasi terdiri dari tiga halaman utama:

1. Beranda (SUMENEPSEHAT)
2. Peta Fasilitas Kesehatan
3. Dashboard Statistik dan Aksesibilitas

=================================================================
4. HALAMAN BERANDA
==================

Fungsi:
Halaman utama yang memberikan gambaran umum mengenai aplikasi.

Fitur:

4.1 Hero Section

* Menampilkan informasi singkat mengenai WebGIS.
* Menyediakan pencarian awal fasilitas kesehatan.
* Menyediakan filter jenis fasilitas kesehatan.

4.2 Navigasi Menu
Terdiri dari:

* Beranda
* Peta Faskes
* Statistik
* Aksesibilitas
* Tentang

4.3 Quick Search
Pengguna dapat:

a. Memilih jenis fasilitas:

* Semua Faskes
* Puskesmas
* Rumah Sakit
* Pustu
* Polindes

b. Memilih kecamatan.

c. Memasukkan nama fasilitas kesehatan.

d. Menekan tombol Cari untuk membuka halaman peta dengan filter
yang telah dipilih.

=================================================================
5. HALAMAN PETA FASILITAS KESEHATAN
===================================

Fungsi:
Menampilkan lokasi fasilitas kesehatan dalam bentuk peta interaktif.

=================================================================
5.1 Peta Interaktif
===================

Fitur:

* Zoom In
* Zoom Out
* Geser peta (Pan)
* Klik marker fasilitas kesehatan

Marker dibedakan berdasarkan kategori fasilitas kesehatan.

=================================================================
5.2 Informasi Fasilitas
=======================

Ketika marker dipilih, sistem menampilkan informasi:

* Nama fasilitas
* Jenis fasilitas
* Kecamatan
* Layanan kesehatan
* Jam operasional
* Status BPJS
* Akreditasi
* Jumlah dokter
* Jumlah bidan
* Jumlah perawat
* Jumlah tempat tidur
* Wilayah kerja
* Kepemilikan fasilitas

=================================================================
5.3 Panel Analisis
==================

Panel analisis berada di sisi kanan aplikasi.

Terdiri dari empat tab:

A. FILTER
B. STATISTIK
C. FASILITAS
D. ROUTING

=================================================================
5.4 TAB FILTER
==============

Digunakan untuk menyaring data fasilitas kesehatan.

Fitur:

* Pencarian berdasarkan nama fasilitas.
* Filter berdasarkan tipe fasilitas.
* Menampilkan hasil sesuai kriteria yang dipilih.

Langkah penggunaan:

1. Masukkan nama fasilitas pada kotak pencarian.
2. Pilih kategori fasilitas.
3. Data pada peta akan diperbarui secara otomatis.

=================================================================
5.5 TAB STATISTIK
=================

Menampilkan ringkasan statistik fasilitas kesehatan.

Informasi yang tersedia:

* Jumlah fasilitas kesehatan.
* Distribusi berdasarkan jenis fasilitas.
* Statistik persebaran wilayah.
* Grafik pendukung.

=================================================================
5.6 TAB FASILITAS
=================

Menampilkan daftar seluruh fasilitas kesehatan.

Fitur:

* Daftar fasilitas kesehatan.
* Informasi singkat setiap fasilitas.
* Klik fasilitas untuk fokus ke lokasi pada peta.

=================================================================
5.7 TAB ROUTING
===============

Digunakan untuk mencari rute menuju fasilitas kesehatan.

Langkah penggunaan:

1. Tentukan lokasi awal.
2. Pilih fasilitas tujuan.
3. Tekan tombol Cari Rute.
4. Sistem akan menampilkan jalur perjalanan pada peta.
5. Informasi jarak dan estimasi perjalanan ditampilkan.

=================================================================
6. HALAMAN DASHBOARD
====================

Fungsi:
Menampilkan statistik dan analisis aksesibilitas pelayanan
kesehatan Kabupaten Sumenep.

Dashboard terdiri dari dua bagian utama:

1. Statistik
2. Aksesibilitas

=================================================================
6.1 MENU STATISTIK
==================

Menampilkan ringkasan kondisi fasilitas kesehatan.

Informasi yang tersedia:

* Total fasilitas kesehatan.
* Persentase populasi terlayani.
* Jumlah kecamatan.
* Jumlah fasilitas aktif.
* Distribusi fasilitas kesehatan.
* Grafik perbandingan antar wilayah.
* Statistik fasilitas berdasarkan kecamatan.

Manfaat:

* Memudahkan identifikasi persebaran fasilitas kesehatan.
* Mengetahui wilayah dengan konsentrasi fasilitas tinggi maupun rendah.

=================================================================
6.2 MENU AKSESIBILITAS
======================

Menampilkan hasil analisis aksesibilitas fasilitas kesehatan.

Informasi yang tersedia:

* Skor aksesibilitas per kecamatan.
* Perbandingan tingkat aksesibilitas wilayah.
* Kecamatan dengan akses terbaik.
* Kecamatan dengan akses terendah.
* Grafik dan indikator akses pelayanan kesehatan.

Interpretasi Skor:

80 – 100 = Sangat Baik
60 – 79  = Baik
40 – 59  = Sedang
20 – 39  = Rendah
0  – 19  = Sangat Rendah

=================================================================
7. DATA YANG DIGUNAKAN
======================

Data spasial:

* Batas administrasi Kabupaten Sumenep.
* Batas kecamatan.
* Jaringan jalan OpenStreetMap.

Data non-spasial:

* Data fasilitas kesehatan.
* Informasi tenaga kesehatan.
* Kapasitas tempat tidur.
* Status BPJS.
* Akreditasi fasilitas.

=================================================================
8. CARA PENGGUNAAN SINGKAT
==========================

Mencari Fasilitas Kesehatan:

1. Buka aplikasi.
2. Masuk ke menu Peta Faskes.
3. Gunakan kotak pencarian.
4. Pilih fasilitas yang diinginkan.
5. Klik marker pada peta.

Mencari Rute:

1. Buka menu Routing.
2. Tentukan lokasi awal.
3. Pilih fasilitas tujuan.
4. Klik Cari Rute.

Melihat Statistik:

1. Buka Dashboard.
2. Pilih menu Statistik.
3. Lihat grafik dan indikator yang tersedia.

Melihat Aksesibilitas:

1. Buka Dashboard.
2. Pilih menu Aksesibilitas.
3. Analisis skor aksesibilitas per kecamatan.

=================================================================
9. KETERANGAN WARNA
===================

Biru    : Puskesmas
Merah   : Rumah Sakit
Kuning  : Klinik
Hijau   : Fasilitas Kesehatan Lainnya

=================================================================
10. PENANGANAN KESALAHAN
========================

Jika peta tidak muncul:

1. Periksa koneksi internet.
2. Muat ulang halaman.
3. Bersihkan cache browser.
4. Pastikan JavaScript aktif.

Jika data tidak tampil:

1. Pastikan file data telah dimuat.
2. Periksa konsol browser.
3. Pastikan seluruh file GeoJSON dan JavaScript tersedia.

=================================================================
11. TIM PENGEMBANG
==================

Program Studi Teknik Geomatika
Institut Teknologi Sepuluh Nopember (ITS)

Proyek:
WebGIS Aksesibilitas Fasilitas Kesehatan Kabupaten Sumenep

Versi:
1.0

Tahun:
2025/2026

=================================================================
SELESAI
=======
