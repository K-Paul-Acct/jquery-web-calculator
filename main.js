$(document).ready(function () {
	function operation() {
		const operators = ['+', '-', 'x', '/', '%', '^', '^2', '√'];
		let currentValue = $('.display').text();
		let a = "";
		let b = "";
		let sign = "";
		let temp;
		let arr = Array.from(currentValue);
		for (let i = 0; i < arr.length; i++)
			if (operators.includes(arr[i]))
				temp = i;
		a = arr.slice(0, temp);
		sign = arr[temp];
		b = arr.slice(temp + 1, arr.length);
		let result = 0;
		switch (sign) {
			case '+':
				result = parseFloat(a.join('')) + parseFloat(b.join(''));
				break;
			case '-':
				result = parseFloat(a.join('')) - parseFloat(b.join(''));
				break;
			case '/':
				result = parseFloat(a.join('')) / parseFloat(b.join(''));
				break;
			case 'x':
				result = parseFloat(a.join('')) * parseFloat(b.join(''));
				break;
			case '%':
				result = parseFloat(a.join('')) % parseFloat(b.join(''));
				break;
			case '^':
				result = Math.pow(parseFloat(a.join('')), parseFloat(b.join('')));
				break;
			case '^2':
				result = Math.pow(parseFloat(a.join('')), 2);
				break;
			case '√':
				result = Math.sqrt(parseFloat(a.join('')), parseFloat(b.join('')));
				break;
		}
		$('.display').text(result);
	}

	// when digit or operation button was pressed
	$(".char").click(function () {
		let text = $(this).text();
		let currentValue = $('.display').text();
		let length = currentValue.length;

		let flag = text == '+' || text == '-' || text == 'x' || text == '/';
		if (length == 0 && flag)
			return;

		let lastCharacter = currentValue[length - 1];
		let flagNew = lastCharacter == '+' || lastCharacter == '-' || lastCharacter == 'x' || lastCharacter == '/';
		if (flag && flagNew)
			$('.display').text(currentValue.substring(0, length - 1) + text);
		else {
			$('.display').text(currentValue + text);
		}
	});

	// clear all output
	$("#c").click(function () {
		$('.display').text('');
	});

	// delete one symbol
	$("#d").click(function () {
		let currentValue = $('.display').text();
		$('.display').text(currentValue.substring(0, currentValue.length - 1));
	});

	// when equals button was pressed
	$("#eq").click(function () {
		let currentValue = $('.display').text();
		let length = currentValue.length;
		let char = currentValue[length - 1];
		let flag = char == '+' || char == '-' || char == '*' || char == '/';

		if (flag)
			$('.display').text("ERROR!");
		else
			operation();
	});
});
