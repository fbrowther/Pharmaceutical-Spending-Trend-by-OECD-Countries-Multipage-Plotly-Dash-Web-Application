import pandas as pd
import requests
from splinter import Browser
from bs4 import BeautifulSoup as bs
from webdriver_manager.chrome import ChromeDriverManager

def scrape():
    # TOP NEWS SCRAPE
    Pharma_news_url = "https://www.worldpharmanews.com"
    browser.visit(Pharma_news_url)
    html = browser.html
    soup = bs(html, "html.parser")
    latest_news = soup.find_all("h2", class_="article-title")[0]
    latest_news_title = latest_news.get_text()
    preview = soup.find_all("section", class_="article-intro clearfix")[0]
    latest_news_preview = preview.text
    
    browser.quit()

    # FINAL DICTIONARY FOR MONGO
    final_pharma_data = {
    "latest_title": latest_news_title,
    "latest_paragraph" : latest_news_preview
    }

    return final_pharma_data