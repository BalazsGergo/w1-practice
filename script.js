
let champions = [
 {
  "name": 'Azir',
  "winrt": 50 
 },

 {
  "name": 'Akali',
  "winrt": 49 
 },

 {
  "name": 'Zed',
  "winrt": 52 
 }

]


for (i = 0; i < champions.length;i++) {
  let element = champions[i]

  // console.log(element.winrt + '%')
  if (element.winrt >= 50 && element.name.length === 4) {
    console.log(` ${element.name} this champ is op!!!!`)
  }
}