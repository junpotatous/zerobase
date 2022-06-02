/**
 * 생성자
 */
 function Person(name, age, location) {
	this.name = name;
	this.age = age;
	this.location = location;

	this.getName = function () {
		return this.name + '입니다';
	};
}

const me = new Person('jun', 10, 'Korea');
const you = new Person('dong', 20, 'China');

me.getName();
you.getName();