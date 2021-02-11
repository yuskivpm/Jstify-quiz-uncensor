const uncensor = (message, vowels, vowelsAsArray = [... vowels]) => message.replace(/\*/g, () => vowelsAsArray.shift());
