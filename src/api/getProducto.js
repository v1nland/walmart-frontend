export function getProducto(id) {
	const FetchURL = `${process.env.REACT_APP_API_URL}/productos/${id}`;

	return (
		fetch(FetchURL, {
			method: "GET",
			mode: "cors",
			cache: "no-cache",
			headers: {
				"Content-Type": "text/plain; charset=utf-8"
			}
		})
			// .then((response) => response.json())
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			})
	);
}
