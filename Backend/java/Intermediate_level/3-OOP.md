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
<pre class=" language-java"><code class="prism  language-java"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> String name<span class="token punctuation">;</span> <span class="token comment">// Hidden (private)</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span>String newName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        name <span class="token operator">=</span> newName<span class="token punctuation">;</span> <span class="token comment">// We can only change the name using this method</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> String <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span> <span class="token comment">// We get the dog's name here</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre>
<p>🔒 Here, the dog’s name is <strong>hidden</strong> and can only be changed or accessed using the <code>setName()</code> and <code>getName()</code> methods.</p>
<hr>
<h2 id="🏛-2.-inheritance">🏛 2. <strong>Inheritance</strong></h2>
<p>Imagine you have a toy car, and your friend has a toy truck. Both are vehicles and can <strong>move</strong>, but the truck can also <strong>carry things</strong>.</p>
<p><strong>Inheritance</strong> allows a “child” class to inherit characteristics and actions from a “parent” class.</p>
<p>Example in Java:</p>
<pre class=" language-java"><code class="prism  language-java"><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"The animal makes a sound."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Woof Woof!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre>
<p>🐶 The <strong>Dog</strong> inherited from <strong>Animal</strong> the ability to make a sound and can also bark!</p>
<hr>
<h2 id="🏛-3.-polymorphism">🏛 3. <strong>Polymorphism</strong></h2>
<p>Imagine you have a <strong>talking robot</strong>, but it can speak in different ways: a high voice, a deep voice, or even sing. Even though it’s the same robot, it can behave differently.</p>
<p>In Java, <strong>polymorphism</strong> allows the same method to work in different ways, depending on the object that uses it.</p>
<p>Example in Java:</p>
<pre class=" language-java"><code class="prism  language-java"><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"The animal makes a sound."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Meow!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Woof Woof!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Animal myAnimal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myAnimal<span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: Woof Woof!</span>

        myAnimal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        myAnimal<span class="token punctuation">.</span><span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: Meow!</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre>
<p>🐾 Here, the <code>makeSound()</code> method works <strong>differently</strong> for each animal!</p>
<hr>
<h2 id="🏛-4.-abstraction">🏛 4. <strong>Abstraction</strong></h2>
<p>Think of your <strong>favorite video game</strong>. You press the buttons, and the character moves, but you don’t need to know <strong>how</strong> the game processes everything. You just see what you need.</p>
<p>In Java, <strong>abstraction</strong> means that we show <strong>only what is necessary</strong> and hide complex details.</p>
<p>Example with an <strong>abstract class</strong>:</p>
<pre class=" language-java"><code class="prism  language-java"><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Abstract method (no code inside)</span>

    <span class="token keyword">void</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Zzz..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bird</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">makeSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Chirp Chirp!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre>
<p>🕊️ Here, the <strong>Animal</strong> class has a <code>makeSound()</code> method that each animal implements in its own way!</p>
<hr>

