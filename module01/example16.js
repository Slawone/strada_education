const phoneBook = {
  John: 123456789, // ключ John со значением 123456789
  'Jane Doe': 987654321,
  'Jim Smith': 111111111,
};

console.log(phoneBook); // { John: 123456789, 'Jane Doe': 987654321, 'Jim Smith': 111111111 }

console.log(phoneBook.John);
console.log(phoneBook["Jane Doe"]);

phoneBook['katie Johnson'] = 54368574;
phoneBook["Jane Doe"] = 22222222;

delete phoneBook["Jim Smith"];

console.log(phoneBook);


const phoneBook1 = {
  list: { // перенесли все контакты в свойство list
    "John": 123456789,
    "Jane Doe": 987654321,
    "Jim Smith": 111111111
  },
  log() { // добавили метод log
		console.log('its a 1!')
  }
};

phoneBook1.log(); // its a phonebook!

const phoneBook2 = {
  list: {
    "John": 123456789,
    "Jane Doe": 987654321,
    "Jim Smith": 111111111
  },
  log() {
    console.log('phoneBook2', this.list);
  }
}

phoneBook2.log(); // { John: 123456789, 'Jane Doe': 987654321, 'Jim Smith': 111111111 }