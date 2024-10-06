// src/utils/getLastModified.js
import simpleGit from 'simple-git';

const git = simpleGit();

export async function getLastModified(filePath) {
  try {
    const log = await git.log({ file: filePath });
    if (log && log.latest) {
      return log.latest.date;
    }
  } catch (error) {
    console.error('Error fetching last modified time:', error);
  }
  return null;
}
