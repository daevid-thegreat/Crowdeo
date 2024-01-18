// pages/api/store.js
import { json } from '@helia/json';
import { createHelia } from 'helia';

const helia = createHelia();
const j = json(helia);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const cid = await j.put(req.body); // Assuming JSON data is sent in the request body
      res.status(200).json({ success: true, cid });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}


export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { cid } = req.query;
      const obj = await j.get(cid);
      res.status(200).json({ success: true, data: obj });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
