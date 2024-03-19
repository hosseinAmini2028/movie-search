import MovieDetail from "@/components/MovieDetails/page";

type Props = {
  params: {
    imdbID: string;
  };
};
export default function MovieDetailsPage(props: Props) {
  const {
    params: { imdbID }
  } = props;
  return <MovieDetail id={imdbID} />;
}
