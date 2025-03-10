---


---

<h3 id="what-is-type-casting">What is Type Casting?</h3>
<p>“Type Casting” is like the magic of changing the type of something on a computer. For example, imagine you have a number like “5” (which is an integer, called “int” in Java). Sometimes, you want to turn that “5” into a number with a comma, like “5.0” (which is called a “double”), or even into words, like “five” (which is a “String”). This is type casting: changing from one type to another!</p>
<p>It’s as if you had a Lego toy that could be a cart, but you wanted to turn it into an airplane. You just need to tweak it a bit, and that’s it!</p>
<hr>
<h3 id="why-is-this-important">Why is this important?</h3>
<p>This magic is super cool for a few reasons:</p>
<ol>
<li>**Don’t lose anything important: When you transform something, you want to make sure that you don’t lose bits of information. Type casting helps you do that.</li>
<li><strong>Mix different things</strong>: Sometimes you want to add a number with a comma and an integer, but they don’t go together on their own. Type casting makes them friends!</li>
<li>**Use the right amount of space: The computer has a memory, like a backpack. If you use a type that’s too big for something small,浪费空间 (you waste space). Type casting helps you use the right size.</li>
<li><strong>Help with what people type</strong>: When someone types something, like “10”, it comes out as text. But if you want to add or multiply, you need to turn it into a number. Type casting does that!</li>
</ol>
<p>It’s like organizing your toys so that everything fits in the right box</p>
<p>Translated with <a href="http://www.DeepL.com/Translator">www.DeepL.com/Translator</a> (free version)</p>
<h3 id="tipos-de-type-casting">Tipos de Type Casting:</h3>
<h3 id="identity-conversions-conversões-de-identidade">1. <strong>Identity Conversions (Conversões de Identidade)</strong></h3>
<ul>
<li><strong>What is it?</strong>: This is when you don’t change anything! The type is already the same, so it’s like saying “stay as you are.” It’s like taking a toy car and saying it’s still a toy car.</li>
<li><strong>Simple Example</strong>: An integer (int) stays an integer.</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>int number = 10;
int sameNumber = number; // No change, just copied!
System.out.println(sameNumber); // Prints: 10
</code></pre>
<ul>
<li><strong>Summary</strong>: No magic here, it just stays the same.</li>
</ul>
<h3 id="widening-primitive-conversions-conversões-primitivas-de-ampliação">2. <strong>Widening Primitive Conversions (Conversões Primitivas de Ampliação)</strong></h3>
<ul>
<li><strong>What is it?</strong>: This is turning a small type into a bigger type, like pouring water from a little cup into a bucket. Java does it automatically, and nothing gets lost!</li>
<li><strong>Simple Example</strong>: Turning an int (whole number) into a double (number with a decimal).</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>int small = 5;
double big = small; // Java does the magic by itself!
System.out.println(big); // Prints: 5.0
</code></pre>
<ul>
<li><strong>Summary</strong>: It’s safe and automatic, like growing from a small shoe to a bigger one.</li>
</ul>
<hr>
<h3 id="narrowing-primitive-conversions-conversões-primitivas-de-estreitamento">3. <strong>Narrowing Primitive Conversions (Conversões Primitivas de Estreitamento)</strong></h3>
<ul>
<li><strong>What is it?</strong>: This is the opposite: turning a big type into a smaller one, like squeezing a bucket of water into a tiny cup. You have to tell Java to do it, and you might lose a little bit (like the decimal part).</li>
<li><strong>Simple Example</strong>: Turning a double into an int.</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>double big = 5.7;
int small = (int) big; // You tell Java: “cut off the decimal!”
System.out.println(small); // Prints: 5 (lost the .7)
</code></pre>
<ul>
<li><strong>Summary</strong>: You need to be careful, because some stuff might spill out of the cup!</li>
</ul>
<hr>
<h3 id="widening-reference-conversions-conversões-de-referência-de-ampliação">4. <strong>Widening Reference Conversions (Conversões de Referência de Ampliação)</strong></h3>
<ul>
<li><strong>What is it?</strong>: It’s like saying a kitten (a specific type) can be seen as an animal (a more general type). This happens with objects in Java, going from something specific to something broader.</li>
<li><strong>Simple Example</strong>: A “Dog” class can be treated as an “Animal” (if “Dog” inherits from “Animal”).</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>class Animal {}
class Dog extends Animal {}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        Animal critter = dog; // The dog becomes a generic “animal”
        System.out.println("It worked!");
    }
}
</code></pre>
<ul>
<li><strong>Summary</strong>: It’s like saying “you’re a dog, but also an animal.” Java accepts it automatically.</li>
</ul>
<hr>
<h3 id="narrowing-reference-conversions-conversões-de-referência-de-estreitamento">5. <strong>Narrowing Reference Conversions (Conversões de Referência de Estreitamento)</strong></h3>
<ul>
<li><strong>What is it?</strong>: It’s trying to say a generic “animal” is a “dog.” It’s not automatic because not every animal is a dog, so you have to force it and hope it works!</li>
<li><strong>Simple Example</strong>: Turning an “Animal” into a “Dog.”</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>class Animal {}
class Dog extends Animal {}

