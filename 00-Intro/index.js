function createElement(type, props) {
	return [document.createElement(type)]
		.map((element) => Object.entries({ ...props, 'data-id': 'title' }))
		.forEach(([name, value]) => element.setAttribute(name, value))[0];
}
