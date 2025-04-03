# Map in Java

The **Map** interface in Java is a part of the **Java Collections Framework (JCF)** and represents a data structure that maps **keys** to **values**. Each key is associated with a unique value, and you can retrieve a value using its key.

## Main Implementations of Map
Java provides several implementations of the `Map` interface, with the most common ones being:

1. **HashMap**  
   - Does not guarantee the order of elements.  
   - Allows `null` keys and values.  
   - Best performance for basic operations (insertion, lookup, and deletion).  

2. **LinkedHashMap**  
   - Maintains the insertion order of elements.  
   - Slightly slower than `HashMap`, but useful when order matters.  

3. **TreeMap**  
   - Maintains keys sorted in **natural order** (ascending) or using a **custom Comparator**.  
   - Implements `SortedMap`.  
   - Slower than `HashMap` due to sorting operations.  

4. **Hashtable**  
   - Similar to `HashMap`, but **synchronized** (thread-safe).  
   - Does not allow `null` keys or values.  

---

## Key Methods of the Map Interface
The `Map` interface provides several useful methods, including:

- `put(K key, V value)`: Inserts a key-value pair.  
- `get(K key)`: Retrieves the value associated with a key.  
- `remove(K key)`: Removes the entry associated with a key.  
- `containsKey(K key)`: Checks if a key exists.  
- `containsValue(V value)`: Checks if a value exists.  
- `keySet()`: Returns a `Set` of all keys.  
- `values()`: Returns a `Collection` of all values.  
- `entrySet()`: Returns a `Set` of all entries (`Map.Entry<K, V>`).  

---

## Example Usage: HashMap
```java
import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        // Creating a HashMap
        Map<String, Integer> ages = new HashMap<>();

        // Adding elements
        ages.put("Alice", 25);
        ages.put("Bob", 30);
        ages.put("Charlie", 22);

        // Accessing elements
        System.out.println("Bob's age: " + ages.get("Bob"));

        // Checking if a key exists
        System.out.println("Contains key 'Alice'? " + ages.containsKey("Alice"));

        // Iterating over keys
        for (String name : ages.keySet()) {
            System.out.println(name + " is " + ages.get(name) + " years old.");
        }
    }
}
```

---

## When to Use Map?
Use a `Map` when you need to:
- **Store key-value pairs** (e.g., names and ages, codes and descriptions).  
- **Quickly look up a value** using a key.  
- **Ensure unique keys** (each key must be unique).  

If sorting is required, use a `TreeMap`. If insertion order is important, use a `LinkedHashMap`. For best overall performance, `HashMap` is the best choice.
