//class that will have all the nodes
class LinkedList {
  #head;  //Value of the first node
  #tail;  //Value of the last node
  #size;  //Value of hte size of the linked list

  //Constructor, if no value is given head, tail and size are zero
  constructor(head = 0, tail = 0, size = 0) {
    this.#head = head;
    this.#tail = tail;
    this.#size = size
  }

  //Return the value of the head
  get getHead() {
    return this.#head;
  }

  //Return the value of the tail
  get getTail() {
    return this.#tail;
  }

  //Return the value of the size
  get getSize() {
    return this.#size;
  }

  //Put a value at the end of the linked list
  append(name, value) {
    //Create a new node with the given value
    let newPart = new Node(name, value);
    //Check if the list is empty
    if(this.#head === 0) {
      //If it is empty the head and tail are equal to the new node
      this.#head = newPart;
      this.#tail = newPart;
      //Increase the value of the size
      this.#size += 1; 
    } else {
      //The value of the next node of the tail is equal to the new node
      this.#tail.changeNextNode(newPart);
      //Tail is equal to the new node in the list
      this.#tail = newPart;
      //Increase the value of the size
      this.#size += 1; 
    }
  }

  //Put a value at the beginning of the linked list
  prepend(name, value) {
    //Create a new node with the given value
    let newPart = new Node(name, value);
    //Check if the list is empty
    if(this.#head === 0) {
      //If it is empty the head and tail are equal to the new node
      this.#head = newPart;
      this.#tail = newPart
      //Increase the value of the size
      this.#size += 1; 
    } else {
      //The value of the next node of the new node is equal to the head
      newPart.changeNextNode(this.#head);
      //Head is equal to the new node in the list
      this.#head = newPart;
      //Increase the value of the size
      this.#size += 1; 
    }
  }

  //Returns the node at the given index
  at(index) {
    //Counter that tells in which index the while is
    let counter = 0;
    //A temporal node that starts at the head
    let temporalNode = this.#head;
    //While counter is not bigger than the size of the linked list
    while(counter < this.#size) {
      //If the index is equal to the counter
      if(index === counter) {
        //Get the value of the current node
        let valueNode = temporalNode.getValue;
        return valueNode;
      }
      //Move to the next node
      temporalNode = temporalNode.getNextNode;
      //The counter moves 1, meaning we are moving to the next element in the linked list
      counter += 1;
    }
    //The index is smaller or bigger than the linked list
    return "The index does not exist"
  }

  //Removes the last element of the linked list
  pop() {
    //Check if the list is empty
    if (this.#size === 0) {
      return "The list is empty";
    //Check if the list only has one node
    } else if(this.#size === 1) {
      //Set value to null to delete the space in memory
      this.#head.changeValue(null);
      //The linked list is now empty
      this.#head = 0;
      this.#tail = 0;
      this.#size -= 1;
    } else {
      //Create a variable to store the node that is before the last one
      let previousNode = this.#head;
      //Reduce the size so that the while loop stops before the last node 
      let sizes = this.getSize - 1; 
      let counter = 1;
      //While loop to find the node that is before the last one
      while(counter < sizes) {
        previousNode = previousNode.getNextNode;
        counter += 1;
      }
      //Change the value to null of the last node to delete space in memory
      this.#tail.changeValue(null);
      //Tail becomes the node that is before the last node
      this.#tail = previousNode;
      //The next node now is null, because it was deleted
      this.#tail.changeNextNode(null);
      //Reduce the size of the linked list
      this.#size -= 1;
    }
  }

  //Search the value in the linked list
  contains(value) {
      //Create a counter
      let counter = 0;
      //Temporal node that will pass through all the nodes 
      let temporalNode = this.#head;
      //While loop to check if the counter is less than the size
      while(counter < this.#size) {
        //Check if the value of the node is equal to value we are searching
        if(temporalNode.getValue === value) {
          return true;
        }
        //The temporal node moves to the next one
        temporalNode = temporalNode.getNextNode;
        counter += 1;
      }
      //If there is not a match it returns false
      return false;
  }

  //Returns the index of the value
  find(value) {
    //Create a counter
    let counter = 0;
    //Temporal node that will pass through all the nodes 
    let temporalNode = this.#head;
    //While loop to check if the counter is less than the size
    while(counter < this.#size) {
      //Check if the value of the node is equal to value we are searching
      if(temporalNode.getValue === value) {
        return counter;
      }
      //The temporal node moves to the next one
      temporalNode = temporalNode.getNextNode;
      counter += 1;
    }
    //If there is not a match the value does not exist
    return "The value does not exist";
  }

  //Returns a string with the complete linked list
  string() {
    //Variable to stop when it reaches the end of the linked list
    let stop = 1;
    //The counter starts at the beginning
    let counter = this.#head;
    //Check if the linked list is empty
    if (this.#head === 0) {
      return "The list is empty";
    } else {
      let stringArray = "( ";
      while(stop === 1) {
        //The string save the value of the node
        stringArray += counter.getName;
        stringArray += ": " + counter.getValue;
        stringArray += " ) ";
        //If the next node is empty we are at the end and end the while cycle
        if(counter.getNextNode === null) {
          stop = 0;
        } else {
          //Counter is the next node 
          counter = counter.getNextNode;
          stringArray += "-> ( ";
        }
      }
      stringArray += "-> ";
      stringArray += counter.getNextNode;
      return stringArray;
    }
  }

}

//Class for the node
class Node {
  #name       //Name of the node
  #value;     //Value of the node
  #nextNode;  //Value of the next node

