const key = '22f48f41f6aeea5f2f3696185f092dd7';
const artistA = ['TaylorSwift', 'Camilo', 'BrunoMars', 'Shakira', 'SuperJunior'];
const artistFull = [];
artistA.forEach((elemnt) => {
  let artist;
  fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${elemnt}&api_key=${key}&format=json`)
    .then((response) => response.json())
    .then((result) => {
      const { name } = result.artist;
      const images = result.artist.image[1];

      artist = {
        name,
        images,
      };
      return fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${elemnt}&limit=11&api_key=${key}&format=json`);
    })
    .then((response) => response.json())
    .then((result) => {
      artist = {
        ...artist,
        track: result.toptracks.track,
      };
      artistFull.push(artist);
    })
    .catch((error) => console.log('error', error));
});
console.log(artistFull);
