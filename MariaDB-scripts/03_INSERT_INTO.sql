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
("Nioh is an awesome game to play.", 2198.9872, 1),
("Pencil is a great tool for writing.", 2132.9872, 0),
("Potatoes are a very nice vegetable to eat.", 123.9872, 0),
("Tomatoes are red versions of potatoes.", 98723.8659, 1));

INSERT INTO Idea
(title, description, budget, readyForComments, peopleNeeded, creationDate, lastModified, categoryId) 
	VALUES
("Title One", "description1", 32131.8763, 0, 4, "2012-04-19", "2012-04-10 13:08:22", 101),
("Title Two", "description2", 32131.1273, 1, 3, "2012-02-19", "2012-04-15 13:08:22", 102),
("Title Three", "description3", 32131.9876, 0, 6, "2012-12-19", "2012-04-23 13:08:22", 103),
("Title Four", "description4", 32131.7864, 1, 8, "2012-11-19", "2012-04-24 13:08:22", 104);


INSERT INTO Comment
(memberId, ideaId, commentTimeStamp, commentLine)
	VALUES
	(1, 501, "2012-04-19 13:08:22", "Comment line 1"),
	(4, 501, "2012-04-19 13:08:22", "Comment line 1"),
	(2, 503, "2012-04-19 13:08:22", "Comment line 1"),
	(2, 504, "2012-04-19 13:08:22", "Comment line 1")

INSERT INTO MemberIdea
(memberId, ideaId)
	VALUES
	(1, 501),
	(1, 502),
	(2, 501),
	(1, 502),