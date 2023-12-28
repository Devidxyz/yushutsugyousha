import { addNoteToAnki } from "../anki";
import { AddNoteParams } from "../anki/types";
import { getImageForWord } from "../images";
import { findInJmdict } from "../jmdict";
import { toFurigana } from "../kuroshiro";
import { scrapeTTS } from "../tts";
import { fieldOrFirstElement, stringOrJoinStrings } from "../utils";

const wordToAnki = async (word: string) => {
  const jmdictResult = findInJmdict(word);
  if (!jmdictResult) {
    throw new Error("Not found in JMdict");
  }

  const wordKanji =
    fieldOrFirstElement(jmdictResult.k_ele)?.keb ??
    fieldOrFirstElement(jmdictResult.r_ele)?.reb;

  const sense = fieldOrFirstElement(jmdictResult.sense);

  const meaning = stringOrJoinStrings(sense.gloss);

  // part of speech
  const pos = fieldOrFirstElement(sense.pos);

  const example = fieldOrFirstElement(
    fieldOrFirstElement(jmdictResult.sense).example
  )?.ex_sent;
  // can't destructure (unsafe usage of optional chaining...)
  const sentence = example?.[0];
  const sentenceMeaning = example?.[1];

  const [
    wordFurigana,
    sentenceFurigana,
    wordAudioUrl,
    sentenceAudioUrl,
    imageUrl,
  ] = await Promise.all([
    toFurigana(wordKanji),
    toFurigana(sentence),
    scrapeTTS(wordKanji),
    scrapeTTS(sentence),
    getImageForWord(fieldOrFirstElement(sense.gloss)),
  ]);

  const addNoteParams: AddNoteParams = {
    fields: {
      Word: wordKanji,
      Furigana: wordFurigana,
      Meaning: meaning,
      "Part of speech": pos,
      Sentence: sentence,
      SentenceFurigana: sentenceFurigana,
      SentenceMeaning: sentenceMeaning,
    },
    tags: [],
    wordAudioUrl,
    sentenceAudioUrl,
    imageUrl,
  };

  const ankiResult = await addNoteToAnki(addNoteParams);

  return { addNoteParams, ankiResult };
};

export default wordToAnki;
