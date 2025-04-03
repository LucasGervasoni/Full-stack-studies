# Set in Java

The **Set** interface in Java is part of the **Java Collections Framework (JCF)** and represents a **collection of unique elements**, meaning **duplicates are not allowed**. It is useful when we need to store distinct items without a specific order or with a sorting criterion.

---

## Main Implementations of Set

Java provides three main implementations of the `Set` interface:

### 1. **HashSet**
   - Based on a hash table (internally uses `HashMap`).  
   - **Does not guarantee order** of elements.  
   - Best performance for basic operations (insertion, lookup, and deletion).  
   - Allows `null` as an element.  

### 2. **LinkedHashSet**
   - Similar to `HashSet`, but **maintains the insertion order** of elements.  
   - Useful when the insertion order must be preserved.  
   - Slightly slower than `HashSet` due to maintaining order.  

### 3. **TreeSet**
   - Implements the `SortedSet` interface and **keeps elements sorted**.  
   - Based on a **self-balancing tree (Red-Black Tree)**.  
   - Slower than `HashSet` for insertion and deletion due to automatic sorting.  
   - Does not allow `null`.  

---

## Key Methods of the Set Interface

The `Set` interface inherits methods from the `Collection` interface, such as:

- `add(E element)`: Adds an element (if it does not already exist).  
- `remove(Object element)`: Removes an element.  
- `contains(Object element)`: Checks if the element is present.  
- `size()`: Returns the number of elements in the set.  
- `isEmpty()`: Checks if the set is empty.  
- `clear()`: Removes all elements.  
- `iterator()`: Returns an iterator to traverse the elements.  

---

## Example Usage: HashSet

```java
import java.util.HashSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        // Creating a HashSet
        Set<String> names = new HashSet<>();

        // Adding elements
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");
        names.add("Alice"); // Ignored, as it already exists in the set

        // Displaying elements (order not guaranteed)
        System.out.println("Set elements: " + names);

        // Checking if an element exists
        System.out.println("Contains 'Bob'? " + names.contains("Bob"));

        // Iterating over elements
        for (String name : names) {
            System.out.println(name);
        }
    }
}
```

---

## When to Use Set?

Use a `Set` when you need to:
- **Store unique elements** without allowing duplicates.  
- **Quickly check** if an element exists (especially with `HashSet`).  
- **Maintain insertion order**, using `LinkedHashSet`.  
- **Automatically keep elements sorted**, using `TreeSet`.  

If sorting is required, use `TreeSet`. If insertion order is important, prefer `LinkedHashSet`. For best performance, `HashSet` is the best choice.
