const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return <p className="text-white-1">Podacst details for {params.podcastId}</p>;
};

export default PodcastDetails;
