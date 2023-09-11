import Image from "next/image";

function Section6() {
  const rekomendasiImg = "/img/rekomendasi.webp";
  const rekomendas2Img = "/img/rekomendasi2.webp";
  return (
    <section className="card-bbs">
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
      <div className="image-wrapper-bbs">
        <Image width={581} height={912} src={rekomendasiImg} alt="mainBanner" />
      </div>
      <div className="image-wrapper-bbs">
        <Image width={581} height={508} src={rekomendas2Img} alt="mainBanner" />
      </div>
    </section>
  );
}

export default Section6;
