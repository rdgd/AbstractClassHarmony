# AbstractClassHarmony
Abstract classes for ES Harmony.

NOTE: Currently defining an abstract class as a subclass of an abstract class is not supported. Must have one abstract class definition, and then implementations.

Using whatever syntax you prefer, include the AbstractClass export, imported from AbstractClass.js into what will be your abstract class definition.

From your class definition's constructor pass an object literal to the super() call, which is to AbstractClass, in your definition's constructor. The object literal can have two keys (1) methods and (2) attributes. The values of these keys should be arrays of strings, which indicate what the implemented name or attribute needs to be. For example:

```
import AbstractClass from './AbstractClass.js';

class AbstractPerson extends AbstractClass {

  constructor () {
    super({
      methods: ['walk', 'talk', 'eat'],
      attributes: ['name', 'age']  
    });
  }

}
```

Now when your implementation extends AbstractPerson, it will be held accountable for the requirements set forth by the abstract class/interface definition.

Abstract attributes are not very common, and I am only aware of their use in C#. This is
similar to that, except we are not required to define a getter method for them in the implementation.
