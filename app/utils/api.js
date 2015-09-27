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
};

module.exports = api;
