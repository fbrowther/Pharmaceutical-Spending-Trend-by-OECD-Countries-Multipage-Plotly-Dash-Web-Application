CREATE TABLE pharmadata(
	Years INTEGER,
	Country VARCHAR,
	Capital VARCHAR,
	Latitude DECIMAL,
	LONGITUDE DECIMAL,
	Percent_of_Health_Spending DECIMAL,
	Percent_of_GDP DECIMAL,
	USD_per_Capita DECIMAL,
	Total_Spending_in_Millions_USD DECIMAL
);

SELECT * FROM pharmadata;

SELECT "Years", "Total_Spending_in_Millions_USD", "Country" FROM pharmadata
ORDER BY "Years" DESC;