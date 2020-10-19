//main.js
var hour = my$('hour');
		var minute = my$('minute');
		var second = my$('second');

		var endDate = new Date('2020-10-20 08:00:00');//上课时间
		setInterval(countdown, 1000);
		countdown();

		function countdown() {
			var startDate = new Date();
			var interval = getInterval(startDate, endDate);
			if (endDate - startDate < 0) {
				return;
			}
			setInnerText(hour, timeFormat(interval.hour));
			setInnerText(minute, timeFormat(interval.minute));
			setInnerText(second, timeFormat(interval.second));
		}

		function timeFormat(dateTime) {
			return dateTime > 9 ? dateTime : '0' + dateTime;
		}

		function getInterval(start, end) {
			var interval = end - start;
			var day, hour, minute, second;

			interval /= 1000;

			day = Math.floor(interval / 60 / 60 / 24);
			hour = Math.floor(interval / 60 / 60 % 24);
			minute = Math.floor(interval / 60 % 60 );
			second = Math.floor(interval % 60);
			
			return {
				hour: hour,
				minute: minute,
				second: second
			};
		}

		function setInnerText(ele, content) {
			if (ele.innerText === undefined) {
				ele.textContent = content;
			} else {
				ele.innerText = content;
			}
		}

		function my$(id) {
			if (!(typeof id === 'string')) {
				console.error('传入参数不是字符串类型');
				return;
			}
			var ele = document.getElementById(id);
			if (!ele) {
				console.error('属性id为'+id+'元素不存在');
				return;
			} else {
				return ele;	
			}
		}
