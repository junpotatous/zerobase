const squidMembers = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
];

// 배열의 끝에 요소 추가
squidMembers.push('g');

// 배열의 앞에 요소 추가
squidMembers.unshift('h');

// 배열에서 요소의 인덱스 찾기
squidMembers.indexOf('i');
squidMembers.indexOf('j');
squidMembers.lastIndexOf('j');

// 배열의 요소 포함 여부 확인
squidMembers.includes('j');
squidMembers.includes('i');

// 배열의 앞 요소 지우기
squidMembers.shift('h'); // unshift 반대

// 배열의 끝 요소 지우기
squidMembers.pop('g'); // push 반대

// 특정 인덱스 요소 지우기
squidMembers.splice(
	2,
	//n
);