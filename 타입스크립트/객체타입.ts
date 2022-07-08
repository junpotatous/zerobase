/**
 * Object Type
 */

// object만 다는 것은 유사 any와 다른게 없는 상황
// any는 '어떤 타입이든'이라는 의미로 타입을 엄격하게 검사하고 처리하는 ts에서 any는 치명적인 존재이다.

//TypeScript는 any 타입에 대해 엄격하게 검사 또는 체크하지 않기 때문에 개발자의 입장에서는 문제가 없는 코드라고 판단할 수 있지만, 실제로 애플리케이션을 개발하거나 FrontEnd를 개발하면 any 타입 때문에 문제가 발생하는 경우가 종종 있다.

const obj: object = {
  str: 'str',
  num: 123,
  child: {
    str: 'str',
    num: 123,
  }
}

//obj.num
//타입을 어떻게 좁혀줄까 object는 생김새가 워낙 다양하기 때문에 조금은 더 자세히 묘사 해줘야 한다.


const obj2: {
  str: string,
  num: number, 
  child: {
    str: string,
    num: number,
}} = {
  str: 'str',
  num: 123,
  child: {
    str: 'str',
    num: 123,
  }
  
}

console.log(obj2.str)
