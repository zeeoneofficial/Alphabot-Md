'use strict'

const { test } = require('tap')
const ThreadStream = require('..')

const isYarnPnp = process.versions.pnp !== undefined

test('yarn module resolution', { skip: !isYarnPnp }, t => {
  t.plan(6)

  const modulePath = require.resolve('pino-elasticsearch')
  t.match(modulePath, /.*\.zip.*/)

  const stream = new ThreadStream({
    filename: modulePath,
    workerData: { node: null },
    sync: true
  })

  t.same(stream.writableErrored, null)
  stream.on('error', (err) => {
    t.same(stream.writableErrored, err)
    t.pass('error emitted')
  })

  t.ok(stream.write('hello world\n'))
  t.ok(stream.writable)
  stream.end()
})
