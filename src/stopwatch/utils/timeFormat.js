// mm:ss.SSS
// Add zero padding
function zeroPad(number, size) {
  let s = String(number);
  while (s.length < size) { s = '0' + s;}
  return s;
}

// Convert time from milliseconds int to mm:ss.SSS string
export default function timeFormat(milliseconds) {

  let timeinseconds = milliseconds / 1000;

  const mm = parseInt( timeinseconds / 60, 10 );
  const ss = parseInt( Math.trunc(timeinseconds % 60), 10 );
  const S  = parseInt( milliseconds % 1000, 10 );

  return `${ zeroPad(mm, 2) }:${ zeroPad(ss, 2) }.${ zeroPad(S, 3) }`;
}