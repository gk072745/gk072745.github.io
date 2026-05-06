import fs from 'node:fs'

const s = fs.readFileSync(new URL('../node_modules/react-icons/si/index.js', import.meta.url), 'utf8')

function extractD(name) {
  const k = `module.exports.${name} = function`
  const i = s.indexOf(k)
  if (i < 0) return null
  const sub = s.slice(i, i + 20000)
  const di = sub.indexOf('"d":"')
  if (di < 0) return null
  let j = di + 5
  let out = ''
  let esc = false
  while (j < sub.length) {
    const c = sub[j++]
    if (esc) {
      out += c
      esc = false
      continue
    }
    if (c === '\\') {
      esc = true
      out += c
      continue
    }
    if (c === '"') break
    out += c
  }
  return out.replace(/\\\\/g, '\\')
}

const names = [
  'SiReact',
  'SiTypescript',
  'SiNodedotjs',
  'SiJavascript',
  'SiHtml5',
  'SiSass',
  'SiExpress',
  'SiPython',
  'SiMongodb',
  'SiMysql',
  'SiRedis',
  'SiDocker',
  'SiGit',
  'SiGnubash',
  'SiRedux',
  'SiVite',
  'SiTailwindcss',
  'SiI18Next',
  'SiGithubactions',
  'SiPostman',
  'SiPostgresql',
]

const out = {}
for (const n of names) {
  const d = extractD(n)
  if (!d) {
    console.error('missing', n)
    continue
  }
  out[n] = d
}

fs.writeFileSync(new URL('../src/helpers/_techPaths.json', import.meta.url), JSON.stringify(out, null, 0))
console.log('wrote _techPaths.json', Object.keys(out).length)
