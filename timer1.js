const timer = () => {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    return;
  }
  for (const input of args) {
    // console.log(input);
    if (input > 0 && !isNaN(input)) {
      setTimeout(() => {
        process.stdout.write('\x07' + `${input} seconds\n`);
      }, input * 1000)
    }
  }
};

timer();
