class Node{
  constructor(val){
    this.val=val
    this.next=null
    this.prev=null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head=null
    this.tail=null
    this.length=0
  }
push(val){
    const node = new Node(val)
   if(this.length===0){
      this.head=node
      this.tail=node
   }
   else{
    this.tail.next=node
    node.prev=this.tail
    this.tail=node
   }
   this.length++
   return this
  }
pop(){
    if(!this.head) return undefined;
    var poppedNode = this.tail;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
}
shift(){
  if(!this.head) return undefined;
   let oldHead=this.head
   if(this.length===1){
    this.head=null
    this.tail=null
   }else{
    this.head=oldHead.next
    this.head.prev=null
    oldHead.next=null
   }
   this.length--
   return oldHead
}
unshift(val){
  const node = new Node(val)
 if(this.length===0){
  this.head=node
  this.tail=node
 }else{
 this.head.prev=node
 node.next=this.head
 this.head=node

 }
 this.length++
return this

}
get(index){
  if(index < 0 || index >= this.length) return null;
  var count, current;
  if(index <= Math.floor(this.length/2)){
      count = 0;
      current = this.head;
      while(count !== index){
          current = current.next;
          count++;
      }
  } else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index){
          current = current.prev;
          count--;
      }
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
insert(val,index){
  if(index < 0 || index > this.length) return false;
  if(index === this.length) return !!this.push(val);
  if(index === 0) return !!this.unshift(val);
  var newNode = new Node(val);
  var beforeNode = this.get(index - 1);
  var afterNode = prev.next;
  beforeNode.next = newNode, newNode.prev = beforeNode;
  newNode.next = afterNode, afterNode.prev = newNode;
  this.length++;
  return true;
}
remove(index){
  if(index < 0 || index >= this.length) return undefined;
  if(index === 0) return this.shift();
  if(index === this.length - 1) return this.pop();
  var removedNode = this.get(index);
  var beforeNode = removedNode.prev;
  var afterNode=removedNode.next
  beforeNode.next = afterNode;
  afterNode.prev=beforeNode
  removedNode.next=null,removedNode.prev=null
  this.length--;
  return removedNode;
}
}

const list = new DoublyLinkedList()
list.push(5)
list.push(9)
list.push(8)
list.push(10)
list.push(12)
list.push(15)
console.log('list',list.remove(2),list)
