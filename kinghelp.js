/* Coded By Ravindu Manoj.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/

function successfullMessage(msg) {
    return "π±π° *πKing bot π*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π₯΄ *πKing bot π*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "π² *πKing bot π*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
