const http = require('http');

class HttpError extends Error {
  constructor(code, message = 'Something went wrong.') {
    super(`${message} HTTP code ${code}`);
  }
}

const port = 8081;
const account = require('./card.json');

function readJson(req) {
  return new Promise((resolve, reject) => {
    let result = '';

    // eslint-disable-next-line no-return-assign
    req.on('data', chunk => (result += chunk)).on('end', () => {
      try {
        resolve(JSON.parse(result));
      } catch (e) {
        reject(e);
      }
    });
  });
}

async function handleRegister(req, res) {
  if (req.method !== 'PUT') throw new HttpError(405);

  const creditCardInfo = await readJson(req);

  const cardMeta = ['cardnumber', 'cvv', 'expiry', 'name'];

  const propsValid = Object.keys(creditCardInfo).every(prop => cardMeta.includes(prop));

  if (!propsValid) {
    throw new HttpError(400, 'Bad Request!');
  }

  account.cardnumber = creditCardInfo.cardnumber;
  account.cvv = creditCardInfo.cvv;
  account.expiry = creditCardInfo.expiry;
  account.name = creditCardInfo.name;

  console.warn(`${account.name}'s data was stored`);

  res.writeHead(200);
  res.end();
}

async function handleRequest(req, res) {
  try {
    switch (req.url) {
      case '/api/register':
        await handleRegister(req, res);
        break;
      default:
        throw new HttpError(404);
    }
  } catch (e) {
    console.error(e);
    res.writeHead(e.code);
    res.write(e.message);
    res.end();
  }
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'PUT');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  handleRequest(req, res);
});

// eslint-disable-next-line no-console
server.listen(port, () => console.log('Server is online: http://localhost:%s', port));
