import os
from flask import Flask, render_template, url_for, request, redirect, session
from flask_cors import CORS
from flask_mysqldb import MySQL

# .env 환경 변수 사용
# from dotenv import load_dotenv

# load_dotenv()

# flask 객체 인스턴스 생성 
app = Flask(__name__)
CORS(app)
mysql = MySQL(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))

    def __init__(self, username, password):
        self.username = username
        self.password = password

app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')



# 접속 url 설정
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/recommend')
def recommend():
    return render_template('recommend.html')

    
@app.route('/about')
def about():
    return 'about 페이지 입니다'


@app.route('/', methods=['GET'])
def index2():
    if session.get('logged_in'):
        return render_template('index.html')
    else:
        return render_template('index2.html', message="Check again, please.")


@app.route('/register/', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        try:
            db.session.add(User(username=request.form['username'], password=request.form['password']))
            db.session.commit()
            return redirect(url_for('login'))
        except:
            return render_template('index2.html', message="User Already Exists")
    else:
        return render_template('register.html')


@app.route('/login/', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    else:
        u = request.form['username']
        p = request.form['password']
        data = User.query.filter_by(username=u, password=p).first()
        if data is not None:
            session['logged_in'] = True
            return redirect(url_for('index'))
        return render_template('index2.html', message="Incorrect Details")


@app.route('/logout', methods=['GET', 'POST'])
def logout():
    session['logged_in'] = False
    return redirect(url_for('index2'))

if(__name__ == '__main__'):
    app.secret_key = "ThisIsNotASecret:p"
    db.create_all()
    app.run()




if __name__ == '__main__':
    # 코드 수정시 자동 반영
    app.run(debug=True)
