import Image from "next/image";
import styles from "./page.module.css";

function RiskCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles["risk-card-bbs"]}>
      <Image src={src} width={300} height={300} alt="risk" sizes="100vw" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const mainBannerImg = "/img/mainBanner.webp";
  const kataTetanggaImg = "/img/kataTetangga.webp";
  const dokterImg = "/img/dokter.png";
  const whoImg = "/img/who.png";
  const terlambatBicaraImg = "/img/terlambatBicara.webp";
  const anakSekolahImg = "/img/anakSekolah.png";
  const atasiLambatBicaraBannerImg = "/img/atasiLambatBicaraBanner.webp";
  const atasiLambatBicaraDeskripsiImg = "/img/atasiLambatBicaraDeskripsi.webp";
  const kebaikanImg = "/img/kebaikan.webp";
  const kualitasBannerImg = "/img/kualitasBanner.webp";
  const testiBannerImg = "/img/testiBanner.webp";
  const rekomendasiImg = "/img/rekomendasi.webp";
  const rekomendas2Img = "/img/rekomendasi2.webp";
  const dariSabangKeMeraukeImg = "/img/dariSabangKeMerauke.png";
  const ribuanPaketImg = "/img/ribuanPaket.webp";
  const kenapaGenerosImg = "/img/kenapaGeneros.webp";
  const promo1Img = "/img/promo1.png";
  const promo2Img = "/img/promo2.webp";
  const tanpaSyarat = "/img/tanpaSyarat.gif";
  const testimoniBesar = [
    "/img/testi1.webp",
    "/img/testi2.webp",
    "/img/testi3.webp",
    "/img/testi4.webp",
    "/img/testi5.webp",
    "/img/testi6.webp",
  ];
  const testimoniKecil = [
    "/img/testi7.webp",
    "/img/testi8.webp",
    "/img/testi9.webp",
    "/img/testi10.webp",
    "/img/testi11.webp",
    "/img/testi12.webp",
    "/img/testi13.webp",
    "/img/testi14.webp",
    "/img/testi15.jpg",
  ];
  const risks = [
    {
      src: "/img/gangguanEmosional.jpg",
      title: "Gangguan Emosional",
      description:
        "Anak cenderung akan melampiaskanya dengan marah-marah dan susah mengontrol emosi sehingga anak jadi temprament",
    },
    {
      src: "/img/gampangStress.jpg",
      title: "Gampang Stress",
      description:
        "Anak akan sering merasa tertekan yang berlebihan sehingga mudah merasa stress bahkan bisa hingga mengalami masalah kejiwaan",
    },
    {
      src: "/img/sulitBersosialisasi.jpg",
      title: "Sulit Bersosialisasi",
      description:
        "Anak terlambat bicara biasanya akan merasa tidak pede bergaul dengan teman sebayanya, anak jadi pemurung dan suka menyendiri",
    },
    {
      src: "/img/gejalaAutisme.jpg",
      title: "Gejala Autisme",
      description:
        "Dampak yang paling buruk jika Terlambat Bicara (speech delay) dibiarkan begitu saja adalah anak mengalami autisme, selain dari faktor genetik autisme juga bisa terjadi karena 3 faktor diatas dibiarkan begitu saja",
    },
  ];

  return (
    <main className={styles["container-bbs"]}>
      <section className={styles["card-bbs"]}>
        <Image
          className={styles["image-wrapper-bbs"]}
          width={0}
          height={0}
          sizes="100vw"
          src={mainBannerImg}
          alt="mainBanner"
        />

        <h1 className="text-title">sering dengar omongan ini bund?</h1>

        <Image
          className={styles["image-wrapper-bbs"]}
          width={0}
          height={0}
          sizes="100vw"
          src={kataTetanggaImg}
          alt="mainBanner"
        />

        <div className={styles["widget-bbs"]}>
          <div className={styles["widget-header-bbs"]}>
            <Image
              className={styles["image-wrapper-bbs"]}
              width={0}
              height={0}
              sizes="100vw"
              src={dokterImg}
              alt="mainBanner"
            />
          </div>

          <div className={styles["widget-body-bbs"]}>
            <div className={styles["widget-title-bbs"]}>
              <h1>INGAT BUND !</h1>
            </div>
            <div className={styles["widget-deskripsi-bbs"]}>
              <p>
                <span>
                  <strong>Terlambat Bicara </strong>
                </span>
                pada anak bukanlah masalah yang sesepele itu, anak mengalami
                <span>
                  <strong> Terlambat Bicara </strong> (Speech Delay) Bisa jadi
                  awal gejala
                  <strong> Autisme. </strong>
                  Pertumbuhan otak anak yang terhambat bisa berdampak hingga
                  dewasa.
                </span>
              </p>
              <p>
                <span className="warning">
                  <strong>INGAT! </strong>
                </span>
                <strong>
                  Usia emas perkembangan anak tidak bisa kembali lagi.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles["card-bbs"]}>
        <div className={styles["who-widget-bbs"]}>
          <div className={styles["who-widget-body-bbs"]}>
            <Image
              width={500}
              height={233}
              sizes="100vw"
              src={whoImg}
              alt="who"
            />
            <h1>SEBELUM PESAN GENEROS.. INI FAKTA DARI WHO BUN..</h1>
            <p>
              Perkembangan setiap anak berbeda namun menurut WHO
              <strong> anak usia 16 bulan </strong> harus mengucapkan kata-kata
              tunggal , seperti <strong> “MAMA” </strong>atau
              <strong> “PAPA” </strong> dan pada <strong> usia 2 tahun </strong>
              minimal menguasai 50 kata & berbicara dalam 2 hingga 3 kalimat.
              <strong> Usia 0-5 tahun adalah Usia emas </strong> yaitu periode
              penting di mana otak dan fisik mengalami perkembangan pesat &
              berpengaruh hingga dewasa.
            </p>
          </div>
        </div>
      </section>
      <section className={styles["card-bbs"]}>
        <Image
          className={styles["medium-image-wrapper-bbs"]}
          width={0}
          height={0}
          sizes="100vw"
          src={terlambatBicaraImg}
          alt="terlambatbicara"
        />
        <p
          style={{ fontSize: "21px", lineHeight: "1.1em" }}
          className="text-title blue"
        >
          Jika dibiarkan bisa
          <strong className="warning">
            <i> BERESIKO </i>
          </strong>
           anak mengalami ini
        </p>
        <div className={styles["risk-widget-bbs"]}>
          <div className={styles["inverted-circle-bbs"]} />
          <div className={styles["risks-wrapper-bbs"]}>
            {risks.map((data, index) => (
              <RiskCard
                key={index}
                src={data.src}
                description={data.description}
                title={data.title}
              />
            ))}
          </div>

          <div className={styles["widget-bbs"]}>
            <div className={styles["widget-header-bbs"]}>
              <Image
                className={styles["image-wrapper-bbs"]}
                width={0}
                height={0}
                sizes="100vw"
                src={anakSekolahImg}
                alt="anak sekolah"
              />
            </div>

            <div className={styles["widget-bodyDes-bbs"]}>
              <div className={styles["widget-title-bbs"]}>
                <h1>Anak Bunda Adalah Calon Orang Hebat</h1>
                <p>
                  Jangan menghalangi kesuksesan anak hanya karena membiarkan
                  anak mengalami terlambat bicara
                  <strong> (Speech Delay). </strong>
                </p>
              </div>
            </div>
          </div>
          <div className={styles["circle-bbs"]} />
        </div>
      </section>
      <section className={styles["card-bbs"]}>
        <h1
          style={{
            fontSize: "22px",
            lineHeight: "1.2em",
            fontFamily: "Arial, Sans-serif",
            fontWeight: "500",
          }}
          className="blue text-title"
        >
          <strong> Gimana Caranya </strong> , anak yang tadinya terlambat bicara
          bisa jadi lancar bicara <strong>? </strong>
        </h1>
        <div className="column">
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={atasiLambatBicaraBannerImg}
            alt="mainBanner"
          />
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={atasiLambatBicaraDeskripsiImg}
            alt="mainBanner"
          />
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={kebaikanImg}
            alt="mainBanner"
          />
        </div>
      </section>
      <section className={styles["card-bbs"]}>
        <div className="col">
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={kualitasBannerImg}
            alt="mainBanner"
          />
        </div>
        <div className="column px-small">
          {testimoniBesar.map((data, index) => (
            <Image
              key={index}
              className={styles["image-wrapper-bbs"]}
              width={0}
              height={0}
              sizes="100vw"
              src={data}
              alt="mainBanner"
            />
          ))}
        </div>
        <div className="px-small">
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={testiBannerImg}
            alt="mainBanner"
          />
        </div>

        <div className={`${styles["testimoni-card-bbs"]} px-small`}>
          {testimoniKecil.map((data, index) => (
            <div className="w-100" key={index}>
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src={data}
                alt="mainBanner"
              />
            </div>
          ))}
        </div>
      </section>
      <section className={styles["card-bbs"]}>
        <h1
          style={{
            fontFamily: "Poppins, Sans-serif",
            fontWeight: 800,
            lineHeight: "1.2em",
          }}
          className="blue text-title"
        >
          REKOMENDASI SPESIALIS ANAK & ARTIS PAPAN ATAS
        </h1>
        <Image
          className={styles["image-wrapper-bbs"]}
          width={0}
          height={0}
          sizes="100vw"
          src={rekomendasiImg}
          alt="mainBanner"
        />
        <Image
          className={styles["image-wrapper-bbs"]}
          width={0}
          height={0}
          sizes="100vw"
          src={rekomendas2Img}
          alt="mainBanner"
        />
      </section>
      <section className={styles["card-bbs"]}>
        <div className={styles["journey-card-bbs"]}>
          <div className={styles["inverted-circle-bbs"]} />
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={dariSabangKeMeraukeImg}
            alt="dariSabang"
          />
          <h1>2.697.468</h1>
          <p>DI SELURUH INDONESIA</p>
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={ribuanPaketImg}
            alt="dariSabang"
          />
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={kenapaGenerosImg}
            alt="dariSabang"
          />
        </div>
      </section>
      <section className={styles["card-bbs"]}>
        <div className={styles["promo-card-bbs"]}>
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={promo1Img}
            alt="mainBanner"
          />
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={tanpaSyarat}
            alt="mainBanner"
          />
          <Image
            className={styles["image-wrapper-bbs"]}
            width={0}
            height={0}
            sizes="100vw"
            src={promo2Img}
            alt="mainBanner"
          />
          <ul>
            <li>1 BOX ISI 2 BOTOL</li>
            <li>BISA BAYAR DIRUMAH</li>
            <li>BARANG PALSU UANG KEMBALI 2X LIPAT</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
