const sample = 
    [
        {
            'name': 'sandwich',
            'type': 'breakfast'
        },
        { 
            'name': 'porridge',
            'type': 'breakfast'
        },
        {
            'name': 'soup',
            'type': 'lunch'
        },
        {
            'name': 'pasta',
            'type': 'lunch'
        },
        {
            'name': 'noodles',
            'type': 'dinner'
        }
    ]
const processed = new Set(sample.map((item) => {
    return item.type
}));


console.log(processed)