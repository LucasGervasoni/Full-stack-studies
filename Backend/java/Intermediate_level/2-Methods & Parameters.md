---


---

<h1 id="methods--parameters">Methods &amp; Parameters</h1>
<p>Imagine you have a <strong>helper robot</strong> in your house, and it can do various tasks for you, like turning on the light, bringing a glass of water, or telling you the time.</p>
<p>Now, for it to do these tasks, you need to give specific commands. These commands are called <strong>methods</strong> in Java.</p>
<p>For example, you could have a method called <strong>turnOnLight()</strong>. Whenever you call this method, the robot will turn on the light for you.</p>
<p>But what if you want to tell it <strong>which light to turn on</strong>? That’s where something called <strong>parameters</strong> comes in.</p>
<p>Parameters are like extra information you give to the method so it knows exactly what to do.</p>
<p>For example, instead of just calling <strong>turnOnLight()</strong>, you could call <strong>turnOnLight(“bedroom”)</strong>. That way, the robot knows it should turn on the bedroom light and not the kitchen light.</p>
<p>In Java, it would look like this:</p>
<pre><code>class Robot {
    void turnOnLight(String place) {
        System.out.println("Light in the " + place + " turned on!");
    }
}

public class Main {
    public static void main(String[] args) {
        Robot myRobot = new Robot();
        myRobot.turnOnLight("bedroom");
        myRobot.turnOnLight("kitchen");
    }
}

</code></pre>

