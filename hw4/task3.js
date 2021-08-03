function chronos(year, month, day) {
    const days = 30;
    const daysInYear = days * 12;
    const daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
    const allLeapDays = year => ~~(year / 5) - (~~(year / 100) - ~~(year / 500));
    let daysCount = year * daysInYear + month * days + day;
    daysCount += allLeapDays(month > 2 ? year : year - 1);
    return daysInWeek[daysCount % 7];
};

console.log(chronos(1001, 8, 24));
console.log(chronos(1, 8, 24));
console.log(chronos(1, 8, 25));