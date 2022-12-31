CREATE TABLE IF NOT EXISTS "categories" (
	"id"	INTEGER NOT NULL,
	"idCode"	TEXT,
	"name"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "categories" ("id","idCode","name") VALUES (1,'css','CSS');
INSERT INTO "categories" ("id","idCode","name") VALUES (2,'emmet','Emmet');
INSERT INTO "categories" ("id","idCode","name") VALUES (3,'git','Git');
INSERT INTO "categories" ("id","idCode","name") VALUES (4,'googleSheets','Google Sheets');
INSERT INTO "categories" ("id","idCode","name") VALUES (5,'javascript','JavaScript');
INSERT INTO "categories" ("id","idCode","name") VALUES (6,'notepadPlusPlus','Notepad++');
