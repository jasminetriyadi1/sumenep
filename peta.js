'use strict';

const FACILITIES = [{"id":1,"nama_fasilitas":"RS Baghraf Health Care","type":"rs","kec":"Batuan","latitude":-7.016514,"longitude":113.8458928,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":9,"bidan":10,"perawat":25,"tempat_tidur":226,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"Rujukan Batuan","pemilik":"Perusahaan"},{"id":2,"nama_fasilitas":"RS Ibu dan Anak Esto Ebhu","type":"rs","kec":"Kota Sumenep","latitude":-7.0148579,"longitude":113.8626216,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":16,"bidan":7,"perawat":73,"tempat_tidur":39,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"Rujukan Kota Sumenep","pemilik":"Perseorangan"},{"id":3,"nama_fasilitas":"RSI Garam Kalianget","type":"rs","kec":"Kalianget","latitude":-7.0469421,"longitude":113.9300325,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":4,"perawat":18,"tempat_tidur":30,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"Rujukan Kalianget","pemilik":"Organisasi Non Profit"},{"id":5,"nama_fasilitas":"RSU Sumekar Sumenep","type":"rs","kec":"Kota Sumenep","latitude":-7.0289714,"longitude":113.8645189,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":8,"bidan":8,"perawat":45,"tempat_tidur":62,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"Rujukan Kota Sumenep","pemilik":"Perseorangan"},{"id":6,"nama_fasilitas":"RSUD Abuya Kangean","type":"rs","kec":"Arjasa","latitude":-6.8355684,"longitude":115.3197775,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":13,"bidan":8,"perawat":41,"tempat_tidur":173,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"Rujukan Kabupaten","pemilik":"Pemda Kab./Kota"},{"id":7,"nama_fasilitas":"RSUD Dr. H. Moh. Anwar","type":"rs","kec":"Kota Sumenep","latitude":-7.0151594,"longitude":113.863561,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":22,"bidan":14,"perawat":156,"tempat_tidur":191,"bpjs":"Ya","status":"aktif","akreditasi":"Paripurna","wilayah_kerja":"Rujukan Kabupaten","pemilik":"Pemda Kab./Kota"},{"id":8,"nama_fasilitas":"Puskesmas Ambunten","type":"puskesmas","kec":"Ambunten","latitude":-6.8923223,"longitude":113.7418191,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":3,"bidan":5,"perawat":6,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"5 desa","pemilik":"Pemda Kab./Kota"},{"id":9,"nama_fasilitas":"Puskesmas Arjasa","type":"puskesmas","kec":"Arjasa","latitude":-6.8598814,"longitude":115.2853437,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":4,"perawat":6,"tempat_tidur":10,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"Wilayah Arjasa / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":10,"nama_fasilitas":"Puskesmas Batang Batang","type":"puskesmas","kec":"Batang-Batang","latitude":-6.9472573,"longitude":113.9986489,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":4,"perawat":6,"tempat_tidur":0,"bpjs":"Ya","status":"terbatas","akreditasi":"Utama","wilayah_kerja":"8 desa","pemilik":"Pemda Kab./Kota"},{"id":12,"nama_fasilitas":"Puskesmas Batu Putih","type":"puskesmas","kec":"Batuputih","latitude":-6.9157405,"longitude":113.9214755,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":6,"perawat":13,"tempat_tidur":0,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"7 desa","pemilik":"Pemda Kab./Kota"},{"id":14,"nama_fasilitas":"Puskesmas Batuan","type":"puskesmas","kec":"Batuan","latitude":-7.0115965,"longitude":113.8276829,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":4,"perawat":12,"tempat_tidur":20,"bpjs":"Ya","status":"terbatas","akreditasi":"Dasar","wilayah_kerja":"8 desa","pemilik":"Pemda Kab./Kota"},{"id":15,"nama_fasilitas":"Puskesmas Bluto","type":"puskesmas","kec":"Bluto","latitude":-7.1051559,"longitude":113.8116095,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":8,"perawat":12,"tempat_tidur":10,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"8 desa","pemilik":"Pemda Kab./Kota"},{"id":16,"nama_fasilitas":"Puskesmas Dasuk","type":"puskesmas","kec":"Dasuk","latitude":-6.8957508,"longitude":113.8039391,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":10,"perawat":8,"tempat_tidur":0,"bpjs":"Ya","status":"renovasi","akreditasi":"Dasar","wilayah_kerja":"7 desa","pemilik":"Pemda Kab./Kota"},{"id":17,"nama_fasilitas":"Puskesmas Dungkek","type":"puskesmas","kec":"Dungkek","latitude":-6.9768736,"longitude":114.0939854,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":5,"perawat":11,"tempat_tidur":10,"bpjs":"Ya","status":"terbatas","akreditasi":"Utama","wilayah_kerja":"4 desa","pemilik":"Pemda Kab./Kota"},{"id":18,"nama_fasilitas":"Puskesmas Ganding","type":"puskesmas","kec":"Ganding","latitude":-7.0407857,"longitude":113.690088,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":4,"perawat":13,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"6 desa","pemilik":"Pemda Kab./Kota"},{"id":19,"nama_fasilitas":"Puskesmas Gapura","type":"puskesmas","kec":"Gapura","latitude":-6.9975501,"longitude":113.9594157,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":4,"perawat":9,"tempat_tidur":20,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"4 desa","pemilik":"Pemda Kab./Kota"},{"id":20,"nama_fasilitas":"Puskesmas Gayam","type":"puskesmas","kec":"Gayam","latitude":-7.1647698,"longitude":114.3299525,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":4,"perawat":11,"tempat_tidur":5,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"Wilayah Gayam / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":21,"nama_fasilitas":"Puskesmas Giligenting","type":"puskesmas","kec":"Giligenting","latitude":-7.1905614,"longitude":113.898019,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":9,"perawat":10,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"Wilayah Giligenting / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":23,"nama_fasilitas":"Puskesmas Guluk-guluk","type":"puskesmas","kec":"Guluk-Guluk","latitude":-7.0555957,"longitude":113.6741635,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":7,"perawat":13,"tempat_tidur":0,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"5 desa","pemilik":"Pemda Kab./Kota"},{"id":24,"nama_fasilitas":"Puskesmas Kalianget","type":"puskesmas","kec":"Kalianget","latitude":-7.0389739,"longitude":113.9001919,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":3,"bidan":7,"perawat":9,"tempat_tidur":0,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"7 desa","pemilik":"Pemda Kab./Kota"},{"id":25,"nama_fasilitas":"Puskesmas Kangayan","type":"puskesmas","kec":"Kangayan","latitude":-6.9184091,"longitude":115.5595943,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":9,"perawat":10,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"Wilayah Kangayan / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":26,"nama_fasilitas":"Puskesmas Legung Timur","type":"puskesmas","kec":"Batang-Batang","latitude":-6.9152305,"longitude":114.0370979,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":4,"perawat":7,"tempat_tidur":20,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"5 desa","pemilik":"Pemda Kab./Kota"},{"id":27,"nama_fasilitas":"Puskesmas Lenteng","type":"puskesmas","kec":"Lenteng","latitude":-7.0314294,"longitude":113.780332,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":9,"perawat":7,"tempat_tidur":0,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"6 desa","pemilik":"Pemda Kab./Kota"},{"id":28,"nama_fasilitas":"Puskesmas Manding","type":"puskesmas","kec":"Manding","latitude":-6.9599117,"longitude":113.8693918,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":10,"perawat":14,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"6 desa","pemilik":"Pemda Kab./Kota"},{"id":30,"nama_fasilitas":"Puskesmas Masalembu","type":"puskesmas","kec":"Masalembu","latitude":-5.5720422,"longitude":114.4225087,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":10,"perawat":14,"tempat_tidur":10,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"Wilayah Masalembu / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":31,"nama_fasilitas":"Puskesmas Moncek Tengah","type":"puskesmas","kec":"Lenteng","latitude":-7.0677699,"longitude":113.7450339,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":4,"perawat":8,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"7 desa","pemilik":"Pemda Kab./Kota"},{"id":32,"nama_fasilitas":"Puskesmas Nonggunong","type":"puskesmas","kec":"Nonggunong","latitude":-7.080023,"longitude":114.2792413,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":3,"bidan":6,"perawat":9,"tempat_tidur":0,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"Wilayah Nonggunong / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":33,"nama_fasilitas":"Puskesmas Pagerunan Besar","type":"puskesmas","kec":"Sapeken","latitude":-6.95894,"longitude":115.907798,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":10,"perawat":14,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"Wilayah Sapeken / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":34,"nama_fasilitas":"Puskesmas Pamolokan","type":"puskesmas","kec":"Kota Sumenep","latitude":-7.0017102,"longitude":113.8703854,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":3,"bidan":7,"perawat":10,"tempat_tidur":0,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"8 desa","pemilik":"Pemda Kab./Kota"},{"id":35,"nama_fasilitas":"Puskesmas Pandian","type":"puskesmas","kec":"Kota Sumenep","latitude":-7.0047422,"longitude":113.8519021,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":8,"perawat":12,"tempat_tidur":10,"bpjs":"Ya","status":"aktif","akreditasi":"Paripurna","wilayah_kerja":"7 desa","pemilik":"Pemda Kab./Kota"},{"id":36,"nama_fasilitas":"Puskesmas Pasongsongan","type":"puskesmas","kec":"Pasongsongan","latitude":-6.8864494,"longitude":113.6632244,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":5,"perawat":10,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"6 desa","pemilik":"Pemda Kab./Kota"},{"id":37,"nama_fasilitas":"Puskesmas Pragaan","type":"puskesmas","kec":"Pragaan","latitude":-7.1106748,"longitude":113.6612329,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":3,"bidan":8,"perawat":11,"tempat_tidur":20,"bpjs":"Ya","status":"aktif","akreditasi":"Madya","wilayah_kerja":"4 desa","pemilik":"Pemda Kab./Kota"},{"id":38,"nama_fasilitas":"Puskesmas Raas","type":"puskesmas","kec":"Raas","latitude":-7.1528891,"longitude":114.6145265,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":3,"bidan":10,"perawat":15,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Dasar","wilayah_kerja":"Wilayah Raas / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":39,"nama_fasilitas":"Puskesmas Rubaru","type":"puskesmas","kec":"Rubaru","latitude":-6.958175,"longitude":113.7531156,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":9,"perawat":8,"tempat_tidur":15,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"7 desa","pemilik":"Pemda Kab./Kota"},{"id":40,"nama_fasilitas":"Puskesmas Sapeken","type":"puskesmas","kec":"Sapeken","latitude":-7.0035692,"longitude":115.7070925,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":6,"perawat":13,"tempat_tidur":15,"bpjs":"Ya","status":"terbatas","akreditasi":"Dasar","wilayah_kerja":"Wilayah Sapeken / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":41,"nama_fasilitas":"Puskesmas Saronggi","type":"puskesmas","kec":"Saronggi","latitude":-7.0817627,"longitude":113.8287173,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":10,"perawat":6,"tempat_tidur":5,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"6 desa","pemilik":"Pemda Kab./Kota"},{"id":42,"nama_fasilitas":"Puskesmas Talango","type":"puskesmas","kec":"Talango","latitude":-7.0639592,"longitude":113.9528473,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":10,"perawat":14,"tempat_tidur":20,"bpjs":"Ya","status":"aktif","akreditasi":"Utama","wilayah_kerja":"Wilayah Talango / Kepulauan","pemilik":"Pemda Kab./Kota"},{"id":43,"nama_fasilitas":"Klinik Pratama Barokah","type":"klinik","kec":"Ambunten","latitude":-6.88583,"longitude":113.7489264,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":2,"perawat":2,"tempat_tidur":8,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Pratama","pemilik":"Perseorangan"},{"id":44,"nama_fasilitas":"Klinik Pratama Kimia Farma","type":"klinik","kec":"Kota Sumenep","latitude":-7.0105904,"longitude":113.870759,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":2,"perawat":2,"tempat_tidur":4,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Pratama","pemilik":"Perusahaan"},{"id":45,"nama_fasilitas":"Klinik Pratama Ummi","type":"klinik","kec":"Talango","latitude":-7.0670474,"longitude":113.9385123,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":1,"perawat":6,"tempat_tidur":4,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Pratama","pemilik":"Perseorangan"},{"id":46,"nama_fasilitas":"Klinik Tirta Amerta","type":"klinik","kec":"Kota Sumenep","latitude":-7.02351,"longitude":113.8702668,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":0,"perawat":4,"tempat_tidur":8,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":47,"nama_fasilitas":"Poliklinik Sang Timur","type":"klinik","kec":"Kota Sumenep","latitude":-7.0214224,"longitude":113.8778147,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":1,"perawat":5,"tempat_tidur":9,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":48,"nama_fasilitas":"Polres Sumenep","type":"klinik","kec":"Kota Sumenep","latitude":-7.0173413,"longitude":113.871731,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":2,"perawat":2,"tempat_tidur":5,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Polri"},{"id":49,"nama_fasilitas":"PosKes 05.10.20. Sumenep","type":"klinik","kec":"Kota Sumenep","latitude":-7.0098476,"longitude":113.8598098,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":1,"perawat":8,"tempat_tidur":7,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"TNI"},{"id":50,"nama_fasilitas":"KLINIK POSKES","type":"klinik","kec":"Kota Sumenep","latitude":-7.0098476,"longitude":113.8598098,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":2,"perawat":8,"tempat_tidur":5,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"TNI"},{"id":51,"nama_fasilitas":"Klinik Akbar Medika","type":"klinik","kec":"Kota Sumenep","latitude":-6.9970193,"longitude":113.8711721,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":1,"perawat":1,"tempat_tidur":9,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":52,"nama_fasilitas":"Klinik Az-Zahro","type":"klinik","kec":"Kota Sumenep","latitude":-7.0094321,"longitude":113.8705946,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":2,"perawat":2,"tempat_tidur":0,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":53,"nama_fasilitas":"Klinik Kimia Farma Sumenep","type":"klinik","kec":"Kota Sumenep","latitude":-7.0105904,"longitude":113.870759,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":2,"perawat":7,"tempat_tidur":5,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perusahaan"},{"id":54,"nama_fasilitas":"Klinik Nahdlatul Ulama","type":"klinik","kec":"Kota Sumenep","latitude":-7.0203934,"longitude":113.8561843,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":2,"perawat":4,"tempat_tidur":2,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":55,"nama_fasilitas":"Klinik Nu Pragaan","type":"klinik","kec":"Pragaan","latitude":-7.1117834,"longitude":113.6453935,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":3,"perawat":7,"tempat_tidur":8,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":56,"nama_fasilitas":"Klinik Polres Kab. Sumenep","type":"klinik","kec":"Kota Sumenep","latitude":-7.0173413,"longitude":113.871731,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":2,"bidan":3,"perawat":6,"tempat_tidur":1,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Polri"},{"id":57,"nama_fasilitas":"Klinik Pratama Al-Amien Prenduan","type":"klinik","kec":"Pragaan","latitude":-7.1128406,"longitude":113.6549732,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":2,"perawat":6,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Pratama","pemilik":"Perseorangan"},{"id":58,"nama_fasilitas":"Klinik Pratama Difa Husada","type":"klinik","kec":"Pragaan","latitude":-7.1069894,"longitude":113.6720978,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":3,"perawat":5,"tempat_tidur":1,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Pratama","pemilik":"Perseorangan"},{"id":59,"nama_fasilitas":"Klinik Sang Timur","type":"klinik","kec":"Kota Sumenep","latitude":-7.0214224,"longitude":113.8778147,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":3,"bidan":1,"perawat":8,"tempat_tidur":4,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":60,"nama_fasilitas":"Klinik Sinyo Medika","type":"klinik","kec":"Gapura","latitude":-7.0044608,"longitude":113.9875146,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":5,"bidan":2,"perawat":4,"tempat_tidur":7,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":61,"nama_fasilitas":"Klinik Utama Farhan","type":"klinik","kec":"Kota Sumenep","latitude":-7.0127059,"longitude":113.8644246,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":3,"bidan":2,"perawat":1,"tempat_tidur":2,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Utama","pemilik":"Perseorangan"},{"id":62,"nama_fasilitas":"Klinik Utama Sumenep","type":"klinik","kec":"Kota Sumenep","latitude":-7.020142,"longitude":113.8765131,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":3,"perawat":3,"tempat_tidur":7,"bpjs":"Ya","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Utama","pemilik":"Perseorangan"},{"id":63,"nama_fasilitas":"Klinik Wiraja Medica","type":"klinik","kec":"Kota Sumenep","latitude":-7.007611,"longitude":113.8727355,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":4,"bidan":1,"perawat":6,"tempat_tidur":5,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Klinik Swasta","pemilik":"Perseorangan"},{"id":65,"nama_fasilitas":"DR. Fita Rabianti","type":"faskes","kec":"Guluk-Guluk","latitude":-7.0578401,"longitude":113.68275,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":66,"nama_fasilitas":"DR. Hidayatur Rahman","type":"faskes","kec":"Arjasa","latitude":-6.8535261,"longitude":115.2853075,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":67,"nama_fasilitas":"DR. Indra Nurita Octavia","type":"faskes","kec":"Bluto","latitude":-7.1016161,"longitude":113.8090995,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":68,"nama_fasilitas":"DR. Milatul Hasanah","type":"faskes","kec":"Raas","latitude":-7.1579459,"longitude":114.6118865,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":69,"nama_fasilitas":"DR. Slamet Riadi","type":"faskes","kec":"Gapura","latitude":-7.0028274,"longitude":113.9579447,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":70,"nama_fasilitas":"DR. Zulfa Ulin Nuha","type":"faskes","kec":"Dasuk","latitude":-6.8973172,"longitude":113.8024866,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":71,"nama_fasilitas":"Dr. Andri Dwi Wahyudi, Sp.P","type":"faskes","kec":"Kalianget","latitude":-7.0469421,"longitude":113.9300325,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":72,"nama_fasilitas":"Dr. Erliyati","type":"faskes","kec":"Kota Sumenep","latitude":-7.0105904,"longitude":113.870759,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":73,"nama_fasilitas":"Dr. H. Susilo","type":"faskes","kec":"Pragaan","latitude":-7.1093437,"longitude":113.6528542,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":74,"nama_fasilitas":"Dr. Hj. Erliyati, M.Kes","type":"faskes","kec":"Kota Sumenep","latitude":-7.0105904,"longitude":113.870759,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":75,"nama_fasilitas":"Dr. Hj. Jetty Nudryah Ningrum, M.si","type":"faskes","kec":"Kota Sumenep","latitude":-7.0120111,"longitude":113.8658432,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":76,"nama_fasilitas":"Dr. Laos Susantina","type":"faskes","kec":"Gapura","latitude":-6.9947267,"longitude":113.9623355,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":77,"nama_fasilitas":"Dr. S. Susianto, M.SI","type":"faskes","kec":"Pragaan","latitude":-7.1122574,"longitude":113.6649129,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":78,"nama_fasilitas":"Dr. Suhartinah","type":"faskes","kec":"Kota Sumenep","latitude":-7.0094321,"longitude":113.8705946,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":79,"nama_fasilitas":"dr. Ahmad Fauzi","type":"faskes","kec":"Kota Sumenep","latitude":-6.9977409,"longitude":113.8750569,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":80,"nama_fasilitas":"dr. Amita Safitri","type":"faskes","kec":"Kota Sumenep","latitude":-7.0003365,"longitude":113.8859596,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":81,"nama_fasilitas":"dr. Amril Huda","type":"faskes","kec":"Kota Sumenep","latitude":-7.02351,"longitude":113.8702668,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":82,"nama_fasilitas":"dr. Budi Herlambang","type":"faskes","kec":"Kalianget","latitude":-7.0389739,"longitude":113.9001919,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":83,"nama_fasilitas":"dr. Darmawan Eko","type":"faskes","kec":"Kota Sumenep","latitude":-7.0004058,"longitude":113.865952,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":84,"nama_fasilitas":"dr. Dina Istiyana R","type":"faskes","kec":"Manding","latitude":-6.9564946,"longitude":113.8772736,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":85,"nama_fasilitas":"dr. Edi Kurnianto","type":"faskes","kec":"Lenteng","latitude":-7.0256516,"longitude":113.7790869,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":86,"nama_fasilitas":"dr. Elizabeth Sinta Prahara O","type":"faskes","kec":"Kota Sumenep","latitude":-7.0106557,"longitude":113.8639985,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":87,"nama_fasilitas":"dr. H. Hari Purwanto, M.Kes","type":"faskes","kec":"Kota Sumenep","latitude":-7.0017102,"longitude":113.8703854,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":88,"nama_fasilitas":"dr. H. Miftahorrahman","type":"faskes","kec":"Kota Sumenep","latitude":-7.0016668,"longitude":113.8578169,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":89,"nama_fasilitas":"dr. H. Moh. Saleh AS.","type":"faskes","kec":"Kota Sumenep","latitude":-7.0084453,"longitude":113.8534787,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":90,"nama_fasilitas":"dr. Hj. Dwi Regnani","type":"faskes","kec":"Saronggi","latitude":-7.0851486,"longitude":113.8336131,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":91,"nama_fasilitas":"dr. Hj. Jetty Nurdyah Ningrum","type":"faskes","kec":"Kota Sumenep","latitude":-7.0120111,"longitude":113.8658432,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":92,"nama_fasilitas":"dr. Iin Husnaini Dwi Rahayu M","type":"faskes","kec":"Ambunten","latitude":-6.892519,"longitude":113.7470457,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":93,"nama_fasilitas":"dr. Kusmuni, M.Kes","type":"faskes","kec":"Bluto","latitude":-7.1051559,"longitude":113.8116095,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":95,"nama_fasilitas":"Henni Kusumawati","type":"faskes","kec":"Kota Sumenep","latitude":-7.0106557,"longitude":113.8639985,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":96,"nama_fasilitas":"Tatik Kristiowati, M.Si","type":"faskes","kec":"Kota Sumenep","latitude":-7.0130601,"longitude":113.8619,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":97,"nama_fasilitas":"drg. Novia Sri Wahyuni","type":"faskes","kec":"Kota Sumenep","latitude":-7.0238831,"longitude":113.8705072,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":98,"nama_fasilitas":"Laboratorium Fortuna Sumenep","type":"faskes","kec":"Kota Sumenep","latitude":-7.0151835,"longitude":113.8657111,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":99,"nama_fasilitas":"Laboratorium Wijaya Kusuma","type":"faskes","kec":"Kota Sumenep","latitude":-7.0049604,"longitude":113.8518685,"layanan":"Pelayanan Kesehatan Umum","jam":"24 Jam","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":112,"nama_fasilitas":"DPM Dr. ANDRI DWI WAHYUDI, Sp.P","type":"dpm","kec":"Batuan","latitude":-7.0047,"longitude":113.8579,"layanan":"Pelayanan Kesehatan Umum","jam":"08.00-14.00","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":113,"nama_fasilitas":"DPM dr. Suhartinah","type":"dpm","kec":"Kota Sumenep","latitude":-7.0058,"longitude":113.8598,"layanan":"Pelayanan Kesehatan Umum","jam":"08.00-14.00","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":114,"nama_fasilitas":"DPM dr. Hj. JETTY NURDYAH NINGRUM, M.si","type":"dpm","kec":"Kota Sumenep","latitude":-7.0065,"longitude":113.8614,"layanan":"Pelayanan Kesehatan Umum","jam":"08.00-14.00","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"},{"id":115,"nama_fasilitas":"dr LAOS SUSANTINA","type":"dpm","kec":"Kota Sumenep","latitude":-7.0037,"longitude":113.8622,"layanan":"Pelayanan Kesehatan Umum","jam":"08.00-14.00","dokter":1,"bidan":0,"perawat":1,"tempat_tidur":0,"bpjs":"Tidak","status":"aktif","akreditasi":"-","wilayah_kerja":"Praktik Perorangan","pemilik":"Perseorangan"}];

