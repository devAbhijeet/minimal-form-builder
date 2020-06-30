export const Storage = {
  getData: key => {
    try {
      const value = localStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    } catch (e) {
      return null;
    }
  },
  setData: (key, value) => {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },
  clear: () => {
    localStorage.clear();
  }
};
