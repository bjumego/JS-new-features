"use strict";


//const typeGoods = 'food';


//console.log('https://market.com/'+ typeGoods);
//console.log('https://market.com/'+ typeGoods + '/'+ '10');


//console.log(`https://market.com/${typeGoods}`);


/*
Задание


Вывести в консоль с помощью интеполяции  адрес
https://market.com/games/strategy/10
сохранить в Github. коммит - интеполяция



*/

"use strict";

const games = "game";

const type = "type";

console.log(`https://market.com/${games}/${type}`);
//console.log(`https://market.com/${games}`);

"use strict";
 let number = 10;
 //замыкания (сама функция, вместе с тем что ей доступно)
 function showMessage(text) {

    "use strict";

    let number = 10;
    
    function showMessage(text) {
        console.log(text);
        //let number = 20;
        console.log(number)
    }
    
    showMessage("Hello!!!");
    console.log(number);
    
    const server = function() {
        console.log('server start...');
    }
    
    server();
    
    const calc = (x, y) => x+y;
    // const calc = (x, y) => {
    //      return x+y    
    //};
    
    //const calc = x => x+10;
    
    console.log(calc(10,5));
    
    
    
    
    "use strict"
    
    function server(){
        setTimeout(function(){
            console.log(1);
        },1000)
    }
    function foo (){
                console.log(2);
        }
    
    
    server();
    foo();
    
    function serverNew(host, callback){
        console.log(`Server ${host} is starting...`);
        callback();
    }
    
    //serverNew('MyServer', function (){
    //  console.log('connect success!');
    //   }); 
    
    function done (){
        console.log('connect success!');
    }
    
    serverNew('MyServer', done);


    "use strict";

    //const obj = new Object();  //один из вариантов создания обьектов


    //самый частный вариант создания обьекта

    const option = {
        name: 'test',
        width: '640',
        height: '480',
        colors: {
            border: 'black',
            bg: 'red'
        }
    };
    
    console.log(option.name);
    console.log(option['name']); //rezshe ispolzuemiy variant notatcii

    // delete option.name;  // udalenie kakogo libo svoistva is objecta

    console.log(option);

    //kolichestvo svoistv v ojbecte
    console.log(counter);

    console.log(Object.keys(option));
    console.log(Object.keys(option).length);

    //Dobavim povedenie dlja objecta

    const option2 = {
        name: 'test',
        width: '640',
        height: '480',
        colors: {
            border: 'black',
            bg: 'red'
        },
        makeTest: function(){ //metod objecta
            console.log("Yes!"),
        }
    };
    
    option2.makeTest();

    //destrukturizacija objecta (vitaskivaem nuznie nam svotistva)
    const {border, bg} = option2.colors;
    console.log(border);

    //5

    "use strict";

    const arr = [1,2,5,8,9];

    console.log(arr);

    //Udalitj posledniy element is massive
    arr.pop();
    console.log(arr);

    arr.push(10); //dobavt elemnt v konec massiva
    console.log(arr);

    //perebrat elementq
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    
    for (let value of arr){ //ne rabotaet s objektom
        console.log(value);
    }
    
    //dlina massiva ne vsegda dlina) poslednie index. plus 1
    const arr2 = [1,2,5,8,9];
    //arr2[99] = 0; //tak delat nelsa)
    console.log(arr2.length);
    console.log(arr2);

    //metodi massivov
    //chasto ispolsuetsa dlja pereborov. Nedastatok v otlicii ot obichniq ciklov - nelsa ostanovit
    arr2.forEach(function(item, i, arr2){  //call-back funkcii
        console.log(`${i}: ${item} vnutri massive ${arr2}` );
    });
    
    //sroky v massiv. Naprimer bolwoi spisok tovarov cheres zap9tu - v massiv
    const str = prompt(",");
    const products = str.split(",");
    console.log(products);

    //funkcii dlja sortirovki chisle. Peredaetsa v call-back
    //opisianie http://algolist.ru/sort/quick_sort.php
    products.sort(compareNum);
    function compareNum(a,b){
        return a-b;
    }
    console.log(products);
    //metodi ne rabotaju dlja psevdomassiov

    //333

"use strict";

//pereda4a po zna4eniyu (primitivnie tipi dannih)
let a = 5;
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
}

const copy = obj;

copy.a = 10;

console.log(obj);
console.log(copy);

const newObj = Object.assign ({}, obj);
newObg.a = 15;
console.log (newObj);

const oldArray = ['a', 'x' 'y'];
const newArray = oldArray.slice();

newArray[0] = 5;
console.log(oldArray);
console.log(newArray);

const video = [ 'youtube', 'vimeo', 'facebook'],
      blogs = ['wordpress', 'twitter', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'instagram'];

console.log(internet);

function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 8];

log(...num);

const ar = [4,3,0];
const NewAr = [...ar];

const aaa = {
    first: 1,
    second: 2
};