public class Main {
   public static void main(String[] args) {
       Animal critter = new Dog(); // A dog disguised as an animal
       Dog dog = (Dog) critter; // We force it to become a dog again
       System.out.println("It worked!");
   }
}
</code></pre>
<ul>
<li><strong>Summary</strong>: You need a special command (the (Dog) part), and it might fail if the animal isn’t really a dog!</li>
</ul>
<hr>
<h3 id="boxing-conversions-conversões-de-empacotamento">6. <strong>Boxing Conversions (Conversões de Empacotamento)</strong></h3>
<ul>
<li><strong>What is it?</strong>: It’s like wrapping a little gift! You take a simple type (like int) and put it in a fancy box called an object (like Integer).</li>
<li><strong>Simple Example</strong>: Turning int into Integer.</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>int simpleNumber = 10;
Integer fancyNumber = simpleNumber; // Java wraps it up automatically!
System.out.println(fancyNumber); // Prints: 10
</code></pre>
<ul>
<li><strong>Summary</strong>: It’s automatic and makes the number fancier for use with objects.</li>
</ul>
<hr>
<h3 id="unboxing-conversions-conversões-de-desempacotamento">7. <strong>Unboxing Conversions (Conversões de Desempacotamento)</strong></h3>
<ul>
<li><strong>What is it?</strong>: It’s unwrapping the gift! You take the number out of the fancy box (Integer) and turn it back into a simple type (int).</li>
<li><strong>Simple Example</strong>: Turning Integer into int.</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>Integer fancyNumber = 10;
int simpleNumber = fancyNumber; // Java unwraps it automatically!
System.out.println(simpleNumber); // Prints: 10
</code></pre>
<ul>
<li><strong>Summary</strong>: It’s the opposite of boxing, taking off the box to keep it simple.</li>
</ul>
<hr>
<h3 id="unchecked-conversions-conversões-não-verificadas">8. <strong>Unchecked Conversions (Conversões Não Verificadas)</strong></h3>
<ul>
<li><strong>What is it?</strong>: It’s a risky magic trick where Java doesn’t check if everything’s okay. This happens with complicated things called “generics” (like lists that hold specific types).</li>
<li><strong>Simple Example</strong>: Using a generic list without checking the type.</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList rawList = new ArrayList(); // A “raw” list, no type defined
        rawList.add("Hi");
        ArrayList&lt;String&gt; typedList = rawList; // Conversion without checking
        System.out.println(typedList.get(0)); // Prints: Hi
    }
}
</code></pre>
<ul>
<li><strong>Summary</strong>: Java trusts you, but it might mess up if the types don’t match!</li>
</ul>
<hr>
<h3 id="capture-conversions-conversões-de-captura">9. <strong>Capture Conversions (Conversões de Captura)</strong></h3>
<ul>
<li><strong>What is it?</strong>: It’s an advanced trick with generics to “capture” a type we don’t exactly know. It’s like fishing for something without knowing what you’ll catch!</li>
<li><strong>Simple Example</strong>: Used internally by Java with “wildcards” (like ?).</li>
<li><strong>Code</strong>: You don’t write this directly, but the compiler uses it. An indirect example would be:</li>
</ul>
<pre><code>import java.util.ArrayList;

public class Main {
   public static void main(String[] args) {
       ArrayList&lt;?&gt; mysteryList = new ArrayList&lt;String&gt;();
       // Java “captures” the type internally as String
   }
}
</code></pre>
<ul>
<li><strong>Summary</strong>: It’s backstage magic in Java to help with generics.</li>
</ul>
<hr>
<h3 id="string-conversions-conversões-para-string">10. <strong>String Conversions (Conversões para String)</strong></h3>
<ul>
<li><strong>What is it?</strong>: It’s turning anything into text (String), like writing a number or object as words.</li>
<li><strong>Simple Example</strong>: Turning an int into a String.</li>
<li><strong>Code</strong>:</li>
</ul>
<pre><code>int number = 42;
String text = String.valueOf(number); // Turns into text!
System.out.println(text); // Prints: 42
</code></pre>
<ul>
<li><strong>Summary</strong>: Everything can become text to show on the screen or use as words.</li>
</ul>
<hr>
<h3 id="value-set-conversions-conversões-de-conjunto-de-valores">11. <strong>Value Set Conversions (Conversões de Conjunto de Valores)</strong></h3>
<ul>
<li><strong>What is it?</strong>: This is a technical detail about how Java handles floating-point numbers (float and double) in special situations. It’s not something you see every day, but it adjusts values to fit the right types.</li>
<li><strong>Simple Example</strong>: There’s no direct code for this; Java does it internally when using float or double.</li>
<li><strong>Summary</strong>: It’s hidden magic to make decimal numbers work properly.</li>
</ul>

