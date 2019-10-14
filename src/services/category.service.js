import Network from './network.service';

class CategoryService extends Network {

	getAll() {
		return this.send('GET', '/category');
	}

	create(category) {
        const data = new FormData();
        for(let prop in category) {
            data.append(prop, category[prop]);
        }

        return this.send('PUT', '/category', data, {
            'Content-type': 'application/json'
        });
    }
}

export default new CategoryService();