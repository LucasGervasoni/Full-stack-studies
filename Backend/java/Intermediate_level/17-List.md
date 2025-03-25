# List in Java

In Java, `List` is part of the `java.util` package and is an **interface** that represents an ordered collection of elements, allowing duplicates. Unlike an array, a `List` can dynamically grow or shrink as elements are added or removed.

---

## Main Implementations of `List`
Since `List` is an interface, it cannot be instantiated directly. The most commonly used implementing classes are:

1. **`ArrayList`** (most common)
2. **`LinkedList`**
3. **`Vector`** (less used today)
4. **`Stack`** (based on `Vector`)

### 📌 `ArrayList`
- Uses an **internal array** to store elements.
- Best for **fast random access** by index (O(1)).
- **Slower** for insertions and deletions in the middle of the list (O(n)).

```java
import java.util.ArrayList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        
        names.add("Ana");
        names.add("Bruno");
        names.add("Carlos");
        
        System.out.println(names); // [Ana, Bruno, Carlos]

        names.remove("Bruno"); // Remove by value
        names.remove(0); // Remove by index

        System.out.println(names); // [Carlos]
    }
}
```

---

### 📌 `LinkedList`
- Uses a **doubly linked list**.
- Best for **fast insertions and deletions** (O(1) at head or tail).
- **Slower** for random access by index (O(n)).

```java
import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {
    public static void main(String[] args) {
        List<Integer> numbers = new LinkedList<>();
        
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        
        numbers.add(1, 15); // Inserts 15 at position 1

        System.out.println(numbers); // [10, 15, 20, 30]
    }
}
```

---

## Common `List` Methods

| Method              | Description |
|---------------------|-------------|
| `add(element)`     | Adds an element to the end of the list. |
| `add(index, elem)` | Inserts an element at a specific index. |
| `get(index)`       | Returns the element at the specified index. |
| `set(index, elem)` | Replaces an element at a specific index. |
| `remove(index)`    | Removes the element at the specified index. |
| `remove(Object o)` | Removes the first occurrence of an element. |
| `size()`           | Returns the size of the list. |
| `isEmpty()`        | Returns `true` if the list is empty. |
| `contains(obj)`    | Returns `true` if the list contains the element. |
| `indexOf(obj)`     | Returns the index of the first occurrence of the element. |

---

## 📌 Iterating Over a `List`
### 🔹 Using `for-each`
```java
for (String name : names) {
    System.out.println(name);
}
```

### 🔹 Using `for` with index
```java
for (int i = 0; i < names.size(); i++) {
    System.out.println(names.get(i));
}
```

### 🔹 Using `Iterator`
```java
import java.util.Iterator;

Iterator<String> iterator = names.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

### 🔹 Using `Stream API`
```java
names.forEach(System.out::println);
```

---

## Comparison Between `ArrayList` and `LinkedList`

| Feature            | `ArrayList` | `LinkedList` |
|--------------------|------------|-------------|
| **Access by index** | ✅ Fast (O(1)) | ❌ Slow (O(n)) |
| **Insertion/Deletion in the middle** | ❌ Slow (O(n)) | ✅ Fast (O(1) if at start/end) |
| **Memory usage** | ✅ Lower (internal array) | ❌ Higher (linked nodes) |

---

## When to Use Each?
- **`ArrayList`** → Best for **frequent reads** and fast index access.
- **`LinkedList`** → Best for **frequent insertions and deletions**.

---
