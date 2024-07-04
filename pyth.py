import pandas as pd
import mysql.connector
import requests

conn=mysql.connector.connect(host="localhost",
                             user="root",
                             password="Charan@123",
                             database="pro1")

query='select * from api_req'

df=pd.read_sql(query,conn)

link=df.iloc[-1].at["link"]
title=df.iloc[-1].at["title"]

req=requests.get(link)

valid_chars = '-_.() abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
filename = ''.join(c for c in title if c in valid_chars)[:255] + ".mp3"  # Limit filename length to 255 characters


with open("E:\\for project\\download\\"+filename+".mp3",'wb') as f:
    f.write(req.content)
