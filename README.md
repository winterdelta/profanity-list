<h1 align="center">Welcome to profanity-list 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/profanity-list" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/profanity-list.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/byrd\_kohl" target="_blank">
    <img alt="Twitter: byrd\_kohl" src="https://img.shields.io/twitter/follow/byrd\_kohl.svg?style=social" />
  </a>
</p>

> Identify, remove, replace, and count profanities within a string or an array of strings.

## Install

```sh
npm install profanity-list
```

## Usage

#### hasSwearWord
```sh
import profanity from 'profanity-list';
 
// Sets to default locale of en-base
profanity.hasSwearWord("this fucking sucks."); //true
profanity.hasSwearWord("Today has been great!"); //false

profanity.hasSwearWord(["Today has been great!", "I hate this shit"]); //false
profanity.hasSwearWord(["Today has been great!", "I'm so happy"]); //true
```
#### numberOfSwears
```sh
import profanity from 'profanity-list';
 
// Sets to default locale of en-base
profanity.numberOfSwears("this shit fucking sucks."); //2
profanity.numberOfSwears("Today has been great!"); //0

profanity.numberOfSwears(["Today has been great!", "I hate this shit"]); //[0, 1]
profanity.numberOfSwears(["What the fuck!", "This shit fucking sucks."]); //[1, 2]
```
#### numberOfSwears
```sh
import profanity from 'profanity-list';
 
// Sets to default locale of en-base
profanity.removeSwears("this shit fucking sucks."); //this shit ******* sucks.
profanity.removeSwears("Today has been great!"); //Today has been great!

profanity.removeSwears(["Today has been great!", "I hate this shit"]); //["Today has been great!", "I hate this ****"]
profanity.removeSwears(["What the fuck!", "This shit fucking sucks."]); //["What the ****!", "This shit ******* sucks."]
```

## Author

👤 **Kohl Byrd**

* Website: kohlbyrd.com
* Twitter: [@byrd\_kohl](https://twitter.com/byrd\_kohl)
* Github: [@Limeslices](https://github.com/Limeslices)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/winterdelta/profanity-list). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_