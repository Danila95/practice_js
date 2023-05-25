const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments'

interface Post {
	postId: number
	id: number
	name: string
	email: string
	body: string
}

const getData = async (url: string): Promise<Post[]> => {
	return await fetch(url).then(response => response.json())
}

getData(COMMENTS_URL).then(data => {
	data.map(item => console.log(`ID: ${item.id}, Email: ${item.email}, Name: ${item.name}\n`))
})