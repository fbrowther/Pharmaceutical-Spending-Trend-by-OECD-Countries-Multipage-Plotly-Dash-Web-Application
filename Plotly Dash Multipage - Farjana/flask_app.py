
import dash
from dash import dcc
from dash import html
from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_pharma

app = Flask(__name__)
mongo = PyMongo(app, uri="mongodb://localhost:27017/Pharma_db")

#Page4 contents
@app.route("/")
def echo():
    final_pharma_data = mongo.db.collection.find_one()
    return render_template("index.html", final_pharma_data=final_pharma_data)


@app.route("/scrape")
def scrapping_pharma():
    final_pharma_data = scrape_pharma.scrape()
    mongo.db.collection.update({}, final_pharma_data, upsert=True)

    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)