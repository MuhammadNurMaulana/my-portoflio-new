import React from "react";
import { Container } from "../Container";
import { BackArrow } from "../BackArrow";
import { Link } from "react-router-dom";

export const Html = () => {
  return (
    <Container>
      <BackArrow to="/blog" />

      <div className="mt-10 ml-2 font-semibold">
        <h4>Penulis : Muhammad Nur Maulana</h4>
        <h5>Tanggal : 13 September 2023</h5>

        <div className="p-3 lg:p-8 text-justify">
          <h2 className="text-3xl text-center font-bold">Pengertian HTML</h2>
          <p className="mt-2">Dalam pembahasan kali ini kita akan membahas apa sih sebenarnya HTML itu </p>
          <div className="flex flex-col gap-4">
            <p>
              HTML adalah bahasa markup yang digunakan untuk membuat dan menyusun halaman web. Bahasa markup adalah bahasa yang menggunakan simbol-simbol tertentu (tag) untuk memberikan instruksi kepada browser tentang bagaimana menampilkan
              konten web. HTML bukanlah bahasa pemrograman, karena tidak memiliki kemampuan untuk melakukan operasi logika atau perhitungan. HTML hanya berfungsi untuk mengatur struktur, format, dan tampilan halaman web
            </p>
            <p>
              HTML pertama kali dikembangkan oleh Tim Berners-Lee, seorang ilmuwan di lembaga penelitian CERN di Swiss pada tahun 1990. Tujuannya adalah untuk memudahkan para ilmuwan untuk berbagi dokumen melalui jaringan internet. HTML
              kemudian menjadi standar web resmi yang dikelola oleh World Wide Web Consortium (W3C), sebuah organisasi internasional yang bertanggung jawab untuk mengembangkan standar web
            </p>
            <p>
              HTML terdiri dari elemen-elemen yang dibungkus oleh tag-tag. Tag adalah simbol yang diapit oleh tanda kurung sudut (&#60; dan &#62;). Tag biasanya berpasangan, yaitu ada tag pembuka dan tag penutup. Misalnya, &#60p&#62; adalah
              tag pembuka untuk paragraf, dan &#60;/p&#62; adalah tag penutupnya. Di antara tag pembuka dan penutup, kita bisa menulis teks atau konten lainnya yang ingin ditampilkan di halaman web.
            </p>
            <p>
              Selain tag, HTML juga memiliki atribut yang digunakan untuk memberikan informasi tambahan tentang elemen. Atribut biasanya ditulis di dalam tag pembuka, setelah nama tag. Atribut terdiri dari nama dan nilai, yang dipisahkan
              oleh tanda sama dengan (=). Nilai atribut harus diberi tanda kutip (“” atau ‘’). Misalnya, &#60;img src=“gambar.jpg” alt=“Gambar”&#62; adalah tag gambar yang memiliki atribut src dan alt. Atribut src menentukan sumber gambar,
              sedangkan atribut alt menentukan teks alternatif jika gambar tidak dapat ditampilkan
            </p>
            <p>
              Untuk membuat halaman web dengan HTML, kita perlu membuat file dengan ekstensi .html atau .htm, yang bisa dibuka dengan browser web apa saja. File HTML harus mengikuti format ASCII (American Standard Code for Information
              Interchange), yaitu standar kode internasional untuk menyimpan teks. File HTML juga harus memiliki struktur dasar berikut:
            </p>
            <p>&#60;html&#62; &#60;head&#62; &#60;title&#62;Judul Halaman&#60;/title&#62; &#60;/head&#62; &#60;body&#62;Konten Halaman&#60;body&#62; &#60;html&#62;</p>
            <p>
              Tag &#60;html&#62; menandakan awal dan akhir dokumen HTML. Tag &#60;head&#62; berisi informasi tentang dokumen, seperti judul halaman yang ditulis di dalam tag &#60;title&#62;. Tag &#60;body&#62; berisi konten halaman yang
              akan ditampilkan di browser, seperti teks, gambar, link, tabel, dan lain-lain.
            </p>
            <p>Itulah pengertian, fungsi, dan cara kerja HTML secara singkat. Jika kamu ingin belajar lebih lanjut tentang HTML, kamu bisa mengunjungi situs-situs berikut:</p>
            <p>
              <Link to={"https://www.w3schools.com/html/"} className="hover:text-blue-800" target="_blank">
                - W3Schools:
              </Link>{" "}
              Situs ini menyediakan tutorial lengkap tentang HTML, mulai dari dasar hingga lanjutan. Kamu juga bisa mencoba kode HTML secara online dengan editor interaktif.
            </p>
            <p>
              <Link to={"https://developer.mozilla.org/en-US/"} className="hover:text-blue-800" target="_blank">
                - MDN Web Docs:
              </Link>{" "}
              Situs ini merupakan sumber referensi resmi tentang HTML dari Mozilla Developer Network. Kamu bisa menemukan dokumentasi tentang elemen-elemen, atribut-atribut, dan fitur-fitur HTML.
            </p>
            <p>
              <Link to={"https://www.codecademy.com/"} className="hover:text-blue-800" target="_blank">
                - Codecademy:
              </Link>{" "}
              Situs ini merupakan platform belajar pemrograman secara online. Kamu bisa mengikuti kursus gratis tentang HTML dan CSS untuk membuat website.
            </p>
            <p>
              <Link to={"https://www.niagahoster.co.id/blog/html-adalah/"} className="hover:text-blue-800" target="_blank">
                - HTML Dog:
              </Link>{" "}
              Situs ini merupakan sumber belajar HTML yang mudah dipahami dan praktis. Kamu bisa mempelajari konsep-konsep dasar hingga teknik-teknik lanjutan dengan contoh-contoh kode yang relevan.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
