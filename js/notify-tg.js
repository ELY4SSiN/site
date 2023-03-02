function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let ntfy = getCookie("ntfy");
  if (ntfy != "") {
    alert("Welcome again ");
  } else {
    setCookie("ntfy", "true", 30);
    ntfy_tg()
  }
}

function ntfy_tg() {
	var queryString = location.search
	let urlparams = new URLSearchParams(queryString)
	let reference = urlparams.get("ref")
	let MSG_userAgent = navigator["userAgent"]
	let MSG_platform = navigator["platform"]
	var xhr = new XMLHttpRequest();
	var CHAT_ID="-1001677796872&"
	var BOT_TOKEN="6076260434:AAE-4_K8zy9ZYpF3ugltL4oeMQs_BjOb1IM"
	var url = "https://api.telegram.org/bot"+BOT_TOKEN+"/sendMessage";
	var MSG = "log: Bonjour, vous avez une nouvelle visite sur votre site web. %0Aref:"+reference+"%0APlatform:"+MSG_platform+
			  "%0AUserAgent:"+MSG_userAgent
	var params = "chat_id="+CHAT_ID+"&text="+MSG;
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);
}

checkCookie()
