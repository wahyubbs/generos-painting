import Image from "next/image";
import RiskCard from "./RiskCard";

function Section3() {
  const terlambatBicaraImg = "/img/terlambatBicara.webp";
  const anakSekolahImg = "/img/anakSekolah.png";

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
    <section className="card-bbs">
      <div className="medium-image-wrapper-bbs">
        <Image
          width={673}
          height={300}
          sizes="100vw"
          src={terlambatBicaraImg}
          alt="terlambatbicara"
        />
      </div>

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
      <div className="risk-widget-bbs">
        <div className="inverted-circle-bbs" />
        <div className="risks-wrapper-bbs">
          {risks.map((data, index) => (
            <RiskCard
              key={index}
              src={data.src}
              description={data.description}
              title={data.title}
            />
          ))}
        </div>

        <div className="widget-bbs">
          <div className="widget-header-bbs">
            <div className="image-wrapper-bbs">
              <Image
                width={570}
                height={367}
                src={anakSekolahImg}
                alt="anak sekolah"
              />
            </div>
          </div>

          <div className="widget-bodyDes-bbs">
            <div className="widget-title-bbs">
              <h1>Anak Bunda Adalah Calon Orang Hebat</h1>
              <p>
                Jangan menghalangi kesuksesan anak hanya karena membiarkan anak
                mengalami terlambat bicara
                <strong> (Speech Delay). </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="circle-bbs" />
      </div>
    </section>
  );
}

export default Section3;
