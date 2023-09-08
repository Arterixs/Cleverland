import { getRenderComposeWord } from './compose-word';
import { getSingleRenderWord } from './single-word';

const NOT_FOUND = -1;

export const getCompositionSentences = (content: string, num: string) => {
  const indexLastSpace = content.lastIndexOf(' ');
  if (indexLastSpace === NOT_FOUND) {
    return getSingleRenderWord(content, num);
  }
  const lastWord = content.slice(indexLastSpace);
  const firstWord = content.slice(0, indexLastSpace);
  return getRenderComposeWord(firstWord, lastWord, num);
};