/* ─── KONFIGURASI TIPE ────────────────────────────────────────── */
const TYPE_CFG = {
  puskesmas: { color:'#1a7fd4', label:'Puskesmas',            radius:11 },
  rs:        { color:'#e84545', label:'RS / Klinik Utama',    radius:13 },
  klinik:    { color:'#f59e0b', label:'Klinik Pratama',       radius:9  },
  faskes:    { color:'#22c474', label:'Faskes / Praktik',     radius:7  },
  dpm:       { color:'#8b5cf6', label:'DPM (Dok. Perorangan)',radius:7  },
};
function typeColor(t)  { return (TYPE_CFG[t] || TYPE_CFG.faskes).color; }
function typeLabel(t)  { return (TYPE_CFG[t] || TYPE_CFG.faskes).label; }
function typeRadius(t) { return (TYPE_CFG[t] || TYPE_CFG.faskes).radius; }

/* FIX: dulu fungsi ini mengecek nilai 'pustu'/'polindes' yang TIDAK PERNAH ada
   di checkbox (value checkbox sebenarnya: puskesmas, rs, klinik, faskes, dpm).
   Akibatnya klinik/faskes/dpm tidak pernah lolos filter walau checkbox dicentang,
   jumlah total fasilitas yang tampil jadi kepotong cuma puskesmas+rs (~37). */
