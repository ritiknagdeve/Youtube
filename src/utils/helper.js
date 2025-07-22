const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'];

export function getRandomMessage(maxWords = 5) {
    const wordCount = Math.floor(Math.random() * maxWords) + 1; // 1 to maxWords
    const shuffled = words.sort(() => 0.5 - Math.random()); // shuffle
    const selected = shuffled.slice(0, wordCount);
    const sentence = selected.join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

const firstNames = ['john', 'jane', 'alex', 'emma', 'mike', 'sara', 'david', 'lisa', 'chris', 'anna'];
const lastNames = ['doe', 'smith', 'johnson', 'lee', 'brown', 'davis', 'miller', 'wilson', 'clark', 'martin'];

export function getRandomUser() {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last = lastNames[Math.floor(Math.random() * lastNames.length)];
    const formats = [
        `${first}.${last}`,
        `${first}_${last}`,
        `${first}${Math.floor(Math.random() * 1000)}`,
        `${first[0]}${last}`,
        `${last}${Math.floor(Math.random() * 100)}`,
        `${first}${last}`
    ];
    return formats[Math.floor(Math.random() * formats.length)];
}