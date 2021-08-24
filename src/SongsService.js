const { Pool } = require('pg');
 
class SongsService {
  constructor() {
    this._pool = new Pool();
  }
 
  async getSong(playlistId) {
    const query = {
      text: `SELECT songs.* FROM songs
      JOIN songsplaylists ON songs.id = songsplaylists.song_id
      WHERE songsplaylists.playlist_id = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}
 
module.exports = SongsService;