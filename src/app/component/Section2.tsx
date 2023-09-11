import Image from "next/image";

function Section2() {
  const whoImg = "/img/who.png";
  return (
    <section className="card-bbs">
      <div className="who-widget-bbs">
        <div className="who-widget-body-bbs">
          <div className="image-wrapper-bbs">
            <Image width={500} height={233} src={whoImg} alt="who" />
          </div>

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
  );
}

export default Section2;
