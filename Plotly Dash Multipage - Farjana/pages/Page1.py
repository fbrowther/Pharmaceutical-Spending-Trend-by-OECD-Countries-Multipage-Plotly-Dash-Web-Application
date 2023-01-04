import dash
from dash import html, dcc, callback, Input, Output
import plotly.express as px
import dash_bootstrap_components as dbc
import pandas as pd

df = pd.read_csv('pharmaspend1.csv')
image_path = 'assets/OECD LOGO.png'
dash.register_page(__name__, path='/', name='Homepage') #this is homepage

layout = html.Div(
    [
        dbc.Row(
            [
                dbc.Col(
                    [
                    html.H1("Latest Pharma News", style={'fontSize':50, 'color': 'white'}),
                    html.Img(src=image_path),
                    html.H3(children='The Organization for Economic Co-operation and Development (OECD) is a unique forum where the governments of 37 democracies with market-based economies collaborate to develop policy standards to promote sustainable economic growth', style={'fontSize':30, 'color': 'Black'}),
                    html.Br(),
                    html.H2(children='As a part of this project, we determined the recent trend in pharmaceutical spending (on prescription medicines and self-medication) by these countries for the period of 1970 - 2016', style={'fontSize':30, 'color': 'Black'}),
                    html.Br(),
                    html.H3(children='Pharmaceutical Drug Spending has been calculated as the following indicators', style={'fontSize':30, 'color': 'Black'}),
                    html.Br(),
                    html.H3(children='* Total spending by each countries in a specific year (in millions)', style={'fontSize':30, 'color': 'Blue'}),
                    html.Br(),
                    html.H3(children='* Total spending as a Percentage of GDP', style={'fontSize':30, 'color': 'Blue'}),
                    html.Br(),
                    html.H3(children='* by per capita (USD) (using economy-wide PPPs)', style={'fontSize':30, 'color': 'Blue'}),
                    ], width=12
                )
            ]
        )
    ]
)


if __name__ == '__main__':
    app.run_server(debug=True)