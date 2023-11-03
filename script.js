// 1. Адрес электронной почты. Имя получателя (до «@») должно быть от 1 до 20 символов

const emailRegex = /^[A-Za-z0-9._-]{1,20}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Положительные примеры
console.log(emailRegex.test("example@example.com")); // true
console.log(emailRegex.test("john.doe@gmail.com")); // true

// Ложные примеры
console.log(emailRegex.test("")); // false
console.log(emailRegex.test("invalid_email")); // false
console.log(emailRegex.test("email@example")); // false

// 2. Регулярное выражение для проверки пустой строки:

const emptyStringRegex = /^\s*$/;

// Положительный пример
console.log(emptyStringRegex.test("")); // true

// Ложный пример
console.log(emptyStringRegex.test("not empty")); // false

// 3. Номер телефона, например «+7 (123) 456-78-90»

const phoneRegex = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

// Положительный пример
console.log(phoneRegex.test("+7 (123) 456-78-90")); // true

// Ложный пример
console.log(phoneRegex.test("1234567890")); // false


// 4. Номер домашнего телефона, например «123-456» или «12-34-56»

const homePhoneRegex = /^(\d{3}-\d{3}|\d{2}-\d{2}-\d{2})$/;

// Положительный пример
console.log(homePhoneRegex.test("123-456")); // true

// Ложные примеры
console.log(homePhoneRegex.test("12")); // false
console.log(homePhoneRegex.test("12-34-5")); // false

// 5. Время, например «23:59». Допустимы положительные проверки для 29:30 и т.д.

const timeRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;

// Положительные примеры
console.log(timeRegex.test("23:59")); // true
console.log(timeRegex.test("00:00")); // true

// Ложные примеры
console.log(timeRegex.test("29:30")); // false
console.log(timeRegex.test("12:61")); // false
