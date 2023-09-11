import Image from "next/image";

export default function RiskCard({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) {
  return (
    <div className="risk-card-bbs">
      <Image src={src} width={300} height={300} alt="risk" sizes="100vw" />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
