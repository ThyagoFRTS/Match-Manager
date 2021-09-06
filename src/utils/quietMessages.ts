export const messages = [
    'Today is a beautiful day', //Supercell album
    'Fly High!', // Haikyuu Openning
    'Your love is a melody', // Your love is a song by Switchfoot
    'Ive been keeping my mind wide open', // Your love is a song by Switchfoot
    'Kimi no Shiranai Monogatari', // Kimi no shiranai Monogatari by Supercell
    'Yellow Unbrella', // How I meet your mother
    'Blue French Horn', // How I meet your mother
    'But its enough to keep me going', // Last Hope by Paramore
    'Isnt burning any more than it used to', // Last Hope by Paramore
    'You are the only exception', // The Only Exception by Paramore
];

export function getRandonMessage() {
    const index = Math.floor(Math.random() * (messages.length+1))
    return messages[index]
    
}