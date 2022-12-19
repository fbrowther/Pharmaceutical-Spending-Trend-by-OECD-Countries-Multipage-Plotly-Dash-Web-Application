import dash
from dash import html, dcc, callback, Input, Output
import plotly.express as px
import dash_bootstrap_components as dbc
import pandas as pd


df = pd.read_csv('pharmaspend1.csv')

dash.register_page(__name__, path='/', name='Homepage') #this is homepage

layout = html.Div(
    [
        dbc.Row(
            [
                dbc.Col(
                    [
                    html.H1("Latest Pharma News", style={'fontSize':50, 'color': 'white'}),
                    html.H3(children='latest_title', style={'fontSize':40, 'color': 'Orange'}),
                    html.H3(children='latest_paragraph', style={'fontSize':40, 'color': 'Orange'}),
                    ], width=12
                )
            ]
        )
    ]
)


if __name__ == '__main__':
    app.run_server(debug=True)