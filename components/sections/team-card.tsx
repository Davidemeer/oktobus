import Image from 'next/image';

type TeamCardProps = {
  number: string;
  role: string;
  name: string;
  discipline: string;
  imgSrc: string;
};

export function TeamCard({ number, role, name, discipline, imgSrc }: TeamCardProps) {
  return (
    <div className="bento" style={{ padding: '28px 28px 32px' }}>
      <div className="num mb-3.5">→ {number} / {role.toUpperCase()}</div>
      <div
        className="relative w-full overflow-hidden rounded-[2px] bg-bone-2"
        style={{ aspectRatio: '4/5', marginBottom: '22px' }}
      >
        <Image
          src={imgSrc}
          alt={`Portret van ${name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover object-top"
          priority={false}
        />
      </div>
      <div className="font-sans font-medium text-[24px] tracking-[-0.03em] text-ink">{name}</div>
      <div className="text-[13px] text-ink-2 mt-1">{discipline}</div>
    </div>
  );
}
