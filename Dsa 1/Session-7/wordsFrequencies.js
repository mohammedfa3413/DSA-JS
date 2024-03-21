function wordFrequencies(words){
    const frequencies = new Map();

    // Calculate word frequencies
    for (const word of words) {
        if (frequencies.has(word)) {
            // Increment frequency count if word already exists in the map
            frequencies.set(word, frequencies.get(word) + 1);
        } else {
            // Initialize frequency count to 1 if word is encountered for the first time
            frequencies.set(word, 1);
        }
    }

    // Sort word frequencies in lexicographical order
    const sortedFrequencies = Array.from(frequencies.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    return sortedFrequencies;
}




















