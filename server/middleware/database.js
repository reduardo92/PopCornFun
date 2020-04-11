import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function database(req, res, next) {
  try {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('sample_mflix');
    console.log('MongoDB connected...');
    return next();
  } catch (error) {
    console.log(err.message);
    process.exit(1);
  }
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
