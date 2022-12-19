import dash
from dash import Dash, dcc, html, Input, Output
import plotly.express as px
import dash_bootstrap_components as dbc
import pandas as pd

df = pd.read_csv('pharmaspend1.csv')

fig = px.scatter_geo(df, locations="Country",
                     color="Continent", # which column to use to set the color of markers
                     hover_name="Country", # column added to hover information
                     size="Total_Spending_in_Millions_USD", # size of markers
                     projection="natural earth",
                     title = "Pharmaceutical Spending by Continent",
                     size_max = 50)

#page 2 content
dash.register_page(__name__, name='Global View of Spending')


layout = html.Div(
    [
        dbc.Row([
            dbc.Col(
                [
                    dcc.Graph(figure=fig, style={'width': '150vh', 'height': '70vh'})
                ], width=12
            )
        ])
    ]
)


if __name__ == '__main__':
    app.run_server(debug=True)