interface ISwim {
  swimming: () => void;
}

interface IEat {
  eating: () => void;
}

// 类实现接口
class Animal {}
// 继承：只能实现单继承
// 实现：实现接口 类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("Fish swimming");
  }

  eating() {
    console.log("Fish eating");
  }
}

// 编写一些公共Api
function swimAction(swim: ISwim) {
  swim.swimming();
  // 希望只要有swimming方法的就能传进来(实现了ISwim接口)
  //    就将传进来的swim的类型限制为ISwim 这也叫面向接口编程
}

class Person implements ISwim {
  swimming() {
    console.log("Person swimming");
  }
}
swimAction(new Person());
swimAction(new Fish());

swimAction({ swimming: function () {} });
