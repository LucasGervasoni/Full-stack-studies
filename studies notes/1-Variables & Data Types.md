---


---

<h1 id="variables--data-types">Variables &amp; Data types</h1>
<h3 id="the-advantage-to-use-data-types-is-to-make-our-code-more-eficient-to-be-readable-by-other-developer">the advantage to use data types is to make our code more eficient to be readable by other developer</h3>
<p>OBS: Boilerplate: It’s like a cake recipe that is created automatically, to be more specific, this is the default code that serves as a starting point.</p>
<ul>
<li>Primitive Types: This type of data, it is not possible to use methods , it is stored in the stack memory and is immutable.</li>
</ul>
<pre><code>char initial = "N";
int idade = 20; // Maximum Value: 2147483647
double altura = 1.64d;
boolean vivoOuNao = true;
Long saldoBancario = 999999L; // Maximum Value: 9233372036854775807
byte b = 100; // The `byte` data type can be useful for saving memory in large [arrays], where the memory savings actually matters. It has a minimum value of -128 and a maximum value of 127 (inclusive)
short tinyNumber = 5000; // The same as byte, is used to save memory, and can store whole numbers from -32768 to 32767:
float numberFloat = 1.345f; // Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
</code></pre>
<ul>
<li>Non-primitive types: This type of data, it can use methods to modify, it is stored in the heap memory and is mutable.</li>
</ul>
<pre><code>String name = "Naruto Uzumaki";
String nameUpperCase = name.toUpperCase();
</code></pre>

