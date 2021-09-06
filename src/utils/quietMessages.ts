export const messages = [
    'Today is a beautiful day',
    'Fly High!',
    'Your love is a melody',
    'Ive been keeping my mind wide open',
    'Kimi no Shiranai Monogatari',
    'Yellow Unbrella',
    'Blue French Horn',
    'But its enough to keep me going',
    'Isnt burning any more than it used to',
    'You are the only exception',
];

export function getRandonMessage() {
    const index = Math.floor(Math.random() * (messages.length+1))
    return messages[index]
    
}