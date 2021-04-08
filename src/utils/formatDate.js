/* eslint-disable valid-typeof */
import moment from 'moment'

const formatDate = date => {
  if (typeof date === 'number') {
    return moment.unix(date / 1000).format('YYYY-MM-DD')
  }

  return moment().format('YYYY-MM-DD')
}
export default formatDate
