import { Podcatchers as StandardPodcatchers } from "../Podcatchers";

interface PodcatchersProps {
  node: {
    heading: string;
  };
}

const Podcatchers = ({ node }: PodcatchersProps) => {
  const { heading } = node;
  return (
    <section>
      <h2>{heading}</h2>
      <div className="podcatchers">
        <StandardPodcatchers
          showHeading={false}
          className="newsletter-podcatchers"
        />
      </div>
    </section>
  );
};

export { Podcatchers };
