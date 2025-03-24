# Encapsulation

Encapsulation means restricting direct access to a class's attributes and providing methods to manipulate them in a controlled way.

## 🔹 Concept of Encapsulation
The central idea of encapsulation is **protecting data** within a class, allowing it to be accessed and modified only through specific methods (getters and setters). This enhances **security**, **maintainability**, and **reusability** of the code.

## 🔹 How Does It Work in Practice?
1. **Make attributes private (`private`)** → This prevents them from being accessed directly from outside the class.
2. **Create public (`public`) methods for controlled access** → The **getter** (to retrieve the value) and **setter** (to modify the value) methods allow controlled access and modification of attributes.

---

### 📌 Example of Encapsulation in Java:

```
public class Person {
    // Private attribute (cannot be accessed directly)
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }

    // Getter for age
    public int getAge() {
        return age;
    }

    // Setter for age (with validation)
    public void setAge(int age) {
        if (age > 0) { // Only positive values are allowed
            this.age = age;
        } else {
            System.out.println("Invalid age!");
        }
    }
}
```

---

### 📌 Using the Encapsulated Class:

```
public class Main {
    public static void main(String[] args) {
        // Creating an object of the Person class
        Person p1 = new Person("John", 25);

        // Accessing values through getter methods
        System.out.println("Name: " + p1.getName());
        System.out.println("Age: " + p1.getAge());

        // Modifying values through setter methods
        p1.setName("Carlos");
        p1.setAge(30);

        System.out.println("New Name: " + p1.getName());
        System.out.println("New Age: " + p1.getAge());

        // Attempting to set an invalid age
        p1.setAge(-5); // Displays "Invalid age!"
    }
}
```

---

## 🔹 Benefits of Encapsulation:
✅ **Data protection** → Prevents attributes from being directly accessed and modified incorrectly.  
✅ **Ease of maintenance** → If you need to change the logic of attribute handling, you only modify the `get` and `set` methods without impacting other parts of the code.  
✅ **Better data control** → You can add validations before allowing a value to be modified.  
✅ **Code reusability** → Business logic can be encapsulated within methods, avoiding code repetition.  

