# Project 3: Pharmaceutical Drug Spending
DAV Module - Project 3 Group Challenge

## Objective of this Project:

![pharma-drugs](Images/file-20190219-136739-1nw6w7r.avif)

The Organization for Economic Co-operation and Development (OECD) is a unique forum where the governments of 37 democracies with market-based economies collaborate to develop policy standards to promote sustainable economic growth. 

As a part of this project, we will be determining the recent trend in pharmaceutical spending (on prescription medicines and self-medication) by the OECD countries for the period of 1970 - 2016. 

Pharmaceutical Drug Spending has been calculated as the following indicators -  

1. Total spending by each countries in a specific year (in millions)
2. as a percentage of the total health spending/ share of the total health spending, 
3. Total spending as a Percentage of GDP
4. by per capita (USD) (using economy-wide PPPs)
  
## Project Plan: Create a data dashboard app that can be made interactive with drop-down menus to choose the country and the year.

1. Source data, clean and upload onto the PostgreSQL
2. Retrieve the data from PostgreSQL and display the data on the Flask app
3. CSS and HTML for webpage
4. JS for interactivity 
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

* Charlotte - no SQL- some database with Vivian, and python data cleaning, sqlalchemy 
* Vivian - SQL – database build + ERD 
* Grace - Half data clean half flask API - matplotlib
* Helen - other half data – some flask -matplotlib-JS
* Farjana - HTML, Webscraping, rest of flask, CSS, JS. Final writer. 

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