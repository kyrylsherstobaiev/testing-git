let user = {};

Object.defineProperty(user, "name", {
  value: "John",
  // для нового свойства необходимо явно указывать все флаги, для которых значение true
  enumerable: true,
  configurable: true,
});

console.log(user.name); // John

user.name = "Pete"; // Ошибка
