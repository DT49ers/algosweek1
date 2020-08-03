function calculateFewestCoinsChange(cents) {
  // algorithm here
  coins = {}
  penny = 1
  nickel = 5
  dime = 10
  quarter = 25

  if (cents >= quarter){
    remainder = cents%quarter //84 cents remainder is 9
    coins['quarter'] = (cents - remainder)/25  //84-9 = 75 / 25 = 3
    cents-=(coins['quarter']*25) //84 - 75 = 9
  }
  if(cents >= dime){
    remainder = cents%dime 
    coins['dime'] = (cents - remainder)/10  
    cents-=(coins['dime']*10) 
  }
  if(cents >= nickel){
    remainder = cents%nickel 
    coins['nickel'] = (cents - remainder)/5  
    cents-=(coins['nickel']*5) 
  }
  if(cents>0){
      coins['penny'] = cents
  }
  return coins
}


function missingValue(nums) {
  // algorithm here
  var sorted_nums = nums.sort()
  console.log(sorted_nums)

  for (var i = 0; i<nums.length-1; i++){
    if(nums[i+1]!== nums[i]+1) { 
      return nums[i]+1
    }
  }
   return null
}

console.log(missingValue([1,6,2,4,5]))