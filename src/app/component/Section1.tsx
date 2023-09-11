import Image from "next/image";

function Section1() {
  const mainBannerImg = "/img/mainBanner.webp";

  return (
    <section className="card-bbs">
      <div className="image-wrapper-bbs">
        <Image
          width={580}
          loading="eager"
          height={1043}
          src={mainBannerImg}
          alt="mainBanner"
        />
      </div>
    </section>
  );
}

export default Section1;
