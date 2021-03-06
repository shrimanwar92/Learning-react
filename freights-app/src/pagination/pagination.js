function Pagination(collection, itemsPerPage) {
	this.collection = collection;
	this.totalPages = Math.ceil(collection.length / itemsPerPage);

	const chunk = (arr) => {
		let result = [];
		
		while(arr.length != 0) {
			let temp = arr.slice(0, itemsPerPage);
			result.push(temp);
			arr.splice(0, itemsPerPage);
		}

		return result;
	};

	this.collectionPerPage = chunk([...collection]);
}

Pagination.prototype.pageItem = function(index) {
	return this.collectionPerPage[index];
};

export default Pagination;