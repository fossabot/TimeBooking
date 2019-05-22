class TimeDataSet {
  constructor () {
    this.startTime = null
    this.endTime = null
    this.description = ''
  }

  addDescription (data) {
    this.description = data
  }

  getDescription () {
    return this.description
  }

  convertToTime (value) {
    var date = new Date(value)
    var time = String(date.getHours()).padStart(2, '0') + ':'
    time += String(date.getMinutes()).padStart(2, '0')

    return time
  }

  setStartTime (datetime) {
    this.startTime = datetime.getTime()
  }

  getStartTime () {
    return this.convertToTime(this.startTime)
  }

  setEndTime (datetime) {
    this.endTime = datetime.getTime()
  }

  getEndTime () {
    return this.convertToTime(this.endTime)
  }

  getWorkTime () {
    var returnInt = 0

    if (this.startTime === null || this.endTime === null) {
      return returnInt
    }

    returnInt = this.endTime - this.startTime

    return returnInt
  }

  getFormatedTime () {
    var returnString = ''
    var value = this.getWorkTime()
    var minutes = Math.floor((value / (1000 * 60)) % 60)
    var hours = Math.floor((value / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? '0' + hours : hours
    minutes = (minutes < 10) ? '0' + minutes : minutes

    returnString = hours + ' h ' + minutes + ' m'
    return returnString
  }

  getSaveableDataSet () {
    var data = {}
    data['startTime'] = this.startTime
    data['endTime'] = this.endTime
    data['description'] = this.description

    return data
  }

  fromJson (data) {
    if (data.startTime === undefined || data.endTime === undefined) {
      return
    }

    this.startTime = data.startTime
    this.endTime = data.endTime
    if (data.description !== undefined) {
      this.description = ''
    }
  }
}

module.exports = TimeDataSet
