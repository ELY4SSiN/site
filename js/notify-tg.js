
var queryString = location.search
let urlparams = new URLSearchParams(queryString)
let reference = urlparams.get("ref")

var xhr = new XMLHttpRequest();
var CHAT_ID="-1001677796872&"
var BOT_TOKEN="6076260434:AAE-4_K8zy9ZYpF3ugltL4oeMQs_BjOb1IM"
var url = "https://api.telegram.org/bot"+BOT_TOKEN+"/sendMessage";
var MSG = "log: Bonjour, vous avez une nouvelle visite sur votre site web, ref="+reference
var params = "chat_id="+CHAT_ID+"&text="+MSG;
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send(params);
