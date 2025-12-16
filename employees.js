import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'info.json');
  const rawData = fs.readFileSync(filePath);
  const data = JSON.parse(rawData);

  res.status(200).json({
    employees: data.data
  });
}
