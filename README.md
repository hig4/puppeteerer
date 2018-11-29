# puppeteerer

puppeteerを使って指定したJSコードを実行するためのdocker
```
$ docker run --rm hig4/puppeteerer [JSのURL]
```
`puppeteer.launch()`を呼び出す際に`--no-sandbox`オプションが必要
（`index.js`を参照）