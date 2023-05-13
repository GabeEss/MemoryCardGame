import { round1, round2, round3 } from "./round-length";

// Get the 'round' to determine the length of 'sample'.
// Get images from 'images' array and push those into the 'sample' array.
// Return sample.
export default function getsample(round, sample, images) {
    if(round === 1) {
        while (sample.length < round1) {
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];
            if (!sample.includes(randomImage)) {
                sample.push(randomImage);
            }
        }
    } else if(round === 2) {
        while (sample.length < round2) {
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];
            if (!sample.includes(randomImage)) {
                sample.push(randomImage);
            }
        }
    } else if(round === 3) {
        while (sample.length < round3) {
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];
            if (!sample.includes(randomImage)) {
                sample.push(randomImage);
            }
        }
    }
    
    return sample;
}