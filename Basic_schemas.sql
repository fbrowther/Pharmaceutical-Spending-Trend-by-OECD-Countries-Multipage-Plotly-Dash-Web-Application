DROP TABLE IF EXISTS pharma_data;
DROP TABLE IF EXISTS lat_long;

CREATE TABLE pharma_data(
	country VARCHAR PRIMARY KEY,
	YEAR date,
	Percent_of_Health_Spending FLOAT,
	Percent_of_Gross_Domestic_Product FLOAT,
	USD_per_capita FLOAT, 
	Total_spending_in_Millions FLOAT,
	Latitude POINT,
	Longitude POINT
);

SELECT * FROM pharma_data;

Country,Capital,Latitude,Longditude

CREATE TABLE lat_long (
	country VARCHAR PRIMARY KEY references pharma_data(country),
	Capital VARCHAR,
	Latitude POINT, 
	Longitude POINT
);

SELECT * FROM lat_long;