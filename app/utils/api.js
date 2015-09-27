let api = {
  getBio(username)  {
    username = username.toLowerCase().trim();
    let url = `https://api.github.com/users/${username}`;
    return fetch(url).then((response) => response.json());
  },
  getRepos(username)  {
    username = username.toLowerCase().trim();
    let url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then((response) => response.json());
  },
  getNotes(username)  {
    username = username.toLowerCase().trim();
    let url = `https://githubnotetaker-af.firebaseio.com/users/${username}.json`;
    return fetch(url).then((response) => response.json());
  },
  addNote(username, note)  {
    username = username.toLowerCase().trim();
    let url = `https://githubnotetaker-af.firebaseio.com/users/${username}.json`;
    return fetch(url, {
      method : 'post',
      body   : JSON.stringify(note),
    }).then((response) => response.json());
  },
};

module.exports = api;
