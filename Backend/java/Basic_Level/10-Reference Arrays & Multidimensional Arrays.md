# Reference Arrays & Multidimensional Arrays



## **Reference Arrays**
Reference arrays store references to objects instead of primitive values. Since objects in Java are stored in the heap, the array only holds the memory addresses of these objects.

### **Example**

```
class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an array of references to Person objects
        Person[] people = new Person[3];

        // Initializing the objects
        people[0] = new Person("Carlos");
        people[1] = new Person("Maria");
        people[2] = new Person("John");

        // Accessing the objects inside the array
        for (Person p : people) {
            System.out.println(p.name);
        }
    }
}

```

### **Explanation**

-   The array `people` contains references to `Person` objects, not the objects themselves.
-   Each element of the array holds a memory address pointing to a real `Person` object in the heap.

----------

## **Multidimensional Arrays**

Multidimensional arrays contain other arrays as elements. In Java, arrays can have multiple dimensions, with the **two-dimensional array** being the most common.

### **Example of a Two-Dimensional Array**

```
public class Main {
    public static void main(String[] args) {
        // Creating a 2D integer array (matrix)
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Iterating and printing the values
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}

```

```
public class Main {
    public static void main(String[] args) {
       String[][] ninjasEAldeias = new String[3][3];  
  
		ninjasEAldeias[0][0] = "Konoha";  
		ninjasEAldeias[0][1] = "Naruto";  
		ninjasEAldeias[0][2] = "Sasuke";  
		  
		ninjasEAldeias[1][0] = "Nevoa";  
		ninjasEAldeias[1][1] = "Zabuza";  
		ninjasEAldeias[1][2] = "Haku";  
		  
		ninjasEAldeias[2][0] = "Deserto";  
		ninjasEAldeias[2][1] = "Gaara";  
		ninjasEAldeias[2][2] = "Temari";  
  
		for (int i = 0; i < ninjasEAldeias.length ; i++) {  
		    System.out.println("Aldeia: " + ninjasEAldeias[i][0] + " " +  " 1 - " + ninjasEAldeias[i][1] + " " + " 2 - " + ninjasEAldeias[i][2]);  
		}
    }
}

```

### **Explanation**

-   The array `matrix` is an array of arrays (`int[][]`).
-   Each element `matrix[i]` is an array of integers.
-   Elements are accessed using two indices: `matrix[i][j]`.


### **Jagged Arrays (Irregular Multidimensional Arrays)**

Unlike languages like C, Java allows multidimensional arrays to have irregular sizes.

```
public class Main {
    public static void main(String[] args) {
        // Creating a jagged 2D array
        int[][] jaggedArray = new int[3][];
        jaggedArray[0] = new int[]{1, 2};
        jaggedArray[1] = new int[]{3, 4, 5};
        jaggedArray[2] = new int[]{6};

        // Iterating through the array
        for (int i = 0; i < jaggedArray.length; i++) {
            for (int j = 0; j < jaggedArray[i].length; j++) {
                System.out.print(jaggedArray[i][j] + " ");
            }
            System.out.println();
        }
    }
}

```

### **Explanation**

-   Each row can have a different number of columns.
-   This provides flexibility and can save memory.

----------
