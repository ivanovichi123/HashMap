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
      //Change the name to null of the last node to delete space in memory
      this.#tail.changeName(null);
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
  
  //Deletes an specific index of the LinkedList
  delete(index) {
    //Check if the list is empty
    if (this.#size === 0) {
      return false;
    //Check if the list only has one node
    } else if(this.#size === 1) {
      //Set value and name to null to delete the space in memory
      this.#head.changeValue(null);
      this.#tail.changeName(null);
      //The linked list is now empty
      this.#head = 0;
      this.#tail = 0;
      this.#size -= 1;
      return true;
      //Check if the index is the first Node
    } else if (index == 0) {
      //Variable for the current node
      let currentNode = this.#head;
      //Move the head to the next node
      this.#head = this.#head.getNextNode;
      //Set values to null to erase space in memory
      currentNode.changeValue(null);
      currentNode.changeName(null);
      currentNode.changeNextNode(null);
      //The size decreases
      this.#size -= 1;
      return true;
    } else {
      //Create a variable to store the node that is before the index node
      let previousNode = this.#head;
      let counter = 1;
      //While loop to find the node that is before the index
      while(counter < index) {
        previousNode = previousNode.getNextNode;
        counter += 1;
      }
      let currentNode = previousNode.getNextNode;
      //Change the value to null of the last node to delete space in memory
      currentNode.changeValue(null);
      //Change the name to null of the last node to delete space in memory
      currentNode.changeName(null);
      //The previous node next node is the next node of the current one
      previousNode.changeNextNode(currentNode.getNextNode);
      //The next node now is null, because it was deleted
      currentNode.changeNextNode(null);
      //If the index was in the last node, the tail is equal to the previous node
      if(index == this.#size - 1) {
        this.#tail = previousNode;
      }
      //Reduce the size of the linked list
      this.#size -= 1;
      return true;
    }
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

  //Changes the value of the name
  changeName(value) {
    this.#name = value;
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

    //Function that puts the information in the hash map
    set(key, value) {
      //Create the hash code
      let hashCode = this.hash(key);
      //Determine the index of the bucket that will receive the key and value
      let index = hashCode % this.#capacity;
      //checks if the index is within the array bounds
      if (index < 0 || index >= this.#capacity) {
        throw new Error("Trying to access index out of bounds");
      }
      //Check if the index is empty
      if(this.#keyArray[index] == undefined) {
          //Create a new linked list that will store the values
          let list = new LinkedList();
          //Append to the linked list a node with the key and value
          list.append(key, value);
          //The index stores the linked list
          this.#keyArray[index] = list;
          //INICIA BORRAR, ESTO SOLO ES PARA IR CHECANDO QUE FUNCIONE
          let a = this.#keyArray[index];
          return a.string();
          //ACABA BORRAR, SOLO DEBE DE HABE RUN RETURN
      } 
      //If the index already has a linked list, create a counter to iterate over the the nodes
      let counter = this.#keyArray[index].getHead;
      //For loop to iterate the linked list
      for (let i = 0; i < this.#keyArray[index].getSize; i++) {
        //Check if the key already exists in the linked list
        if(counter.getName == key) {
          //Update the value to the new one
          counter.changeValue(value);
          //INICIA BORRAR, ESTO SOLO ES PARA IR CHECANDO QUE FUNCIONE
          return this.#keyArray[index].string();
          //ACABA BORRAR, SOLO DEBE DE HABE RUN RETURN
        }
        //Go to the next node
        counter = counter.getNextNode;
      }
      //After the for loop we know that there is not a same key so we append the new node
      this.#keyArray[index].append(key, value);
      //INICIA BORRAR, ESTO SOLO ES PARA IR CHECANDO QUE FUNCIONE
      return this.#keyArray[index].string(); 
      //ACABA BORRAR, SOLO DEBE DE HABE RUN RETURN   
      //AQUI FALTA EL HACER CRECER EL ARRAY AL FINAL
    }

    //Get the value of the key
    get(key) {
      //Get the hash code of the key
      let hashCode = this.hash(key);
      //Determine the index of the bucket of the key
      let index = hashCode % this.#capacity;
      //Checks if the index is within the array bounds
      if (index < 0 || index >= this.#capacity) {
        throw new Error("Trying to access index out of bounds");
      }
      //If the index is empty
      if(this.#keyArray[index] == undefined) {
        return null;
      } else {
        //If the index is not empty, create a counter to iterate over the the nodes
        let counter = this.#keyArray[index].getHead;
        //For loop to iterate the linked list
        for(let i = 0; i < this.#keyArray[index].getSize; i++) {
          //Check if the name of the node is equal to the key
          if(counter.getName == key) {
            return counter.getValue;
          }
          //If it is not equal continue to the next node
          counter = counter.getNextNode;
        }
        //Return null if no equal keys are found
        return null;
      }
    }

    //Check if the hash map has the key
    has(key) {
      //Get the hash code of the key
      let hashCode = this.hash(key);
      //Determine the index of the bucket of the key
      let index = hashCode % this.#capacity;
      //Checks if the index is within the array bounds
      if (index < 0 || index >= this.#capacity) {
        throw new Error("Trying to access index out of bounds");
      }
      //If the index is empty
      if(this.#keyArray[index] == undefined) {
        return false;
      } else {
        //If the index is not empty, create a counter to iterate over the the nodes
        let counter = this.#keyArray[index].getHead;
        //For loop to iterate the linked list
        for(let i = 0; i < this.#keyArray[index].getSize; i++) {
          //Check if the name of the node is equal to the key
          if(counter.getName == key) {
            return true;
          }
          //If it is not equal continue to the next node
          counter = counter.getNextNode;
        }
        //Return false if no equal keys are found
        return false;
      }
    }

    //Remove a key of the hash map
    remove(key) {
      //Get the hash code of the key
      let hashCode = this.hash(key);
      //Determine the index of the bucket of the key
      let index = hashCode % this.#capacity;
      //Checks if the index is within the array bounds
      if (index < 0 || index >= this.#capacity) {
        throw new Error("Trying to access index out of bounds");
      }
      //If the index is empty
      if(this.#keyArray[index] == undefined) {
        return false;
      } else {
        //If the index is not empty, create a counter to iterate over the the nodes
        let counter = this.#keyArray[index].getHead;
        //For loop to iterate the linked list
        for(let i = 0; i < this.#keyArray[index].getSize; i++) {
          //Check if the name of the node is equal to the key
          if(counter.getName == key) {
            //Delete the node in the index
            return this.#keyArray[index].delete(i);
          }
          //If it is not equal continue to the next node
          counter = counter.getNextNode;
        }
        //Return false if no equal keys are found
        return false;
      }
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
console.log(example.set("t", "I am the t old value"));
console.log(example.set("t", "I am the t new value"));
console.log(example.get("i"));
console.log(example.get("t"));
console.log(example.get("Carlos"));
console.log(example.has("i"));
console.log(example.has("t"));
console.log(example.has("Carlos"));
console.log(example.remove("t"));
console.log(example.set("t", "I am back"));
console.log(example.has("t"));
console.log(example.remove("Carlos"));
console.log(example.remove("t"));
console.log(example.set("t", "I am back"));
console.log(example.set("Carlos", "I am also back"));
console.log(example.hash("d") % 16);
console.log(example.set("d", "hello"));
console.log(example.remove("t"));
console.log(example.set("t", "I am back"));
console.log(example.remove("Ivan"));



