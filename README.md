# Project 3 – Group 1 
Grace, Farjana, Helen, Vivian, Charlotte

# Objective of this Project:
![alt text] (https://www.google.com/url?sa=i&url=https%3A%2F%2Fpartnership.who.int%2Fiomc%2Fparticipating-organizations%2Foecd&psig=AOvVaw0LKZ26Bjf4n8HI4C0BqoZ3&ust=1670620167591000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjIv6D36vsCFQAAAAAdAAAAABAE)

The Organization for Economic Co-operation and Development (OECD) is a unique forum where the governments of 37 democracies with market-based economies collaborate to develop policy standards to promote sustainable economic growth. 

As a part of this project, we will determining the recent trend in pharmaceutical spending (on prescription medicines and self-medication) by the OECD countries for the period of 1971 - 2019. 

Pharmaceutical Drug Spending has been calculated as the following indicators -  

  (1) Total spending by each countries in a specific year (in millions)
  (2) as a percentage of the total health spending/ share of the total health spending, 
  (3) Total spending as a Percentage of GDP
  (4) by per capita (USD) (using economy-wide PPPs)
  
## Data source: 
(1) https://datahub.io/core/pharmaceutical-drug-spending#readme and 
(2) https://data.oecd.org/healthres/pharmaceutical-spending.htm

  
# Project Plan: Create a data dashboard app that can be made interactive with drop-down menus to choose the country and the year.
    (1) Source data, clean and upload onto the PostgreSQL
    (2) Retrieve the data from PostgreSQL and display the data on the Flask app
    (3) CSS and HTML for webpage
    (4) JS for interactivity 
    (5) Employing a live server to deploy
    (6) Dashboard Elements will display a relevant plot showcasing  -
          (a) 'Spending by country' - Total spending by each countries in a specific year (in millions) - 
          (b) 'Spending by Year' - Total spending for each country for all years  - 'Spending by Year'
          (c) 'Country on map' - Use lat and long markers to highlight different countries/ places on map - 'Spending by country on map'
          (d) '% of total health spending' - Share of the total health spending
          (e) 'Spending by % GDP' - Total spending as a percentage of GDP - Spending by % GDP,
          (f) 'Spending by per capita' - by per capita (USD) 
          (g) 'Pharma News Headline' - Web scraping to get new headline regarding any updates on Pharma
    
# Initial Split of the Project :
    (1) Charlotte- no SQL- some database with Vivian, and python data cleaning, sqlalchemy 
    (2) Vivian- SQL – database build + ERD 
    (3) Grace- Half data clean half flask API - matplotlib
    (4) Helen- other half data – some flask -matplotlib-JS
    (5) Farjana- HTML, Webscraping, rest of flask, CSS, JS. Final writer. 
