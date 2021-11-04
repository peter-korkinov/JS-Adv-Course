function validator(obi) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

  if (!obi.method || !methods.includes(obi.method)) {
    throw new Error("Invalid request header: Invalid Method")
  }

  if (!obi.version || !versions.includes(obi.version)) {
    throw new Error("Invalid request header: Invalid Version")
  }


}