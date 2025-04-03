# Iterator in Java

The **Iterator** in Java is an interface from the **Java Collections Framework (JCF)** used to traverse elements of a collection in a safe and uniform way without needing to know its internal implementation.

## 📌 Why Use an Iterator?
- Allows iterating over collections without directly accessing indices (as in lists).
- Works with **any collection** that implements `Collection` (such as `List`, `Set`, and `Queue`).
- Enables **safe removal** of elements during iteration.

---

## 📌 Main Methods of the Iterator Interface
The `Iterator<T>` interface is in the `java.util` package and has the following key methods:

- `boolean hasNext()`: Returns `true` if there are more elements in the collection.
- `T next()`: Returns the next element in the collection.
- `void remove()`: Removes the current element from the collection (optional).

---

## 📌 Example Usage with `ArrayList`
```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class IteratorExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        // Creating an Iterator
        Iterator<String> iterator = names.iterator();

        // Iterating through elements using Iterator
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```

🔹 **Output:**  
```
Alice  
Bob  
Charlie  
```

---

## 📌 Removing Elements During Iteration
If we try to remove an item directly in a `for-each` loop, we will get a `ConcurrentModificationException`. The `Iterator` solves this issue with the `remove()` method.

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class IteratorRemovalExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        Iterator<String> iterator = names.iterator();
        
        while (iterator.hasNext()) {
            String name = iterator.next();
            if (name.equals("Bob")) {
                iterator.remove(); // Removing safely
            }
        }

        System.out.println(names); // [Alice, Charlie]
    }
}
```

---

## 📌 Difference Between `Iterator` and `ListIterator`
The `ListIterator` is an extension of `Iterator`, available only for **lists** (`List`), and has additional methods:

- `hasPrevious()`: Checks if there is a previous element.
- `previous()`: Returns the previous element.
- `add(E e)`: Adds an element at the current position.
- `set(E e)`: Modifies the last returned element.

**Example:**  
```java
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class ListIteratorExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        ListIterator<String> listIterator = names.listIterator(names.size());

        // Iterating through the list in reverse order
        while (listIterator.hasPrevious()) {
            System.out.println(listIterator.previous());
        }
    }
}
```
🔹 **Output:**  
```
Charlie  
Bob  
Alice  
```

---

## 📌 When to Use `Iterator`?
✅ When you need to iterate over any type of collection without relying on indices.  
✅ When you need to remove elements safely during iteration.  
✅ When you need to iterate over lists **in both directions** (`ListIterator`).  
