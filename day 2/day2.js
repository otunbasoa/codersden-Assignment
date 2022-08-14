let challenge = '30 Days Of JavaScript';
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(1,21))
console.log(challenge.substring(0,2))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(' '))
let techCompanies = 'Facebook Google Microsoft Apple IBM Oracle Amazon' 
console.log(techCompanies.split(' '))
console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
console.log(sentence.substr(,))
let removeSpace = ' 30 Days Of JavaScript '
console.log(removeSpace.trim())
console.log(challenge.startsWith(3))
console.log(challenge.endsWith('t'))
let pattern = /a/gi
console.log(challenge.match(pattern))
let merge = '30 days of'
console.log(merge.concat( ' ', 'JavaScript'))
console.log(challenge.repeat(2))
let quote = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another"
console.log(quote)
let newQuote = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"quote by Mother Teresa"
console.log(newQuote)

let num = '10';
let number = parseInt(num);
console.log(number)
console.log(num == 10)


let newNum = '9.8'
let numFloat = parseFloat(newNum)
console.log(numFloat)
console.log(Math.round(numFloat))
console.log(Math.round(numFloat) == 10)

let word = 'python'
let wordNew = 'jargon'
console.log(word.includes('on'))
console.log(wordNew.includes('on'))

let newSetence = "I hope this course is not full of jargon"
console.log(newSetence.includes('jargon'))
Math.floor((Math.random()*10)+1);

let rand = Math.floor (Math.random()*101)
console.log(rand)


let newRand = Math.floor(Math.random()*256)
console.log(newRand)

let gen = Math.floor(Math.random() * 51) + 50
console.log(gen)

let string = 'JavaScript'
let newString = Math.random(string)
console.log(string)



let united = "1\t1\t1\t1\t1"
space = "2\t1\t2\t4\t8"
done = "3\t1\t3\t9\t27"
gone = "4\t1\t4\t16\t64"
lone = "5\t1\t5\t25\t125"
console.log(united)
 console.log(space)
console.log(done)
console.log(gone)
console.log(lone)

let sent = 'You cannot end a sentence with because because because is a conjunction'

console.log(sent.substr(0, 30))


let sentence4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern5 = /love/gi
console.log(sentence4.match(pattern5))

let words ='You cannot end a sentence with because because because is a conjunction'
let wordPat = /because/gi
console.log(words.match(wordPat))