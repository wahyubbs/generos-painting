import Image from "next/image";

function Section10() {
  const kataTetanggaImg = "/img/kataTetangga.webp";
  const dokterImg = "/img/dokter.png";
  return (
    <section className="card-bbs">
      <h1 className="text-title">sering dengar omongan ini bund?</h1>
      <div className="image-wrapper-bbs">
        <Image
          width={580}
          height={809}
          src={kataTetanggaImg}
          alt="mainBanner"
        />
      </div>
      <div className="widget-bbs">
        <div className="widget-header-bbs">
          <div className="image-wrapper-bbs">
            <Image width={390} height={280} src={dokterImg} alt="mainBanner" />
          </div>
        </div>

        <div className="widget-body-bbs">
          <div className="widget-title-bbs">
            <h1>INGAT BUND !</h1>
          </div>
          <div className="widget-deskripsi-bbs">
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
  );
}

export default Section10;
