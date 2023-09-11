import Image from "next/image";

function Section7() {
  const dariSabangKeMeraukeImg = "/img/dariSabangKeMerauke.png";
  const ribuanPaketImg = "/img/ribuanPaket.webp";
  const kenapaGenerosImg = "/img/kenapaGeneros.webp";
  return (
    <section className="card-bbs">
      <div className="journey-card-bbs">
        <div className="inverted-circle-bbs" />
        <div className="image-wrapper-bbs">
          <Image
            width={1140}
            height={935}
            sizes="100vw"
            src={dariSabangKeMeraukeImg}
            alt="dariSabang"
          />
        </div>

        <h1>2.697.468</h1>
        <p>DI SELURUH INDONESIA</p>
        <div className="image-wrapper-bbs">
          <Image
            width={1140}
            height={935}
            src={ribuanPaketImg}
            alt="dariSabang"
          />
        </div>
        <div className="image-wrapper-bbs">
          <Image
            width={1140}
            height={2010}
            src={kenapaGenerosImg}
            alt="dariSabang"
          />
        </div>
      </div>
    </section>
  );
}

export default Section7;
