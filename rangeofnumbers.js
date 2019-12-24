function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum)
    {return [startNum]}
  else 
    {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    if (startNum == endNum)
      {return []}
    else { 
      countArray.unshift(startNum);
      return countArray;
   }
  }
}
