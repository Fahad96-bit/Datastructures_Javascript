class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    const node = new Node(val)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
    return this
  }
  unshift(val) {
    const node = new Node(val)
    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.length++
    return this
  }
  shift() {
    if (this.length === 0) return undefined
    const deletedNode = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = deletedNode.next
      this.head.prev = null
      deletedNode.next = null
    }
    this.length--
    return deletedNode
  }
  set(index, val) {
    if (index < 0 || index >= this.length) return false
    const current = this.head
    let count = 0
    while (index != count) {
      count++
      current = current.next
    }
    current.val = val
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    let current = this.head
    let count = 0
    while (index != count) {
      count++
      current = current.next
    }
    if (index === 0) {
      this.head = current.next;
    }
    if (index === this.length - 1) {
      this.tail = current.prev
    }
    // if it is not tail
    if (current.next !== null) {
      current.next.prev = current.prev;
    }
    // if it not head
    if (current.prev !== null) {
      current.prev.next = current.next;
    }

    current.next = null
    current.prev = null
    this.length--
    return current
  }
  pop() {
    const current = this.tail
    if (this.length === 1) {
      this.tail = null
      this.head = null
    } else {
      current.prev.next = current.next
      this.tail = current.prev
    }
    this.length--
    return current
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let current
    let count
    if (index <= Math.floor(this.length / 2)) {
      current = this.head
      count = 0
      while (count !== index) {
        count++
        current = current.next
      }
    } else {
      current = this.tail
      count = this.length - 1
      while (count !== index) {
        count--
        current = current.prev
      }
    }
    return current
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return undefined
    var newNode = new Node(val);
    let beforeNode
    let afterNode = this.head
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      let count = 0
      while (index != count) {
        count++
        afterNode = afterNode.next
      }
      if (!afterNode) {
        beforeNode = this.tail
        beforeNode.next = newNode
        newNode.prev = beforeNode
        this.tail = newNode
      }
      else {
        beforeNode = afterNode.prev
        if (!beforeNode) {
          afterNode.prev = newNode
          newNode.next = afterNode
          this.head = newNode
        } else {
          newNode.next = afterNode
          afterNode.prev = newNode
          beforeNode.next = newNode
          newNode.prev = beforeNode
        }
      }
    }
    this.length++
    return true
  }
  reverse(){
    let temp = null;
    let current = this.head

    for(let i=0;i<this.length;i++){
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp != null) {
      this.tail=this.head
      this.head = temp.prev;
    }
    return this
  }
}




const list = new DoublyLinkedList()
list.push(2)



console.log('list', list.reverse())