# AbstractClassHarmony
Abstract classes for ES Harmony.

Using whatever syntax you prefer, include the AbstractClass export, imported from AbstractClass.js into what will be your abstract class definition.

From your class definition's constructor pass an object literal to the super() call, which is to AbstractClass, in your definition's constructor. The object literal can have two keys (1) methods and (2) attributes. The values of these keys should be arrays of strings. For example:

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

Right now this is being used really more like an interface, but I've still some work to do.
