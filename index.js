const { User } = require('./1-constructor-functions.js')
const { LinkedList } = require('./2-linked-lists.js')
const { log, logAll, addAndLog, binarySearch } = require('./3-big-o-notation.js')
const { factorial } = require('./4-recursion.js')
const { BST } = require('./5-binary-search-tree.js')
const { HashTable } = require('./6-hash-table.js')


// >>> CONSTRUCTOR FUNCTIONS & "THIS" KEYWORD & PROTOTYPE
console.log("\n\n>>> CONSTRUCTOR FUNCTIONS & 'THIS' KEYWORD & PROTOTYPE\n")
let user200 = new User('user', '200', '300', 'binary')
console.log(user200);
console.log(user200.emailDomain)
console.log(user200.getEmailAddress())


// >>> LINKED LISTS
console.log("\n\n>>> LINKED LISTS\n")
let ll = new LinkedList();
ll.addToTail('one');
ll.addToTail(2000);
ll.addToTail('two');
ll.addToTail('three');
ll.addToTail(19);
ll.addToTail('three');
ll.addToTail(2);
console.log(ll)
// console.log(ll.removeTail(3000));
console.log(ll.indexOf('three'))


// >>> BIG O NOTATION
console.log("\n\n>>> BIG O NOTATION\n")

// Constant runtime - Big O Notation:  "O (1)"
log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Linear runtime - Big O Notation:  "O (n)"
logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);

// Exponential runtime - Big O Notation: "O (n^2)"
addAndLog(['A', 'B', 'C']);  // 9 pairs logged out
addAndLog(['A', 'B', 'C', 'D']);  // 16 pairs logged out
addAndLog(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out

// Logarithmic runtime - Big O Notation: O (log n)
console.log(binarySearch(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], 'H'))

// >>> RECURSION
console.log("\n\n>>> RECURSION\n")
console.log(factorial(4))

// >>> BINARY SEARCH TREE
console.log("\n\n>>> BINARY SEARCH TREE\n")

//              50  
//       30             70
//     20  45        60    100
//    10  35        59    85 105

let bst = new BST(50);

bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)

console.log('\nShow Branch Value')
console.log(bst.right.left.left) // 59
console.log(bst.right.right) // 100
console.log(bst.left.right.left) // 35

console.log('\nContains Value')
console.log(bst.contains(50)); // true
console.log(bst.contains(15)); // false
console.log(bst.contains(100)); // true

// Depth-First Traversal
console.log('\nDepth-First Traversal')
function logNode(node) {
  console.log(node);
}
console.log('\n bottom to top')
bst.depthFirstTraversal(logNode, 'in-order');
console.log('\n top to bottom')
bst.depthFirstTraversal(logNode, 'pre-order');
console.log('\n bottom to top branch by branch')
bst.depthFirstTraversal(logNode, 'post-order');

// Bread-First Traversal
console.log('\nBread-First Traversal')
function logChild(node) {
  console.log(node.value);
} 
bst.breadFirstTraversal(logChild)

console.log('\nMIN and MAX values (more on the left and more on the right)')
console.log('MIN:', bst.getMinVal() )
console.log('MAX:', bst.getMaxVal() )

// >>> HASH TABLE
console.log("\n\n>>> HASH TABLE\n")

let myHT = new HashTable(30)

console.log('\nprintout a hash table ')
console.log(myHT)

console.log('\nprintout a hash bucket index ')
console.log(myHT.hash('Franco'))

console.log('\ninsert new nodes into hash table')
myHT.insert('Dean', 'dean@gmail.com')
myHT.insert('Leo', 'leo@hotmail.com')
myHT.insert('Dane', 'dane@hotmail.com')

console.log('\nupdate new nodes into hash table')
myHT.insert('Dean', 'deanmachine@hotmail.com')
myHT.insert('Leo', 'leomachine@gmail.com')
myHT.insert('Dane', 'danemachine@gmail.com')
myHT.insert('Franco', 'franco@gmail.com')
myHT.insert('Meli', 'meli@gmail.com')
myHT.insert('Paco', 'paco@gmail.com')

console.log('\nget a node from hash table buckets')
console.log(myHT.get('Leo'))
console.log(myHT.get('Dane'))

console.log('\nretrieve all nodes in buckets')
console.log(myHT.retrieveAll())

console.log('\n', myHT.buckets);