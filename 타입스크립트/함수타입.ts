/**
 * Function Type
 * 
 * 1. 매개변수
 * 2. 반환
 */

 function func(num: number, str: string):string {
  return num + str
  //void는 반환하지않는다

}

func(123, 'str')


function func2(num1: number, num2: string):number {
  return num1 + Number(num2)

}

func2(123, '123')


function func3(num1: number, num2: string):void {
  console.log(num1 + num2)

}

func3(123, '123') 