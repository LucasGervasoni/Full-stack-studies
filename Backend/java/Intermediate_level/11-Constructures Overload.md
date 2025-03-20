# Constructures Overload

**Constructor overloading** in Java refers to defining multiple constructors within the same class but with different signatures (i.e., different parameter lists). This allows objects to be created in different ways depending on the provided arguments.

---

## 📌 **Rules of Constructor Overloading**
1. Constructors must have the **same name as the class**.
2. They must have **different parameters** (in terms of number, type, or order).
3. Java determines which constructor to invoke based on the arguments passed when creating an object.

---

## 🛠 **Example of Constructor Overloading**

```
class Product {
    String name;
    double price;
    int quantity;

    // Constructor 1 - No parameters (default values)
    public Product() {
        this.name = "Default Product";
        this.price = 0.0;
        this.quantity = 0;
    }

    // Constructor 2 - Name and price
    public Product(String name, double price) {
        this.name = name;
        this.price = price;
        this.quantity = 0; // Default value
    }

    // Constructor 3 - Name, price, and quantity
    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public void display() {
        System.out.println("Name: " + name + ", Price: " + price + ", Quantity: " + quantity);
    }
}

public class Main {
    public static void main(String[] args) {
        Product p1 = new Product();  // Calls the constructor without parameters
        Product p2 = new Product("Laptop", 3500.00);  // Calls the constructor with name and price
        Product p3 = new Product("Smartphone", 2000.00, 5); // Calls the full constructor

        p1.display();
        p2.display();
        p3.display();
    }
}
```

## 🔥 Advantages of Constructor Overloading
✅ Allows greater flexibility when creating objects.

✅ Improves code readability, as different initialization scenarios are handled.

✅ Avoids redundant code, as constructors can be reused using this().

## 🛠 Using this() to Avoid Repetition
We can call one constructor from another to prevent code duplication:

```
class Product {
    String name;
    double price;
    int quantity;

    // Primary constructor
    public Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Constructor calling another one to avoid code repetition
    public Product(String name, double price) {
        this(name, price, 0); // Calling the main constructor
    }

    // Constructor without parameters, using default values
    public Product() {
        this("Default Product", 0.0, 0);
    }

    public void display() {
        System.out.println("Name: " + name + ", Price: " + price + ", Quantity: " + quantity);
    }
}
```