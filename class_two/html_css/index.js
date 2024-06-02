let idris;
const name = 'victor';
var prosper;

let school = "access"
let city = "lagos"
var age = 44
const tofunmi = {
    name: 'funmi',
    age: 20
}

var x = 3

var x = 5




const wears = [ 'jeans', 'cropTop', 't-shirt', 'vest', 'jersey', 'bucketCap', 'joggers']

const bankAccount = {
    acctName: "idris",
    acctNum: 123456,
    email:"adeniyi@gmial.com",
    balance: 42000,
    transferOut: 10000,
    transeferIn: 20000
}

let lola = 15;

lola += 20;

alert(lola)


let dev =15

let lol = 20

alert(dev === 15)
alert(dev < 15)
alert(dev >= 15)
alert(dev >  17 ?  "yes" : "no")

let lla = false

let cca = 7

let dodo = 5

let gba = lla ? cca : dodo

alert(gba)



let ko = 5

let yi = 7


alert(yi > 5 ? "signed in successful": "password incorrect")




const tree = {
    branches: 30, 
    name: 'mango',
    color: 'green',
    wave: function(){
        alert('the'+ " " + this.name + " " + 'tree has' + " " + this.branches + "branches")
    },
    
    design: function(){
        document.querySelector('#demo').innerHTML= "this"+ " "+ this.name + " " +" tree is color"+ this.color
    },

    breaks: function(){
        document.querySelector('.lol').innerHTML= 'the '+ this.name+" " + "tree lost"+ " " + this.branches+'branches'
    }
} 


tree.wave()
tree.design()
tree.breaks()








