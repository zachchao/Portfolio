import json
from flask import Flask
from flask import render_template, request


app = Flask(__name__)

# Images are aspect ratio 538x283
@app.route('/')
def home():
    with open("projectsData.json") as f:
        cardData = json.loads(f.read())
    return render_template('index.html', cardData=cardData)

@app.route('/index')
def index2():
    with open("projectsData.json") as f:
        projectsData = json.loads(f.read())
    with open("experienceData.json") as f:
        experienceData = json.loads(f.read())
    return render_template('index2.html', projectsData=projectsData, experienceData=experienceData)

@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/robots.txt')
def robots():
    res = app.make_response('User-agent: *\nAllow: /')
    res.mimetype = 'text/plain'
    return res

@app.route('/blog')
def blog():
    return render_template('blog/index.html')
    
@app.route('/blog/calhacks')
def calhacks():
    return render_template('blog/calhacks.html')

@app.route('/blog/sacHacks')
def sacHacks():
    return render_template('blog/sacHacks.html')

@app.route('/simulations')
def simulations():
    return render_template('simulations/index.html')

@app.errorhandler(404)
def page_not_found(e):
    # note that we set the 404 status explicitly
    return render_template('404.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
