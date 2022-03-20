const fetch = require('node-fetch');
const ids = [27998081725, 7872415434, 231599689, 14634719];

(async () => {
  const res = await Promise.all(ids.map(id => fetch(`https://www.instagram.com/web/friendships/${id}/unfollow/`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,vi;q=0.8,en-GB;q=0.7",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Microsoft Edge\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",

      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "POST"
  })
    .then(data => data.json())
    .catch(console.log)
  ));
  console.log("🚀 ~ res", JSON.stringify(res));
})();