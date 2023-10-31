# processenv2
### use .env files in your projects

With **processenv2** you have the opportunity to use environment variables directly in your project.
You can parse **.env** files and add them to the global variables ***process.env***.  
You can also specify default values with **processenv2**. These values are used if there is no environment variable. 
This makes it easier to check for errors and use standard configurations.
 
You also have the option to define nested variables, arrays and objects in the environment file

>**This module is compatible with processenv from TheNativeWeb. I would like to thank the team at TheNativeWeb very much.**

*Click here to go to the GitHub page of processenv by TheNativeWeb*
>[TheNativeWeb GitHub](https://github.com/thenativeweb/processenv)

*Click here to go to the npmjs page of processenv by TheNativeWeb*
>[TheNativeWeb npmjs](https://www.npmjs.com/package/processenv)

---
## Installation
```shell
$ npm install processenv2
```
---
### get environment variables
```dotenv
# this .env file is a example
MODE=live
IGNORED=${HOME_PATH}
HOME_PATH=/var/www
LOG_PATH=${HOME_PATH}/log
ACCESS_LOG=${LOG_PATH}/access.log
ERROR_LOG=${LOG_PATH}/error.log
ERROR_MODE='{ "info": "${LOG_PATH}/info.log", "fatal": "${LOG_PATH}/fatal.log", "exception": "${LOG_PATH}/exception.log" }'
ERROR_MODE_ARRAY='[ "info", "fatal", "exception" ]'
```
## basic usage
```js
const { processenv } = require('processenv2');
const home_path = processenv('HOME_PATH');
```
---
## full usage
```js
const { processenv } = require('processenv2');

const getAllEnv = processenv();
/* output: all environment  variables */

const getAllEnvCallback = processenv( (env) => {
    return env;
});
/* output: all environment  variables */

const getEnvByKey = processenv('MODE');
/* output: live */

const getEnvByKeyWithDefaultValue = processenv('MODE_TYPE', 'live');
/* output: live - MODE_TYPE does not exist */

const getEnvByKeyWithDefaultByCallback = processenv('MODE_TYPE', (val) => {
    return val ?? 'live';
});
/* output: live - MODE_TYPE does not exist */

const getEnvByKeyWithOperator = processenv('MODE_TYPE') ?? 'live';
/* output: live - MODE_TYPE does not exist */

const getEnvByKeyWithValidateCallback = processenv('MODE', (val) => {
    return val === 'live';
});
/* output: true - MODE is available and is live */

const getEnvByKeyWithAsyncCallback = await processenv('MODE', async (val) => {
    return val === 'live';
});
/* output: true - MODE is available and is live */

```

### END
> Did you find any suggestions or bugs? Make a pull request or ask your question :-)