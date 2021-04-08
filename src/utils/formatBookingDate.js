/* eslint-disable valid-typeof */
import moment from 'moment'

const boookingDateFormat = date => {
  // console.log('==========', date, "========", typeof date)
  // if (typeof date === 'number') {
  //   return moment.utc(date).local()
  // }

  // if (typeof date === 'undefined' || typeof date === 'object') {
  //   return moment().format('MMM Do YY')
  // }

  return moment().format('MMM Do YY')
}
export default boookingDateFormat
