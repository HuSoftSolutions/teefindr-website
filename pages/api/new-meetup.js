import { MongoClient } from "mongodb";

// /api/new-meetup
// POST
async function handler(req, res){
	if (req.method === 'POST'){
		const data = req.body;

		const username = encodeURIComponent('cody-husek')
		const password = encodeURIComponent('ty765rzN/Q6xAxgolf')

		const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.2rdgk.mongodb.net/?retryWrites=true&w=majority`)
		const db = client.db();

		const meetupsCollection = db.collection('meetups');
		const result = await meetupsCollection.insertOne(data);
		client.close();

		res.status(201).json({message: 'Meetup inserted!'})
	}
}

export default handler;