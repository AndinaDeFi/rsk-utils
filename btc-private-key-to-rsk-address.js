if (!process.argv[2]) {
  console.log(
    "Falta el private key en hex. Ej: node btc-private-key-to-rsk-address.js <PRIVATE-KEY>"
  );
} else {
  const wallet = require("ethereumjs-wallet").default;

  function hexToBytes(hex) {
    for (var bytes = [], c = 0; c < hex.length; c += 2)
      bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
  }

  const privateKey = process.argv[2];

  const address =
    "0x" +
    wallet
      .fromPrivateKey(Buffer.from(hexToBytes(privateKey)))
      .getAddress()
      .toString("hex");

  console.log(address);
}