const newA = {...aaa};
    
    "use strict";

    //svoistva-akssesori get set

    const person = {
        name: "John",
        age: 28,

        get userAge(){
            return this.age;
        },
        set userAge(num){
            this.age = num;
        }
        
    };
    
    
    //svoistva! Poetomu obrawaemsa bes skobok, imenno kak k svoistvu, a ne k metodu
    console.log(person.userAge);
    console.log(person.userAge = 30);
    console.log(person.userAge);


    //inkapsylacija

    function User (name, age){
        this.name = name;
        this.age = age;

        this.say = function(){
            console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
        };
    }
    
    const john = new User('John', 22);
    john.age = 30; //vozmozno prjamod obrawenie k  svoistvu
    console.log(john.name);
    console.log(john.age);
    john.say();

    // s inkapsulacijej

    function User2 (name, age){
        this.name = name;
        let userAge = age;

        this.say = function(){
            console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
        };
    }
    
    const ann = new User2('Ann', 22);

    //john.age = 30; //vozmono prjamoe obrawenie k svoisvtvu
    console.log(ann.name);
    console.log(ann.userAge); //yze ne mozen obtatitsa k svoitsvu
    ann.say();
     
    //////////////////////////////////////////

    function User3 (name, age){
        this.name = name;
        let userAge = age;

        this.say = function(){
            console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
        };
        
        this.getAge = function(){
            return userAge;
        }
        this.setAge = function(age){
            if(typeof age == 'number' && age > 0 && age <100){
                userAge = age;
            }else{
                console.log('недопустимое значение!')
            }
        }
    }
    
    const kirill = new User3('Kirill', 25);
    
    //kirill.age = 30; //vozmono prjamoe obrwanie k svoistvu

    console.log(kirill.name);
    console.log(kirill.userAge); //yze ne mozem obtatisa k svoitsvu
    console.log(kirill.getAge());
    kirill.setAge(33);
    kirill.setAge(333);
    kirill.setAge('fwefwe');
    kirill.say();

    ////////////////
    // inkapsulacija . klass


    class Author {
        constructor(name, age){
            this.name = name;
            this._age = age; //inkapsulacija polja v klasse(dogovorennost)
        }
        
        #surname = 'Maal'; //privatnoe polje
 
        say = () => {
            console.log(`Имя пользователя: ${this.name}, ${this.#surname} возраст ${this._age}`);
            }
            
            get age(){  
                return  this._age;
            }
            set age(age){
                if(typeof age === 'number' && age > 0 && age <100){
                    this._age = age;
                }else{
                    console.log('недопустимое значение!')
                }
            }
        }
        
        const ivan = new Author('Ivan', 25);

        console.log(ivan.name);
        ivan.age = 99;
        console.log(ivan.age);

        ivan.say();

        "use strict";

        const num = 1;

        //anonimnoja samovizvajusisa funkcii (sodaem lokalnuju oblast vidimosti)
        (function(){
            let num = 2;
            console.log(num);
            console.log(num +1);

        }());
        
        console.log(num);

        //obketniq interfeic (vtoroy sposob modulnosti)
        const user = (function(){
            const privat = function(){
                console.log ('I m privat');
            };
            
            return {
                sayHello: privat //ekportruem naruzu lokalnuju svoitstvo
            }
            
        }());
        
        user.sayHello();

        //Rabociq variant 3 (error)
        console.log("Запрос данных...");
        const req = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("Подготовка данных...");

                const product = {
                    name: 'phone',
                    price: 300
                };
                
                resolve(product)
            },2000);
        });
        
        
        req.then((product)=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=> {
                    product.status = 'order';
                    //resolve(product);
                    reject();
                    },    2000);
                });
                
        }).then(data=>{
            data.modify = 'true';
            return data;
        }).then(data=>{
            console.log(data);
        }).catch(()=>{
            console.error('ERROR!')
        }
        );
        
        //Rabociq variant 4 (finanly)
        console.log("Запрос данных...");
        const req = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                console.log("Подготовка данных...");

                const product = {
                    name: 'phone',
                    price: 300
                };
                
                resolve(product);
            },2000);
        });
        
        req.then((product)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    product.status = 'order';
                    resolve(product);
                    reject();
                },   2000);
            });
        }).then(data=>{
            data.modify = 'true';
            return data;
        }).then(data=>{
            console.log(data);
        }).catch(()=>{
            console.error('ERROR!')
        }).finally(()=>{
            console.log("Все действия выполнены!");
        });
        //---------------------------------------------------------------
        
        const test  = time => {
            return new Promise ( resolve => {
                setTimeout (()=> resolve(), time);
            });
        };
        
        test(1000).then(() => console.log('1000 ms'));
        test(2000).then(() => console.log('2000 ms'));
        
        Promise.all([test(4000),  test (1000)]).then (()=>{
            console.log('All');
        });
        
        ////////////////////FETCH API  
        
        "use strict";
        
        //https://jsonplaceholder.typicode.com/  API
        
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json ())
        .then(json => console.log (json));
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST" ,
            body: JSON.stringify({name: "Alex"}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));

            


    













