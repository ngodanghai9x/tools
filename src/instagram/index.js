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
      "x-asbd-id": "198387",
      "x-csrftoken": "QZeZo2RetQYHyR8VHCZZRidOoATu47lT",
      "x-ig-app-id": "936619743392459",
      "x-ig-www-claim": "hmac.AR1PQis0c4KLgWpcQ7zJIehLQGjiAeV0noEJXMuVSwN_UR-E",
      "x-instagram-ajax": "fde055a3a0e4",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "ig_did=0D9AA8AF-6F8C-4E2C-8D2E-3355F17859FA; mid=YFSvFQALAAHlnH8idxvi5B0QV866; fbm_124024574287414=base_domain=.instagram.com; shbid=\"10433\\0542989212782\\0541679294206:01f7407fc4854bb932fd803dbcb935d7b7b438d40a236568fb33c6edd284a67469633957\"; shbts=\"1647758206\\0542989212782\\0541679294206:01f7eaacc1bda854d5f5053860369caabf2b9fcc6d36db38ff63504b014c5c23873e4db3\"; ig_nrcb=1; fbsr_124024574287414=sVpvtifXCJFzbVynZ5idRgWhZ_dfEEDCVjVSMuZcdG0.eyJ1c2VyX2lkIjoiMTAwMDA2NjMxNjYwMjM0IiwiY29kZSI6IkFRQmRJVEZxQjk3TmV6dFBmMFA0TWVoYUFEZ1VNZnhYTDM1Tk9uOVd6aGNUT2g5OTJYYU5RbEZQS2M3bjlZZy1QQTdkNXRibTh6YmhTM2dXWGVZSWFnLTgyenF3NTdZaU9ERnJjdkVpQU50bnVILWgyVk9DMU9UZkRhdEpxbkdtYy1lX1B0UlZXc2hZSGw4azUzNHpVbnhOcHRUU1gya3QxNENBYVBDZFVZR0JQVnl3MGgxcFAxejhWRWVvQVpNV0xPNVUyMlJSaHRHWW4xZGtiRXlGX2RVa21RWHhJYXJjdGV5dmFFaXd1U25VV2hWOEdWVXJCcnlmX3lmSnc1ODdnSXJIZTgzeUVSUmIwTkdTVU9rb0dUb0xCckFPWUN3bElVUS1oWHJGZHptRm5UbW8wRDF2ck1Yd1E3cTFfUktfY2RFZlE1aUhFbTgtNFpWZHlWcGNROVIzbmhyYzB0VDM1Ri1Hd05pRHpzRXJKdyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFCNkJFaGZMOUhmWUNaQkljdFVIQVBsRUdaQXpXV2lJZ09zU3hpbHhZd00xbFRtS0RpOGlGa2lSV3Y2cFU0RjB0WkN5dFNPWDZ3NEpIODN4UE1IaG9PYjJ4ak42bDRMMFZHNDdEY1ZiQlJkVFhDeG9ZbWR4YVZLMDR4a21EbFpDYU52b3l0N0tKWXhrcHFqcFpCRk83V2w0UFFYWkEwekhnZjJEWkFCcDRySTd4QjhaQld5c2p3eFcxTEZaQXdINjBBZ1pEWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY0Nzc2MzkyMX0; csrftoken=QZeZo2RetQYHyR8VHCZZRidOoATu47lT; ds_user_id=2989212782; sessionid=2989212782%3AMY1bRQvt8INZ6b%3A27; fbsr_124024574287414=sVpvtifXCJFzbVynZ5idRgWhZ_dfEEDCVjVSMuZcdG0.eyJ1c2VyX2lkIjoiMTAwMDA2NjMxNjYwMjM0IiwiY29kZSI6IkFRQmRJVEZxQjk3TmV6dFBmMFA0TWVoYUFEZ1VNZnhYTDM1Tk9uOVd6aGNUT2g5OTJYYU5RbEZQS2M3bjlZZy1QQTdkNXRibTh6YmhTM2dXWGVZSWFnLTgyenF3NTdZaU9ERnJjdkVpQU50bnVILWgyVk9DMU9UZkRhdEpxbkdtYy1lX1B0UlZXc2hZSGw4azUzNHpVbnhOcHRUU1gya3QxNENBYVBDZFVZR0JQVnl3MGgxcFAxejhWRWVvQVpNV0xPNVUyMlJSaHRHWW4xZGtiRXlGX2RVa21RWHhJYXJjdGV5dmFFaXd1U25VV2hWOEdWVXJCcnlmX3lmSnc1ODdnSXJIZTgzeUVSUmIwTkdTVU9rb0dUb0xCckFPWUN3bElVUS1oWHJGZHptRm5UbW8wRDF2ck1Yd1E3cTFfUktfY2RFZlE1aUhFbTgtNFpWZHlWcGNROVIzbmhyYzB0VDM1Ri1Hd05pRHpzRXJKdyIsIm9hdXRoX3Rva2VuIjoiRUFBQnd6TGl4bmpZQkFCNkJFaGZMOUhmWUNaQkljdFVIQVBsRUdaQXpXV2lJZ09zU3hpbHhZd00xbFRtS0RpOGlGa2lSV3Y2cFU0RjB0WkN5dFNPWDZ3NEpIODN4UE1IaG9PYjJ4ak42bDRMMFZHNDdEY1ZiQlJkVFhDeG9ZbWR4YVZLMDR4a21EbFpDYU52b3l0N0tKWXhrcHFqcFpCRk83V2w0UFFYWkEwekhnZjJEWkFCcDRySTd4QjhaQld5c2p3eFcxTEZaQXdINjBBZ1pEWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY0Nzc2MzkyMX0; rur=\"EAG\\0542989212782\\0541679300269:01f76a3eaf9dfd5ffc47a8fe6345af7a7f8f41cbae2f64a978b3e3cfa81741400b2fd75b\"",
      "Referer": "https://www.instagram.com/ngodanghai_/following/",
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