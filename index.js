const fetch = require('node-fetch');
const ids = [27998081725, 7872415434, 231599689, 436987299, 32199057249, 2020497276, 50839070244, 226925938, 23452816270, 8495969906, 44969385893, 4269463769, 8223811031, 49388331306, 2016435914, 1477637686, 1604917967, 5871202583, 931156061, 3174090066, 176412339, 1098770550, 1981301115, 3246125692, 51069850746, 51311951892, 6966382791, 1740296068, 19288871375, 249780116, 50270032333, 431409787, 1692889800, 676751335, 49044425006, 52335438380, 2099319245, 522451394, 2308670399, 38494118105, 49277631418, 1446444485, 48057505489, 49258942331, 46865651168, 3880955435, 198698922, 44564552602, 5988845621, 50750262997, 35603583350, 402813582, 8625704083, 7548328768, 308858234, 1704243609, 1639305466, 302444658, 3099463447, 1041613467, 51305654795, 28662243190, 217743367, 41289480402, 1575522619, 332205527, 39639461144, 49334122262, 51231367704, 48201370857, 1481034643, 1621338889, 1070690803, 1046482494, 2239390368, 1641264496, 38552026352, 347757637, 8151335509, 1483929121, 52595772, 50273126948, 9423996158, 6066314159, 226757809, 21298515412, 1313534582, 1404262796, 32801526732, 1395332245, 184786494, 3585045048, 724785058, 48283105521, 6231587801, 1125254144, 35842659627, 9296149, 5760301396, 14634719]
const ids2 = [6830901413, 43879717018, 47601803609, 44439352334, 50370905404, 233118063, 52596336632, 45681575714, 19206336626, 52338766871, 51875885686, 51256961249, 1598757094, 52018340829, 5755935791, 6973700032, 28835600, 36797074350, 48527024215, 1783674779, 2030351067, 4201476394, 8704547556, 19145211, 304276996, 6841910356, 51804601324, 359488294, 50801236824, 2948885967, 44598223740, 2553369548, 2157607964, 52129052542, 29777032165, 423436729, 32058215251, 49598513208, 1727440271, 47378479, 26897300506, 1456713516, 2126700299, 7644022755, 7680693659, 46766956714, 2253985556, 13600229772, 6612793301, 3006297752, 12107902843, 52567097884, 51840103277, 50731300760, 634474324, 49897801059, 42388601157, 7433390666, 3424777849, 15658460636, 5634848531, 14114939820, 42991709461, 26036250590, 2202668779, 22379232711, 38409498334, 370002473, 3171915912, 16510360179, 185467599, 5938174208, 2081756807, 52107421985, 3692981448, 1418804662, 50422180674, 51306160032, 46981928341, 5927588827, 48622526997, 7352709296, 50037971338, 46967795205, 3249641177, 18394365232, 37315758008, 27905384197, 308809112, 4684577089, 5847722349, 7358535930, 50342241163, 2275572552, 7066068915, 33840898242, 4473258178, 48632553812, 27303433879, 28916908920];
(async () => {
  const res = await Promise.all(ids2.map(id => fetch(`https://www.instagram.com/web/friendships/${id}/unfollow/`, {
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
    .then(data => data)
    .catch(console.log)
  ))
  console.log("🚀 ~ res", JSON.stringify(res))
})();
