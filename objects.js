var playlist = {
  britney: 'Hit me baby'
}

function updatePlaylist(obj, artist, title) {

  return Object.assign({}, obj, { [artist]: title })
}

// Create a function updatePlaylist that accepts three parameters: the playlist (an object), an artist name (a string), and a song title. The body of the function should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.
