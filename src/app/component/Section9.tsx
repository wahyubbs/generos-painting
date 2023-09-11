import Image from "next/image";

function Section9() {
  const warning = "/img/warning.png";
  const uangImg = "/img/uang.png";
  const lokasiImg = "/img/lokasi.png";
  const jasaImg = "/img/jasa.png";
  const kurirImg = "/img/kurir.jpg";
  return (
    <section className="card-bbs">
      <div className="jaminan-card-bbs">
        <h1>
          <span>INGAT!</span> MENGANGGAP SEPELE TERLAMBAT BICARA SAMA DENGAN
          MEMBIARKAN ANAK MENGALAMI KESULITAN DI MASA DEPAN
        </h1>
        <h1>
          <span>
            UANG BISA DICARI, TAPI USIA EMAS PERKEMBANGAN ANAK TIDAK BISA
            DIULANG KEMBALI
          </span>
        </h1>
        <Image width={250} height={250} src={warning} alt="who" />
        <p>
          Karena banyaknya<b> oknum </b>yang <b>tidak bertanggung jawab </b>
          yang telah melakukan <b>pemalsuan produk kami</b>, karena itu kami
          <b> tidak bertanggung jawab </b> pembelian <b> GENEROS </b> diluar
          website resmi kami.
        </p>
        <Image width={75} height={40} src={uangImg} alt="who" />
        <h2>
          <b>JAMINAN UANG KEMBALI</b>
        </h2>
        <h3>JIKA BARANG RUSAK ATAU PALSU KAMI JAMIN UANG KEMBALI SEPENUHNYA</h3>
        <Image width={50} height={65} src={lokasiImg} alt="who" />
        <h2>
          <b>BISA LACAK PESANAN SENDIRI </b>
        </h2>
        <h3>
          BUNDA AKAN KAMI KIRIM KODE RESI SEBAGAI TANDA PENGIRIMAN SUDAH KAMI
          LAKUKAN
        </h3>

        <a>PESAN VIA WHATSAPP</a>
        <h2>
          <b>JASA PENGIRIMAN DAN PEMBAYARAN BISA MELALUI :</b>
        </h2>
        <div className="image-wrapper-bbs">
          <Image
            className="image-wrapper-bbs"
            width={482}
            height={193}
            src={jasaImg}
            alt="mainBanner"
          />
        </div>
        <div className="image-wrapper-bbs">
          <Image width={482} height={193} src={kurirImg} alt="mainBanner" />
        </div>
      </div>
    </section>
  );
}

export default Section9;