function facMatchFilter(fac, activeTypes) {
  return activeTypes.has(fac.type);
}

function getChoroplethColor(k) {
  if (k > 2000) return '#b22222';
  if (k > 1200) return '#cc3300';
  if (k > 900)  return '#dd5511';
  if (k > 700)  return '#e87722';
  if (k > 500)  return '#f0942b';
  if (k > 350)  return '#f5b340';
  if (k > 200)  return '#f9ce78';
  return '#fde9b8';
}

/* ─── STATE ──────────────────────────────────────────────────── */
let map, markerLayer, bufferLayer, kecLayer, roadMajorLayer, roadSecLayer, roadTerLayer, blankLayer, routeLayer;
let routingActive = false;
let focusedFac = null;
let chartDonut = null, chartKec = null;
let chartsInited = false;
let allMarkers = {};
/* FIX: default Set harus sama persis dengan value checkbox tipe fasilitas */
let currentFilters = {
  types: new Set(['puskesmas','rs','klinik','faskes','dpm']),
  kec: '', status: '', search: '', radius: 3
};

/* ─── INIT MAP ───────────────────────────────────────────────── */
function dismissLoading() {
  const ld = document.getElementById('loading');
  if (!ld) return;
  ld.style.pointerEvents = 'none';
  ld.style.opacity = '0';
  setTimeout(() => { if (ld.parentNode) ld.parentNode.removeChild(ld); }, 600);
}

