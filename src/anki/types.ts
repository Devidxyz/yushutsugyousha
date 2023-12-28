export type AddNoteParams = {
  fields: {
    Word: string;
    Furigana: string;
    Meaning: string;
    "Part of speech"?: string;
    Sentence?: string;
    SentenceFurigana?: string;
    SentenceMeaning?: string;
  };
  tags?: string[];
  wordAudioUrl?: string;
  sentenceAudioUrl?: string;
  imageUrl?: string;
};

export type NotesInfoResult = {
  result?: {
    noteId: number;
    modelName: string;
    tags: string[];
    fields: Record<string, { value: string; order: number }>;
  }[];
  error?: any;
};
