fetch();


const fetch = require('node-fetch');
const ids = [27998081725, 7872415434, 231599689, 14634719];

(async () => {
  const res = await Promise.all(ids.map(id => fetch("https://www.facebook.com/api/graphql/", {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,vi;q=0.8,en-GB;q=0.7",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-prefers-color-scheme": "dark",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Microsoft Edge\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-fb-friendly-name": "CometPageUnfollowCommitMutation",
      "x-fb-lsd": "9FugON2-lFptQwF9Q7H5Zu",
      "cookie": "sb=GIJPYMUtDuFig4-M3n4CNqOG; datr=GIJPYCbknvC9Wp5qECinwUvv; dpr=1.2395833730697632; locale=en_US; wd=1550x728; c_user=100006631660234; xs=1%3A38T2gUgLbCGNHA%3A2%3A1647763890%3A-1%3A6338%3A%3AAcXq3cTW6hGYKekCMMLenxnQ2WlXcEaHgPauKN-R7g; fr=0jQjiokTnY4Mcn0qg.AWX0wP4ZhfsPzKf8lt58hhNIWwM.BiNwe3.Fy.AAA.0.0.BiNwe3.AWVNSGZOa6U; presence=C%7B%22t3%22%3A%5B%7B%22i%22%3A%22u.100054264948189%22%7D%5D%2C%22utc3%22%3A1647775153135%2C%22v%22%3A1%7D",
      "Referer": "https://www.facebook.com/Jennifer-Lawrence-Fans-259013204866313/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "av=100006631660234&__user=100006631660234&__a=1&__dyn=7AzHK4HwkEng5K8G6EjBWo2nDwAxu13wsongS3q2ibwyzE2qwJyEiwsobo6u3y4o0B-q7oc81xoszUsK1Rwwwg8a8465o-cwfG12wOKdwGwQw9m8wsU9kbxS2218wc61axe3S68f85qfK6E7e58jwGzEaE5e7oqBwJK2W5olwUwgojUlDw-wUws9ovUy2a4U32wyBwJCwLyES1Awj888cA0z8c84K&__csr=hs6cbNtlbYpb24h9bSAOEuDlPjmjEJlGJR4khF8R9kO5il_99WVaiITGZACHZ9zivhfqq-8yAy6GFeGO4yuCAG_Xzr_AQbGpat299Qi8GHLAGmamt1OeAGdABqXAVEyKaWy9XBCGXyojCKbXBK4uiiXXgCAV8gzV8x6meoCGxy68hHKFkaDzU9FEmG6ElK15xuufzuU4nxC6XwKxq8zXyUNwwy8fuicyFoO222y5EjAzomyoy588A588EeEswPxW4oa8uKV-cwwwAU9ErwDLG4HwAzE5G22dwiU5y6EeU5W78qAybxy9wSGdz89awww9q0nkw0L-6k08lw5Dw1k901Qi1iwba1ewce0aZz41aw0VyG03H20zQq1Ow2pO1G0kWq7zDhE26wjEC04Co0uUyd01kG0Jobo0bPS8wIy-ZhU0jzwuE0n4oyagS&__req=l&__hs=19071.HYP%3Acomet_pkg.2.1.0.2.&dpr=1.5&__ccg=EXCELLENT&__rev=1005217265&__s=5p6g5s%3Aazxgbn%3Avs5mcs&__hsi=7077140346202010935-0&__comet_req=1&fb_dtsg=AQEeDPJ2Drk0YZs%3A1%3A1647763890&jazoest=21915&lsd=9FugON2-lFptQwF9Q7H5Zu&__spin_r=1005217265&__spin_b=trunk&__spin_t=1647775142&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometPageUnfollowCommitMutation&variables=%7B%22input%22%3A%7B%22is_tracking_encrypted%22%3Atrue%2C%22subscribe_location%22%3A%22PAGE_PROFILE_HEADER%22%2C%22tracking%22%3A%5B%5D%2C%22unsubscribee_id%22%3A%22259013204866313%22%2C%22actor_id%22%3A%22100006631660234%22%2C%22client_mutation_id%22%3A%221%22%7D%2C%22isAdminView%22%3Afalse%2C%22scale%22%3A1.5%7D&server_timestamps=true&doc_id=4880225732053107",
    "method": "POST"
  })
    .then(data => data.json())
    .catch(console.log)
  ));
  console.log("🚀 ~ res", JSON.stringify(res));
})();