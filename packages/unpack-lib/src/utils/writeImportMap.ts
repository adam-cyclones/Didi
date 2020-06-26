import { promises } from 'fs';
import {resolve} from "path";

const {
  writeFile
} = promises;

export const writeImportMap = async (path: string, content: string = '{}'): Promise<void> => {
  await writeFile(
    resolve(path, 'unpack.importmap'),
    content,
    'utf-8'
  );
}