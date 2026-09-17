//задача 1. Метод объекта с this
function createBook(title, author){
    let object={
        title: title,
        author: author,
        describe(){ console.log(`Книга '${this.title}' автора ${this.author}`)}
    };
    return object;
};
console.log(`   Результаты 1 задания`);
let book = createBook("Война и мир", "Толстой");
book.describe();


//задача 2. Потеря this и ее исправление

let counter={
    count: 0,
    increment: function() {this.count++; console.log(this.count);}
}
console.log(`
    Результаты 2 задания`);

let inc = counter.increment; 
inc(); // NaN, т.к this  стал глобальным объектом. у глобального объекта нет значения count-> undefined-> undefined++-> NaN 

counter.increment()
inc = counter.increment.bind(counter); // привязали this к объекту counter
inc() 


//задача 3
console.log(`
    Задача 3`)

let timer={
    seconds: 0,
    start: function() {
        let intervalId=setInterval(()=>{this.seconds++; console.log(this.seconds);
    },1000);
    
    setTimeout(() => {
        clearInterval(intervalId);
        console.log(`Прошло 5 секунд`);
    }, 5000);

}
    
};

timer.start();