function mean(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Input must be a non-empty array');
    }
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
  }
  
  function median(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Input must be a non-empty array');
    }
    
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }
  
  function mode(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error('Input must be a non-empty array');
    }
  
    const frequency = {};
    let maxFreq = 0;
    let modes = [];
  
    arr.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
        modes = [num];
      } else if (frequency[num] === maxFreq) {
        modes.push(num);
      }
    });
  
    return modes;
  }
  
  module.exports = { mean, median, mode };