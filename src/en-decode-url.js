/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const hashMap = {
    number: 0
}

var encode = function(longUrl) {
    hashMap[++hashMap.number] = longUrl;
    return `http://tinyurl.com/${hashMap.number}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const key = shortUrl.slice(19, shortUrl.length);
    return hashMap[key];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter an url to be shorten: ', (url) => {
    const encodedUrl = encode(url);
    console.log(`Encoded URL: ${encodedUrl}`);
    // console.log(encodeURI)
    console.log(`Decoded URL: ${decode(String(encodedUrl))}`);
    rl.close();
});