  //Constructor, if no value is given the values are null
  constructor(name = null, value = null, nextNode = null) {
    this.#name = name;
    this.#value = value;
    this.#nextNode = nextNode;
  }

  //Return the value of the node
  get getValue() {
    return this.#value;
  }

  //Return the next node value
  get getNextNode() {
    return this.#nextNode;
  }

  //Return the name of the node
  get getName() {
    return this.#name;
  }

  //Changes the value of the next node
  changeNextNode(node) {
    this.#nextNode = node;
  }

  //Changes the value of the value
  changeValue(value) {
    this.#value = value;
  }
}


//HashMap

class HashMap {
    #loadFactor; //Factor to determine when to increase the size
    #capacity;   //Total size of the hashmap
    #keyArray;   //Array of keys

    //Constructor fro the hashmap
    constructor(loadFactor = 0.75, capacity = 16) {
        this.#loadFactor = loadFactor;
        this.#capacity = capacity;
        this.#keyArray = new Array(this.#capacity);
    }

    //Getter for the load factor
    get getLoadFactor () {
        return this.#loadFactor;
    }

    //Getter for the capacity
    get getCapacity () {
        return this.#capacity;
    }

    //Getter for the array of keys
    get getKeyArrays() {
        return this.#keyArray;
    }

    //Function that creates the hash code
    hash(key) {
        let hashCode = 0;

        const primeNumber = 29;
        const moduleNumber = 1000000;
        for(let i = 0; i < key.length; i++) {
            //Is necessary use module with the moduleNumber to avoid having a large integer that js can not support
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % moduleNumber;
        }

        return hashCode;
    }

    // example() {
    //     let a = this.#keyArray;
    //     for(let i = 0; i < a.length; i++) {
    //         console.log(a[i]);
    //     }
    // }

    //Function that puts the information in the hash map
    set(key, value) {
        let hashCode = this.hash(key);
        let index = hashCode % this.#capacity;
        if(this.#keyArray[index] == undefined) {
            let list = new LinkedList();
            list.append(key, value);
            this.#keyArray[index] = list;
            //PARA BORRAR
            let a = this.#keyArray[index];
            return a.string();
        } 
        let counter = this.#keyArray[index].getHead;
        for (let i = 0; i < this.#keyArray[index].getSize; i++) {
            if(counter.getName == key) {
                counter.changeValue(value);
                return this.#keyArray[index].string();
            }
        }
        this.#keyArray[index].append(key, value)
        return this.#keyArray[index].string();
        //     if (this.#keyArray[index].getName == key) {
        //     this.#keyArray[index].changeValue(value);
        // }
        // console.log(index);


        // return this.#keyArray[1];

        //CUATRO CASOS
        //1.- ESTA VACIO
        //2.- YA HAY UN VALOR Y ES LA MISMA KEY
        //3.- YA HAY UN VALOR Y NO ES LA MISMA KEY
        //4.- YA HAY UN VALOR Y LA LINKED LIST SIGUE
        
    }
    
}

let example = new HashMap();
console.log(example);
console.log(example.getLoadFactor);
console.log(example.getCapacity);
console.log(example.hash("t") % 16);
console.log(example.getKeyArrays);
console.log(example.set("Carlos", "I am the old value"));
console.log(example.set("Carlos", "I am the new value"));
