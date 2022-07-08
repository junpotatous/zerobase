/**
 * Function Type
 * 
 * 1. 매개변수
 * 2. 반환
 */
 function func(num: number, str: string): string {
  return num + str
}

func(123, 'str')

function func2(num1: number, num2: string) {
  return num1 + Number(num2)
}

func2(123, '123')


function func3(num1: number, num2: string): void {
  console.log(num1 + num2)
}

func3(123, '123')


const func4 = (str1: string, str2: string) => {
  return str1 + ' ' + str2
}


func4('hello', 'world')

const func5 = (obj: { str1: string, str2: string }) => {
  return obj.str1 + ' ' + obj.str2
}


func5({ str1: 'hello', str2: 'world' })
