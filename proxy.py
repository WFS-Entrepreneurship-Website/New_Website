from flask import render_template
from flask import Flask
from requests import get

'''
app = Flask(__name__)
SITE_NAME = 'https://www.instagram.com/wfsentrepreneurship/?__a=1'

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def proxy(path):
      return get(f'{SITE_NAME}{path}').content

if __name__ == '__main__':
    app.run()
    #app.run(host='0.0.0.0', port=8080)
'''

app = Flask(__name__)

# Catch all route
"""
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template(index.html)
"""

@app.route('/proxy')
def proxy():
    SITE_NAME = 'https://www.instagram.com/wfsentrepreneurship/?__a=1'
    return get(f'{SITE_NAME}').content



if __name__ == '__main__':
    app.run()
    #app.run(host='0.0.0.0', port=8080)
