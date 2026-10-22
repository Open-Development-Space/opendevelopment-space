import { useEffect, useRef } from 'react'

const ACCENTS = []
const CELL = 60            // grid cell size in px
const MAX_CHANCE = 0.75    // arrow chance per cell in the very corners
const BASE_CHANCE = 0.015  // arrow chance in the middle of the screen
const FALLOFF = 1.8        // higher = center clears out faster
const BIG_CHANCE = 0.3     // chance an arrow is 2x2 cells instead of 1x1

function ArrowField({ isDarkMode }) {
    const canvasRef = useRef(null)
    const arrowsRef = useRef([])
    const darkRef = useRef(isDarkMode)
    const drawRef = useRef(() => {})

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        // Arrow drawn in a unit square (-0.5..0.5), pointing SE, as ONE path
        // so translucent fills don't double up where shaft meets head.
        const drawArrow = (a, color, alpha) => {
            const t = 0.27   // head arm thickness
            const len = 1 // head arm length
            const hw = 0.14  // shaft half-width
            const n = hw * Math.SQRT1_2

            ctx.save()
            ctx.translate(a.x, a.y)
            ctx.scale(a.size-5, a.size-5)
            ctx.rotate(a.quarter * (Math.PI / 2)) // 0=SE 1=SW 2=NW 3=NE
            ctx.globalAlpha = alpha
            ctx.fillStyle = color

            ctx.beginPath()
            // head (square L, corner at the tip)
            ctx.moveTo(0.5, 0.5)
            ctx.lineTo(0.5 - len, 0.5)
            ctx.lineTo(0.5 - len, 0.5 - t)
            ctx.lineTo(0.5 - t, 0.5 - t)
            ctx.lineTo(0.5 - t, 0.5 - len)
            ctx.lineTo(0.5, 0.5 - len)
            ctx.closePath()
            // diagonal shaft (same winding direction as the head)
            ctx.moveTo(-0.4 + n, -0.4 - n)
            ctx.lineTo(0.3 + n, 0.3 - n)
            ctx.lineTo(0.3 - n, 0.3 + n)
            ctx.lineTo(-0.4 - n, -0.4 + n)
            ctx.closePath()
            ctx.fill()
            ctx.restore()
        }

        const draw = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
            const dark = darkRef.current
            const base = dark ? '#56b9ff' : '#000000'
            const baseAlpha = dark ? 0.02 : 0.02
            for (const a of arrowsRef.current) {
                drawArrow(a, a.accent ?? base, a.accent ? 0.85 : baseAlpha)
            }
        }
        drawRef.current = draw

        const build = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            const w = window.innerWidth
            const h = window.innerHeight
            canvas.width = w * dpr
            canvas.height = h * dpr

            const cols = Math.ceil(w / CELL)
            const rows = Math.ceil(h / CELL)
            const taken = Array.from({ length: rows }, () => new Array(cols).fill(false))
            const half = Math.hypot(w, h) / 2
            const arrows = []

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (taken[r][c]) continue

                    // distance to the nearest of the top-left / bottom-right corners
                    const px = (c + 0.5) * CELL
                    const py = (r + 0.5) * CELL
                    const d = Math.min(Math.hypot(px, py), Math.hypot(w - px, h - py)) / half
                    const chance =
                        BASE_CHANCE + (MAX_CHANCE - BASE_CHANCE) * Math.pow(Math.max(0, 1 - d), FALLOFF)
                    if (Math.random() > chance) continue

                    const canBig =
                        c + 1 < cols && r + 1 < rows &&
                        !taken[r][c + 1] && !taken[r + 1][c] && !taken[r + 1][c + 1]
                    const cells = canBig && Math.random() < BIG_CHANCE ? 2 : 1

                    for (let dr = 0; dr < cells; dr++)
                        for (let dc = 0; dc < cells; dc++) taken[r + dr][c + dc] = true

                    arrows.push({
                        x: (c + cells / 2) * CELL,
                        y: (r + cells / 2) * CELL,
                        size: cells * CELL,
                        quarter: Math.floor(Math.random() * 4),
                        accent: Math.random() < 0.06
                            ? ACCENTS[Math.floor(Math.random() * ACCENTS.length)]
                            : null,
                    })
                }
            }
            arrowsRef.current = arrows
            draw()
        }

        build()
        window.addEventListener('resize', build)
        return () => window.removeEventListener('resize', build)
    }, [])

    // redraw the same arrows when the theme changes
    useEffect(() => {
        darkRef.current = isDarkMode
        drawRef.current()
    }, [isDarkMode])

    return <canvas ref={canvasRef} className="arrow-field" aria-hidden="true" />
}

export default ArrowField