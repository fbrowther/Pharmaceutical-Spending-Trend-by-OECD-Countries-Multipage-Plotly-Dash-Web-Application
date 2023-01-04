#Dependencies
import dash
from dash import dcc
from dash import html
import pandas as pd
import plotly.express as px
import dash_bootstrap_components as dbc

pharmaspend = pd.read_csv('pharmaspend1.csv')

Pharma_line = pharmaspend.groupby(['Years','Country'])['Total_Spending_in_Millions_USD'].agg('sum').reset_index(name='Total Spend ($)')
line_graph = px.line(data_frame=Pharma_line, x='Years', y='Total Spend ($)', title='Total Spend by Year', color='Country')
max_country = Pharma_line.sort_values(by='Total Spend ($)', ascending=False).loc[0]['Country']

# Page3 contents
dash.register_page(__name__, name='Trend in Spending')

# Set up the layout using an overall div
layout = html.Div(
    [
        dbc.Row([
            dbc.Col(
                [
                    dcc.Graph(id='line_graph', figure=line_graph, style={'width': '150vh', 'height': '80vh'}),
                ], width=12
            )
        ])
    ]
)

if __name__ == '__main__':
    app.run_server(debug=True)


