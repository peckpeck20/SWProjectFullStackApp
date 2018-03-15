INSERT INTO Member
(userName, email)
	VALUES
	("Peck", "Peck@h.fi"),
	("Fluff", "Fluff@h.fi"),
	("TDogg", "T@h.fi"),
	("asnf", "fjndskjfsnf@asjdnsa.fi")

INSERT INTO Category 
(title, budgetLimit, isActive) 
	VALUES
("Nioh is an awesome game to play.", 21986218746, 1),
("Pencil is a great tool for writing.", 2132, 0),
("Potatoes are a very nice vegetable to eat.", 123, 0),
("Tomatoes are red versions of potatoes.", 98723, 1));

INSERT INTO Idea
(title, description, budget, readyForComments, peopleNeeded, creationDate, lastModified, categoryId) 
	VALUES
("One", "description", 32131, 1, 4, "2012-04-19", "2012-04-19 13:08:22", 101),
("One", "description", 32131, 1, 4, "2012-04-19", "2012-04-19 13:08:22", 102),
("One", "description", 32131, 1, 4, "2012-04-19", "2012-04-19 13:08:22", 103),
("One", "description", 32131, 1, 4, "2012-04-19", "2012-04-19 13:08:22", 104);


INSERT INTO Comment
(memberId, ideaId, commentTimeStamp, commentLine)
	VALUES
	(1, 1, "2012-04-19 13:08:22", "Comment line 1")