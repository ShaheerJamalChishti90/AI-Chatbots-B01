from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/templates/about.html")
def about():
    return render_template('about.html')

@app.route("/templates/services.html")
def services():
    return render_template('services.html')

@app.route("/templates/contact.html")
def contact():
    return render_template('contact.html')

@app.route("/templates/gallery.html")
def gallery():
    return render_template('gallery.html')

@app.route("/templates/login.html")
def login():
    return render_template('login.html')

@app.route("/templates/register.html")
def register():
    return render_template('register.html')

@app.route("/templates/form.html")
def form():
    return render_template('form.html')

if __name__ == '__main__':
    app.run(debug=True)
