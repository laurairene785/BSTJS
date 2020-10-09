/* BST in js
Copyrigth 2020 Laura Irene Capo Hdz*/



function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;

}

/*The Node object stores both data and links to other nodes (left and right). There is
also a show() function for displaying the data stored in a node*/

function BST() {
    this.root = root;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;

}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;

    } else {
        var current = this.root;
        var parent;
        if (data < current.data) {
            if (current.left == null) {
                current.leftChild = data;
                current.parent = current;
            } else {
                insert(data, current.leftChild);
            }
        } else {
            if (current.rigthChild == null) {
                current.rigthChild = data;
                current.parent = current;
            } else {
                insert(data, current.rigthChild);
            }
        }
    }
}