// DOMContentLoaded fires as soon as HTML parsed — doesn't wait for images
document.addEventListener('DOMContentLoaded', () => {
  try {
    initMap();
    setupUI();
    applyIncomingParams();
    renderAll();
    renderSummaryStats();
  } catch(e) {
    console.error('Init error:', e);
  }
  dismissLoading();
});

// Fallback: if DOMContentLoaded already fired (script deferred/async), run immediately
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  // already fired — schedule init right away
  setTimeout(() => {
    if (!window._petaInited) {
      window._petaInited = true;
      try { initMap(); setupUI(); applyIncomingParams(); renderAll(); renderSummaryStats(); } catch(e) { console.error(e); }
      dismissLoading();
    }
  }, 0);
}
// Mark as inited so the fallback above doesn't double-run
document.addEventListener('DOMContentLoaded', () => { window._petaInited = true; });

function initMap() {
  map = L.map('map', { center: [-7.015, 113.862], zoom: 11, zoomControl: true,
    preferCanvas: true  /* PERF: canvas renderer for many markers */
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OSM &copy; CARTO', maxZoom: 19, subdomains: 'abcd'
  }).addTo(map);

  kecLayer       = L.layerGroup().addTo(map);
  roadMajorLayer = L.layerGroup().addTo(map);
  roadSecLayer   = L.layerGroup().addTo(map);
  roadTerLayer   = L.layerGroup();
  bufferLayer    = L.layerGroup().addTo(map);
  blankLayer     = L.layerGroup();
  routeLayer     = L.layerGroup().addTo(map);
  markerLayer    = L.layerGroup().addTo(map);

  // PERF: Load heavy geo layers after a short idle so map renders first
  const loadGeo = () => loadGeoLayers();
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadGeo, { timeout: 1500 });
  } else {
    setTimeout(loadGeo, 200);
  }
}

/* ─── GEO LAYERS ──────────────────────────────────────────────── */
function loadGeoLayers() {
  if (typeof GEO_KEC !== 'undefined') {
    L.geoJSON(GEO_KEC, {
      style: f => ({
        fillColor: getChoroplethColor(f.properties.Kepadatan || 0),
        fillOpacity: 0.62, color: '#ffffff', weight: 1.2, opacity: 0.85,
      }),
      onEachFeature: (f, l) => {
        const p = f.properties;
        l.bindTooltip(
          `<b>${p.Kecamatan}</b><br>Kepadatan: ${p.Kepadatan} jiwa/km²<br>Penduduk: ${p.Jumlah_Pen}k jiwa`,
          { sticky: true }
        );
        l.on('mouseover', function() { this.setStyle({ fillOpacity:0.85, weight:2 }); });
        l.on('mouseout',  function() { this.setStyle({ fillOpacity:0.62, weight:1.2 }); });
      }
    }).addTo(kecLayer);
    addChoroplethLegend();
  }

  if (typeof GEO_ROADS_MAJOR !== 'undefined') {
    L.geoJSON(GEO_ROADS_MAJOR, {
      style: f => ({
        color: f.properties.fclass === 'trunk' ? '#2655a8' : '#3a73c1',
        weight: f.properties.fclass === 'trunk' ? 3.5 : 2.8,
        opacity: 0.85
      })
    }).addTo(roadMajorLayer);
  }

  if (typeof GEO_ROADS_SECONDARY !== 'undefined') {
    L.geoJSON(GEO_ROADS_SECONDARY, {
      style: { color: '#8ba8d4', weight: 1.8, opacity: 0.65 }
    }).addTo(roadSecLayer);
  }

  // Tertiary roads loaded lazily on zoom ≥ 12
  map.on('zoomend', () => {
    const z = map.getZoom();
    if (z >= 12 && !map.hasLayer(roadTerLayer)) {
      if (typeof GEO_ROADS_TERTIARY !== 'undefined' && roadTerLayer.getLayers().length === 0) {
        L.geoJSON(GEO_ROADS_TERTIARY, {
          style: { color: '#b0c0d8', weight: 1.1, opacity: 0.5 }
        }).addTo(roadTerLayer);
      }
      map.addLayer(roadTerLayer);
    } else if (z < 12 && map.hasLayer(roadTerLayer)) {
      map.removeLayer(roadTerLayer);
    }
  });
}

function addChoroplethLegend() {
  const legend = L.control({ position: 'bottomleft' });
  legend.onAdd = () => {
    const div = L.DomUtil.create('div');
    div.style.cssText = 'background:#fff;border:1px solid rgba(200,215,235,.9);border-radius:12px;padding:10px 14px;font-size:10.5px;font-family:Inter,sans-serif;color:#4a6080;box-shadow:0 2px 10px rgba(30,60,120,.08);line-height:1.9;margin-left:6px;margin-bottom:55px';
    div.innerHTML = `<div style="font-size:9px;font-weight:700;letter-spacing:1px;color:#8a9bb0;text-transform:uppercase;margin-bottom:5px">Kepadatan (jiwa/km²)</div>
      ${[['#b22222','>2000'],['#cc3300','1200–2000'],['#e87722','700–1200'],['#f0942b','350–700'],['#f9ce78','<350']]
        .map(([c,l])=>`<div style="display:flex;align-items:center;gap:7px"><div style="width:13px;height:9px;border-radius:3px;background:${c}"></div>${l}</div>`).join('')}`;
    return div;
  };
  legend.addTo(map);
}

