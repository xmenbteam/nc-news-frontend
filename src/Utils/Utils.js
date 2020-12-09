const timeStamp = (time) => {
    const monthRef = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    }
    const monthArr = Object.entries(monthRef)

    let splitTime = time.split('T')

    let date = splitTime[0]
    let splitDate = date.split('-')
    let day = splitDate[2]
    let month = splitDate[1]


    let timeSplit = splitTime[1]
    let formattedTime = timeSplit.split('.')

    const formatDay = (day) => {
        let split = day.split('')
        let returnDay = ''
        let suffix = ''
        if (split[0] === '0') returnDay = split[1]
        else returnDay = day

        if (returnDay.charAt(-1) === '1') suffix = 'st'
        else if (returnDay.charAt(-1) === '2') suffix = 'nd'
        else if (returnDay.charAt(-1) === '3') suffix = 'rd'
        else suffix = 'th'

        return `${returnDay}${suffix}`

    }

    const formatMonth = (month) => {
        for (let i in monthArr) {
            if (month === monthArr[i][0]) return monthArr[i][1]
        }
    }
    console.log(formatDay(day) + formatMonth(month))

    let timeReturn = formattedTime[0]
    let dayReturn = formatDay(day)
    let monthReturn = formatMonth(month)
    let year = splitDate[0]

    const returner = `Created at ${timeReturn} on ${dayReturn} ${monthReturn} ${year}`
    console.log(returner)

}

timeStamp('2017-06-21T03:05:41.598Z')
timeStamp('2017-06-02T03:05:41.598Z')