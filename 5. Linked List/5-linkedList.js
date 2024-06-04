class Node {
	constructor(id, payload) {
		this.id = id;
		this.payload = payload;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(id, payload) {
		const newNode = new Node(id, payload);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	remove(id) {
		if (!this.head) {
			return;
		}
		if (this.head.id === id) {
			this.head = this.head.next;
			return;
		}
		let current = this.head;
		let prev = null;
		while (current && current.id !== id) {
			prev = current;
			current = current.next;
		}
		if (!current) {
			return; // ID not found
		}
		prev.next = current.next;
	}

	modify(id, newPayload) {
		let current = this.head;
		while (current) {
			if (current.id === id) {
				current.payload = newPayload;
				return;
			}
			current = current.next;
		}
	}
}

// Example Usage:
const list = new LinkedList();
list.append(1, "Payload 1");
list.append(2, "Payload 2");
list.append(3, "Payload 3");

console.log("Original List:");
console.log(list);

list.remove(2);
console.log("\nList after removing node with ID 2:");
console.log(list);

list.modify(1, "Modified Payload 1");
console.log("\nList after modifying payload of node with ID 1:");
console.log(list);
