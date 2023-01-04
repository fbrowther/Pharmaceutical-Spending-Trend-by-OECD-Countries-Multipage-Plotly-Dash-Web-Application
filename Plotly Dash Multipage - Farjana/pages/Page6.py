#Dependencies
import dash     # need Dash version 1.21.0 or higher
from dash import callback, Input, Output, dcc, html
from dash import dash_table
import pandas as pd
import plotly.express as px
import pymongo
from pymongo import MongoClient
from bson import ObjectId
import dash_bootstrap_components as dbc


# Connect to local server
client = MongoClient("mongodb://127.0.0.1:27017/")
# Create database
mydb = client["Pharma_db"]
# Create Collection (table) called shelterA
collection = mydb.OECD
df = pd.DataFrame(list(collection.find()))
df = df.iloc[:, 1:]

# Page6 contents

dash.register_page(__name__, name='Data Table')

layout = html.Div(
    [
        dbc.Row([
            dbc.Col(
                [
                    dbc.Container([
                    dbc.Label('Click a cell in the table:'),
                    dash_table.DataTable(df.to_dict('records'),[{"name": i, "id": i} for i in df.columns], id='tbl'),
                    dbc.Alert(id='tbl_out'),
])
                ], width=12
            )
        ])
    ]
)

@callback(Output('tbl_out', 'children'), Input('tbl', 'active_cell'))
def update_graphs(active_cell):
    return str(active_cell) if active_cell else "Click the table"


if __name__ == '__main__':
    app.run_server(debug=True)

