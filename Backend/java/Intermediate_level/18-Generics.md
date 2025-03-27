
# **Generics in Java**

Generics is a feature in Java introduced in Java 5 that allows you to create classes, interfaces, and methods parameterized by types. This means you can write more flexible and reusable code while ensuring type safety at compile time.

---

## **1. Motivation for Using Generics**
Before generics, collections stored objects of type `Object`, requiring **explicit casting** and leading to **runtime errors** if an unexpected type was encountered. Here is an example without generics:

```java
import java.util.ArrayList;

public class WithoutGenerics {
    public static void main(String[] args) {
        ArrayList list = new ArrayList(); // Without Generics
        list.add("Text");
        list.add(10); // Allowed, but may cause runtime error

        String text = (String) list.get(0); // Casting required
        System.out.println(text);
        
        // String error = (String) list.get(1); // RUNTIME ERROR
    }
}
```


Here, we can add any type to the list, which may lead to **ClassCastException**.

---

## **2. How Generics Solve the Problem**
With generics, we can specify the data type that a collection can store, preventing **casting errors** and **improving code readability**:

```java
import java.util.ArrayList;

public class WithGenerics {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>(); // List of Strings
        list.add("Text");
        // list.add(10); // COMPILATION ERROR

        String text = list.get(0); // No need for casting
        System.out.println(text);
    }
}
```

Now, if we try to add a number (`10`), the error occurs **at compile time**.

---

## **3. Creating a Generic Class**
We can create our own generic classes to accept different types without losing type safety:

```java
// Generic Class
class Box<T> {
    private T content;

    public void add(T item) {
        this.content = item;
    }

    public T get() {
        return content;
    }
}

// Using the Generic Class
public class Test {
    public static void main(String[] args) {
        Box<String> box1 = new Box<>();
        box1.add("Hello, Generics!");
        System.out.println(box1.get());

        Box<Integer> box2 = new Box<>();
        box2.add(42);
        System.out.println(box2.get());
    }
}
```

Here, the `Box<T>` class accepts any type (`T`), ensuring the correct type is used.

---

## **4. Generic Methods**
Besides classes, methods can also be generic:

```java
class Utilities {
    public static <T> void print(T item) {
        System.out.println(item);
    }
}

public class TestGenericMethod {
    public static void main(String[] args) {
        Utilities.print("Hello");
        Utilities.print(123);
        Utilities.print(3.14);
    }
}
```

The `print` method accepts any type `T`, making it reusable.

---

## **5. Generics with Extends and Super**
We can restrict the accepted type using `extends` (for classes and interfaces) and `super` (to accept superclasses).

### **Using `extends` (Upper Bound Restriction)**
```java
class NumberBox<T extends Number> {
    private T number;

    public NumberBox(T number) {
        this.number = number;
    }

    public double getValue() {
        return number.doubleValue();
    }
}

public class TestExtends {
    public static void main(String[] args) {
        NumberBox<Integer> n1 = new NumberBox<>(10);
        NumberBox<Double> n2 = new NumberBox<>(5.5);
        // NumberBox<String> n3 = new NumberBox<>("Error"); // DOES NOT COMPILE

        System.out.println(n1.getValue());
        System.out.println(n2.getValue());
    }
}
```

Here, `NumberBox<T>` can only accept `Number` or its subclasses (`Integer`, `Double`, `Float`, etc.).

### **Using `super` (Lower Bound Restriction)**
```java
import java.util.ArrayList;
import java.util.List;

public class TestSuper {
    public static void addNumber(List<? super Integer> list) {
        list.add(10);
        list.add(20);
    }

    public static void main(String[] args) {
        List<Number> numbers = new ArrayList<>();
        addNumber(numbers);
        
        System.out.println(numbers);
    }
}
```

The `? super Integer` allows `Integer` and any **superclass** of it, such as `Number` or `Object`.

---


