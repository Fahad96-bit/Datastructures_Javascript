class Node{
  constructor(val){
this.val=val
this.next=null
  }
}

class SinglyLinkedList{
constructor(){
this.head=null
this.tail=null
this.length=0
}
push(val){
  const node = new Node(val)
  if(!this.head){
this.head=node
this.tail=node
  }else{
    this.tail.next=node
    this.tail=node
  }
  this.length++
return this
}
pop(){
if(!this.head) return undefined

let current = this.head
let newTail=current
while(current.next){
  newTail=current
  current = current.next
}
this.tail=newTail
this.tail.next=null

this.length--
if(this.length===0){
  this.head=null
  this.tail=null
}
return current
}
shift(){
  if(!this.head) return undefined;
  var currentHead = this.head;
  this.head = currentHead.next;
  this.length--;
  if(this.length === 0){
      this.tail = null;
  }
  return currentHead;
}
unshift(val){
  const node = new Node(val)
  if(!this.head){
this.head=node
this.tail=node
  }else{
    node.next=this.head
    this.head=node
  }
  this.length++
return this
}
get(index){
  if(index < 0 || index >= this.length) return null;
  var counter = 0;
  var current = this.head;
  while(counter !== index){
      current = current.next;
      counter++;
  }
  return current;
}
set(value,index){
  let foundNode=this.get(index)
  if(foundNode){
    foundNode.val=value
    return true
  }
  return false
}
insert(index, val){
  if(index < 0 || index > this.length) return false;
  if(index === this.length) return !!this.push(val);
  if(index === 0) return !!this.unshift(val);

  var newNode = new Node(val);
  var prev = this.get(index - 1);
  var temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
  this.length++;
  return true;
}
remove(index){
  if(index < 0 || index >= this.length) return undefined;
  if(index === 0) return this.shift();
  if(index === this.length - 1) return this.pop();
  var previousNode = this.get(index - 1);
  var removed = previousNode.next;
  previousNode.next = removed.next;
  this.length--;
  return removed;
}
reverse(){
let node = this.head
this.head=this.tail
this.tail=node
let prev=null
let next
for(let i=0;i<this.length;i++){
next=node.next
node.next=prev
prev=node
node=next
}

}
}
const list = new SinglyLinkedList()
// list.push(23)
// list.pop()
list.push(13)
list.push(27)
list.push(32)
list.push(71)
list.reverse()

// list.shift()
// list.shift()


console.log('list',list)