const getMatrix = (
  hot: boolean,
  increments: number,
  current: number,
) => {
  const after = current >= 250
  let value
  if (hot) {
    value = after
      ? current + increments
      : current - increments
  } else {
    value = after
      ? current - increments
      : current + increments
  }
  return String(withLimit(value, 0, 360))
}

type Increments = {
  matriz: number
  saturation: number
  light: number
  alpha: number
  mainColorPosition: 'start' | 'middle' | 'end'
}

const withLimit = (
  value: number,
  increment: number,
  limit: number,
  subtraction = false,
) => {
  let newLight = subtraction
    ? value - increment
    : value + increment
  newLight = newLight > limit ? limit : newLight
  newLight = newLight < 0 ? 0 : newLight
  return String(
    Number.isInteger(newLight)
      ? newLight
      : newLight.toFixed(2),
  )
}

export const makeHsl = (
  length: number,
  color: [number, number, number, number],
  increments: Increments = {
    matriz: 3,
    saturation: 10,
    light: 3,
    alpha: 0.2,
    mainColorPosition: 'middle',
  },
  order = {
    matriz: false, // Light --> dark
    saturation: false, // 100 --> 0
    light: false, // 100 --> 0
    alpha: false, // 1 --> 0
  },
) => {
  const template = 'hsl($m, $s, $b, $a)'

  const resolveColor = {
    middle: (i: number, before: boolean) => {
      const context = (e: boolean) =>
        before ? !!e : !e
      const matrix = Number(currentMatrix)
      const light = Number(
        currentLight.replace('%', ''),
      )
      const saturation = Number(
        currentSaturation.replace('%', ''),
      )
      const alpha = Number(currentAlpha)
      const newMatrix = getMatrix(
        context(order.matriz),
        increments.matriz,
        matrix,
      )
      const newSaturation =
        withLimit(
          saturation,
          increments.saturation,
          100,
          context(order.saturation),
        ) + '%'
      const newLigth =
        withLimit(
          light,
          increments.light,
          100,
          context(order.light),
        ) + '%'
      const newAlpha = withLimit(
        alpha,
        increments.alpha,
        1,
        context(order.alpha),
      )
      currentMatrix = newMatrix
      currentSaturation = newSaturation
      currentLight = newLigth
      currentAlpha = newAlpha
      resolve[i] = [
        newMatrix,
        newSaturation,
        newLigth,
        newAlpha,
      ]
    },
  }

  if (Number.isInteger(length / 2))
    return console.log('O numero deve ser impar')
  const resolve = []
  const halfLength = Math.floor(length / 2)
  console.log(halfLength)
  resolve[halfLength] = color // Main Color

  let currentMatrix = String(color[0])
  let currentSaturation = String(color[1])
  let currentLight = String(color[2])
  let currentAlpha = String(color[3])

  if (increments.mainColorPosition === 'middle') {
    for (let i = halfLength - 1; i >= 0; i--) {
      resolveColor.middle(i, true)
    }
    for (
      let i = halfLength - 1;
      i <= halfLength * 2;
      i++
    ) {
      resolveColor.middle(i, false)
    }
  }
  console.log(resolve)
  // const initial = () => {
  //   let currentMatrix = color[0]
  //   let i = 0
  //   const resolve = []
  //   while (i <= length) {
  //     const newMatrix = getMatrix(
  //       darkToLight,
  //       increments.matriz,
  //       currentMatrix,
  //     )
  //     currentMatrix = newMatrix
  //     resolve.push(newMatrix)
  //     i++
  //   }
  // }

  // const _resolve = (hot: boolean) => {
  //   let i = 0
  //   const currentMatrix = color[0]
  //   const resolve = []
  //   while (i < halfLength) {
  //     const output = []
  //     currentMatrix
  //     output.push()
  //     output.push()
  //     i++
  //   }
  // }
}

console.log(makeHsl(9, [53, 35, 50, 0.5]))
// console.log(Number('0.05'))
