import dash
from dash import html, dcc, callback, Input, Output
import plotly.express as px
import dash_bootstrap_components as dbc
import pandas as pd


df = pd.read_csv('pharmaspend1.csv')

dash.register_page(__name__, name='Comparison of PerCapita and Pharma Spending')

layout = html.Div(
    [
        dbc.Row(
            [
                dbc.Col(
                    [
                        dcc.Graph(id='graph-with-slider'),
                        dcc.Slider(
                            df['Years'].min(),
                            df['Years'].max(),
                            step=None,
                            value=df['Years'].min(),
                            marks={str(year): str(year) for year in df['Years'].unique()},
                            id='year-slider')
                    ], width=12
                )
            ]
        )
    ]
)


@callback(
    Output('graph-with-slider', 'figure'),
    Input('year-slider', 'value'))
def update_figure(selected_year):
    filtered_df = df[df.Years == selected_year]

    fig = px.scatter(filtered_df, x="USD_per_Capita", y="Total_Spending_in_Millions_USD",
                     size="USD_per_Capita", color="Continent", hover_name="Country",
                     log_x=True, size_max=50, title= "Relationship between PerCapita and Pharmaceutical Spending of Countries/Continents",
                     height=800)

    fig.update_layout(transition_duration=500)

    return fig

if __name__ == '__main__':
    app.run_server(debug=True)