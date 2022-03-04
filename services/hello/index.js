async function sayHello({ name = 'stranger' }) {
    return `Hello, ${name}!`;
}

module.exports = {
    sayHello,
};
