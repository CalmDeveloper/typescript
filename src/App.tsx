import React from 'react';



function App() {
  // const show=(arr:string[])=>{
  //   arr[0]=''
  // }
  // const show=(a:number, b:number):void=>{
  //   a+b
  // }
  // const show=(a:number, b:number)=>{
  //  return  a+b
  // }
  // const show=(a:number, b:number):number | string=>{
  //  return  a+b
  // }

  // const user = {name:'max', age:10}
  // const showUser = (user:{name:string,age:number}) => {
  // }
// const user:{name:string,age:number}= {age:42,name:'vfvf'}

  // tsc.app.ts cimpilator

  // interface IUser{
  //   id:number,
  //   name: string,
  //   age:number
  // }
  // const user:IUser={id:20, age:42,name:'vfvf'}

  // interface IUser{
  //   id:number,
  //   name: string,
  //   age:number,
  //   address:{
  //     street:string,
  //     house:number
  //   }
  // }
  // const user: IUser={id:20, age:42,name:'vfvf',address:{street:'vdvd',house:5}}



//   interface IUser{
//     id:number,
//     name: string,
//     age:number,
// addres:IAdress
//     }
//
// interface IAdress {
//       street?:string,
//       house:number
// }
//
//   const user:IUser={id:20, age:42,name:'vfvf',addres :{street:'vdvd',house:5}}


//
//   type UniqeId=number
//     interface IUser<T>{
//     id:UniqeId,
//     name: string,
//     age:number,
// addres:IAdress
//       arr:T[]
//     }
//
// interface IAdress {
//       street?:string,
//       house:number
// }
//
//   const user:IUser<number>={id:20, age:42,name:'vfvf',addres :{street:'vdvd',house:5},arr:[1]}


  //
  // type StateType = [string,(a:number,b:number)=>number]
  // const useSate:StateType=['text',(a,b)=>{return a+b}]
  //
  // let [first,second] = useSate
  // console.log(first)
  // console.log(second)
// node app.js  start



// class User {
//     id?:number;
//     name:string;
//     age:number;
//
//   constructor(id: number, name: string, age: number) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//   }
// }
//
// const user:User={age:20,id:10,name:'tar'}


  // class User {
  //   constructor( private id: number, private name: string,public age: number) {
  //     this.id = id;
  //     this.name = name;
  //     this.age = age;
  //
  //   }
  //   getId():number{
  //     return this.id as number
  //   }
  //   setId(newid:number):void{
  //     this.id=newid
  //   }
  // }

  // const user:User={age:20,id:10,name:'tar'}
// const user1:User={age:1,id:12,name:'ts'}
 // const ddd= user1.name



  interface IShapeActions {
    area:()=>number,
    perimetr:()=>number
  }

  interface Isss{
    hhh:(a:string,b:string)=>void
  }
  class Triangle implements Isss,IShapeActions{

    constructor(private a:number,private b:number,private c:number) {
    }

    area(): number {
      return this.a*this.b*this.c
    }

    hhh(a: string, b: string): void {
    console.log(a+b)
    }

    perimetr(): number {
     return  this.a+this.b+this.c
    }

  }
  class Rectangle implements IShapeActions {
    constructor(private a: number, private b: number) {
    }

    area(): number {
        return this.a * this.b
    }

    perimeter(): number {
        return this.a + this.b
    }

    perimetr(): number {
      return this.a + this.b
    }


}
  const shapes: IShapeActions[] = [new Triangle(1, 2, 3), new Rectangle(2, 7), new Triangle(1, 5, 8)]
  for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimetr());
}
let rectangle = new Rectangle(2, 7);


  return (
    <div>

    </div>
  );
}

export default App;
