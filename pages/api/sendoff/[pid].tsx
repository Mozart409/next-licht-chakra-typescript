import { NextApiRequest, NextApiResponse } from 'next'
const exec = require('child_process').exec
type LichtData = {}

function sendOff(x: string | string[]) {
  exec(`send 11000 ${x} 0`, function (code: any, stdout: any, stderr: any) {
    if (code) {
      return console.log('Exit code:', code)
    }
    if (stderr) {
      return console.log('Program stderr:', stderr)
    }
    return console.log(stdout)
  })
}

export default (req: NextApiRequest, res: NextApiResponse<LichtData>) => {
  try {
    sendOff(req.query.pid)
    res.status(200).json(`Send OFF ${req.query.pid} successful!`)
  } catch (error) {
    res.status(500).json({ error })
  }
}
