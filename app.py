import json

from flask import Flask
from flask import render_template, request
from flask_sslify import SSLify


app = Flask(__name__)
sslify = SSLify(app)

@app.route('/')
def home():
    with open("cardText.json") as f:
        cardData = json.loads(f.read())
    return render_template('index.html', cardData=cardData)

@app.route('/robots.txt')
def robots():
    res = app.make_response('User-agent: *\nAllow: /')
    res.mimetype = 'text/plain'
    return res

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
