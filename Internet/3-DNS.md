---


---

<h3 id="what-is-dns">What is DNS?</h3>
<p>Imagine you’re looking for someone’s phone number in a big phone book. The <strong>DNS (Domain Name System)</strong> is like that phone book, but for the internet. Instead of phone numbers, it helps your computer find websites using names like <strong><a href="http://nytimes.com">nytimes.com</a></strong> or <strong><a href="http://espn.com">espn.com</a></strong>.</p>
<p>Websites use <strong>IP addresses</strong> (which are like secret codes or phone numbers for computers), but we don’t need to remember those. DNS helps by changing website names (like “<a href="http://example.com">example.com</a>”) into their IP addresses, so your browser can find and open them.</p>
<hr>
<h3 id="how-does-dns-work">How does DNS work?</h3>
<p>When you type a website name (like <strong><a href="http://www.example.com">www.example.com</a></strong>) into your browser, DNS works behind the scenes to change that name into an IP address (like <strong>192.168.1.1</strong>) so your computer knows where to go to find that website.</p>
<p>Think of it like this: You want to visit a friend’s house, but you only know their name. DNS helps you find their address (the IP address) so you can get there.</p>
<hr>
<h3 id="dns-has-different-parts-that-work-together">DNS has different parts that work together:</h3>
<p>There are 4 main “helpers” in DNS:</p>
<ol>
<li>
<p><strong>DNS Recursor</strong>: Imagine this is a helpful librarian. When you ask for a book (a website), the librarian looks around and asks other librarians for the right book.</p>
</li>
<li>
<p><strong>Root Nameserver</strong>: This is like a giant index at the start of a library that points you to a section where you can find books. It doesn’t know exactly where the book is but knows where to look next.</p>
</li>
<li>
<p><strong>TLD Nameserver</strong>: This is like a bookshelf in that section, and it knows about all the books in its group. For example, when you search for “<a href="http://example.com">example.com</a>”, the TLD server knows where to find “.com” websites.</p>
</li>
<li>
<p><strong>Authoritative Nameserver</strong>: This is the final stop where you find the exact book (the IP address) you need. Once it gives the address, the librarian (DNS Recursor) sends it back to your browser.</p>
</li>
</ol>
<hr>
<h3 id="what’s-the-difference-between-a-recursive-dns-resolver-and-an-authoritative-dns-server">What’s the difference between a Recursive DNS Resolver and an Authoritative DNS Server?</h3>
<ul>
<li>
<p><strong>Recursive DNS Resolver</strong>: This helper starts the search for a website and asks around until it finds the right address. If it doesn’t know, it asks other helpers for the right info.</p>
</li>
<li>
<p><strong>Authoritative DNS Server</strong>: This one is the final helper. It has the exact address (IP address) for the website and gives it back to the Recursive Resolver.</p>
</li>
</ul>
<hr>
<h3 id="how-does-dns-find-a-website">How does DNS find a website?</h3>
<p>When you want to go to a website, like <strong><a href="http://example.com">example.com</a></strong>, DNS follows a set of steps:</p>
<ol>
<li><strong>Your browser asks</strong> for the website.</li>
<li>The <strong>DNS Recursor</strong> asks a <strong>Root Nameserver</strong>.</li>
<li>The <strong>Root Nameserver</strong> points to a <strong>TLD Nameserver</strong> (like <strong>.com</strong>).</li>
<li>The <strong>TLD Nameserver</strong> points to the <strong>Authoritative Nameserver</strong>.</li>
<li>The <strong>Authoritative Nameserver</strong> gives the IP address.</li>
<li>The <strong>DNS Recursor</strong> gives the address to your browser.</li>
<li>Your browser now knows where to go and loads the website.</li>
</ol>
<hr>
<h3 id="what-is-dns-caching">What is DNS Caching?</h3>
<p><strong>DNS Caching</strong> is like remembering a website’s address so you don’t have to ask for it again. When your computer, browser, or even an internet server has visited a website before, it can store the address for a while, making it quicker to load next time.</p>
<hr>
<h3 id="types-of-dns-queries">Types of DNS Queries</h3>
<p>When searching for a website, three types of questions are asked:</p>
<ol>
<li>
<p><strong>Recursive Query</strong>: This is when the computer asks for an answer and waits for it. The DNS helper keeps asking until it finds the right address.</p>
</li>
<li>
<p><strong>Iterative Query</strong>: This is when the computer asks and the DNS helper gives the best answer it has. If it doesn’t have the full answer, it sends the computer to ask someone else.</p>
</li>
<li>
<p><strong>Non-recursive Query</strong>: This is when the computer already knows the answer, like from caching, so it doesn’t need to ask anyone else.</p>
</li>
</ol>

