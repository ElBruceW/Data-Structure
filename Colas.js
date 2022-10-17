//Colas en javascript

class Queue {
    constructor(){
        this.item = [];
    }

    enqueue(item){
        this.item.push(item)
    }
    dequeque(item){
        this.item.shift(item)
    }
    peek(item){
        return this.item[0];
    }

    isEmpty(){
        return this.item.length === 0 ?false:true
    }

    showValues(){
        this.item.forEach(values => {
            console.log(values)
        })
        return this.item.keys()
    }


}

const Persons = new Queue();
Persons.enqueue('Bruce')
Persons.enqueue('IO')
Persons.enqueue('SEP')
Persons.showValues()

Persons.dequeque()
Persons.showValues()



