import Image from "next/image";
import { ReactPixelTrack } from "./reactPixel";
import Form from "./Form";

function Section8() {
  const promo1Img = "/img/promo1.png";
  const promo2Img = "/img/promo2.webp";
  const tanpaSyarat = "/img/tanpaSyarat.gif";
  const beli2box = "/img/beli2box.webp";
  const bestSeller = "/img/bestSeller.webp";
  const penawaranHari = "/img/penawaranHari.webp";
  const panahBawah = "/img/panahBawah.gif";
  const ambilPromo = "/img/ambilPromo.webp";
  const pastikanNomor = "/img/pastikanNomor.gif";
  return (
    <section className="card-bbs">
      <div className="promo-card-bbs">
        <div className="image-wrapper-bbs">
          <Image width={580} height={983} src={promo1Img} alt="mainBanner" />
        </div>
        <div className="image-wrapper-bbs">
          <Image
            width={1140}
            height={1212}
            src={tanpaSyarat}
            alt="mainBanner"
          />
        </div>
        <div className="image-wrapper-bbs">
          <Image
            id="promo-2"
            width={1140}
            height={1888}
            src={promo2Img}
            alt="mainBanner"
          />
        </div>

        <ul>
          <li>1 BOX ISI 2 BOTOL</li>
          <li>BISA BAYAR DIRUMAH</li>
          <li>BARANG PALSU UANG KEMBALI 2X LIPAT</li>
        </ul>
        <a className="btn-promo-bbs" href="#penawaran-widget">
          <p>AMBIL PROMO</p>
        </a>
        <div className="image-wrapper-bbs">
          <Image
            className="image-wrapper-bbs"
            width={1140}
            height={300}
            src={beli2box}
            alt="mainBanner"
          />
        </div>
        <div className="image-wrapper-bbs">
          <Image
            className="image-wrapper-bbs"
            width={1140}
            height={2000}
            src={bestSeller}
            alt="mainBanner"
          />
        </div>

        <div className="penawaran-bbs">
          <div className="image-wrapper-bbs">
            <Image
              width={750}
              height={243}
              src={penawaranHari}
              alt="mainBanner"
            />
          </div>
          <h1>SISA PROMO HARI INI</h1>
          <span>12</span>
          <p>KUOTA PROMO TERSISA</p>

          <Image
            width={300}
            height={160}
            src={panahBawah}
            alt="penawaranHari"
          />
        </div>
        <div className="penawaran-card-bbs">
          <div className="inverted-circle-bbs" />
          <div id="penawaran-widget" className="penawaran-widget-bbs">
            <div className="image-wrapper-bbs">
              <Image
                width={673}
                height={200}
                src={ambilPromo}
                alt="ambilPromo"
              />
            </div>

            <ul>
              <li>
                Klaim Voucher Promo dengan Mengisi Form Pemesanan menggunakan
                Nama & Nomor WHATSAPP yang Aktif/Benar untuk dapatkan :
                <p>👉Potongan Harga 30%</p>
                <p>👉Beli 1 Box Isi 2 Botol</p>
                <p>👉Voucher Ongkir hingga 35Rb </p>
                <p>👉Beli 2 Box Dapat Buku exlusive</p>
              </li>
            </ul>

            <h1>CEK HARGA SEBELUM MENGISI FORM PEMESANAN</h1>
            <a className="btn-promo-bbs" href="#promo-2">
              <p>CECK HARGA</p>
            </a>
            <h2>MAU DAPAT PROMO & BAYAR SETELAH PAKET SAMPAI?</h2>
            <h3>Isi Form Untuk Dapatkan Antrian Promo Terbatas</h3>
            <Form />
            <div className="image-wrapper-bbs">
              <Image
                width={1060}
                height={306}
                src={pastikanNomor}
                alt="pastikanNomor"
              />
            </div>
          </div>
          <div className="circle-bbs" />
        </div>
      </div>
    </section>
  );
}

export default Section8;
