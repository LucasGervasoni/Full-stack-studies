# Records

In Java, **Records** are a feature introduced in **Java 14 (preview) and officially in Java 16**. They provide a concise and immutable way to represent classes that serve only to store data, eliminating the need to write boilerplate code (such as getters, setters, `equals`, `hashCode`, and `toString`).

---

## 📌 **Why Use Records?**
Traditionally, creating a class to represent a data model required writing a lot of repetitive code, such as:

### **Conventional Code Using a Regular Class**
```java
public class Person {
    private final String name;
    private final int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person person = (Person) obj;
        return age == person.age && name.equals(person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public String toString() {
        return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
    }
}
```

This code contains a lot of repetition for a class that only serves to store data.

---

## ✅ **Using Records**
The same class can be rewritten as a **Record** in **just one line**:

```java
public record Person(String name, int age) {}
```

💡 **Benefits:**
- Automatically generates the following methods:
  - `name()` and `age()`
  - `equals()`, `hashCode()`, `toString()`
  - Constructor with defined parameters
- **Immutable** by default (attributes are `final`)
- More concise and easier to understand

---

## 📌 **Example Usage**
```java
public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("John", 25);
        Person p2 = new Person("Mary", 30);

        System.out.println(p1.name()); // John
        System.out.println(p1.age()); // 25
        System.out.println(p1); // Person[name=John, age=25]
    }
}
```

---

## 📌 **Customizing a Record**
Despite its simplicity, it's possible to add custom methods:

```java
public record Person(String name, int age) {
    
    // Custom constructor
    public Person {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative!");
        }
    }

    // Additional method
    public String greeting() {
        return "Hello, my name is " + name + " and I am " + age + " years old.";
    }
}
```

---

## 📌 **Comparison Between Classes and Records**
| **Feature**  | **Traditional Class** | **Record** |
|-------------|---------------------|-----------|
| Boilerplate Code | Yes (many methods needed) | No (automatically generated) |
| Immutability | Optional | Always immutable |
| `equals`, `hashCode`, `toString` Methods | Must be manually written | Automatically generated |
| Recommended Usage | Complex classes with business logic | Simple data models |

---

## 📌 **When NOT to Use Records?**
Records **should not** be used when:
1. The class needs **mutability** (since attributes are `final`).
2. The class requires inheritance (Records **cannot inherit** from other classes, only implement interfaces).
3. You need complex behaviors, such as instance methods that modify the object's state.
