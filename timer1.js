const args = process.argv.slice(2);

const timer = (args) => {

  if (args.length === 0) {
    return;
  }
  for (const input of args) {

    if (input > 0 && !isNaN(input)) {
      setTimeout(() => {
        process.stdout.write('\x07' + `${input} seconds\n`);
      }, input * 1000)
    }
  }
};

timer(args);
