import { getRecentlyPlayed, getTopTracks } from '@/lib/spotify';

export default async function handler(_, res) {
  const response = await getTopTracks();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const data = await response.json();

  if (data === null) {
    return res.status(200).json({ isPlaying: false });
  }

  let title = '';
  let artist = '';
  let album = '';
  let songUrl = '';

  if (data.items && data.items[0]) {
    const { track } = data.items[0];
    if (track) {
      songUrl = track.external_urls.spotify;
      title = track.name;
      artist = track.artists.map((x) => x.name).join(', ');
      album = track.album.name;
    }
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    album,
    artist,
    songUrl,
    title,
  });
}
