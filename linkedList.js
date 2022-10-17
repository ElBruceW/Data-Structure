class linkedList{
    constructor(){
        this.nodes = []
    }

    get size(){
        return this.nodes.length
    }

    get head(){
        return this.nodes.length ? this.nodes[0] : null
    }

    get tail(){
        return this.nodes.length ? this.nodes[this.size -1] : null
    }

    insertAt(index,value){
        const previusNode = this.nodes[index - 1] || null
        const nextNode = this.nodes[index] || null
        const node = {value,next:nextNode}

        if(previusNode) previusNode.next = node
        this.nodes.splice(index,0,node)
    }

    insertFirst(value){
        this.insertAt(0,value)
    }

    insertLast(value){
        this.insertAt(this.size,value)
    }

    getAt(index){
        return this.nodes[index]
    }

    removeAt(index){
        const previusNode = this.nodes[index - 1]
        const nextNode = this.nodes[index+1] || null

        if(previusNode) previusNode.next = nextNode

        return this.nodes.splice(index,1)
    }

    clear(){
        this.nodes = []
    }


}

const list = new linkedList()

list.insertFirst(10)
list.insertFirst(5)
list.insertFirst(1)

console.log(list)

list.removeAt(2)
console.log(list)

list.insertLast(100)
console.log(list)
list.insertFirst(200)
console.log(list)

list.insertAt(0,300)
console.log(list)

