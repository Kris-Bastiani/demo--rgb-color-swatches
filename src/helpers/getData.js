export default async uri => {
	const response = await fetch(uri, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});
	return response.json();
};
