---


---

<h1 id="inputs--validation">Inputs &amp; Validation</h1>
<p>It’s a way to let the user enter some data into the application.</p>
<pre><code>//Creating the Scanner  
Scanner textField = new Scanner(System.in);  
  
// Creating a Ninja  
System.out.print("Ninja name: ");  
String name = textField.nextLine();  
System.out.print("Ninja age: ");  
int age = textField.nextInt();  
textField.close();  
  
if(age &lt;= 18 ){  
    System.out.println(name + " cant go out missions, because it has: " + age + " years old.");  
}else{  
    System.out.println(name + " can go out missions, because it has: " + age + " years old.");  
}
</code></pre>

