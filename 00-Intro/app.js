function createH1(props) {
	return [document.createElement('h1')]
		.map((element) => Object.entries({ ...props, 'data-id': 'subject' }))
		.forEach(([name, value]) => element.setAttribute(name, value));
}
function createDiv(props) {
	return [document.createElement('h1')]
		.map((element) => Object.entries({ ...props, 'data-id': 'layout' }))
		.forEach(([name, value]) => element.setAttribute(name, value));
}

const createMap = {
	h1: createH1,
	div: createDiv,
};

const coupler = (map) => (type, props) => map[type](props);

const createElement = coupler(createMap);

const myProps = {className: "testZone"}
console.log(createElement(myProps);

function createElement2(type, props) {
	return [document.createElement(type)]
		.map((element) => Object.entries({ ...props, 'data-id': 'title' }))
		.forEach(([name, value]) => element.setAttribute(name, value))[0];
}
