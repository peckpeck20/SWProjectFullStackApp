-- (C) 2018 Jose Zapata, Trevor Hurt , Alex Jacobs

-- MARIADB = MySQL script

CREATE TABLE Member 
(
    id              INTEGER         NOT NULL     AUTO_INCREMENT,
    userName            VARCHAR(255)    NOT NULL,
    email            VARCHAR(400)    NOT NULL,

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
    description     VARCHAR(m)      NOT NULL,
    budget          decimal(12,4)   NOT NULL,
    readyForComments bit(1)         NOT NULL,
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
()





-- --------------------- 2.Industry fields --------------------------------



-- Autoincrement field is NOT given any value in insert (or update) the values are
-- now autoincremented: 201, 202, 203 ... and your test data has to take that into account

-- ON DELETE NO ACTION = Cannot delete mother (Category) if (Ideas) exist
-- The second most popular is ON DELETE CASCADE. E.g. when idea deleted,
-- delete also the comments about it

/* Other datatypes and such */
/* Maybe some old, but anyway how to change from SQL standard datatypes to MySQL/MariaDB */

    -- not MONEY, but:  DECIMAL(19,4)
	-- not SMALLMONEY, but:   DECIMAL(10,4)
	-- not VARCHAR(MAX), but:    VARCHAR(20000) OR TEXT

	/*   examples of correct definitions for MariaDB:

	price           DECIMAL(15,2)   NOT NULL,
    someText        VARCHAR(1000)   NOT NULL,    
   	maxLongVarChar  VARCHAR(20000) 	NOT NULL,
  	enabled         TINYINT         NOT NULL DEFAULT 1,    
	strange_id      INT(11)         NOT NULL AUTO_INCREMENT,
    
	*/