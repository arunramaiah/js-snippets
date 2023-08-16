// needs to import the format check function
// import the file contents to a content variable
// extract the header from content to header variable
// exract the rows from content to rows variable
// count the number for rows

// import the transform config for the specific campus
// provide the file

const header = 'AB';
const nullValue = null;

test('a dummy test', () => {
// expect(header).exist().toBeFalsy();
 expect(header).toContain('A');
 expect(header).toContain('B');
 expect(nullValue).toBeNull(); 
})
