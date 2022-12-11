# Simple reverse proxy

A simple reverse proxy that can be used to proxy requests to a backend server.

Built to aid testing in development.

Uses NodeJS/ExpressJS.

```js
"Set environment variables in a .env file to configure the proxy"

APP_PORT - 'The port the proxy will serve from'                defaults to 3000;
APP_HOST - 'The host the proxy will serve from'                defaults to '0.0.0.0';
API_PATH - 'The path the api should serve from'                defaults to '/todos';
API_TARGET - 'Where the api is actually running'               defaults to 'http://localhost:3001';
STATIC_DIRECTORY - 'The local path for serving static files'   defaults to '../todo-frontend-vanilla';
```
```
             ________________________________________________
            /                                                \
           |    _________________________________________     |
           |   |                                         |    |
           |   |  > npm install                          |    |
           |   |  > npm start                            |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |                                         |    |
           |   |_________________________________________|    |
           |                                                  |
            \_________________________________________________/
                   \___________________________________/
                ___________________________________________
             _-'    .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.  --- `-_
          _-'.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.  .-.-.`-_
       _-'.-.-.-. .---.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-`__`. .-.-.-.`-_
    _-'.-.-.-.-. .-----.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-----. .-.-.-.-.`-_
_-'.-.-.-.-.-. .---.-. .-------------------------. .-.---. .---.-.-.-.`-_
:-------------------------------------------------------------------------:
`---._.-------------------------------------------------------------._.---'
                      (Ascii art by Roland Hangg)
```

