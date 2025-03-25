# Enums

The term **Enum** in Java refers to a special type of class used to represent a fixed set of constants. `Enums` are ideal when you need to define values that will not change over time, such as days of the week, order statuses, or types of status.

---

## **1. Creating a Simple Enum**

To create an `enum`, we use the `enum` keyword. Here is an example representing the days of the week:

```
public enum DayOfWeek {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}
```

Each item inside the `enum` represents a constant and, by convention, is written in uppercase letters.

---

## **2. How to Use an Enum**

You can use an `enum` just like any other data type:

```
public class EnumTest {
    public static void main(String[] args) {
        DayOfWeek today = DayOfWeek.WEDNESDAY;
        System.out.println("Today is: " + today);
    }
}
```
### **Output:**  
```
Today is: WEDNESDAY
```

---

## **3. Enums with Constructors and Methods**

`Enums` can have attributes, constructors, and methods, allowing values to be associated with each constant. Example with order statuses:

```
public enum OrderStatus {
    PENDING(1), PROCESSING(2), SHIPPED(3), DELIVERED(4);

    private int code;

    OrderStatus(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
```

### **Using the Enum with Methods:**

```
public class StatusTest {
    public static void main(String[] args) {
        OrderStatus status = OrderStatus.SHIPPED;
        System.out.println("Status: " + status + " | Code: " + status.getCode());
    }
}
```
### **Output:**
```
Status: SHIPPED | Code: 3
```

---

## **4. Iterating Over an Enum**

To list all values of an `enum`, we use the `.values()` method:

```
public class EnumTest {
    public static void main(String[] args) {
        for (DayOfWeek day : DayOfWeek.values()) {
            System.out.println(day);
        }
    }
}
```
### **Output:**
```
SUNDAY
MONDAY
TUESDAY
WEDNESDAY
THURSDAY
FRIDAY
SATURDAY
```

---

## **5. Converting a String to an Enum**
We can convert a `String` to an `enum` using `Enum.valueOf()`:

```
public class EnumTest {
    public static void main(String[] args) {
        String dayName = "MONDAY";
        DayOfWeek day = DayOfWeek.valueOf(dayName);
        System.out.println("Selected day: " + day);
    }
}
```
### **Output:**
```
Selected day: MONDAY
```

---