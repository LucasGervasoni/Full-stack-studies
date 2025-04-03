# **Deque (Double-Ended Queue) in Java**  

The **Deque** (Double-Ended Queue) is a data structure that allows adding and removing elements from both the front and the back of the queue. It is part of the **Java Collections Framework** and is defined by the `Deque` interface in the `java.util` package.

## **Main Implementations of Deque**
Java provides two main implementations of `Deque`:

1. **ArrayDeque** (`java.util.ArrayDeque`)
   - Based on a dynamically resizable array.
   - No capacity limit (expands dynamically).
   - Faster than `LinkedList` for stack and queue operations.
   - **Does not allow `null` elements**.

2. **LinkedList** (`java.util.LinkedList`)
   - Based on a doubly linked list.
   - Allows `null` as an element.
   - Ideal when there are many insertions and deletions in the middle of the structure.

---

## **Key Methods of the Deque Interface**
The `Deque` interface combines the methods of both `Queue` and `Stack` interfaces, offering operations for inserting and removing elements at both ends:

### **Inserting Elements**
- `addFirst(E e)`: Inserts at the front (throws an exception if it fails).
- `offerFirst(E e)`: Inserts at the front (returns `false` if it fails).
- `addLast(E e)`: Inserts at the end (throws an exception if it fails).
- `offerLast(E e)`: Inserts at the end (returns `false` if it fails).

### **Removing Elements**
- `removeFirst()`: Removes from the front (throws an exception if empty).
- `pollFirst()`: Removes from the front (returns `null` if empty).
- `removeLast()`: Removes from the end (throws an exception if empty).
- `pollLast()`: Removes from the end (returns `null` if empty).

### **Accessing Elements**
- `getFirst()`: Retrieves the first element (throws an exception if empty).
- `peekFirst()`: Retrieves the first element (returns `null` if empty).
- `getLast()`: Retrieves the last element (throws an exception if empty).
- `peekLast()`: Retrieves the last element (returns `null` if empty).

---

## **Example Usage with ArrayDeque**
```java
import java.util.Deque;
import java.util.ArrayDeque;

public class DequeExample {
    public static void main(String[] args) {
        // Creating a Deque with ArrayDeque
        Deque<String> deque = new ArrayDeque<>();

        // Adding elements to the front and back
        deque.addFirst("First");
        deque.addLast("Last");

        // Accessing elements
        System.out.println("First element: " + deque.peekFirst());
        System.out.println("Last element: " + deque.peekLast());

        // Removing elements
        deque.removeFirst();
        System.out.println("After removal, first element: " + deque.peekFirst());
    }
}
```

---

## **When to Use Deque?**
- When you need to **insert and remove elements from both ends of the queue**.
- To implement **structures like Stacks and Queues**.
- If you need **better performance than `LinkedList`**, `ArrayDeque` is generally faster.

