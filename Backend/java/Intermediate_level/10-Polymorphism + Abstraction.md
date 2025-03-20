# Polymorphism + Abstraction

```
public interface EstrategiaDeBatalha(){

  void estrategiaDeBatalhaNinja();
}

public abstract class Ninja implements EstrategiaDeBatalha{
  @override
  public void estrategiaDeBatalhaNinja(){
    System.out.println("This is my battle strategy");
  }
}
```