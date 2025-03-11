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

```
public class Ninja {  
  
    String name;  
    int age;  
    String village;  
  
    public String Welcome(){  
        return "Welcome, " + name;  
    }  
  
    public int ageToBecomeHokage(int minAge){  
        return minAge - age;  
    }  
}

public class Uzumaki extends Ninja {  
  
    public void wiseMode(){  
        System.out.println("My name is "+ name + " I'm from " + village + " and Wise mode was activated");  
    }  
}

public class Uchiha extends Ninja {  
  
    public void SharinganActivate(){  
        System.out.println("My name is "+ name + " I'm from " + village + " and Sharingan was activated");  
    }  
}


public class Main {  
    public static void main(String[] args) {  
  
        Uzumaki Naruto = new Uzumaki();  
        Naruto.name = "Naruto Uzumaki";  
        Naruto.age = 18;  
        Naruto.village = "Konoha";  
  
        Naruto.wiseMode();  
  
        String welcome = Naruto.Welcome();  
        System.out.println(welcome);  
  
        int minAge = Naruto.ageToBecomeHokage(40);  
        System.out.println(minAge);  
  
        Uchiha Sasuke = new Uchiha();  
        Sasuke.name = "Sasuke Uchiha";  
        Sasuke.age = 18;  
        Sasuke.village = "Konoha";  
        Sasuke.SharinganActivate();  
    }  
}
```

<h3 id="🔹-types-of-inheritance">🔹 Types of Inheritance:</h3>
<ol>
<li><strong>Single</strong> → A class inherits from another.</li>
<li><strong>Multiple (not directly supported in Java)</strong> → A class inherits from multiple classes.</li>
<li><strong>Hierarchical</strong> → A parent class has multiple subclasses.</li>
<li><strong>Multilevel</strong> → A class inherits from another, which has already inherited from a third one.</li>
</ol>
<p>In Java, <strong>multiple inheritance is not directly supported</strong> to avoid ambiguity, but it can be simulated using <strong>interfaces</strong>.</p>

