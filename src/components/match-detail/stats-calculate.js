export const overUnderFunction = matches => {
  let overUnderCount = {
    twoAndHalf: {
      over: 0,
      under: 0
    },
    oneAndHalf: {
      over: 0,
      under: 0
    },
    threeAndHalf: {
      over: 0,
      under: 0
    }
  }

  matches.map(match => {
    const totalScore = match.score.fulltime.home + match.score.fulltime.away
    if (totalScore > 1) {
      overUnderCount.oneAndHalf.over += 1
      if (totalScore > 2) {
        overUnderCount.twoAndHalf.over += 1
        if (totalScore > 3) {
          overUnderCount.threeAndHalf.over += 1
        } else {
          overUnderCount.threeAndHalf.under += 1
        }
      } else {
        overUnderCount.twoAndHalf.under += 1
        overUnderCount.threeAndHalf.under += 1
      }
    } else {
      overUnderCount.oneAndHalf.under += 1
      overUnderCount.twoAndHalf.under += 1
      overUnderCount.threeAndHalf.under += 1
    }
    return true
  })
  return overUnderCount
}

export const bttsCalculator = matches => {
  let result = { yes: 0, no: 0 }
  if (matches) {
    matches.map(match => {
      if (match.score.fulltime.home > 0 && match.score.fulltime.away > 0) {
        return (result.yes += 1)
      } else {
        return (result.no += 1)
      }
    })
  }
  return result
}

export const goalAverageCalculator = (matches, teamId) => {
  let result = { scored: 0, conceded: 0 }

  if (matches) {
    matches.map(match => {
      if (teamId === match.teams.home.id) {
        result.scored += match.score.fulltime.home
        return (result.conceded += match.score.fulltime.away)
      } else {
        result.scored += match.score.fulltime.away
        return (result.conceded += match.score.fulltime.home)
      }
    })
    result.scored = result.scored / matches.length
    result.conceded = result.conceded / matches.length
  }

  return result
}
