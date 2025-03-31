# Queue

In Java, a **Queue** is a data structure that follows the **FIFO (First In, First Out)** principle, meaning the first element added is the first to be removed.

---

## 📌 **Queue Characteristics**
- **First In, First Out (FIFO)**: The first element inserted in the queue will be the first to be removed.
- **Common Uses**:
  - **Processing queues**, such as web server requests.
  - **Print buffers** and asynchronous tasks.
  - **Task scheduling** in operating systems.

---

## 📌 **Queue Implementation in Java**
The `Queue<E>` interface is part of the `java.util` package and has different implementations, such as:
- `LinkedList<E>` → Implementation based on a linked list.
- `PriorityQueue<E>` → Implementation based on a priority queue.
- `ArrayDeque<E>` → Implementation based on an array, more efficient than `LinkedList`.

### **Creating a Queue with `LinkedList`**
```java
import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();

        // Adding elements (offer or add)
        queue.offer("A");
        queue.offer("B");
        queue.offer("C");

        System.out.println(queue); // [A, B, C]

        // Removing elements (poll)
        String removed = queue.poll();
        System.out.println("Removed: " + removed); // A

        // Accessing the first element (peek)
        System.out.println("First in queue: " + queue.peek()); // B
    }
}
```

---

## 📌 **Main Methods of the `Queue<E>` Interface**
| **Method**  | **Description** |
|------------|-------------|
| `offer(E e)` | Adds an element to the queue (returns `false` if the queue is full). |
| `add(E e)` | Adds an element to the queue (throws an exception if the queue is full). |
| `poll()` | Removes and returns the first element of the queue (`null` if empty). |
| `remove()` | Removes and returns the first element of the queue (throws an exception if empty). |
| `peek()` | Returns the first element without removing it (`null` if empty). |
| `element()` | Returns the first element without removing it (throws an exception if empty). |

---

## 📌 **Different Implementations of Queue**

### **📌 PriorityQueue**
A queue where elements are ordered by priority (natural order or custom comparator).
```java
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        pq.offer(30);
        pq.offer(10);
        pq.offer(20);

        System.out.println(pq.poll()); // 10 (smallest number first)
    }
}
```

### **📌 ArrayDeque**
More efficient than `LinkedList` for standard queues.
```java
import java.util.ArrayDeque;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new ArrayDeque<>();

        queue.offer("X");
        queue.offer("Y");

        System.out.println(queue.poll()); // X
    }
}
```

---