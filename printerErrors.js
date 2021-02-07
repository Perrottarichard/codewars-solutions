function printerError(s) {
  let errors = s.match(/[n-z]/g);
  return errors !== null ? errors.length + "/" + s.length : 0 + "/" + s.length;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
