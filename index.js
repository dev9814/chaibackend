require('dotenv').config()

const express = require('express')
const app = express() // making an instance of express

const port = 4000;

const github = {
    "login": "hiteshchoudhary",
    "id": 11613311,
    "node_id": "MDQ6VXNlcjExNjEzMzEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hiteshchoudhary",
    "html_url": "https://github.com/hiteshchoudhary",
    "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
    "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
    "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
    "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
    "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
    "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hitesh Choudhary",
    "company": null,
    "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
    "location": "India",
    "email": null,
    "hireable": null,
    "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
    "twitter_username": "hiteshdotcom",
    "public_repos": 72,
    "public_gists": 1,
    "followers": 8936,
    "following": 0,
    "created_at": "2015-03-23T13:03:25Z",
    "updated_at": "2023-09-09T03:27:44Z"
}

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.get('/facebook', (req, res) => {
    res.send("You are in facebook")
})

app.get('/google/youtube', (request, responce) => {
    responce.send("You are in youtube in google")
})

app.get('/login', (request, responce) => {
    responce.send('<h1> You are login at chai aur code </h1>')
})

app.get('/github', (req, res) => {
    res.json(github)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})