# Project 3: Pharmaceutical Drug Spending

## Objective of this Project:
![alt text](https://github.com/fbrowther/Project3-Group1/blob/main/Plotly%20Dash%20Multipage%20-%20Farjana/assets/OECD%20LOGO.png)

The Organization for Economic Co-operation and Development (OECD) is a unique forum where the governments of 37 democracies with market-based economies collaborate to develop policy standards to promote sustainable economic growth. 

As a part of this project, it will be determined whether there exists any trend in pharmaceutical spending (on prescription medicines and self-medication) by these countries for the period of 1970 - 2016 and which factors might be the contributing to this trend. 

Pharmaceutical Drug Spending has been calculated as the following indicators -  

1. Total spending by each countries in a specific year (in millions)
2. as a percentage of the total health spending/ share of the total health spending, 
3. Total spending as a Percentage of GDP
4. by per capita (USD) (using economy-wide PPPs)
  
#### Project Plan: 
1. Create a multipage Dash App that displayes the analysed data in the form of interactive visualisations that can be selected by years, countries, and continents. Here is the recording of the app, I developed.
![Multipage Dash App](https://user-images.githubusercontent.com/111912050/210579960-1a9b710c-f33f-4e41-bb4d-8c5e2193dd95.mov)

2. The Dash App also displays the 'data table' retrieved from the MongoDB database. This database can be updated periodically to display more recent data and update the visualisations on the app.
![alt text](https://github.com/fbrowther/Project3-Group1/blob/main/Plotly%20Dash%20Multipage%20-%20Farjana/assets/Mongodb%20Pharma_db.png)

#### Methodology:
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

    
## Final Contribution from the team members:
* Charlotte - Data cleaning
* Vivian - SQL
* Grace - Data Cleaning
* Helen - Data Cleaning, initial plan write-up and SQL
* Farjana - Proposal, Build complete multipage dash app, MongoDB and PostgreSQL uploads, and final writeup

- - - 

[Project 3 Rubric](https://docs.google.com/document/d/1QUqS6glykg0RTwGe4pNwHNrlmnhDqc2RsyfgtZHijR4/edit)


- - -

## Data source: 

* https://datahub.io/core/pharmaceutical-drug-spending#readme and 
* https://data.oecd.org/healthres/pharmaceutical-spending.htm

- - -

Team - Group 1 (5)
* Charlotte Large (charlotte-la)
* Grace Cheuk (gw-sc)
* Farjana Rowther (fbrowther)
* Helen Vlachou (EleniQ)
* Vivian Nnadozie (vnnadozie)
