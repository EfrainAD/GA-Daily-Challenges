const gridTrip = ( coord, directions ) => {
  let x = coord[0]
  let y = coord[1]
  // const test = 'L2 L15 D50 U1 D9'
  console.log('staring with', directions)
  console.log('x', x)
  console.log('y', y)
  // console.log(extractNum(directions, 'U'))
  const up = directions.match(/['U']\d+/g)
  const down = directions.match(/['D']\d+/g)
  const right = directions.match(/['R']\d+/g)
  const left = directions.match(/['L']\d+/g)

  let dirTest = directions.match(/['L']\d+/g).map(dir => Number.parseInt(dir.replace(/\D/, '')))
  console.log('before',dirTest)
  // if (dirTest) {dirTest = dirTest.map(dir => Number.parseInt(dir.replace(/\D/, ''))
  // )}
  // console.log('after',dirTest)
  if (up) x += Number.parseInt(up[0].replace(/\D/, ''))
  if (down) x -= Number.parseInt(down[0].replace(/\D/, ''))
  if (right) y += Number.parseInt(right[0].replace(/\D/, ''))
  if (left) y -= Number.parseInt(left[0].replace(/\D/, ''))

  console.log(x,y)
  return [x, y]
}
gridTrip([0,0], 'L2L15D50U1')