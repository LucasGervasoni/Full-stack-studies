---


---

<h1 id="switchcases--data-handling">SwitchCases &amp; Data handling</h1>
<p>A switch-case statement is a programming construct that executes different blocks of code based on specified conditions.</p>
<pre><code>Scanner textField = new Scanner(System.in);  
  
System.out.println("Escolha um personagem: ");  
System.out.println("1 - Naruto Uzumaki");  
System.out.println("2 - Sasuke Uchiha");  
System.out.println("3 - Sakura Haruno");  
System.out.println("0 - Exit");  
System.out.print("choice: ");  
  
int choice = textField.nextInt();  
  
  
switch (choice){  
        case 1:  
            System.out.println("You chose Naruto Uzumaki the next hokage");  
            break;  
        case 2:  
            System.out.println("You chose Sasuke Uchiha the angriest ninja");  
            break;  
        case 3:  
            System.out.println("You chose Sakura Haruno");  
            break;  
        default:  
            System.out.println("This character do not exist, chose other one");  
            break;  
}  
  
  
  
  
textField.close();
</code></pre>

