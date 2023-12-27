/* JS Engine EXPOSED Google's V8 Architecture */

/* 
Javascript Runtime Environment
- A JavaScript runtime environment is a platform or an environment that allows JavaScript code to be executed. It provides the necessary infrastructure for running JavaScript applications, handling tasks such as code execution, memory management, and providing access to various APIs. The two primary types of JavaScript runtime environments are:

1.Browser-Based JavaScript Runtimes:
- Most commonly, JavaScript code runs in web browsers. Each browser has its own JavaScript engine that interprets and executes JavaScript code. Some popular JavaScript engines used by browsers include:
V8 (used in Google Chrome and Node.js)
SpiderMonkey (used in Mozilla Firefox)
JavaScriptCore (used in Safari)
- In the browser environment, the JavaScript runtime interacts with the Document Object Model (DOM) and other web APIs to enable dynamic web page interactions.

2.Server-Side JavaScript Runtimes:
- JavaScript is not limited to the browser; it can also be executed on servers. Server-side JavaScript runtimes, such as Node.js, allow developers to use JavaScript for building server-side applications. Node.js uses the V8 JavaScript engine and provides additional APIs for server-side functionality, file system access, networking, and more.
- With Node.js, developers can write JavaScript code that runs on the server, handling tasks like server-side logic, data processing, and communication with databases.

- In both cases, the JavaScript runtime environment provides an execution environment for JavaScript code, manages memory, handles asynchronous operations, and interfaces with external APIs and resources.
- The runtime environment is a crucial part of the overall development and execution process, ensuring that JavaScript code can run efficiently and interact with the necessary resources, whether in the browser or on the server.
*/

/* 
Javascript Engine
- A JavaScript engine is a software component that interprets and executes JavaScript code. It is responsible for parsing JavaScript source code, optimizing it, and generating machine code for efficient execution on the underlying hardware. JavaScript engines are an essential part of browsers and other environments where JavaScript code is run. Essentially JavaScript engine is a part of JavaScript runtime environment. For example Google's V8 Javascript engine is written in C++.

Phases in Javascript Engine (Working)
- The execution of JavaScript code in a JavaScript engine involves several phases. These phases collectively manage the process of interpreting and executing JavaScript code. While the specific details can vary between different engines, the following are common phases in a typical JavaScript engine:

1.Lexical Analysis: In this phase, the JavaScript engine scans the source code and breaks it down into smaller units called tokens. Tokens are the smallest units of meaningful code, representing keywords, identifiers, operators, and other language elements. This phase creates a stream of tokens that forms the basis for subsequent processing.

2.Syntax Parsing (Abstract Syntax Tree - AST): The engine takes the stream of tokens generated in the lexical analysis phase and constructs an Abstract Syntax Tree (AST). The AST represents the hierarchical structure of the code, capturing the relationships between different language elements. It serves as an intermediary representation that facilitates further analysis and interpretation. Visit https://astexplorer.net/ to visualize the hierarchical structure.

3.Intermediate Code Generation (Bytecode or IR): Some JavaScript engines use an intermediate code generation step where the AST is translated into an intermediate representation, such as bytecode or an intermediate representation (IR). This representation is closer to machine code and enables optimizations.

4.Optimizations: The engine applies various optimizations to improve the performance of the code. These optimizations may include constant folding, inlining, dead code elimination, and more. The goal is to generate more efficient machine code for execution.

5.Just-In-Time (JIT) Compilation: In engines that use JIT compilation, the optimized intermediate code is translated into machine code just before execution. This dynamic compilation allows the engine to adapt to runtime conditions and produce code that is tailored to the specific execution environment.

6.Execution: The final machine code is executed on the host machine. During execution, the engine manages the call stack, memory, and other runtime aspects of the program. The garbage collector works to reclaim memory occupied by objects that are no longer in use.

7.Garbage Collection: The garbage collector identifies and frees up memory occupied by objects that are no longer reachable or referenced in the program. This automatic memory management is crucial for preventing memory leaks and ensuring efficient memory usage.

- These phases collectively make up the process of interpreting and executing JavaScript code in a JavaScript engine. The emphasis on specific phases and the level of optimization can vary between different engines, leading to differences in performance and behavior. Modern engines, such as V8, SpiderMonkey, and JavaScriptCore, continuously evolve and employ sophisticated techniques to enhance the efficiency of JavaScript execution.
*/

