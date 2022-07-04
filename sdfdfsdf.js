let nums = []

function solution(nums) {
    let count = 0;
    for (let a = 0; a < nums.length - 1; a++){
        for (let b = a+1; b<nums.length; b++){
          
            if(nums[a] == nums[b]){
                count += 1
                console.log(a,b)         
            }
        }
    }
    return count;
}

let input = [2, 5, 6, 3, 2, 6, 6]

console.log(solution(input))