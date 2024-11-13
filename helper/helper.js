import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export function getNewId() {
  return uuidv4();
}

export function readJSONFile(filePath) {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function writeJSONFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}