# Methods Overload

**Method overloading** in Java allows a class to have multiple methods with the **same name**, but with **different signatures** (different number, type, or order of parameters).  

This means we can define multiple versions of a method, each handling different types of input, without needing to create different method names for similar functions.

---

## 📌 **Rules of Method Overloading**  
1️⃣ Methods **must have the same name**.  
2️⃣ They must have **different signatures** (number, type, or order of parameters).  
3️⃣ The **return type DOES NOT influence** overloading (it’s not enough to differentiate methods).  
4️⃣ The compiler determines which method to call based on the **arguments passed**.

---

## 🛠 **Example of Method Overloading in Java**  

```
class Calculator {
    
    // Method to add two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Overloaded method to add three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Overloaded method to add two doubles
    public double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.add(10, 20));         // Calls add(int, int)
        System.out.println(calc.add(10, 20, 30));     // Calls add(int, int, int)
        System.out.println(calc.add(10.5, 20.3));     // Calls add(double, double)
    }
}
```

## 🔥 Advantages of Method Overloading
✅ Improves code readability by using the same method name for similar functionalities.

✅ Avoids unnecessary repetition by allowing variations in input data.

✅ Enhances flexibility by allowing a method to handle different data types.

## 🛠 Example Using Different Parameter Types

```
class Message {
    
    // Method to display a simple message
    public void display(String message) {
        System.out.println("Message: " + message);
    }

    // Overloaded method to display a message with a number
    public void display(String message, int number) {
        System.out.println("Message: " + message + " - Code: " + number);
    }

    // Overloaded method to display a message with a decimal value
    public void display(String message, double value) {
        System.out.println("Message: " + message + " - Value: " + value);
    }
}

public class Main {
    public static void main(String[] args) {
        Message msg = new Message();

        msg.display("Welcome!");             // Calls display(String)
        msg.display("Connection error", 404);// Calls display(String, int)
        msg.display("Available balance", 150.75);// Calls display(String, double)
    }
}
```