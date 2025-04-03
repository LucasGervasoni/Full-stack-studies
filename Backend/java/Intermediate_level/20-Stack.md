# Stack

In Java, a **Stack** is a data structure that follows the **LIFO (Last In, First Out)** principle, meaning the last element added is the first to be removed.

---

## 📌 **Stack Characteristics**
- **Last In, First Out (LIFO)**: The last element added is always the first to be removed.
- **Restricted Access**: Only the top of the stack can be accessed directly.
- **Common Uses**:
  - **Backtracking algorithms** (e.g., solving mazes, recursion).
  - Managing function calls in the **execution stack**.
  - Undo/Redo functionality in text editors.

---

## 📌 **Stack Implementation in Java**
The **`Stack<E>` class** is part of the `java.util` package and extends the `Vector<E>` class. It provides specific methods for stack operations.

### **Creating a Stack in Java**
```java
import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        // Adding elements (push)
        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println(stack); // [10, 20, 30]

        // Removing elements (pop)
        int removed = stack.pop();
        System.out.println("Removed element: " + removed); // 30

        // Accessing the top of the stack (peek)
        int top = stack.peek();
        System.out.println("Top of the stack: " + top); // 20
    }
}
```

---

## 📌 **Main Methods of the `Stack` Class**
| **Method**  | **Description** |
|------------|-------------|
| `push(E item)` | Adds an element to the top of the stack. |
| `pop()` | Removes and returns the top element of the stack. |
| `peek()` | Returns the top element without removing it. |
| `isEmpty()` | Returns `true` if the stack is empty. |
| `search(Object o)` | Returns the position of an element in the stack (1-based) or `-1` if not found. |

---

