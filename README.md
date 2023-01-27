# holiday-fns
sometimes you want to know the 5th business day of the month. sometimes there are holidays. hmm.

working days = no weekends and no holidays -- didn't want to get confused with date-fns business day features.

you need to pass in your own holidays. see example-holidays.json

# functions

## eachHolidayOfInterval
list out all the holidays between two dates

## eachWorkingDayOfInterval
list all working days (no weekends or holidays)

## addWorkingDays
add some number of working days to a date

## isWorkingDay
is the day a working day

## getWorkingDate
get the x working day starting at a day -- like get me the 5th working day of the month 



