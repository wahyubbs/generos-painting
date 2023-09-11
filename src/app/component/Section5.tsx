import Image from "next/image";

function Section5() {
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

  const kualitasBannerImg = "/img/kualitasBanner.webp";
  const testiBannerImg = "/img/testiBanner.webp";
  return (
    <section className="card-bbs">
      <div className="medium-image-wrapper-bbs">
        <Image
          width={580}
          height={169}
          src={kualitasBannerImg}
          alt="mainBanner"
        />
      </div>
      <div className="column px-small">
        {testimoniBesar.map((data, index) => (
          <div key={index} className="image-wrapper-bbs">
            <Image
              width={750}
              height={865}
              sizes="100vw"
              src={data}
              alt="mainBanner"
            />
          </div>
        ))}
      </div>
      <div className="px-small">
        <div>
          <Image
            className="image-wrapper-bbs"
            width={673}
            height={200}
            src={testiBannerImg}
            alt="mainBanner"
          />
        </div>
      </div>

      <div className="testimoni-card-bbs px-small">
        {testimoniKecil.map((data, index) => (
          <div className="w-100" key={index}>
            <Image fill src={data} alt="mainBanner" sizes="100vw" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section5;
