function flattenObject(obj, parentKey = "") {
    let result = {};
  
    for (let key in obj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
  
      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  
    return result;
  }
  
