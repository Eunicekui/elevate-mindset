import "./Meditation.css";

const playlists = [
  {
    id: 1,
    title: "Rise & Shine",
    description: "Start your day with positive vibes and uplifting tracks",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JTCZI0u",
  },
  {
    id: 2,
    title: "Focus & Flow",
    description: "Stay motivated and focused with these tunes.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JTCZI0u",
  },
  {
    id: 3,
    title: "Evening Calm",
    description: "Rewind and Unwind with insipiring melodies.",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JTCZI0u",
  },
];
const Playlist = () => {
  return (
    <section className="motivation-playlists">
      <h2>Motivation Playlists</h2>
      <p>
        Curated playlists to inspire and uplift you at every moment of your day.
      </p>
      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <div className="playlist-card" key={playlist.id}>
            <div className="playlist-info">
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
            <iframe
              allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gryoscope; picture-in-picture"
              allowFullScreen
              src={playlist.embedUrl}
              title={playlist.title}
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Playlist;
