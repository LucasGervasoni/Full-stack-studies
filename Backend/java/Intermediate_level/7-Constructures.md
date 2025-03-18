# Constructures


Constructors in Java are special methods used to initialize objects of a class. They have the same name as the class and do not have a return type (not even `void`). When an object is created using `new`, the constructor is called automatically.

## Types of Constructors:

### 1. Default Constructor (NoArgsConstructor)
The **no-argument constructor** (`NoArgsConstructor`) is an empty constructor that takes no parameters. If you do not define any constructor in your class, Java automatically creates a default no-argument constructor.

Example:
```
public class Person {
    private String name;
    private int age;

    // No-argument constructor (NoArgsConstructor)
    public Person() {
        System.out.println("Person object created!");
    }
}
```
Usage:
```
Person p = new Person(); // Calls the empty constructor
```

---

### 2. Constructor with All Arguments (AllArgsConstructor)
The **all-arguments constructor** (`AllArgsConstructor`) takes parameters to initialize all attributes of the class.

Example:
```
public class Person {
    private String name;
    private int age;

    // Constructor with all arguments (AllArgsConstructor)
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```
Usage:
```
Person p = new Person("John", 25); // Initializes attributes directly
```


---

