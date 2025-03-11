---


---

<h1 id="inheritance">Inheritance</h1>
<p>The <strong>Inheritance</strong> pillar of Object-Oriented Programming (OOP) allows a class (called a <strong>subclass</strong> or <strong>child class</strong>) to inherit attributes and methods from another class (called a <strong>superclass</strong> or <strong>parent class</strong>). This promotes <strong>code reuse</strong>, avoiding duplication and making maintenance easier.</p>
<h3 id="🔹-characteristics-of-inheritance">🔹 Characteristics of Inheritance:</h3>
<ol>
<li><strong>Code Reuse</strong> → Avoids rewriting common methods.</li>
<li><strong>Class Hierarchy</strong> → Creates an organized class structure.</li>
<li><strong>Specialization</strong> → Child classes can override or extend the behavior of the parent class.</li>
<li><strong>Polymorphism</strong> → Inherited methods can be modified for different behaviors.</li>
</ol>
<pre class=" language-java"><code class="prism  language-java"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Ninja</span> <span class="token punctuation">{</span>  
  
    String name<span class="token punctuation">;</span>  
    <span class="token keyword">int</span> age<span class="token punctuation">;</span>  
    String village<span class="token punctuation">;</span>  
  
    <span class="token keyword">public</span> String <span class="token function">Welcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token string">"Welcome, "</span> <span class="token operator">+</span> name<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">ageToBecomeHokage</span><span class="token punctuation">(</span><span class="token keyword">int</span> minAge<span class="token punctuation">)</span><span class="token punctuation">{</span>  
        <span class="token keyword">return</span> minAge <span class="token operator">-</span> age<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Uzumaki</span> <span class="token keyword">extends</span> <span class="token class-name">Ninja</span> <span class="token punctuation">{</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">wiseMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"My name is "</span><span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">" I'm from "</span> <span class="token operator">+</span> village <span class="token operator">+</span> <span class="token string">" and Wise mode was activated"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Uchiha</span> <span class="token keyword">extends</span> <span class="token class-name">Ninja</span> <span class="token punctuation">{</span>  
  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">SharinganActivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"My name is "</span><span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">" I'm from "</span> <span class="token operator">+</span> village <span class="token operator">+</span> <span class="token string">" and Sharingan was activated"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  
        Uzumaki Naruto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uzumaki</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        Naruto<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Naruto Uzumaki"</span><span class="token punctuation">;</span>  
        Naruto<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>  
        Naruto<span class="token punctuation">.</span>village <span class="token operator">=</span> <span class="token string">"Konoha"</span><span class="token punctuation">;</span>  
  
        Naruto<span class="token punctuation">.</span><span class="token function">wiseMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
        String welcome <span class="token operator">=</span> Naruto<span class="token punctuation">.</span><span class="token function">Welcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>welcome<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
        <span class="token keyword">int</span> minAge <span class="token operator">=</span> Naruto<span class="token punctuation">.</span><span class="token function">ageToBecomeHokage</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>minAge<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
        Uchiha Sasuke <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uchiha</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        Sasuke<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"Sasuke Uchiha"</span><span class="token punctuation">;</span>  
        Sasuke<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>  
        Sasuke<span class="token punctuation">.</span>village <span class="token operator">=</span> <span class="token string">"Konoha"</span><span class="token punctuation">;</span>  
        Sasuke<span class="token punctuation">.</span><span class="token function">SharinganActivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre>
<h3 id="🔹-types-of-inheritance">🔹 Types of Inheritance:</h3>
<ol>
<li><strong>Single</strong> → A class inherits from another.</li>
<li><strong>Multiple (not directly supported in Java)</strong> → A class inherits from multiple classes.</li>
<li><strong>Hierarchical</strong> → A parent class has multiple subclasses.</li>
<li><strong>Multilevel</strong> → A class inherits from another, which has already inherited from a third one.</li>
</ol>
<p>In Java, <strong>multiple inheritance is not directly supported</strong> to avoid ambiguity, but it can be simulated using <strong>interfaces</strong>.</p>

