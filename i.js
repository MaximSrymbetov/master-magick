class F {
    static getQu(n) {
      const rd = fs.readFileSync(
        `${__dirname}/topics/nighthawk_flashcard_data.txt`,
        'utf-8'
      );
      const elem = rd.split('\n');
  
      return elem[n];
    }
}