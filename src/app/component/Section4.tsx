import Image from "next/image";

function Section4() {
  const atasiLambatBicaraBannerImg = "/img/atasiLambatBicaraBanner.webp";
  const atasiLambatBicaraDeskripsiImg = "/img/atasiLambatBicaraDeskripsi.webp";
  const kebaikanImg = "/img/kebaikan.webp";
  return (
    <section className="card-bbs">
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
        <div className="image-wrapper-bbs">
          <Image
            width={580}
            height={772}
            src={atasiLambatBicaraBannerImg}
            alt="mainBanner"
          />
        </div>
        <div className="image-wrapper-bbs">
          <Image
            width={580}
            height={520}
            src={atasiLambatBicaraDeskripsiImg}
            alt="mainBanner"
          />
        </div>
        <div className="image-wrapper-bbs">
          <Image width={580} height={995} src={kebaikanImg} alt="mainBanner" />
        </div>
      </div>
    </section>
  );
}

export default Section4;
