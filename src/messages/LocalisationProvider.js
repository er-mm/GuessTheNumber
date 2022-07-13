import ClientMessages from './ClientMessges.json';

export default class LocalisationProvider {
	static getMessage(str) {
		return retriveMessage(str.split('.'), ClientMessages);
	}
}

function retriveMessage(arr, ClientMessages) {
	let value = '';
	for (let message in ClientMessages) {
		if (message === arr[0]) return retriveMessage(arr, ClientMessages[message])
		if (message === arr[1]) {
			value = ClientMessages[message];
			break;
		}
	}
	return value;
}