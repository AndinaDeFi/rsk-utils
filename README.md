# rsk-utils
RSK Utils to convert keys from BTC to RSK


# How to build the browser application.

- Install NPM:	https://docs.npmjs.com/cli/install

- Install Webpack: $ npm install webpack -g
		
- Run: $ npm install

- Run: $ webpack

- A new "build" folder is created after previous step is executed, in the folder, you would find the the browser app ready to go, just open index.html


**This small application runs within the browser, no call to the server is made. So you can run it off-line.**

---

To use the `btc-private-key-to-rsk-address.js` script run it as:

```bash
node btc-private-key-to-rsk-address.js <HEX-PRIVATE-KEY>
```