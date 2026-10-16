// "Clouds" shape divider from the original theme: the torn white edge
// between the white sections and the dark photo sections.

const CLOUDS =
  'M 983.71 4.47 a 56.19 56.19 0 0 0 -37.61 14.38 a 15.24 15.24 0 0 0 -25.55 -0.55 a 40.65 40.65 0 0 0 -55.45 13 ' +
  'a 15.63 15.63 0 0 0 -22.69 1.52 a 73.82 73.82 0 0 0 -98.57 27.91 a 14.72 14.72 0 0 0 -9.31 0.55 ' +
  'a 26.13 26.13 0 0 0 -42.63 1.92 a 39.08 39.08 0 0 0 -47 10.08 a 18.45 18.45 0 0 0 -34.18 -0.45 ' +
  'a 12.21 12.21 0 0 0 -14.23 0.9 a 11.47 11.47 0 0 0 -16.59 -6 a 47.2 47.2 0 0 0 -66.12 -4.07 ' +
  'a 21.32 21.32 0 0 0 -26.48 -4.91 a 15 15 0 0 0 -29 -7.79 a 10.47 10.47 0 0 0 -14 5.13 ' +
  'a 31.55 31.55 0 0 0 -50.68 12.32 a 23 23 0 0 0 -28.69 -5.34 a 54.54 54.54 0 0 0 -89.93 5.71 ' +
  'a 16.3 16.3 0 0 0 -22.71 2.3 a 33.41 33.41 0 0 0 -44.93 9.65 a 17.72 17.72 0 0 0 -9.79 -2.94 h -0.22 ' +
  'a 29 29 0 0 0 -39.66 -12.26 a 75.24 75.24 0 0 0 -94 -12.19 a 22.91 22.91 0 0 0 -14.78 -5.34 h -0.69 ' +
  'a 33 33 0 1 0 -52.53 31.55 h -29.69 v 143.45 h 79.5 v -57.21 a 75.26 75.26 0 0 0 132.93 -46.7 ' +
  'a 28.88 28.88 0 0 0 12.78 -6.86 a 17.61 17.61 0 0 0 12.79 0 a 33.41 33.41 0 0 0 63.93 -7.44 ' +
  'a 54.56 54.56 0 0 0 101.57 18.56 v 7.65 h 140.21 a 47.23 47.23 0 0 0 79.55 -15.88 l 51.25 1.95 ' +
  'a 39.07 39.07 0 0 0 67.12 2.55 l 29.76 1.13 a 73.8 73.8 0 0 0 143.76 -16.75 h 66.17 a 56.4 56.4 0 1 0 36.39 -99.53 z'

type Props = { position: 'top' | 'bottom' }

export function ShapeDivider({ position }: Props) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        [position]: -1,
        height: 50,
        zIndex: 1,
        pointerEvents: 'none',
        overflow: 'hidden',
        transform: position === 'top' ? 'rotate(180deg)' : undefined,
      }}
    >
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height="100%" fill="#fff">
        <path d={CLOUDS} />
      </svg>
    </div>
  )
}
