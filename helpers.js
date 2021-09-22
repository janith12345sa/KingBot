/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj


*/

function successfullMessage(msg) {
    return "🇱🇰 *😈King bot 😈*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "😈King bot 😈*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "❄ *😈King bot 😈*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
