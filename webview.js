// posteo.de integration
module.exports = (Franz, options) => {
	function getMessages() {
		var count = 0;
		var elements = document.getElementsByClassName('unreadcount');

		for (var i = 0; i < elements.length; i++) {
			var temp = parseInt(elements[i].innerHTML);
			count += temp;
		}

		console.log(count);

		Franz.setBadge(count, 0);
	}

	Franz.loop(getMessages);
}