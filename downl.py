"""
{
  "link": "https://mdelta.123tokyo.xyz/get.php/1/50/V-huZdv9ODQ.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=_tNX-tpkDljCe4sHfmGpXg&s=1713037832&n=I%20Like%20Me%20Better%20Mashup%20-%20Sush%20%26%20Yohan%F0%9F%8C%BB%E2%9D%A4%20%E2%80%A2%20Lauv%20%E2%80%A2%20Dildaara%20%C3%97%20Tu%20Hi%20Yaar%20Mera%20%E2%80%A2",
  "title": "I Like Me Better Mashup - Sush & Yohan🌻❤ • Lauv • Dildaara × Tu Hi Yaar Mera •",
  "filesize": 3673465,
  "progress": 0,
  "duration": 213.21142920684,
  "status": "ok",
  "msg": "success"
}
"""

import requests

downloadurl="https://mdelta.123tokyo.xyz/get.php/1/50/V-huZdv9ODQ.mp3?cid=MmEwMTo0Zjg6YzAxMDo5ZmE2OjoxfE5BfERF&h=_tNX-tpkDljCe4sHfmGpXg&s=1713037832&n=I%20Like%20Me%20Better%20Mashup%20-%20Sush%20%26%20Yohan%F0%9F%8C%BB%E2%9D%A4%20%E2%80%A2%20Lauv%20%E2%80%A2%20Dildaara%20%C3%97%20Tu%20Hi%20Yaar%20Mera%20%E2%80%A2"

title= "I Like Me Better Mashup - Sush & Yohan🌻❤ • Lauv • Dildaara × Tu Hi Yaar Mera •"


req=requests.get(downloadurl)

with open(title+".mp3",'wb') as f:
    f.write(req.content)
