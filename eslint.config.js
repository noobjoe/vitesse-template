import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: { tsconfigPath: 'tsconfig.json' },
}, {
  rules: { 'ts/no-unsafe-assignment': 'off' },
})
