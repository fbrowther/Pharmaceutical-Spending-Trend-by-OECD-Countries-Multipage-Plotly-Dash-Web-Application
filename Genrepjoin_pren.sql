--Games.Game_ID = Characters.Game
--Characters.Id = Sexualization.Id
-- These are not to be used as FK's, they are what we will be using to join later on.
-- It's basically just game id and character id :) 

CREATE TABLE games (
Game_ID VARCHAR(20) NOT NULL PRIMARY KEY,
Title VARCHAR(20) NOT NULL,
Release DATE NOT NULL,
Series VARCHAR(30) NOT NULL,
Genre VARCHAR(30) NOT NULL,
Sub_Genre VARCHAR(30) NOT NULL,
Developer VARCHAR(30) NOT NULL,
Publisher VARCHAR(30) NOT NULL, 
Country VARCHAR(30) NOT NULL,
Platform VARCHAR(30) NOT NULL,
age_rating INT NOT NULL, 
Customizable_main VARCHAR(20) NOT NULL,
Protagonist INT NOT NULL, 
Protagonist_Non_Male INT NOT NULL, 
Relevant_males INT NOT NULL,
Relevant_no_males INT NOT NULL, 
Percentage_non_male VARCHAR NOT NULL, 
Criteria VARCHAR(5) NOT NULL, 
Director VARCHAR(2) NOT NULL,
Total_team INT NOT NULL,
female_team INT NOT NULL, 
female_teampercentage VARCHAR NOT NULL, 
Metacritic FLOAT NOT NULL, 
Destructoid FLOAT NOT NULL, 
IGN	FLOAT NOT NULL,
GameSpot FLOAT NOT NULL,
Avg_Reviews Float NOT NULL	
);
SELECT * FROM games; 

CREATE TABLE characters (
Name VARCHAR(20) NOT NULL, 
Gender VARCHAR(10) NOT NULL,
Game VARCHAR(20) NOT NULL,
	foreign Key(Game)references games(Game_ID),
AGE VARCHAR(20)NOT NULL,
Age_Range VARCHAR(20) NOT NULL, 
Playable BOOLEAN NOT NULL, 
Sexualization INT NOT NULL, 
ID VARCHAR(30) PRIMARY KEY NOT NULL, 
Species VARCHAR(10) NOT NULL,
Side VARCHAR(2) NOT NULL,
Relevance VARCHAR(5) NOT NULL,
Romantic_Interest VARCHAR(5) NOT NULL 
);
SELECT * FROM characters; 	

CREATE TABLE Sexualization (
ID VARCHAR NOT NULL,
	foreign Key(ID)references characters(ID),
Sexualized_clothing BOOLEAN NOT NULL, 
Trophy BOOLEAN NOT NULL,
Damsel_in_Distress BOOLEAN NOT NULL, 
Sexualized_Cutscenes BOOLEAN NOT NULL, 
Total INT NOT NULL
);
SELECT * FROM Sexualization ;



-- joining all the  3 tables 
Select G.game_id, G.Title,G.release, G.Genre, G.developer,G.country,G.Platform,G.Percentage_non_male,
	G.Criteria,G.Female_team,G.female_teampercentage,G.Avg_reviews,Ch.age_range,Ch.sexualization_total,Ch.gender, Se.damsel_in_distress
From games as G
	join characters as Ch on Ch.game = G.game_id
	join Sexualization as Se on Se.id = Ch.id ;
	
	
--testing  joins	
-- joining Games and  Character tables 
Select G.game_id, G.Title,G.release, G.Genre, G.developer, Ch.game, Ch.age_range, Ch.gender,Ch.id
	From games as G
 	join characters as Ch 
	on Ch.game = G.game_id;
	
	
---	joining  character and Sexualization tables 
Select Ch.id, Ch.game, Ch.age_range, Ch.gender,Se.Total
From characters as Ch
Join Sexualization as Se
on Se.id = Ch.id ;




