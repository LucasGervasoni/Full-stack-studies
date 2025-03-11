---


---

<h1 id="classes--objects">Classes &amp; Objects</h1>
<p>In Java, a <strong>class</strong> is like a blueprint or a recipe. It tells you what the object will have (its properties) and what it can do (its actions). For example, you could have a class called “Dog,” which defines that a dog can have a name, an age, and a color, and it can do actions like “bark” or “run.”</p>
<p>An <strong>object</strong>, on the other hand, is when you take that blueprint and create something real with it. So, if you make a dog using the “Dog” blueprint, that dog is an <strong>object</strong>. You can have many dogs, and each one can be different, like having different names and ages, but they are all still dogs.</p>
<p>In summary:</p>
<ul>
<li><strong>Class</strong> is the blueprint or recipe.</li>
<li><strong>Object</strong> is something real that you create using that blueprint.</li>
</ul>
<pre><code>public class Ninja {  
  
    String name;  
    int age;  
    String village;  
}


public class Main {  
    public static void main(String[] args) {  
  
        Ninja Naruto = new Ninja();  
        Naruto.name = "Naruto Uzumaki";  
        Naruto.age = 18;  
        Naruto.village = "Konoha";  
  
        System.out.println(Naruto.name + " has " + Naruto.age + " and lives at " + Naruto.village);  
    }  
}
</code></pre>

