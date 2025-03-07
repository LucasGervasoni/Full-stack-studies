---


---

<h1 id="conditionals">Conditionals</h1>
<p>Conditionals is something that verify if somenthing is true or false</p>
<pre><code>/*  
if - else or if - else if - else  
if (condition) {do somenthing} else {do something}  
 */  
//Naruto  
  
String name = "Naruto Uzumaki";  
int age = 17;  
boolean hookage = false;  
int missions = 12;  
String rank;  
  
if(missions &lt;= 20){  
    rank = "chunnin";  
    System.out.println(name + " is " + rank);  
}else if(missions &gt; 20 &amp;&amp; missions &lt;= 30){  
    rank = "Jounnin";  
    System.out.println(name + " is " + rank);  
}else {  
    rank = "Gennin";  
    System.out.println(name + " is " + rank);  
}
</code></pre>

