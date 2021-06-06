from flask import Flask, redirect, url_for, render_template, request, flash

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def hello():
    return render_template('index.htm', a='mslyu')
    #return "456"

if __name__ == '__main__':
    app.run(port=5000, debug=True)