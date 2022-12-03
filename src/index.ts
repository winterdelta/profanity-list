import Str from '@supercharge/strings'
// import { default as swearsJSON } from "./swears.json";
import swearsJSON from './swearsJSON.js'

const swears = new Set(swearsJSON["RECORDS"].map((record) => {
    if (record.language === 'en') return record.word;
}));

export const hasSwearWord = (text: string | string[]) => {
    if (typeof text === 'string') {
        const words = Str(text).words();
        for (let i = 0; i < words.length; i++) {
            if (swears.has(words[i].toLowerCase())) return true;
        }
        return false;
    }
    if (Array.isArray(text)) {
        for (let i = 0; i < text.length; i++) {
            const words = Str(text).words();
            for (let j = 0; j < words.length; j++) {
                if (swears.has(words[j].toLowerCase())) return true;
            }
            return false;
        }
    }
    throw new Error('Invalid input, please pass in a string or an array of string');
}

export const numberOfSwears = (text: string | string[]) => {
    if (typeof text === 'string') {
        const words = Str(text).words();
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            if (swears.has(words[i].toLowerCase())) count++;
        }
        return count;
    }
    if (Array.isArray(text)) {
        let counts = [];
        for (let i = 0; i < text.length; i++) {
            const words = Str(text[i]).words();
            let count = 0;
            for (let j = 0; j < words.length; j++) {
                if (swears.has(words[j].toLowerCase())) count++;
            }
            counts.push(count);
        }
        return counts;
    }
    throw new Error('Invalid input, please pass in a string or an array of string');
}

//removeSwears function replaces all swear words with a * character. Use the .replace method on the string to replace swear words with *.
export const removeSwears = (text: string | string[]) => {
    if (typeof text === 'string') {
        const words = Str(text).words();
        for (let i = 0; i < words.length; i++) {
            if (swears.has(words[i].toLowerCase())) {
                text = text.replace(words[i], '*'.repeat(words[i].length));
            }
        }
        return text;
    }
    if (Array.isArray(text)) {
        for (let i = 0; i < text.length; i++) {
            const words = Str(text[i]).words();
            for (let j = 0; j < words.length; j++) {
                if (swears.has(words[j].toLowerCase())) {
                    text[i] = text[i].replace(words[j], '*'.repeat(words[j].length));
                }
            }
        }
        return text;
    }
    throw new Error('Invalid input, please pass in a string')
}