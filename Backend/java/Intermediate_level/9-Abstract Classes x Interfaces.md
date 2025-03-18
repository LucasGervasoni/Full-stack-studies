# Abstract Classes x Interfaces

Both **abstract classes** and **interfaces** are used to define a base model for other classes, but there are important differences between them.  

---

## **📌 Main Differences**

| Feature             | Abstract Class | Interface |
|----------------------|---------------|-----------|
| **Instantiation**    | Cannot be instantiated directly | Cannot be instantiated directly |
| **Methods**         | Can have both abstract and concrete methods | Can only have abstract methods (until Java 7); from Java 8 onwards, can have default and static methods |
| **Attributes**      | Can have attributes with any modifier (`private`, `protected`, `public`) | Can only have constants (`public static final`) |
| **Inheritance**     | A class can inherit from only **one abstract class** (`extends`) | A class can implement **multiple interfaces** (`implements`) |
| **Constructors**    | Can have constructors | Cannot have constructors |
| **Recommended Use** | When there is an "IS-A" relationship and code reuse is needed | When there is a shared behavior between unrelated classes |

---

## **🎯 Practical Example**

Let's imagine a system that manages animals.  

### **🔹 Using an Abstract Class**
If we create an **abstract class** `Animal`, we can define common attributes and methods for all animals, but leave the implementation of `makeSound()` to each specific animal.  

```
abstract class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    abstract void makeSound(); // Abstract method

    void sleep() { // Concrete method
        System.out.println(name + " is sleeping...");
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println("Woof Woof!");
    }
}

class Cat extends Animal {
    Cat(String name) {
        super(name);
    }

    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Dog("Rex");
        Animal cat = new Cat("Mimi");

        dog.makeSound();
        dog.sleep();

        cat.makeSound();
        cat.sleep();
    }
}
```

### 🔹 When to use?
If objects have a direct relationship (like Dog is an Animal), an abstract class makes sense because we can define common behavior.

### 🔹 Using an Interface
Now, suppose we want certain animals to have the ability to swim. Instead of creating a new abstract class (which would limit inheritance), we can define a Swimmer interface.

```
interface Swimmer {
    void swim(); // Abstract method (no body)
}

class Fish implements Swimmer {
    @Override
    public void swim() {
        System.out.println("The fish is swimming.");
    }
}

class Dog implements Swimmer {
    @Override
    public void swim() {
        System.out.println("The dog swims in the river.");
    }
}

public class Main {
    public static void main(String[] args) {
        Swimmer fish = new Fish();
        Swimmer dog = new Dog();

        fish.swim();
        dog.swim();
    }
}
```

### 🔹 When to use?
If we want to define a behavior that can be shared among unrelated classes (Dog and Fish do not inherit from each other, but both can swim), an interface is the best choice.