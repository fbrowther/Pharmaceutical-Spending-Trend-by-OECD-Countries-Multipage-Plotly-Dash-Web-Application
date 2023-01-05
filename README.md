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

## Technologies used in the project: 
Programming language used - Python and SQL
1. PostgreSQL (with PgAdmin)
2. MongoDB Compass,
3. Python (Visual Studio Code and Jupiter Notebook)
4. Flask
5. Plotly Dash (plotly express)
6. Dash Multi-Page Apps
7. Dash Callbacks
8. Dash datatable
9. Dash Core Components (dcc)
10. Dash HTML Components (dhc)
11. Dash Bootstrap Components (dbc)

  
## Project Plan: 
1. Create a multipage Dash App that displayes the analysed data in the form of interactive visualisations that can be selected by years, countries, and continents. 
Here is the recording of the final app I developed.
![Multipage Dash App](https://user-images.githubusercontent.com/111912050/210801199-141eda54-06d1-4808-ad30-dcabf571d272.mov)
![Multipage Dash App](https://user-images.githubusercontent.com/111912050/210812477-2046cf72-9bf1-4064-a1e1-3914ec5e1dcc.mp4)


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
2. There was a positive correlation between higher pharma spending of countries and their GDP per capita (countries with higher GDB per capita spent more!)
3. Majority of the countries belonging to this forum concentrated around Europe and their spending was proportional to their GDP (visualization displayed on map)
4. Since 1970, there was a slow and steady increase in the spending of the majority of the economies proportional to their increase in GDP.
5. Taking into account the cumulative spend of all the countries for the entire duration of the dataset, USA still was the single largest spender on pharmaceutical drugs followed by Japan, Germany, France, Italy, Mexico, and Canada.

## Final Contribution from the team members:
* Charlotte - Data cleaning, Presentation (google slides-50%)
* Vivian - SQL (absent from presentation)
* Grace - Data cleaning
* Helen - Data cleaning, initial plan write-up, presentation (google slides-50%) and SQL
* Farjana - Proposal, Build complete multipage dash app, MongoDB and PostgreSQL uploads and Retrive data from them to display on App, and final writeup

## Files for reference:
* Project (initial) proposal - (https://github.com/fbrowther/Project3-Group1/blob/main/Project%203%20Group1%20PROPOSAL.docx)
* Deployable Final Plotly Dash Multipage App related files - (https://github.com/fbrowther/Project3-Group1/tree/main/Plotly%20Dash%20Multipage%20-%20Farjana)
* Presentation - (https://github.com/fbrowther/Project3-Group1/blob/main/Project%203%20Presentation.pdf)

- - - 
[Project 3 Rubric](https://docs.google.com/document/d/1QUqS6glykg0RTwGe4pNwHNrlmnhDqc2RsyfgtZHijR4/edit)
- - -

## Data source: 
* https://datahub.io/core/pharmaceutical-drug-spending#readme and 
* https://data.oecd.org/healthres/pharmaceutical-spending.htm

- - -
## Google Slides
* https://docs.google.com/presentation/d/1BGN3w8bC1VH9pO0LSOj2HkoqEgWpkW-U6dasfCdafZY/edit?usp=sharing

Team - Group 1 (5)
* Charlotte Large (charlotte-la)
* Grace Cheuk (gw-sc)
* Farjana Rowther (fbrowther)
* Helen Vlachou (EleniQ)
* Vivian Nnadozie (vnnadozie)
