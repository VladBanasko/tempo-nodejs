const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method retunrs the system uptime in seconds

console.log(`system uptime ${os.uptime}`)

const currentOS = {
            name: os.type(),
            release: os.release(),
            totelMem: os.totalmem(),
            freeMem: os.freemem(),
}
console.log(currentOS);