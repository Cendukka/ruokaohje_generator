export default function handler(req, res) {
    const Os = require('os');
    let userName = Os.userInfo().username;
    res.status(200).json({ name: userName })
  }