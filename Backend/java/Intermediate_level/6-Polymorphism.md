---


---

<h1 id="polymorphism">Polymorphism</h1>
<p>It allows a method to have different behaviors depending on the object that calls it.</p>
<p>💡 <strong>Simple example of polymorphism</strong>:</p>
<pre><code>class Animal {
    void makeSound() {
        System.out.println("The animal makes a sound...");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("The dog barks!");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("The cat meows!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal = new Dog();  // Polymorphism: an Animal can be a Dog
        myAnimal.makeSound();  // Output: The dog barks!

        myAnimal = new Cat();  // Now it's a Cat
        myAnimal.makeSound();  // Output: The cat meows!
    }
}

</code></pre>
<p>🔹 <strong>Why is this useful?</strong></p>
<ul>
<li>Allows for <strong>flexible and reusable code</strong>.</li>
<li>Avoids code duplication.</li>
<li>Makes maintenance easier since methods can have the same name but different behaviors.</li>
</ul>
<hr>
<h2 id="🔹-annotations-in-java">🔹 Annotations in Java</h2>
<p>Annotations are like <strong>“labels”</strong> that we add to the code to provide extra information to the compiler or frameworks (like Spring Boot).</p>
<p>🔹 <strong>Simple annotation example</strong>:</p>
<pre><code>class Example {

    @Override  // Indicates that this method overrides one from the parent class
    public String toString() {
        return "Example of @Override annotation!";
    }
}

</code></pre>
<p>🔹 <strong>Some common annotations in Java</strong>:</p>
<ul>
<li><code>@Override</code> → Indicates that a method overrides another from the parent class.</li>
<li><code>@Deprecated</code> → Marks methods/classes as obsolete.</li>
<li><code>@SuppressWarnings</code> → Hides compiler warnings.</li>
<li><code>@Entity</code>, <code>@Service</code>, <code>@Controller</code> → Used in frameworks like Spring Boot.</li>
</ul>
<hr>
<p>📌 <strong>Summary</strong></p>
<p>✅ <strong>Polymorphism</strong> → Allows a class to have multiple behaviors.<br>
✅ <strong>Annotations</strong> → Are markers that inform something to the compiler or a framework.</p>

