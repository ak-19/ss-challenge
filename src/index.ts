import { FindLettersAndPath } from "./FindLettersAndPath";

const a = [
    '@-#-A---+',
    '        |',
    'x-B-+   C',
    '    |   |',
    '    +---+'
];

const finder = new FindLettersAndPath(a);

finder.process();

const { letters, path } = finder.get();

console.log(letters, path);