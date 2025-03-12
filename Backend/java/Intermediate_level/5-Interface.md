---


---

<h1 id="interface">Interface</h1>
<h3 id="what-is-an-interface-in-java">What is an <strong>Interface</strong> in Java?</h3>
<p>An <strong>interface</strong> in Java is a contract that defines a set of methods that a class must implement. In other words, it is like a “template” that establishes which methods must exist, but <strong>does not provide an implementation</strong>, only the method signatures.</p>
<p><strong>Key characteristics of an interface:</strong> ✔️ Defines only abstract methods (without implementation) and constants (fixed values).<br>
✔️ A class can <strong>implement multiple interfaces</strong>, allowing multiple inheritance.<br>
✔️ Uses the <code>interface</code> keyword instead of <code>class</code>.</p>
<hr>
<h3 id="simple-example-of-an-interface"><strong>Simple Example of an Interface</strong></h3>
<p>Imagine you want to create a system where different types of vehicles can <strong>move</strong>.</p>
<pre><code>// Interface Definition
interface Vehicle {
    void accelerate(); // Method without implementation
    void brake();
}

</code></pre>
<p>Here, any class that represents a vehicle needs to implement the <code>accelerate()</code> and <code>brake()</code> methods.</p>
<p>Now, let’s create two classes that <strong>implement</strong> this interface:</p>
<pre><code>// Car class implementing the Vehicle interface
class Car implements Vehicle {
    @Override
    public void accelerate() {
        System.out.println("Car accelerating...");
    }

    @Override
    public void brake() {
        System.out.println("Car braking...");
    }
}

// Motorcycle class implementing the Vehicle interface
class Motorcycle implements Vehicle {
    @Override
    public void accelerate() {
        System.out.println("Motorcycle accelerating...");
    }

    @Override
    public void brake() {
        System.out.println("Motorcycle braking...");
    }
}

</code></pre>
<p>Now, any <code>Vehicle</code> (Car or Motorcycle) can <strong>accelerate and brake</strong>, as they follow the interface contract.</p>
<hr>
<h3 id="difference-between-interface-and-class"><strong>Difference Between Interface and Class</strong></h3>
<p>Characteristic</p>
<p>Interface</p>
<p>Class</p>
<p><strong>Usage</strong></p>
<p>Defines a contract (only methods without implementation)</p>
<p>Defines an object with attributes and behaviors</p>
<p><strong>Method Implementation</strong></p>
<p>Has no implementation (except <code>default</code> or <code>static</code> methods)</p>
<p>Contains method implementations</p>
<p><strong>Inheritance</strong></p>
<p>A class can implement multiple interfaces</p>
<p>A class can only inherit from one other class</p>
<p><strong>Access Modifiers</strong></p>
<p>Methods are automatically <code>public abstract</code></p>
<p>Can have <code>public</code>, <code>private</code>, and <code>protected</code> methods</p>
<p><strong>Objects</strong></p>
<p>Cannot be instantiated directly</p>
<p>Can be instantiated normally</p>
<hr>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<ul>
<li><strong>Classes</strong> are used to create objects with attributes and methods.</li>
<li><strong>Interfaces</strong> are used to define a set of behaviors that different classes must implement.</li>
<li>Interfaces allow <strong>multiple inheritance</strong>, while classes do not.</li>
</ul>
<p>If you need more examples or explanations, just ask! 🚀</p>

