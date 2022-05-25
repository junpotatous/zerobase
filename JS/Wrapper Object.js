// 원시값의 래퍼 객체
const bool =  false;
const num = 123;
const str = 'string';


const obj = {
  name: 'jun',
  greeting: function() {
    return 'hello ' + this.name
  }
}

console.log(obj.greeting());

