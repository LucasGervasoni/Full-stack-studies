---


---

<h1 id="oop">OOP</h1>
<p><strong>Object-Oriented Programming (OOP)</strong> is a way of coding where we imagine everything in our code as an <strong>object</strong>. An object can be anything, like a car, a dog, or even a robot. Each object has <strong>characteristics</strong> and <strong>actions</strong>.</p>
<p>For example, a <strong>dog</strong>:</p>
<ul>
<li><strong>Characteristics (attributes):</strong> color, size, breed, age.</li>
<li><strong>Actions (methods):</strong> bark, run, eat, sleep.</li>
</ul>
<p>Now, let’s talk about the <strong>4 pillars of OOP</strong>! 🎯</p>
<hr>
<h2 id="🏛-1.-encapsulation">🏛 1. <strong>Encapsulation</strong></h2>
<p>Think of a <strong>remote control</strong>. It has many buttons to press, but you don’t need to know how it works inside, right? You just press a button, and it does what it needs to do.</p>
<p>In Java, <strong>encapsulation</strong> means that some parts of the code are <strong>hidden</strong>, and we only show what needs to be used. This way, we prevent other parts of the code from changing something incorrectly.</p>
<p>Example in Java:</p>

```
class Dog {
    private String name; // Hidden (private)

    public void setName(String newName) {
        name = newName; // We can only change the name using this method
    }

    public String getName() {
        return name; // We get the dog's name here
    }
}

```

<p>🔒 Here, the dog’s name is <strong>hidden</strong> and can only be changed or accessed using the <code>setName()</code> and <code>getName()</code> methods.</p>
<hr>
<h2 id="🏛-2.-inheritance">🏛 2. <strong>Inheritance</strong></h2>
<p>Imagine you have a toy car, and your friend has a toy truck. Both are vehicles and can <strong>move</strong>, but the truck can also <strong>carry things</strong>.</p>
<p><strong>Inheritance</strong> allows a “child” class to inherit characteristics and actions from a “parent” class.</p>
<p>Example in Java:</p>

```
class Animal {
    void makeSound() {
        System.out.println("The animal makes a sound.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Woof Woof!");
    }
}

```

<p>🐶 The <strong>Dog</strong> inherited from <strong>Animal</strong> the ability to make a sound and can also bark!</p>
<hr>
<h2 id="🏛-3.-polymorphism">🏛 3. <strong>Polymorphism</strong></h2>
<p>Imagine you have a <strong>talking robot</strong>, but it can speak in different ways: a high voice, a deep voice, or even sing. Even though it’s the same robot, it can behave differently.</p>
<p>In Java, <strong>polymorphism</strong> allows the same method to work in different ways, depending on the object that uses it.</p>
<p>Example in Java:</p>

```
class Animal {
    void makeSound() {
        System.out.println("The animal makes a sound.");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow!");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Woof Woof!");
    }
}

public class Test {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();
        myAnimal.makeSound(); // Output: Woof Woof!

        myAnimal = new Cat();
        myAnimal.makeSound(); // Output: Meow!
    }
}

```
<p>🐾 Here, the <code>makeSound()</code> method works <strong>differently</strong> for each animal!</p>
<hr>
<h2 id="🏛-4.-abstraction">🏛 4. <strong>Abstraction</strong></h2>
<p>Think of your <strong>favorite video game</strong>. You press the buttons, and the character moves, but you don’t need to know <strong>how</strong> the game processes everything. You just see what you need.</p>
<p>In Java, <strong>abstraction</strong> means that we show <strong>only what is necessary</strong> and hide complex details.</p>
<p>Example with an <strong>abstract class</strong>:</p>

```
abstract class Animal {
    abstract void makeSound(); // Abstract method (no code inside)

    void sleep() {
        System.out.println("Zzz...");
    }
}

class Bird extends Animal {
    void makeSound() {
        System.out.println("Chirp Chirp!");
    }
}

```

<p>🕊️ Here, the <strong>Animal</strong> class has a <code>makeSound()</code> method that each animal implements in its own way!</p>
<hr>

