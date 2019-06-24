const fs = require('fs');

// overwirte the output file
const result = fs.readFileSync(__dirname + '/output.json');
const resultArray = JSON.parse(result);

fs.writeFile(
    __dirname + '/../src/data/all_data.json',
    JSON.stringify(resultArray),
    () => {
        console.log('all_data.json updated.');
    },
);
const result_chennai = fs.readFileSync(__dirname + '/output_chennai.json');
const resultArray_chennai = JSON.parse(result_chennai);

fs.writeFile(
    __dirname + '/../src/data/all_data_chennai.json',
    JSON.stringify(resultArray_chennai),
    () => {
        console.log('all_data_chennai.json updated.');
    },
);

// remove repeating courses
const unique = resultArray.filter(
    (element, index, self) =>
        self.findIndex(
            (t) => t.CODE === element.CODE && t.TITLE === element.TITLE,
        ) === index,
);

fs.writeFile(
    __dirname + '/../src/data/unique_courses.json',
    JSON.stringify(unique),
    () => {
        console.log('unique_courses.json updated.');
    },
);
const unique_chennai = resultArray_chennai.filter(
    (element, index, self) =>
        self.findIndex(
            (t) => t.CODE === element.CODE && t.TITLE === element.TITLE,
        ) === index,
);

fs.writeFile(
    __dirname + '/../src/data/unique_courses_chennai.json',
    JSON.stringify(unique_chennai),
    () => {
        console.log('unique_courses_chennai.json updated.');
    },
);
