const uncensor = (message, vowels, vowelsAsArray = [...vowels]) => message.replace(/\*/g, () => vowelsAsArray.shift());

const uncensor_v2 = (message, vowels) => message.split('*').map((item, index) => `${item}${vowels[index]??''}`).join('');

const uncensor_v3 = (message, vowels, index = 0) => message.replace(/\*/g, () => vowels[index++]);

const uncensor_v4 = (message, vowels) => {
  let result = '';
  for (let i = j = 0; i < message.length; i++) {
    result += message[i] === '*' ? vowels[j++] : message[i];
  }
  return result;
};
