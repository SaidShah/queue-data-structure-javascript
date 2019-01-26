//QUEUE data-structure

// a queue is FIFO => First In First Out

// queue methods are

// isEmpty() => returns whether a queue is empty or not

// getFront() => returns the front of the queue, the first one waiting to get out

// dequeue() => to remove an element from the queue

// enqueue() => to add an element to a queue
let queue = []

document.getElementById("enqueue").addEventListener("click",()=>{
  document.getElementById("isEmpty").innerHTML=''
  document.getElementById("get-front").innerHTML = ""
  let value = document.getElementById("user-input").value
  if(value.length > 0 && value !== " "){
    queue.push(value)
    document.getElementById("user-input").value = ''
  }
  this.displayQueue()
})

document.getElementById("dequeue").addEventListener("click",()=>{
  document.getElementById("isEmpty").innerHTML=''
  document.getElementById("get-front").innerHTML = ""
  if(queue.length > 0){
    queue.shift()
    document.getElementById("user-input").value = ''
  }
  this.displayQueue()
})

displayQueue=()=>{
let values = queue.map(eachItem=>{
    return `<h1 class="small-box-text small-box">${eachItem}</h1> `
  }).join('')
  document.getElementById("queue-box").innerHTML = values
}

document.getElementById("isEmpty-button").addEventListener("click",()=>{
  document.getElementById("isEmpty").innerHTML=''
  let answer;
  if(queue.length > 0){
    answer = `<h1 class="text-align-center">The length is: ${queue.length}</h1>`
  }else{
    answer = `<h1 class="text-align-center">The queue is empty </h1>`
  }
  document.getElementById("isEmpty").innerHTML=answer
})

document.getElementById("get-front-button").addEventListener("click",()=>{
  document.getElementById("get-front").innerHTML = ""
  let answer;
  if(queue.length > 0){
    answer = `<h1 class="text-align-center">The Front is: ${queue[0]}</h1>`
  }else{
    answer = `<h1 class="text-align-center">The queue is empty </h1>`
  }
  document.getElementById("get-front").innerHTML=answer
})
