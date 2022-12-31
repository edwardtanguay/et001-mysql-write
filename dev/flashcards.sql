BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "flashcards" (
	"id"	INTEGER NOT NULL UNIQUE,
	"category"	TEXT,
	"front"	TEXT,
	"back"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "flashcards" ("id","category","front","back") VALUES (1658,'git','how to unstage `index.html`, i.e. get the file back from staging area to working directory','`git reset index.html`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2678,'emmet','how to produce filler text in a paragraph element','`p>lorem`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2723,'css','how to make it so that the user can''t select text','`user-select: none;`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2764,'emmet','a ul with 10 li elements that have a lorem ipsum of 20 words each','`ul>lorem20*10`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2768,'emmet','easily type an `<a>` tag with `href`','`a{go to google}`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2770,'javascript','how to reverse the digits in a number?','`Number(String(x).split('''').reverse().join(''''));`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2798,'git','list the last three commits','`git log -3`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2805,'git','how to add and commit all tracked and untracked files in one line','`git add . && git commit -m "second commit"`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2870,'googleSheets','how to convert string to number','`=VALUE(F3)`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2876,'notepadPlusPlus','create vertical cursor to type the same text into numerous lines','**Shift-ALT**, click-drag down, type the text which appears in multiple lines, then to end **Shift-ALT**-click again');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (2942,'javascript','how to measure time in console','before the code to be measured: `console.time(''books route'')` and after the code to be measured: `console.timeEnd(''books route'')` (the text **books route** has to be identify in both statements)');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3000,'git','delete all local branches except dev','`git branch | grep -v "dev" | xargs git branch -D`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3008,'linux','show all files with full info','`ls -al`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3009,'linux','show all files with full info','`ls -al`sdfsdf');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3010,'ccc','fff','bbb');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3011,'linux','show all files with full info','`ls -al`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3012,'linux','show all files with full info','`ls -al`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3013,'linux','show all files with full info','`ls -al`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3014,'linux','show all files with full info','`ls -al`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3015,'ubuntu','show all files with full info','`ls -al`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3016,'ubuntu','show all files with full info','`ls -al`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3018,'ubuntu','show all files with full info','`ls -al`');
INSERT INTO "flashcards" ("id","category","front","back") VALUES (3021,'linux','show all files with full info','`ls -al`');
COMMIT;
