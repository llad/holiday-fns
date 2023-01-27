import { expect, test } from "bun:test";
import { eachWorkingDayOfInterval, addWorkingDays, isWorkingDay, getWorkingDate } from './index.ts'
import * as holidaysjson from './example-holidays.json'

function getholidays(): array {
  return holidaysjson.default.map(d => new Date(d))
  }

const start = new Date('2022-09-29')
const end = new Date('2022-10-27')
const holidays = getholidays()

test("getWorkingDate", () => {

  const secondResult = getWorkingDate(start, 2, holidays) 
  expect(secondResult).toEqual(new Date('2022-09-30'))

  const thirdResult = getWorkingDate(start, 3, holidays)
  expect(thirdResult).toEqual(new Date('2022-10-03'))


  const fourthResult = getWorkingDate(start, 4, holidays)
  expect(fourthResult).toEqual(new Date('2022-10-04'))
  
  const fifthResult = getWorkingDate(start, 5, holidays)
  expect(fifthResult).toEqual(new Date('2022-10-06'))

  const nineteenthResult = getWorkingDate(start, 19, holidays) 
  expect(nineteenthResult).toEqual(new Date('2022-10-27'))

})

test("eachWorkingDayOfInterval", () => {
	const nineteenDays = eachWorkingDayOfInterval({
		start: start,
		end: end
	}, holidays)
	expect(nineteenDays.length).toEqual(19)

})
