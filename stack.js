class stack {
  constructor() {
    this.item = []
  }
  push(item) {
    this.item.unshift(item)
  }

  pop(item) {
    this.item.shift(item)
  }
  peek(item) {
    return this.item[0]
  }
  isEmpty() {
    return this.item.length === 0
  }
}
