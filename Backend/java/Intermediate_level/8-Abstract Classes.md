# Abstract Classes

An **abstract class** in Java is a class that **cannot be instantiated directly** and serves as a template for other classes. It can contain **abstract methods** (without implementation) and concrete methods (with implementation).

## 📌 Characteristics of Abstract Classes:
1. **Cannot be instantiated** directly.
2. **Can have abstract methods**, which must be implemented by subclasses.
3. **Can have concrete methods**, which can be inherited and used by subclasses.
4. **Can have attributes and constructors**, which will be used by child classes.

---

## 🎯 Practical Example

Let's imagine a system to manage vehicles. We create a `Vehicle` class, but we want each type of vehicle to implement its own way of accelerating:

```
// Abstract class
public abstract class Vehicle {
    String model;
    
    // Constructor
    Vehicle(String model) {
        this.model = model;
    }

    // Abstract method (must be implemented by subclasses)
    abstract void accelerate();

    // Concrete method (all subclasses can use it directly)
    void showModel() {
        System.out.println("Model: " + model);
    }
}
```

Now, let's create subclasses that inherit from Vehicle and implement the accelerate method:

```
class Car extends Vehicle {
    Car(String model) {
        super(model);
    }

    // Implementing the abstract method
    @Override
    void accelerate() {
        System.out.println("The car accelerates by increasing engine rotation.");
    }
}

class Bicycle extends Vehicle {
    Bicycle(String model) {
        super(model);
    }

    // Implementing the abstract method
    @Override
    void accelerate() {
        System.out.println("The bicycle accelerates when you pedal faster.");
    }
}

```

## 🛠 When to Use Abstract Classes?

✅ When we want to define a base model for a group of related classes.

✅ When some functionalities are common among child classes, but others need to be customized.