/* 
Mark & Sweep Algorithm in Garbage Collection 
- The Mark-and-Sweep algorithm is a widely used garbage collection algorithm in JavaScript and many other programming languages. It's designed to identify and reclaim memory that is no longer in use by the program. 
Here's an overview of how the Mark-and-Sweep algorithm works:

1.Mark Phase:
- The algorithm starts by traversing all reachable objects from a set of known "roots." Roots are typically global objects, local variables, or other references that are explicitly defined by the programming language or runtime environment.
- During the traversal, it marks each visited object as "reachable" by setting a flag or a bit in the object's header. This step ensures that objects directly or indirectly referenced by the roots are identified.

2.Sweep Phase:
- After the mark phase, all objects that haven't been marked as reachable are considered unreachable and, therefore, can be safely assumed to be garbage.
- The sweep phase involves iterating through all memory (heap) and identifying unmarked objects. Unmarked objects are considered garbage, and their memory can be reclaimed.
- During the sweep phase, the algorithm updates the memory management data structures to reflect the removal of garbage objects.

3.Compaction (Optional):
- Some garbage collection implementations include an optional compaction step. After sweeping, the memory may have fragmentation due to the removal of objects of different sizes. Compaction involves rearranging the remaining live objects in memory to minimize fragmentation, making better use of available memory.

4.Memory Reclamation:
- The memory occupied by the identified garbage objects is released, making it available for future allocations. This step is crucial for preventing memory leaks and ensuring efficient use of memory resources.

- Here's a simplified representation of the Mark-and-Sweep algorithm:

Initial memory state
+---+---+---+---+---+
| A | B | C | D | E |
+---+---+---+---+---+

Mark phase
+---+---+---+---+---+
| A | B | C | D | E |
+---+---+---+---+---+
   ^
   |
Marked as reachable

Sweep phase
+---+---+---+---+---+
|   | B | C | D | E |
+---+---+---+---+---+

Now these objects will be sweeped because they are unreachable and the garbage collector reclaims that memory for us.

Here's another simple illustration:

Initial memory state
+---+---+---+---+
| A | B | C | D |
+---+---+---+---+

Object references
Root --> A --> B
      |
      +----> C --> D

Reachable objects: A, B, C, D (all part of reachable chain)

- In this example, objects A, B, C, and D are reachable because there is a chain of references starting from the root. If an object is not part of such a chain, it is considered unreachable and may be reclaimed by the garbage collector.
- The concept of reachability is fundamental to automatic memory management and garbage collection, ensuring that only objects that are still accessible by the program are retained, and memory occupied by unreachable objects can be safely reclaimed.
*/

/* 
Inlining, copy elision and Inline Caching
- Inlining, copy elision, and inline caching are optimization techniques that can be employed by a JavaScript engine during various phases of the execution process. These techniques aim to improve the performance of JavaScript code. Let's briefly explore each of them:

1. Inlining:
- Inlining is a compiler optimization technique where the code of a function or method is directly inserted into the calling code rather than making a separate function call.
- In the context of a JavaScript engine, inlining can reduce the overhead associated with function calls by incorporating the code of small functions directly into the calling context. This can lead to better performance, especially for short and frequently called functions.
- Inlining typically occurs during the optimization phase, where the engine analyzes the code and decides whether inlining specific functions would result in improved performance.

2.Copy Elision:
- Copy elision is an optimization technique that involves avoiding unnecessary copying of objects, particularly during variable assignments.
- In JavaScript, copy elision can be applied when creating and assigning objects. If the engine determines that the copied object is not needed, it may optimize the code to eliminate the unnecessary copy operation, reducing memory usage and improving performance.
- Copy elision is often applied during optimization phases, where the engine analyzes code patterns and eliminates unnecessary operations.

3.Inline Caching:
- Inline caching is a technique used to optimize property access in JavaScript. It involves caching the results of property lookups to avoid repeatedly traversing the prototype chain.
- In JavaScript, objects often have a prototype chain, and property lookups involve checking multiple levels of the chain. Inline caching allows the engine to remember the location of a property in the prototype chain for a specific object, avoiding the need to retrace the chain for subsequent accesses.
- Inline caching is typically applied during the execution phase, where the engine optimizes property accesses based on the observed behavior of the code.

- These optimization techniques are part of the overall strategy employed by JavaScript engines to enhance the performance of code execution. They are often implemented during various phases of the engine's processing, such as during the optimization phase or dynamically during execution based on runtime observations (e.g., inline caching). The specific details can vary between different JavaScript engines.
*/