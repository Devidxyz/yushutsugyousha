import { XMLParser } from "fast-xml-parser";
import fs from "fs";

// convert JMdict xml to json for faster loading and searching, better overall javascript compatibility

const jmdictXml = fs.readFileSync(`${__dirname}/../static/JMdict_e_examp.xml`);

const parser = new XMLParser();
const jmdictObj = parser.parse(jmdictXml);

fs.writeFileSync(
  `${__dirname}/../static/JMdict_e_examp.json`,
  JSON.stringify(jmdictObj)
);
