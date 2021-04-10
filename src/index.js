const key = '22f48f41f6aeea5f2f3696185f092dd7';
const artistA = ['TaylorSwift', 'Camilo', 'BrunoMars', 'Shakira', 'SuperJunior'];
const artist = [];
const tracks = [];
artistA.forEach((elemnt) => {
  fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${elemnt}&api_key=${key}&format=json`)
    .then((response) => response.json())
    .then((result) => {
      const { name } = result.artist;
      const images = result.artist.image;
      artist.push({ name, images });
    })
    .catch((error) => console.log('error', error));
});
artistA.forEach((elemnt) => {
  fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${elemnt}&limit=11&api_key=${key}&format=json`)
    .then((response) => response.json())
    .then((result) => {
      const name = result.toptracks['@attr'].artist;
      const { track } = result.toptracks;
      tracks.push({ name, track });
    })
    .catch((error) => console.log('error', error));
});
console.log('GETINFO', artist, tracks);
