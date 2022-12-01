from flask import Blueprint, render_template, flash, request, session
from werkzeug.security import generate_password_hash, check_password_hash

from pybo import db
from pybo.forms import UserCreateForm, UserLoginForm
from pybo.models import User

bp = Blueprint('auth', __name__, url_prefix='/auth')


@bp.route('/signup/', methods=('GET', 'POST'))
def signup():
    form = UserCreateForm()
    if request.method == 'POST' and form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if not user:
            user = User(username=form.username.data,
                        password=generate_password_hash(form.password1.data),
                        email=form.email.data)
            db.session.add(user)
            db.session.commit()
            return render_template('auth/login.html')
        else:
            flash('Already exist')
    return render_template('auth/signup.html', form=form)


@bp.route('/login/', methods=('GET', 'POST'))
def login():
    form = UserLoginForm()
    if request.method == 'POST' and form.validate_on_submit():
        error = None
        user = User.query.filter_by(username=form.username.data).first()
        if not user:
            error = "Non exist."
        elif not check_password_hash(user.password, form.password.data):
            error = "Check Password Again."
        if error is None:
            session.clear()
            session['user_id'] = user.id
            return render_template('index.html')
        flash(error)
    return render_template('auth/login.html', form=form)


@bp.route('/logout/')
def logout():
    session.clear()
    return render_template('auth/signup.html')
