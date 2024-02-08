


function slugify(string) {
    return string.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));

