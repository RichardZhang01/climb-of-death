module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return date.toLocaleDateString('en-US');
    },
    format_plural: (word, commentsLength) => {
        if (commentsLength === 1) {
            return word;
        }
        return `${word}s`;
    }
  };