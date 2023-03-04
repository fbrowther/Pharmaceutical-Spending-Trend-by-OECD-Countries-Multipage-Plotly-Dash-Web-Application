# Pharmaceutical Spending Trend by OECD Countries - Multipage Plotly Dash Web Application

## Objective of this Project:
![alt text](https://github.com/fbrowther/Project3-Group1/blob/main/Plotly%20Dash%20Multipage%20-%20Farjana/assets/OECD%20LOGO.png)

The Organization for Economic Co-operation and Development (OECD) is a unique forum where the governments of 37 democracies with market-based economies collaborate to develop policy standards to promote sustainable economic growth. 

As a part of this project, it will be determined whether there exists any trend in pharmaceutical spending (on prescription medicines and self-medication) by these countries for the period of 1970 - 2016 and which factors might be the contributing to this trend. 

Pharmaceutical Drug Spending has been calculated as the following indicators -  

1. Total spending by each countries in a specific year (in millions)
2. as a percentage of the total health spending/ share of the total health spending, 
3. Total spending as a Percentage of GDP
4. by per capita (USD) (using economy-wide PPPs)

## Data source: 
* https://datahub.io/core/pharmaceutical-drug-spending#readme and 
* https://data.oecd.org/healthres/pharmaceutical-spending.htm

## Technologies and libraries used in the project: 
Programming languages - Python and SQL
1. PostgreSQL (with PgAdmin)
2. MongoDB Compass,
3. Python (Visual Studio Code and Jupyter Notebook)
4. Flask
5. Plotly Dash (plotly express)
6. Dash Multi-Page Apps
7. Dash Callback, Input, Output
8. Dash datatable
9. Dash Core Components (dcc)
10. Dash HTML Components (dhc)
11. Dash Bootstrap Components (dbc)
  
## Project Plan: 
1. Create a multipage Dash App that displayes the analysed data in the form of interactive visualisations that can be selected by years, countries, and continents. 
Here is the recording of the final app that was developed.

https://user-images.githubusercontent.com/111912050/210833330-59424d19-94c4-4f24-8704-bbe7a9c3e253.mp4

2. The Dash App also displays the 'data table' retrieved from the MongoDB database. This database can be updated periodically to display more recent data and update the visualisations on the app.
![alt text](https://github.com/fbrowther/Project3-Group1/blob/main/Plotly%20Dash%20Multipage%20-%20Farjana/assets/Mongodb%20Pharma_db.png)

## Methods:
1. Source data, clean and upload onto PostgreSQL and/or MongoDB (above)
![alt text](https://github.com/fbrowther/Project3-Group1/blob/main/Plotly%20Dash%20Multipage%20-%20Farjana/assets/Pharmadata%20table%20in%20SQL.png)
2. Retrieve the data from either PostgreSQL/MongoDB and display on the multipage Dash App
3. Use dash bootstrap component (dbc) to display the multipage app 
4. Employ a live server to deploy
5. Each page of the multipage app displays a relevant plot showcasing:
    a. 'Spending by country' - Total spending by each countries in a specific year (in millions) 

    b. 'Spending by Year' - Total spending for each country for all years 

    c. 'Country on map' - Use lat and long markers to highlight different countries/ places on map - 'Spending by country on map'

    d. '% of total health spending' - Share of the total health spending

    e. 'Spending by % GDP' - Total spending as a percentage of GDP - Spending by % GDP,

    f. 'Spending by per capita' - by per capita (USD) 
    
    g. Data_table - Data table displays all the data from OECD that was used in building the data visualistion app.
    
## Findings and Conclusions:
1. USA was the highest spending nation among the OECD countries for pharmaceutical drugs; followed by Japan, Germany, France, UK, Spain, Italy, Mexico and Canada.
2. There was a positive correlation between higher pharma spending of countries and their GDP per capita (countries with higher GDP per capita spent more!)
3. Majority of the countries belonging to this forum concentrated around Europe and their spending was proportional to their GDP (visualization displayed on map)
4. Since 1970, there was a slow and steady increase in the spending of the majority of the economies proportional to their increase in GDP.
5. Taking into account the cumulative spend of all the countries for the entire duration of the dataset, USA still was the single largest spender on pharmaceutical drugs followed by Japan, Germany, France, Italy, Mexico, and Canada.
6. There exist a positive effect of countries spending more or proportionaltely higher on pharmaceuticals with regards to timely accessibility of their population to medicine.
7. However, there also exists a negative connotation to this overall increased spending of these high income economies. As the decades have passe, this trend is indicative of the society's (undebatable) increased reliance on over the counter medications and less reliance on lifestyle changes. This is an crucial and important observation that needs to be investigated by the the relevant countries' health authorities. 

## Final contribution from the team members:
* Charlotte - Data cleaning, prepared google slides-50%.
* Farjana - Project Proposal, Build complete multipage dash app, MongoDB, PostgreSQL, retrive data from them to display on the app, and complete README writeup
* Grace - Data cleaning
* Helen - Data cleaning, initial plan write-up, prepared google slides-50% and SQL
* Vivian - SQL

## Google Slides
* https://docs.google.com/presentation/d/1BGN3w8bC1VH9pO0LSOj2HkoqEgWpkW-U6dasfCdafZY/edit?usp=sharing

## Files for reference:
* Project (initial) proposal - (https://github.com/fbrowther/Project3-Group1/blob/main/Project%203%20Group1%20PROPOSAL.docx)
* (Deployable Final) Plotly Dash Multipage App and its related files - (https://github.com/fbrowther/Project3-Group1/tree/main/Plotly%20Dash%20Multipage%20-%20Farjana)
* Presentation - (https://github.com/fbrowther/Project3-Group1/blob/main/Project%203%20Presentation.pdf)

- - - 
[Project 3 Rubric](https://docs.google.com/document/d/1QUqS6glykg0RTwGe4pNwHNrlmnhDqc2RsyfgtZHijR4/edit)
- - -


Team - Group 1 (5)
* Charlotte Large (charlotte-la)
* Farjana Rowther (fbrowther)
* Grace Cheuk (gw-sc)
* Helen Vlachou (EleniQ)
* Vivian Nnadozie (vnnadozie)
