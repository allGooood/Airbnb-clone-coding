'use client'

interface HeadingProps {
    title: string;
    subtitile?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subtitile,
    center
}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
        <div className="text-2xl font-bold">
            {title}
        </div>
        <div className="font-light text-neutral-500 mt-2">
            {subtitile}
        </div>
    </div>
  )
}

export default Heading