function upperCaser(text) {
    let words = text.toUpperCase().match(/\b(\w+)\b/g);
    console.log(words.join(', '));
}

upperCaser('Hi, how are you?');