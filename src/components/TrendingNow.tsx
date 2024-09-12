import MovieRow from "./MovieRow";

export default function TrendingNow() {
  const movies = [
    {
      rank: 1,
      title: "Fight Club",
      year: 1994,
      rating: 9.3,
      genre: "Drama",
      poster: "public/images/films/drama/fight-club/small.jpg",
      description:
        "Two imprisoned men forge an unlikely friendship over the years, forming a bond that helps them survive the harsh realities of prison life.",
    },
    {
      rank: 2,
      title: "Kings Speech",
      year: 1972,
      rating: 9.2,
      genre: "Crime, Drama",
      poster: "public/images/films/drama/kings-speech/small.jpg",
      description:
        "Don Corleone, the head of a powerful crime family, faces a series of challenges from both within and outside his organization.",
    },
    {
      rank: 3,
      title: "La La Land",
      year: 2008,
      rating: 9.0,
      genre: "Action, Crime, Drama",
      poster: "public/images/films/romance/la-la-land/small.jpg",
      description:
        "The Joker, a criminal mastermind, unleashes chaos on Gotham City, forcing Batman to confront his greatest challenge yet.",
    },
    {
      rank: 4,
      title: "The Notebook",
      year: 1957,
      rating: 8.9,
      genre: "Drama",
      poster: "public/images/films/romance/the-notebook/small.jpg",
      description:
        "A jury of twelve men must decide the fate of a young man accused of murder. As the deliberations unfold, tensions rise and prejudices are exposed.",
    },
    {
      rank: 5,
      title: "A Star Is Born",
      year: 1993,
      rating: 8.9,
      genre: "Historical Drama, War",
      poster: "public/images/films/romance/a-star-is-born/small.jpg",
      description:
        "A German businessman saves the lives of hundreds of Jews during the Holocaust by employing them in his factory.",
    },
    {
      rank: 6,
      title: "The Prestige",
      year: 1994,
      rating: 8.9,
      genre: "Crime, Drama",
      poster: "public/images/films/drama/the-prestige/small.jpg",
      description:
        "A series of crime-related events in Los Angeles unfold in a nonlinear fashion, connecting a group of disparate characters.",
    },
  ];
  return (
    <div className="trending-now-container">
      <div>
        <h1>Trending Now</h1>
      </div>
      <div>
        <select
          className="navbar-container-select"
          style={{ marginRight: "1rem" }}
        >
          <option>Canada</option>
          <option>Global</option>
        </select>
        <select className="navbar-container-select">
          <option>Movies</option>
          <option>TV Shows</option>
        </select>
      </div>

      <div>
        <MovieRow movies={movies} />
      </div>
    </div>
  );
}
