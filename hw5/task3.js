function tickets(peopleQueue) {
  let acc25 = 0;
  let acc50 = 0;
  for (let i = 0; i < peopleQueue.length; i += 1) {
    if (peopleQueue[i] === 25) {
      acc25 += 1;
    }
    if (peopleQueue[i] === 50) {
      acc25 -= 1;
      acc50 += 1;
    }
    if (peopleQueue[i] === 100) {
      if (acc50 === 0 && acc25 >= 3) {
        acc25 -= 3;
      } else {
        acc25 -= 1;
        acc50 -= 1;
      }
    }
    if (acc25 < 0 || acc50 < 0) {
      return 'NO';
    }
  }
  return 'YES';
}
console.log(tickets([25, 25, 50]));
console.log(tickets([25, 100]));
console.log(tickets([25, 25, 50, 50, 100]));