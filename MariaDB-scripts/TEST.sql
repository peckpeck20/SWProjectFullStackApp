--Jose Zapata 2018

INSERT INTO Category
    (
    title,
    budgetLimit, isActive)
VALUES
    (
        'Purchase',
        5000.00, 1),
    (
        'Event',
        200.50, 1),
    (
        'Training',
        2000.00, 0),
    (
        'Work party',
        10000.00, 0)
;

INSERT INTO Idea
    ( title,
    description,
    budget, readyForComments,
    peopleNeeded, creationDate, lastModified,
    categoryId)
VALUES
    ( 'Little Xmas party',
        'A little xmas party so early that the restaurants still have vacancy. E.g. early Sept?',
        250.00, 1,
        5, '2013-04-01', '2013-04-11 12:59',
        2),
    ( 'Fire extinguisher training 28.4.2013 at 18:00',
        'According to our safety regulations at least one from each flat has to know how to use the extinguisher. Training consists of 15 min theory and then one hour practice',
        49.99, 1,
        5, '2013-04-01', '2013-05-24 09:00',
        2),
    ( 'Type writer training',
        'Who wants to learn to type with 10 fingers? Should we have a club every Monday night at 17:00?',
        1500.00, 0,
        7, '2012-11-15', '2013-06-02 11:40',
        3)
;

INSERT INTO Member
    (
    userName,
    email)
VALUES
    (
        'pekka',
        'peku@gmail.com'
		),
    (
        'anna',
        'annukka@sahkoposti.fi'
		),
    (
        'tuukka',
        'tuukka@kolmepojoo.com'
		),
    (
        'antti',
        'ratkaisija@todayshockey.org'
		),
    (
        'john',
        'john@doe.com'
		)
;

INSERT INTO MemberIdea
    (memberId, ideaId)
VALUES
    (1, 2),
    (2, 1),
    (3, 3)
;

INSERT INTO Comment
    (memberId, ideaId, commentTimeStamp, commentLine)
VALUES
    (2, 1, '2013-05-11 13:16', 'Completely agree'),
    (2, 1, '2013-06-30 23:59', 'Now I start to doubt it')
		;