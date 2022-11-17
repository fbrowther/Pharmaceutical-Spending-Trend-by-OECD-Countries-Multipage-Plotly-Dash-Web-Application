--Games.Game_ID = Characters.Game
--Characters.Id = Sexualization.Id
-- These are not to be used as FK's, they are what we will be using to join later on.
-- It's basically just game id and character id :) 

CREATE TABLE characters (
Name VARCHAR, 
Gender VARCHAR,
Game VARCHAR,
AGE VARCHAR,
Age_Range VARCHAR, 
Playable BOOLEAN, 
Sexualization INT, 
ID VARCHAR PRIMARY KEY, 
Species VARCHAR,
Side VARCHAR,
Relevance VARCHAR,
Romantic_Interest VARCHAR
);
	

SELECT * FROM characters; 						 			
CREATE TABLE games (
Game_ID VARCHAR PRIMARY KEY,
Title VARCHAR,
Release DATE,
Series VARCHAR,
Genre VARCHAR,
Sub_Genre VARCHAR,
Developer VARCHAR,
Publisher VARCHAR, 
Country VARCHAR,
Platform VARCHAR,
PEGI INT, 
Customizable_main VARCHAR,
Protagonist INT, 
Protagonist_Non_Male INT, 
Relevant_males INT,
Relevant_no_males INT, 
Percentage_non_male INT, 
Criteria VARCHAR, 
Director VARCHAR,
Total_team INT,
female_team INT, 
Team_percentage INT, 
Metacritic DECIMAL, 
Destructoid DECIMAL, 
IGN	DECIMAL,
GameSpot DECIMAL,
Avg_Reviews DECIMAL
);

SELECT * FROM games; 

CREATE TABLE Sexualization (
ID INT PRIMARY KEY,
Sexualized_clothing BOOLEAN, 
Trophy BOOLEAN,
Damsel_in_Distress BOOLEAN, 
Sexualized_Cutscenes BOOLEAN, 
Total INT
);

SELECT * FROM Sexualization ;