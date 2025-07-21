# PASWD

Quickly generate secure passwords in your browser with no dodgy stuff.

**References**

- `uuid` — uses [crypto.randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID)
- `aes` — uses [crypto.subtle.generateKey](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/generateKey)
- `words` — pick four random [English words](https://github.com/dwyl/english-words/tree/master) (Unlicence) between 4 and 8 characters long, excluding [stop words](https://github.com/fergiemcdowall/stopword/blob/main/src/stopwords_eng.js) (MIT) using [crypto.getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)
