/**
 * Function Type
 * 
 * //매개변수를 받고 리턴을 하게된다 두가지타입이 필요하다 그래서 타입을 2개 지정해야한다.
 * 
 * 
 * 1. 매개변수
 * 2. 반환
 * void는 반환하지 않는다라는 뜻
 */
function func(num: number, str: string): string {
  return num + str
}


func(123, 'str')

function func2(num1: number, num2: string) {
  return num1 + Number(num2)
}
//반환 타입은 타입추론이 잘되는 편이다



func2(123, '123')


function func3(num1: number, num2: string): void {
  console.log(num1 + num2)
}


func3(123, '123')


const func4 = (str1: string, str2: string) => {
  return str1 + ' ' + str2
}
//반환 타입은 타입추론이 잘되는 편이다

func4('hello', 'world')

const func5 = (obj: {str1: string, str2: string}) => {
  return obj.str1 + ' ' + obj.str2
}

  func5({str1: 'hello', str2:'world'})
