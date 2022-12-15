--- create table named pharm_data

CREATE TABLE pharm_data(
	country VARCHAR,
	year INTEGER,
	percent_of_health_spending DECIMAL,
	percent_of_gross_domestic_product_DECIMAL,
	usd_per_capita DECIMAL,
	total_spending_in_millions(usd) DECIMAL
);

--- create table named latlongdata

CREATE TABLE latlongdata(
	Country VARCHAR,
	Capital	VARCHAR,
	Latitude DECIMAL,
	Longitude DECIMAL

);

SELECT * FROM pharm_data;
SELECT * FROM latlongdata;

--- inner join latlongdata table to pharm_data table to create one table
SELECT *
FROM pharm_data
INNER JOIN latlongdata
ON pharm_data.location = latlongdata.location;

SELECT LOCATION, SUM(TOTAL_SPEND) AS "TOTAL SPEND"
FROM pharm_data
GROUP BY LOCATION;


SELECT LOCATION, TIME, SUM(TOTAL_SPEND) AS "TOTAL SPEND"
FROM pharm_data
GROUP BY LOCATION, TIME;
