--- create table named pharm_data

CREATE TABLE pharm_data(
	LOCATION VARCHAR,
	TIME INTEGER,
	PC_HEALTHXP DECIMAL,
	PC_GDP DECIMAL,
	USD_CAP	DECIMAL,
	FLAG_CODES VARCHAR,
	TOTAL_SPEND DECIMAL	
);

--- create table named latlongdata

CREATE TABLE latlongdata(
	LOCATION VARCHAR,
	CAPITAL	VARCHAR,
	LATITUDE DECIMAL,
	LONGDITUDE DECIMAL

);

SELECT * FROM pharm_data;
SELECT * FROM latlongdata;

--- inner join latlongdata table to pharm_data table to create one table
SELECT *
FROM pharm_data
INNER JOIN latlongdata
ON pharm_data.location = latlongdata.location;

