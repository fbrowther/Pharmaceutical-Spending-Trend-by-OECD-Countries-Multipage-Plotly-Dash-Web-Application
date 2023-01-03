# Project 3: Pharmaceutical Drug Spending

## Objective of this Project:
![alt text](https://github.com/fbrowther/Project3-Group1/blob/main/Plotly%20Dash%20Multipage%20-%20Farjana/assets/OECD%20LOGO.png)

The Organization for Economic Co-operation and Development (OECD) is a unique forum where the governments of 37 democracies with market-based economies collaborate to develop policy standards to promote sustainable economic growth. 

As a part of this project, we will be determining the recent trend in pharmaceutical spending (on prescription medicines and self-medication) by the OECD countries for the period of 1970 - 2016. 

Pharmaceutical Drug Spending has been calculated as the following indicators -  

1. Total spending by each countries in a specific year (in millions)
2. as a percentage of the total health spending/ share of the total health spending, 
3. Total spending as a Percentage of GDP
4. by per capita (USD) (using economy-wide PPPs)
  
#### Project Plan: 
1. Create a multipage Dash App that displayes the analysed data in the form of interactive visualisations that can be selected by years, countries, and continents. 

2. The Dash App also displays the 'data table' retrieved from the MongoDB database. This database can be updated periodically to display more recent data and update the visualisations on the app.
![alt text](https://github.com/fbrowther/Project3-Group1/blob/main/Plotly%20Dash%20Multipage%20-%20Farjana/assets/Mongodb%20Pharma_db.png)

#### Methodology:
1. Source data, clean and upload onto the PostgreSQL and/or MongoDB
2. Retrieve the data from either PostgreSQL/MongoDB and display the data on the Flask app
3. CSS and HTML for webpage
4. Plotly Dash
5. Employing a live server to deploy
6. Dashboard Elements will display a relevant plot showcasing:

    a. 'Spending by country' - Total spending by each countries in a specific year (in millions) - 

    b. 'Spending by Year' - Total spending for each country for all years  - 'Spending by Year'

    c. 'Country on map' - Use lat and long markers to highlight different countries/ places on map - 'Spending by country on map'

    d. '% of total health spending' - Share of the total health spending

    e. 'Spending by % GDP' - Total spending as a percentage of GDP - Spending by % GDP,

    f. 'Spending by per capita' - by per capita (USD) 

    g. 'Pharma News Headline' - Web scraping to get new headline regarding any updates on Pharma
    
## Initial Split of the Project :

* Charlotte - Data cleaning
* Vivian - SQL
* Grace - Data Cleaning
* Helen - Data Cleaning, initial plan and SQL
* Farjana - Proposal, Complete Multipage Dash App, Mongodb and PostgreSQL uploads, Presentation, and final writeup

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
