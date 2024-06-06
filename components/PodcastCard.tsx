import Image from "next/image";

const PodcastCard = ({
  title,
  description,
  imgUrl,
  podcastId,
}: {
  title: string;
  description: string;
  imgUrl: string;
  podcastId: number;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image src={imgUrl} alt={title} width={174} height={174} />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal text-white-4 capitalize">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
