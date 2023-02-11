export const getRandomTailwindColor = (strength: number) => {
    const hues = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink'];
    const hue = hues[Math.floor(Math.random() * hues.length)];
    return `${hue}-${strength}`;
};
