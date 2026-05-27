'use client'

import { motion } from 'framer-motion'
import './music.css'

const favoriteAlbums = [
  {
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    year: '2013',
    cover: 'https://i.scdn.co/image/ab67616d0000b2731d97ca7376f835055f828139',
    spotifyUrl: 'https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa',
  },
  {
    title: 'Ready to Die (The Remaster)',
    artist: 'The Notorious B.I.G.',
    year: '2005',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020f51e29700232d57fe8a0830',
    spotifyUrl: 'https://open.spotify.com/album/2HTbQ0RHwukKVXAlTmCZP2',
  },
  {
    title: 'Pescado Rabioso 2',
    artist: 'Pescado Rabioso',
    year: '1973',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02714844f9b7c64a47b5bd2c93',
    spotifyUrl: 'https://open.spotify.com/album/3j9nlCtanXCPvoaFzrpjPs',
  },
]

const favoriteSongs = [
  {
    title: 'Juicy - 2005 Remaster',
    artist: 'The Notorious B.I.G.',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e020f51e29700232d57fe8a0830',
    spotifyUrl: 'https://open.spotify.com/track/5ByAIlEEnxYdvpnezg7HTX',
  },
  {
    title: 'Aluminio',
    artist: 'Peces Raros',
    cover: 'https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e025d7f9b981b4cf8f9b28db3fb',
    spotifyUrl: 'https://open.spotify.com/track/3rts0t4tZgKzs56OUPoO4q',
  },
  {
    title: 'NUEVAS COORDENADAS',
    artist: 'WOS',
    cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c678828a5678109a13f20ba2',
    spotifyUrl: 'https://open.spotify.com/track/7kysK9zB05cNs2MMzVW8jq',
  },
  {
    title: 'Digital Love',
    artist: 'Daft Punk',
    cover: 'https://i.scdn.co/image/ab67616d00001e02b33d46dfa2635a47eebf63b2',
    spotifyUrl: 'https://open.spotify.com/track/2VEZx7NWsZ1D0eJ4uv5Fym',
  },
]

export default function Music() {
  return (
    <motion.section
      id="music"
      className="music-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="music-container">
        <div className="music-header">
          <p className="music-eyebrow">Mi música</p>
          <h2 className="music-title">Discos y canciones que me acompañan mientras creo.</h2>
        </div>

        <div className="music-content">
          <section className="music-block" aria-labelledby="favorite-albums-title">
            <div className="music-block-header">
              <h3 id="favorite-albums-title">Mis discos favoritos</h3>
            </div>

            <div className="album-grid">
              {favoriteAlbums.map((album) => (
                <article className="album-card" key={`${album.artist}-${album.title}`}>
                  <div className="album-cover">
                    <img src={album.cover} alt={`Portada de ${album.title}`} />
                  </div>
                  <div className="album-info">
                    <p className="album-year">{album.year}</p>
                    <h4>{album.title}</h4>
                    <p>{album.artist}</p>
                    {album.spotifyUrl && (
                      <a href={album.spotifyUrl} target="_blank" rel="noopener noreferrer">
                        Spotify
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="music-block" aria-labelledby="favorite-songs-title">
            <div className="music-block-header">
              <h3 id="favorite-songs-title">Mis canciones favoritas</h3>
            </div>

            <div className="song-grid">
              {favoriteSongs.map((song) => (
                <article className="song-card" key={`${song.artist}-${song.title}`}>
                  <img src={song.cover} alt={`Mini portada de ${song.title}`} className="song-cover" />
                  <div className="song-info">
                    <h4>{song.title}</h4>
                    <p>{song.artist}</p>
                  </div>
                  <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer" className="song-link">
                    Escuchar en Spotify
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.section>
  )
}
