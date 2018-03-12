-- (C) 2018 Jose Zapata, Trevor Hurt , Alex Jacobs

-- MARIADB = MySQL Create script

CREATE TABLE Member 
(
    id              INTEGER         NOT NULL     AUTO_INCREMENT,
    userName        VARCHAR(255)    NOT NULL,
    email           VARCHAR(400)    NOT NULL,

	CONSTRAINT pk_member PRIMARY KEY(id)
)

CREATE TABLE Category 
(
    id              INTEGER         NOT NULL     AUTO_INCREMENT,
    title           VARCHAR(255)    NOT NULL,
    budgetLimit     decimal(12,4)   NOT NULL,
    isActive        BIT(1)          NOT NULL,

	CONSTRAINT pk_category PRIMARY KEY(id)
)

ALTER TABLE Category AUTO_INCREMENT = 101;

CREATE TABLE Idea
(
    id              INTEGER         NOT NULL     AUTO_INCREMENT,
    title           VARCHAR(255)    NOT NULL,
    description     VARCHAR(255)    NOT NULL,
    budget          decimal(12,4)   NOT NULL,
    readyForComments BIT(1)         NOT NULL,
    peopleNeeded    INTEGER         NOT NULL,
    creationDate    DATE            NOT NULL,
    lastModified    DATETIME        NOT NULL,
    categoryId      INTEGER         NOT NULL

    CONSTRAINT pk_Idea PRIMARY KEY(id),
    
    CONSTRAINT fk_idea_category_categoryid FOREIGN KEY (categoryId)
        REFERENCES Category(id)
        ON DELETE NO ACTION
) 
ALTER TABLE Idea AUTO_INCREMENT = 201;   

CREATE TABLE Comment 
(
    memberId            INTEGER         NOT NULL,
    ideaId              INTEGER         NOT NULL,
    commentTimeStamp    DATETIME        NOT NULL,
    commentLine         VARCHAR(255)    NOT NULL,

    CONSTRAINT pk_Comment PRIMARY KEY(memberId,ideaId,commentTimeStamp),
    CONSTRAINT fk_Comment_Member FOREIGN KEY(memberId),
    CONSTRAINT fk_Comment_Idea FOREIGN KEY(ideaId)
)

CREATE TABLE MemberIdea 
(
    memberId            INTEGER         NOT NULL,
    ideaId              INTEGER         NOT NULL,

    CONSTRAINT pk_MemberIdea PRIMARY KEY(memberId,ideaId),
    CONSTRAINT fk_MemberIdea_Member FOREIGN KEY(memberId),
    CONSTRAINT fk_MemberIdea_Member FOREIGN KEY(ideaId)

)

