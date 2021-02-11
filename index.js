const uncensor = (message, vowels, vowelsAsArray = [...vowels]) => message.replace(/\*/g, () => vowelsAsArray.shift());

const uncensor_v2 = (message, vowels) => message.split('*').map((item, index) => `${item}${vowels[index]??''}`).join('');
