import { concat } from 'rxjs';

console.clear();

// ***************************************
// typusok
// ***************************************
// boolean
const b: boolean = true;

// number
const n: number = 5;

// string
const s: string = 'Lorem ipsum';
const ts: string = `Template: ${s}`;
console.log(ts);

// array
const a1: number[] = [1, 2, 3, 4];

// array generikus paraméterrel
const a2: Array<number> = [1, 2, 3, 4];

// több típus használata
let infArrayType: (number | string)[] = [];
infArrayType.push(1);
infArrayType.push('sadadasad');
//infArrayType.push(false); // hibát dob
console.log(infArrayType);

// enum typus
const enum Season {
  Winter = 'Winter',
  Autumn = 'Autumn',
  Spring = 'Spring',
  Summer = 'Summer',
}

const e: Season = Season.Autumn;
console.log(e);

// any ugyanúgy visselkedik mint egy javascriptes változó.
// futáskori hibákat okozhatnak
// ha js és ts kódot közösen kell használni akkor érdemes használni
const a: any = 'Lorem ipsum';
console.log(a.toUpperCase());

// Type Assertions amikor megmondjuk neki hogy mi tudjuk így már lesz kódkiegészítő
console.log((a as string).toUpperCase());

// type inference amikor a typescript fordító találja ki hogy milyen tpus
const inf = 'Lorem';
console.log(inf.toUpperCase());

const infArray = [];
infArray.push('Lorem');
infArray.push(2);
console.log(infArray);

// ***************************************
// Functions
// ***************************************
function logFunction(x: string): void {
  console.log('asasd');
}

function conCatFunction(x: string, y: string): string {
  return x.concat(y);
}
console.log(conCatFunction('Lorem', 'Ipsum'));

// ***************************************
// INTERFACE
// kötelező nem kötelező property
// ***************************************
interface User {
  id: number;
  name: string;
  age?: number;
}

const user1: User = {
  id: 1,
  name: 'Lorem ipsum',
};

const user2: User = {
  id: 1,
  name: 'Lorem ipsum',
  age: 20,
};

// ***************************************
// CLASS
// ***************************************
