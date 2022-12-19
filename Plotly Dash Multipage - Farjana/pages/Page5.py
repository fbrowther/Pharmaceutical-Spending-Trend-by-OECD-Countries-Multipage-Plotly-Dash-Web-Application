#Dependencies
import dash
from dash import dcc
from dash import html
import pandas as pd
import plotly.express as px
import dash_bootstrap_components as dbc

pharmaspend = pd.read_csv('pharmaspend1.csv')

Pharma_bar = pharmaspend.groupby('Country')['Total_Spending_in_Millions_USD'].agg('sum').reset_index(name='Total Spend ($)')
bar_graph = px.bar(data_frame=Pharma_bar, x='Total Spend ($)', y='Country', orientation='h',title='Total Spend by Country')
max_country = Pharma_bar.sort_values(by='Total Spend ($)', ascending=False).loc[0]['Country']

# Page3 contents
dash.register_page(__name__, name='Cumulative Spending over the Years')

# Set up the layout using an overall div

layout = html.Div(
    [
        dbc.Row([
            dbc.Col(
                [
                     dcc.Graph(id='bar_graph', figure=bar_graph, style={'width': '150vh', 'height': '80vh'}),
                ], width=12
            )
        ])
    ]
)

if __name__ == '__main__':
    app.run_server(debug=True)