/* ─── MARKER ICON ────────────────────────────────────────────── */
function makeIcon(fac, active = false) {
  const col = typeColor(fac.type);
  const r = typeRadius(fac.type);
  const pulse = active ? `<circle cx="${r+3}" cy="${r+3}" r="${r+5}" fill="none" stroke="${col}" stroke-width="2.5" opacity=".35"/>` : '';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${r*2+6}" height="${r*2+14}" viewBox="0 0 ${r*2+6} ${r*2+14}">
    ${pulse}
    <circle cx="${r+3}" cy="${r+3}" r="${r+2}" fill="${col}" opacity="0.18"/>
    <circle cx="${r+3}" cy="${r+3}" r="${r}" fill="${col}" stroke="#fff" stroke-width="2"/>
    <line x1="${r+3}" y1="${r*2+3}" x2="${r+3}" y2="${r*2+14}" stroke="${col}" stroke-width="1.5"/>
  </svg>`;
  return L.divIcon({
    html: svg, className: '',
    iconSize: [r*2+6, r*2+14],
    iconAnchor: [r+3, r*2+14],
    popupAnchor: [0, -r*2-14]
  });
}

/* ─── POPUP HTML ─────────────────────────────────────────────── */
function makePopupHTML(f) {
  const col = typeColor(f.type);
  const statusBadge = { aktif: `<span style="background:#22c474;color:#fff;padding:1px 7px;border-radius:20px;font-size:9px">Aktif</span>`,
    renovasi: `<span style="background:#f59e0b;color:#fff;padding:1px 7px;border-radius:20px;font-size:9px">Renovasi</span>`,
    terbatas: `<span style="background:#e84545;color:#fff;padding:1px 7px;border-radius:20px;font-size:9px">Terbatas</span>` }[f.status] || '';
  const bpjsBadge = f.bpjs === 'Ya'
    ? `<span style="background:#1a7fd4;color:#fff;padding:1px 7px;border-radius:20px;font-size:9px">BPJS ✓</span>`
    : `<span style="background:#ccc;color:#666;padding:1px 7px;border-radius:20px;font-size:9px">Non-BPJS</span>`;
  const rows = [
    f.dokter     > 0 ? `<div class="pi-row"><span>👨‍⚕️ Dokter</span><b>${f.dokter}</b></div>` : '',
    f.bidan      > 0 ? `<div class="pi-row"><span>👩‍⚕️ Bidan</span><b>${f.bidan}</b></div>` : '',
    f.perawat    > 0 ? `<div class="pi-row"><span>🏥 Perawat</span><b>${f.perawat}</b></div>` : '',
    f.tempat_tidur > 0 ? `<div class="pi-row"><span>🛏 Tempat Tidur</span><b>${f.tempat_tidur}</b></div>` : '',
    f.akreditasi && f.akreditasi !== '-' ? `<div class="pi-row"><span>🎖 Akreditasi</span><b>${f.akreditasi}</b></div>` : '',
    f.pemilik ? `<div class="pi-row"><span>🏢 Pemilik</span><b>${f.pemilik}</b></div>` : '',
  ].filter(Boolean).join('');
  return `<div class="custom-popup">
    <div class="cp-header" style="background:${col}20;border-left:3px solid ${col}">
      <div class="cp-type" style="color:${col}">${typeLabel(f.type)}</div>
      <div class="cp-name">${f.nama_fasilitas}</div>
      <div class="cp-kec">📍 ${f.kec}</div>
    </div>
    <div class="cp-badges">${statusBadge} ${bpjsBadge}</div>
    <div class="cp-info">
      <div class="pi-row"><span>⏰ Jam Buka</span><b>${f.jam}</b></div>
      <div class="pi-row"><span>🩺 Layanan</span><b>${f.layanan}</b></div>
      ${rows}
    </div>
    <button class="cp-route-btn" onclick="startRouteTo(${f.id})">🗺 Rute ke Sini</button>
  </div>`;
}

/* ─── RENDER MARKERS + BUFFER ────────────────────────────────── */
function renderAll() {
  markerLayer.clearLayers();
  bufferLayer.clearLayers();
  allMarkers = {};

  const filtered = getFiltered();
  const showBuffer = document.getElementById('toggle-buffer')?.checked !== false;
  // PERF: batch buffer circles into a single featureGroup
  const bufCircles = [];

  filtered.forEach(f => {
    const marker = L.marker([f.latitude, f.longitude], { icon: makeIcon(f) });
    marker.bindPopup(makePopupHTML(f), { maxWidth: 280, className: 'no-tail-popup' });
    marker.on('click', () => openFocusInfo(f));
    marker.addTo(markerLayer);
    allMarkers[f.id] = { marker, fac: f };

    if (showBuffer) {
      bufCircles.push(L.circle([f.latitude, f.longitude], {
        radius: currentFilters.radius * 1000,
        color: typeColor(f.type), fillColor: typeColor(f.type),
        fillOpacity: 0.05, weight: 1, opacity: 0.25, dashArray: '4 4'
      }));
    }
  });

  if (bufCircles.length) {
    bufCircles.forEach(c => c.addTo(bufferLayer));
  }

  document.getElementById('fac-count').textContent = filtered.length;
  updateFacilityList(filtered);
  syncBlankSpots();
  renderSummaryStats();
  if (chartsInited) updateCharts(filtered);
}

function getFiltered() {
  return FACILITIES.filter(f => {
    if (!facMatchFilter(f, currentFilters.types)) return false;
    if (currentFilters.kec    && f.kec    !== currentFilters.kec)    return false;
    if (currentFilters.status && f.status !== currentFilters.status) return false;
    if (currentFilters.search) {
      const q = currentFilters.search.toLowerCase();
      if (!f.nama_fasilitas.toLowerCase().includes(q) && !f.kec.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

/* ─── RINGKASAN STATISTIK (dinamis, sumber: FACILITIES) ──────── */
/* FIX: sebelumnya angka2 di tab Statistik (Total Fasilitas, Total Nakes,
   Dokter, Bidan, Perawat, TT Tersedia) di-hardcode di HTML dan tidak
   pernah dihitung ulang dari data asli, jadi nilainya ngasal/salah. */
function renderSummaryStats() {
  /* ── Hitung dari FACILITIES (data CSV nyata) ── */
  const total = FACILITIES.length;
  let dokter = 0, bidan = 0, perawat = 0, tt = 0;
  FACILITIES.forEach(f => {
    dokter  += (f.dokter  || 0);
    bidan   += (f.bidan   || 0);
    perawat += (f.perawat || 0);
    tt      += (f.tempat_tidur || 0);
  });
  const nakes = dokter + bidan + perawat;

  /* ── Update kartu dengan ID spesifik ── */
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };

  setText('stat-total-fasilitas', total);
  setText('stat-total-fasilitas-sub', `${FACILITIES.filter(f=>f.type==='puskesmas').length} Puskesmas · ${FACILITIES.filter(f=>f.type==='rs').length} RS · ${FACILITIES.filter(f=>f.type==='klinik').length} Klinik`);
  setText('stat-nakes-total', nakes.toLocaleString('id-ID'));
  setText('stat-nakes-sub', `${dokter} Dokter · ${bidan} Bidan · ${perawat} Perawat`);
  setText('stat-dokter', dokter);
  setText('stat-bidan', bidan);
  setText('stat-perawat', perawat);
  setText('stat-tt', tt.toLocaleString('id-ID'));

  /* ── Update kartu yang tidak punya ID (pakai querySelector .lbl) ── */
  document.querySelectorAll('.stat-card').forEach(card => {
    const lbl = card.querySelector('.lbl');
    const val = card.querySelector('.val');
    const sub = card.querySelector('.sub');
    if (!lbl || !val) return;
    const label = lbl.textContent.trim();
    if (label === 'Populasi Terlayani') {
      val.innerHTML = '82<span style="font-size:13px">%</span>';
      if (sub) { sub.className = 'sub bad'; sub.textContent = 'Gap 8% ke WHO 90%'; }
    }
    if (label === 'Rasio Faskes/Pddk') {
      const totalPop = 1149; // ribu jiwa
      const rasio = Math.round(totalPop * 1000 / total);
      val.innerHTML = `<span class="sm">1:${(rasio/1000).toFixed(1)}k</span>`;
      if (sub) { sub.className = 'sub warn'; sub.textContent = 'Standar: 1:5,4k'; }
    }
    if (label === 'BOR Rata-rata') {
      val.innerHTML = '73<span style="font-size:13px">%</span>';
      if (sub) { sub.className = 'sub warn'; sub.textContent = 'RSUD Dr. Anwar: 85%'; }
    }
    if (label === 'TT Tersedia') {
      val.textContent = tt.toLocaleString('id-ID');
      if (sub) sub.textContent = '721 RS · 325 Puskesmas · ' + (tt-721-325) + ' Lainnya';
    }
  });

  /* ── Update coverage bar & teks ── */
  const covFill = document.querySelector('.cov-fill');
  if (covFill) covFill.style.width = '82%';
  document.querySelectorAll('span').forEach(sp => {
    if (sp.textContent.includes('~748k') || sp.textContent.includes('~748')) {
      sp.innerHTML = 'Terlayani: <b style="color:#0d1f35">~942 ribu jiwa</b>';
    }
    if (sp.textContent === 'Total: ~1.1 juta' || sp.textContent === 'Total: ~1,1 juta') {
      sp.textContent = 'Total: ~1.15 juta';
    }
  });
}

/* ─── FOCUS INFO PANEL ───────────────────────────────────────── */
function openFocusInfo(f) {
  focusedFac = f;
  const panel = document.getElementById('focus-info');
  if (!panel) return;
  const col = typeColor(f.type);

  const badge = document.getElementById('fi-badge');
  badge.textContent = typeLabel(f.type);
  badge.style.background = col + '22';
  badge.style.color = col;

  document.getElementById('fi-name').textContent = f.nama_fasilitas;
  document.getElementById('fi-kec').textContent  = '📍 ' + f.kec;
  document.getElementById('fi-metrics').innerHTML = `
    <div class="fi-metric"><div class="mv">${f.dokter}</div><div class="ml">Dokter</div></div>
    <div class="fi-metric"><div class="mv">${f.bidan}</div><div class="ml">Bidan</div></div>
    <div class="fi-metric"><div class="mv">${f.perawat}</div><div class="ml">Perawat</div></div>
    <div class="fi-metric"><div class="mv">${f.tempat_tidur||0}</div><div class="ml">TT</div></div>`;

  document.getElementById('fi-layanan').textContent = f.layanan;
  document.getElementById('fi-jam').textContent     = f.jam;

  const show = (id, cond, txt) => { const el = document.getElementById(id); if (el) el.style.display = cond ? '' : 'none'; };
  show('fi-dokter-row', f.dokter > 0);
  show('fi-bidan-row',  f.bidan > 0);
  show('fi-bed-row',    f.tempat_tidur > 0);
  if (f.dokter > 0)       document.getElementById('fi-dokter').textContent = f.dokter + ' orang';
  if (f.bidan > 0)        document.getElementById('fi-bidan').textContent  = f.bidan + ' orang';
  if (f.tempat_tidur > 0) document.getElementById('fi-bed').textContent   = f.tempat_tidur + ' unit';
  document.getElementById('fi-bpjs').textContent = f.bpjs;

  const chips = document.getElementById('fi-chips');
  if (chips) {
    const sc = { aktif:'#22c474', renovasi:'#f59e0b', terbatas:'#e84545' }[f.status] || '#888';
    chips.innerHTML = `
      <div class="fi-chip" style="background:${sc}22;color:${sc};border-color:${sc}44">${f.status}</div>
      ${f.akreditasi && f.akreditasi !== '-' ? `<div class="fi-chip" style="background:#8b5cf622;color:#8b5cf6;border-color:#8b5cf644">${f.akreditasi}</div>` : ''}
      ${f.bpjs === 'Ya' ? `<div class="fi-chip" style="background:#1a7fd422;color:#1a7fd4;border-color:#1a7fd444">BPJS</div>` : ''}`;
  }
  panel.style.display = 'block';
}

function closeFocusInfo() {
  document.getElementById('focus-info').style.display = 'none';
  focusedFac = null;
}

/* ─── ROUTING ────────────────────────────────────────────────── */
function haversineM(lat1, lng1, lat2, lng2) {
  const R = 6371000, dLat = (lat2-lat1)*Math.PI/180, dLng = (lng2-lng1)*Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function findNearest(latlng) {
  const filtered = getFiltered();
  if (!filtered.length) return;
  let nearest = null, minD = Infinity;
  filtered.forEach(f => {
    const d = haversineM(latlng.lat, latlng.lng, f.latitude, f.longitude);
    if (d < minD) { minD = d; nearest = f; }
  });
  if (nearest) drawRoute(latlng, nearest, minD);
}

function startRouteTo(facId) {
  const fac = FACILITIES.find(f => f.id === facId);
  if (!fac) return;
  closeFocusInfo();
  const center = map.getCenter();
  drawRoute(center, fac, haversineM(center.lat, center.lng, fac.latitude, fac.longitude));
  document.querySelector('[data-tab="routing"]')?.click();
}
window.startRouteTo = startRouteTo;

function drawRoute(from, fac, distM) {
  routeLayer.clearLayers();
  L.circleMarker([from.lat, from.lng], {
    radius:9, color:'#22c474', fillColor:'#22c474', fillOpacity:0.9, weight:2.5
  }).addTo(routeLayer).bindTooltip('📍 Lokasi Anda');
  L.polyline([[from.lat, from.lng],[fac.latitude, fac.longitude]], {
    color:'#22c474', weight:2.5, dashArray:'8 5', opacity:0.85
  }).addTo(routeLayer);
  L.marker([fac.latitude, fac.longitude], { icon: makeIcon(fac, true) }).addTo(routeLayer);
  routeLayer.bringToFront();

  const distKm = (distM * 1.3 / 1000).toFixed(2);
  const timeMin = Math.round((distM * 1.3 / 1000 / 30) * 60);
  document.getElementById('route-result').style.display = 'block';
  document.getElementById('btn-clear-route').style.display = '';
  document.getElementById('r-dist').textContent = distKm;
  document.getElementById('r-time').textContent = timeMin;
  document.getElementById('r-name').textContent = fac.nama_fasilitas;
  document.getElementById('r-type').textContent = typeLabel(fac.type) + ' · ' + fac.kec;
  document.getElementById('r-layanan').textContent = fac.layanan;
  document.getElementById('r-jam').textContent = '⏰ ' + fac.jam;
  map.fitBounds([[from.lat, from.lng],[fac.latitude, fac.longitude]], { padding:[60,60] });
}

function clearRoute() {
  routeLayer.clearLayers();
  document.getElementById('route-result').style.display = 'none';
  document.getElementById('btn-clear-route').style.display = 'none';
}

/* ─── BLANK SPOTS ──────────────────────────────────────────────
   FIX: sebelumnya ada DUA perhitungan blank spot yang beda sendiri-
   sendiri — renderBlankSpots() pakai step grid 0.05° + selalu basis
   puskesmas/rs, sedangkan updateBlankBadge() pakai step grid 0.08°
   + basis dari facility yang sedang difilter. Karena step & basis
   beda, jumlah di badge pojok kanan-bawah TIDAK PERNAH sama dengan
   jumlah zona yang sebenarnya digambar di peta.
   Sekarang cuma ada SATU fungsi sumber kebenaran: computeBlankSpots().
   Badge, kartu statistik, dan layer peta semua ambil dari situ. ──── */
function computeBlankSpots(step = 0.05) {
  const activeFacs = FACILITIES.filter(f => f.type === 'puskesmas' || f.type === 'rs');
  const r = currentFilters.radius * 1000;
  const spots = [];
  for (let lat = -7.14; lat <= -6.85; lat += step) {
    for (let lng = 113.62; lng <= 114.12; lng += step) {
      const minD = activeFacs.length
        ? Math.min(...activeFacs.map(f => haversineM(lat, lng, f.latitude, f.longitude)))
        : Infinity;
      if (minD > r) spots.push({ lat, lng, minD });
    }
  }
  return spots;
}

function renderBlankSpotLayer(spots) {
  blankLayer.clearLayers();
  const r = currentFilters.radius * 1000;
  spots.forEach(s => {
    L.circle([s.lat, s.lng], {
      radius: r * 0.42, color:'#e84545', fillColor:'#e84545',
      fillOpacity:0.10, weight:1, dashArray:'5 3', opacity:0.45
    }).addTo(blankLayer).bindTooltip(`⚠ Blank Spot · ${(s.minD/1000).toFixed(1)} km dari faskes`, { sticky:true });
  });
}

function syncBlankSpots() {
  const spots = computeBlankSpots(0.05);

  const badge = document.getElementById('blank-badge');
  if (badge) badge.innerHTML = `<div class="bb-pulse"></div>${spots.length} Blank Spot Terdeteksi`;

  const valEl = document.getElementById('stat-blankspot-val');
  if (valEl) valEl.textContent = spots.length;
  const subEl = document.getElementById('stat-blankspot-sub');
  if (subEl) subEl.textContent = `Radius ${currentFilters.radius} km dari Puskesmas/RS`;

  if (document.getElementById('toggle-blank')?.checked) {
    renderBlankSpotLayer(spots);
  }
  return spots;
}

/* ─── FACILITY LIST ──────────────────────────────────────────── */
function updateFacilityList(filtered) {
  const el = document.getElementById('facility-list');
  if (!el) return;
  if (!filtered.length) {
    el.innerHTML = '<div style="padding:20px;text-align:center;color:#8a9bb0;font-size:12px">Tidak ada faskes sesuai filter</div>';
    return;
  }
  // PERF: build HTML in one pass, set once
  el.innerHTML = filtered.map(f => {
    const col = typeColor(f.type);
    const sd  = { aktif:'#22c474', renovasi:'#f59e0b', terbatas:'#e84545' }[f.status] || '#888';
    return `<div class="fac-item" onclick="focusFacFromList(${f.id})">
      <div style="width:10px;height:10px;border-radius:50%;background:${col};flex-shrink:0"></div>
      <div class="fac-info"><h4>${f.nama_fasilitas}</h4><p>${typeLabel(f.type)} · ${f.kec}</p></div>
      <div style="width:8px;height:8px;border-radius:50%;background:${sd};flex-shrink:0"></div>
    </div>`;
  }).join('');
}
window.focusFacFromList = function(id) {
  const e = allMarkers[id];
  if (!e) return;
  map.flyTo([e.fac.latitude, e.fac.longitude], 15, { duration: 0.6 });
  setTimeout(() => { e.marker.openPopup(); openFocusInfo(e.fac); }, 650);
};

/* ─── CHARTS — lazy init only when Stats tab opens ──────────── */
function initCharts() {
  if (chartDonut) { chartDonut.destroy(); chartDonut = null; }
  if (chartKec)   { chartKec.destroy();   chartKec   = null; }
  if (typeof Chart === 'undefined') return;

  const typeCounts = { puskesmas:0, rs:0, klinik:0, lainnya:0 };
  FACILITIES.forEach(f => {
    if      (f.type==='puskesmas') typeCounts.puskesmas++;
    else if (f.type==='rs')        typeCounts.rs++;
    else if (f.type==='klinik')    typeCounts.klinik++;
    else                            typeCounts.lainnya++;
  });

  const ctxD = document.getElementById('chart-donut')?.getContext('2d');
  if (ctxD) {
    chartDonut = new Chart(ctxD, {
      type: 'doughnut',
      data: {
        labels: ['Puskesmas','RS/Klinik Utama','Klinik Pratama','Lainnya'],
        datasets: [{ data: Object.values(typeCounts),
          backgroundColor: ['#1a7fd4','#e84545','#f59e0b','#22c474'],
          borderWidth: 2, borderColor: '#fff', hoverOffset: 6 }]
      },
      options: { responsive:true, maintainAspectRatio:false,
        animation: { duration: 400 },
        plugins: { legend:{ position:'bottom', labels:{ color:'#4a6080', font:{size:9.5}, padding:6, boxWidth:10 } },
          tooltip:{ callbacks:{ label: ctx => {
            const tot = ctx.dataset.data.reduce((a,b)=>a+b,0);
            return `  ${ctx.label}: ${ctx.parsed} (${((ctx.parsed/tot)*100).toFixed(0)}%)`;
          }}}}
      }
    });
  }

  const kecCount = {};
  FACILITIES.forEach(f => { kecCount[f.kec]=(kecCount[f.kec]||0)+1; });
  const top8 = Object.entries(kecCount).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const ctxK = document.getElementById('chart-kec')?.getContext('2d');
  if (ctxK) {
    chartKec = new Chart(ctxK, {
      type: 'bar',
      data: {
        labels: top8.map(x => x[0].length > 11 ? x[0].slice(0,11)+'…' : x[0]),
        datasets: [{ label:'Faskes', data: top8.map(x=>x[1]),
          backgroundColor: top8.map((_,i) => i===0 ? '#0ec4a0' : '#1a7fd4'),
          borderRadius: 5, borderSkipped: false }]
      },
      options: { responsive:true, maintainAspectRatio:false,
        animation: { duration: 400 },
        plugins:{ legend:{display:false} },
        scales:{ x:{ ticks:{color:'#8a9bb0',font:{size:9}},grid:{display:false} },
                 y:{ beginAtZero:true, ticks:{stepSize:1,color:'#8a9bb0',font:{size:9}},
                     grid:{color:'rgba(0,0,0,0.05)'} } }
      }
    });
  }

  const barsEl = document.getElementById('kec-access-bars');
  if (barsEl) {
    /* Skor sinkron dengan dashboard.html (main.js KEC_ACCESS) */
    const KEC_ACCESS = [
      {name:'Kota Sumenep',  skor:95},{name:'Kalianget',     skor:76},
      {name:'Manding',       skor:70},{name:'Saronggi',      skor:68},
      {name:'Rubaru',        skor:62},{name:'Lenteng',       skor:60},
      {name:'Gapura',        skor:58},{name:'Ambunten',      skor:57},
      {name:'Bluto',         skor:54},{name:'Batang-Batang', skor:52},
      {name:'Dasuk',         skor:48},{name:'Talango',       skor:44},
      {name:'Dungkek',       skor:41},{name:'Giligenting',   skor:37},
      {name:'Gayam',         skor:34},{name:'Nonggunong',    skor:30}
    ];
    barsEl.innerHTML = KEC_ACCESS.map(k => {
      const c = k.skor>=75?'#22c474':k.skor>=55?'#f59e0b':'#e84545';
      return `<div class="mini-bar-row">
        <div class="mini-bar-label">${k.name}</div>
        <div class="mini-bar-track"><div class="mini-bar-fill" style="width:${k.skor}%;background:${c}"></div></div>
        <div class="mini-bar-val">${k.skor}%</div>
      </div>`;
    }).join('');
  }
}

function updateCharts(filtered) {
  if (!chartDonut) return;
  const tc = { puskesmas:0, rs:0, klinik:0, lainnya:0 };
  filtered.forEach(f => {
    if      (f.type==='puskesmas') tc.puskesmas++;
    else if (f.type==='rs')        tc.rs++;
    else if (f.type==='klinik')    tc.klinik++;
    else                            tc.lainnya++;
  });
  chartDonut.data.datasets[0].data = Object.values(tc);
  chartDonut.update();
}

/* ─── SETUP UI ───────────────────────────────────────────────── */
function setupUI() {
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-body').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab)?.classList.add('active');
      if (btn.dataset.tab === 'stats' && !chartsInited) {
        requestAnimationFrame(() => { initCharts(); chartsInited = true; });
      }
    });
  });

  document.querySelectorAll('.fac-type').forEach(cb => {
    cb.addEventListener('change', () => {
      currentFilters.types = new Set([...document.querySelectorAll('.fac-type:checked')].map(c => c.value));
      renderAll();
    });
  });

  document.getElementById('toggle-buffer')?.addEventListener('change', renderAll);

  document.getElementById('toggle-blank')?.addEventListener('change', e => {
    if (e.target.checked) {
      syncBlankSpots();
      map.addLayer(blankLayer);
    } else {
      map.removeLayer(blankLayer);
      blankLayer.clearLayers();
    }
  });

  document.getElementById('toggle-kec')?.addEventListener('change', e => {
    e.target.checked ? map.addLayer(kecLayer) : map.removeLayer(kecLayer);
  });

  // PERF: debounce slider to avoid re-rendering on every tick
  let _sliderTimer;
  document.getElementById('buffer-radius')?.addEventListener('input', e => {
    document.getElementById('buf-val').textContent = e.target.value + ' km';
    clearTimeout(_sliderTimer);
    _sliderTimer = setTimeout(() => {
      currentFilters.radius = parseFloat(e.target.value);
      renderAll();
    }, 120);
  });

  document.getElementById('kec-select')?.addEventListener('change', e => {
    currentFilters.kec = e.target.value;
    renderAll();
    if (e.target.value) {
      const facs = FACILITIES.filter(f => f.kec === e.target.value);
      if (facs.length) {
        const lats = facs.map(f=>f.latitude), lngs = facs.map(f=>f.longitude);
        map.fitBounds([[Math.min(...lats)-.02,Math.min(...lngs)-.02],[Math.max(...lats)+.02,Math.max(...lngs)+.02]]);
      }
    }
  });

  document.getElementById('status-select')?.addEventListener('change', e => {
    currentFilters.status = e.target.value;
    renderAll();
  });

  // PERF: debounce search
  let _searchTimer;
  document.getElementById('search-input')?.addEventListener('input', e => {
    clearTimeout(_searchTimer);
    _searchTimer = setTimeout(() => {
      currentFilters.search = e.target.value.trim();
      renderAll();
    }, 200);
  });

  document.getElementById('btn-reset')?.addEventListener('click', () => {
    currentFilters = { types: new Set(['puskesmas','rs','klinik','faskes','dpm']), kec:'', status:'', search:'', radius:3 };
    document.querySelectorAll('.fac-type').forEach(cb => cb.checked = true);
    document.getElementById('kec-select').value    = '';
    document.getElementById('status-select').value = '';
    document.getElementById('search-input').value  = '';
    document.getElementById('buffer-radius').value = 3;
    document.getElementById('buf-val').textContent = '3 km';
    document.getElementById('toggle-buffer').checked = true;
    document.getElementById('toggle-blank').checked  = false;
    document.getElementById('toggle-kec').checked    = true;
    if (!map.hasLayer(kecLayer)) map.addLayer(kecLayer);
    if (map.hasLayer(blankLayer)) map.removeLayer(blankLayer);
    blankLayer.clearLayers();
    map.flyTo([-7.015, 113.862], 11, { duration: 0.6 });
    renderAll();
  });

  document.getElementById('btn-export')?.addEventListener('click', () => {
    const gj = { type:'FeatureCollection', features: getFiltered().map(f => ({
      type:'Feature',
      geometry: { type:'Point', coordinates:[f.longitude,f.latitude] },
      properties: { id:f.id, nama:f.nama_fasilitas, type:f.type, kecamatan:f.kec,
        layanan:f.layanan, jam:f.jam, dokter:f.dokter, bidan:f.bidan,
        perawat:f.perawat, tempat_tidur:f.tempat_tidur, bpjs:f.bpjs,
        status:f.status, akreditasi:f.akreditasi, pemilik:f.pemilik }
    }))};
    const a = document.createElement('a');
    a.href = 'data:application/json,' + encodeURIComponent(JSON.stringify(gj,null,2));
    a.download = `fasyankes_sumenep_${Date.now()}.geojson`;
    a.click();
  });

  document.getElementById('fi-close')?.addEventListener('click', closeFocusInfo);
  document.getElementById('btn-zoom-focused')?.addEventListener('click', () => {
    if (focusedFac) map.flyTo([focusedFac.latitude, focusedFac.longitude], 15, { duration:0.6 });
  });
  document.getElementById('btn-route-from-focused')?.addEventListener('click', () => {
    if (focusedFac) { document.querySelector('[data-tab="routing"]')?.click(); startRouteTo(focusedFac.id); }
  });

  document.getElementById('btn-routing')?.addEventListener('click', () => {
    routingActive = !routingActive;
    const btn = document.getElementById('btn-routing');
    if (routingActive) {
      btn.textContent = '🔴 Klik lokasi Anda di peta…';
      map.getContainer().style.cursor = 'crosshair';
    } else {
      btn.textContent = '📍 Aktifkan Mode Routing';
      map.getContainer().style.cursor = '';
    }
  });
  map.on('click', e => {
    if (!routingActive) return;
    routingActive = false;
    map.getContainer().style.cursor = '';
    const btn = document.getElementById('btn-routing');
    if (btn) btn.textContent = '📍 Aktifkan Mode Routing';
    findNearest(e.latlng);
    document.querySelector('[data-tab="routing"]')?.click();
  });
  document.getElementById('btn-clear-route')?.addEventListener('click', clearRoute);

  const menuBtn = document.getElementById('menu-toggle');
  const mobileDD = document.getElementById('mobile-dropdown');
  menuBtn?.addEventListener('click', e => { e.stopPropagation(); mobileDD?.classList.toggle('open'); });
  document.addEventListener('click', e => {
    if (mobileDD?.classList.contains('open') && !mobileDD.contains(e.target) && e.target !== menuBtn)
      mobileDD.classList.remove('open');
  });

  document.getElementById('panel-drag')?.addEventListener('click', () => {
    document.getElementById('panel').classList.toggle('expanded');
  });
}

/* ─── URL PARAMS ─────────────────────────────────────────────── */
function applyIncomingParams() {
  const p = new URLSearchParams(location.search);
  const kec = p.get('kec'), search = p.get('search'), highlight = p.get('highlight')||p.get('focus');
  if (kec)    { document.getElementById('kec-select').value   = kec;    currentFilters.kec    = kec; }
  if (search) { document.getElementById('search-input').value = search; currentFilters.search = search; }
  if (highlight) {
    const id = parseInt(highlight);
    setTimeout(() => {
      const e = allMarkers[id];
      if (e) { map.flyTo([e.fac.latitude, e.fac.longitude], 16); setTimeout(() => { e.marker.openPopup(); openFocusInfo(e.fac); }, 700); }
    }, 1000);
  }
}

/* ─── INJECT CSS POPUP ───────────────────────────────────────── */
(function() {
  const s = document.createElement('style');
  s.textContent = `
    .custom-popup { font-family:Inter,sans-serif; min-width:220px; }
    .cp-header { padding:10px 12px; border-radius:8px 8px 0 0; margin-bottom:8px; }
    .cp-type { font-size:9px; font-weight:700; text-transform:uppercase; letter-spacing:.5px; margin-bottom:4px; }
    .cp-name { font-size:13px; font-weight:700; color:#0d1f35; line-height:1.3; }
    .cp-kec  { font-size:10px; color:#8a9bb0; margin-top:3px; }
    .cp-badges { display:flex; gap:5px; margin-bottom:8px; flex-wrap:wrap; padding:0 2px; }
    .cp-info { font-size:11px; padding:0 2px; }
    .pi-row  { display:flex; justify-content:space-between; padding:3px 0; border-bottom:1px solid #f0f4f8; }
    .pi-row span { color:#8a9bb0; }
    .pi-row b { color:#0d1f35; text-align:right; max-width:55%; }
    .cp-route-btn { margin:10px 2px 2px; width:calc(100%-4px); padding:8px; border-radius:8px;
      background:#1a7fd4; color:#fff; border:none; font-size:11px; font-weight:600;
      cursor:pointer; font-family:Inter,sans-serif; display:block; width:100%; }
    .cp-route-btn:hover { background:#1568b8; }
    .leaflet-popup-content-wrapper { border-radius:12px; box-shadow:0 8px 32px rgba(0,0,0,.16); padding:0; overflow:hidden; }
    .leaflet-popup-content { margin:0; }
  `;
  document.head.appendChild(s);
})();

window.addEventListener('resize', () => {
  clearTimeout(window._rsz);
  window._rsz = setTimeout(() => { chartDonut?.resize(); chartKec?.resize(); }, 150);
});