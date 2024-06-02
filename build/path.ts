import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..')
export const pkgRoot = resolve(projRoot, 'packages')
export const epRoot = resolve(pkgRoot, 'adz-ui')

/** `/dist` */
export const buildOutput = resolve(epRoot, 'dist')
