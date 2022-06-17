const data = JSON.parse(localStorage.getItem('data'));
const { name_, age, email, phoneno, gender, sunday, monday, tuesday, wendesday, thurday, friday, saturday } = data;
$('#table #displaydata').append('<tr class="child"></td><td>' + name_ + '</td><td>' + age + '</td><td>' + email + '</td><td>'
    + phoneno + '</td><td>' + gender + '</td><td>' + sunday + '</td><td>' + monday + '</td><td>' + tuesday + '</td><td>' + wendesday + '</td><td>'
    + thurday + '</td><td>' + friday + '</td><td>' + saturday + '</td></tr>'


)
