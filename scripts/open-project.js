// Name: Open project

import '@johnlindquist/kit';

let path = `\\\\wsl.localhost\\Ubuntu-20.04\\home\\pi\\code`;
let dirs = await readdir(path);

let selectedDir = await arg(
  'Open project:',
  dirs.map((dir) => ({
    name: dir,
    description: path + '\\' + dir,
    value: path + '\\' + dir,
  }))
);

// $`vi ${selectedDir}`;
edit(selectedDir);
